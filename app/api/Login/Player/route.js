// app/api/Login/Player/route.js
import prisma from '@/lib/prisma';

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

    const player = await prisma.players.findFirst({
      where: { email },
    });

    if (!player || player.password !== password) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
      });
    }

    return new Response(
      JSON.stringify({
        message: 'Login successful',
        id: player.id.toString(),
        name: player.name,
        email: player.email,
        club_id: player.club_id?.toString() || null,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ error: 'Login failed' }), {
      status: 500,
    });
  }
}
