import prisma from "../../../../lib/prisma";
import nodemailer from "nodemailer"; // or your chosen email service
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  try {
    // Check if club exists
    const club = await prisma.Players.findUnique({
      where: { email },
    });

    if (!club) {
      return new Response(JSON.stringify({ error: "No account with that email" }), {
        status: 404,
      });
    }

    // 1. Generate a temporary password
    const tempPassword = Math.random().toString(36).slice(-8); // e.g. "d2k7x9qz"
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // 2. Update password in DB
    await prisma.club.update({
      where: { email },
      data: { password: hashedPassword },
    });

    // 3. Send email with temporary password
    const transporter = nodemailer.createTransport({
      host: "smtp.yourdomain.com", // your SMTP host
      port: 587,
      secure: false,
      auth: {
        user: "your_email@example.com",
        pass: "your_smtp_password",
      },
    });

    await transporter.sendMail({
      from: '"Support" <your_email@example.com>',
      to: email,
      subject: "Your Temporary Password",
      text: `Your temporary password is: ${tempPassword}\nPlease log in and change it immediately.`,
    });

    // 4. Response
    return new Response(JSON.stringify({ message: "Temporary password sent to your email" }), {
      status: 200,
    });

  } catch (error) {
    console.error("Error sending temporary password:", error);
    return new Response(JSON.stringify({ error: "Failed to send temporary password" }), {
      status: 500,
    });
  }
}
