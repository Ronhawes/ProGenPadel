// app/api/forgot-password/route.js
import prisma from '../../../../lib/prisma';
import { sendResetEmail } from '../../../../lib/sendResetEmail';
import crypto from 'crypto';

export async function POST(req) {
  const { email } = await req.json();

  const user = await prisma.club.findUnique({ where: { email } });
  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
  }

  const token = crypto.randomBytes(32).toString('hex');
  const expires = new Date(Date.now() + 3600000); // 1 hour from now

  await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  await sendResetEmail(email, token);

  return new Response(JSON.stringify({ message: 'Reset email sent' }), { status: 200 });
}
