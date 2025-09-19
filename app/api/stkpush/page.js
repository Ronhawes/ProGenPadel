//stk mpesa push
//import { NextResponse } from 'next/server';
import  { NextResponse } from 'next/server';// app/api/mpesa/route.js
import axios from "axios";

const MPESA_BASE_URL =
  process.env.MPESA_MODE === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

// Generate timestamp (yyyyMMddHHmmss)
const generateTimestamp = () => {
  const date = new Date();
  return (
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2)
  );
};

// Helper to get token
const getAccessToken = async () => {
  const auth = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_SECRET_KEY}`
  ).toString("base64");

  const response = await axios.get(
    `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return response.data.access_token;
};

// Handle STK Push
export async function POST(req) {
  try {
    const body = await req.json();
    const { phoneNo, price } = body;

    if (!phoneNo || !price) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { status: 400 }
      );
    }

    const formattedPhone = phoneNo.startsWith("0")
      ? `254${phoneNo.substring(1)}`
      : phoneNo;

    const timestamp = generateTimestamp();
    const password = Buffer.from(
      `${process.env.MPESA_PAYBILL}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString("base64");

    const token = await getAccessToken();

    const stkResponse = await axios.post(
      `${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
      {
        BusinessShortCode: process.env.MPESA_PAYBILL,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: price,
        PartyA: formattedPhone,
        PartyB: process.env.MPESA_PAYBILL,
        PhoneNumber: formattedPhone,
        CallBackURL:
          process.env.CALLBACK_URL || "https://yourdomain.com/api/mpesa/callback",
        AccountReference: `${phoneNo}`,
        TransactionDesc: `Payment by ${phoneNo}, amount: ${price}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "STK Push initiated successfully",
        data: stkResponse.data,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in STK Push:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to initiate STK Push",
        error: error.response?.data || error.message,
      }),
      { status: 400 }
    );
  }
}

// Handle Callback from Safaricom
export async function PUT(req) {
  try {
    const body = await req.json();
    const { Body } = body;

    if (!Body || !Body.stkCallback) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid callback data" }),
        { status: 400 }
      );
    }

    const { stkCallback } = Body;
    const { ResultCode, ResultDesc, CallbackMetadata } = stkCallback;

    if (ResultCode === 0) {
      const metadata = CallbackMetadata.Item.reduce((acc, item) => {
        acc[item.Name] = item.Value;
        return acc;
      }, {});

      const paymentData = {
        amount: metadata.Amount,
        receiptNumber: metadata.MpesaReceiptNumber,
        phoneNumber: metadata.PhoneNumber,
        transactionDate: metadata.TransactionDate,
      };

      console.log("Payment Successfu lly:", pay mentData);

      // TODO: Save paymentData in your DB

      return new Response(
        JSON.stringify({
          success: true,
          message: "Payment received",
          data: paymentData,
        }),
        { status: 200 }
      );
    } else {
      console.error("Payment unsuccessful:", ResultDesc);
      return new Response(
        JSON.stringify({
          success: false,
          message: `Payment failed: ${ResultDesc}`,
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error handling callback:", error.message);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error handling callback ",
      }),
      { status: 500 }
    );
  }
}
