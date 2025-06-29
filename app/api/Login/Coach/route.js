// app/api/coaches/login/route.js
import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password are required' }), {
        status: 400,
      });
    }

    const coach = await prisma.coaches.findFirst({
      where: { email },
    });

    if (!coach || coach.password !== password) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({
      message: 'Login successful',
      id: coach.id.toString(),
      name: coach.name,
      email: coach.email,
      club_id: coach.club_id ? coach.club_id.toString() : null,
      charges: coach.charges ? coach.charges.toString() : null,
      picture: coach.picture,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ error: 'Login failed' }), {
      status: 500,
    });
  }
}
