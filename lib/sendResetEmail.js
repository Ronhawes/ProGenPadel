// lib/sendResetEmail.js
import nodemailer from 'nodemailer';

export const sendResetEmail = async (toEmail, token) => {
  const resetLink = `https://yourdomain.com/reset-password?token=${token}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Or your SMTP host
    port: 465,
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,      // your email
      pass: process.env.SMTP_PASS,      // your app password
    },
  });

  await transporter.sendMail({
    from: `"Your App Name" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: "Reset Your Password",
    html: `
      <p>Hello,</p>
      <p>You requested a password reset. Click the link below to set a new password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link will expire in 1 hour.</p>
    `,
  });
};
