import prisma from '../../../lib/prisma'; // or correct relative path if not using alias

export async function GET(req) {
  try {
    const clubs = await prisma.club.findMany();
    return new Response(
  JSON.stringify(clubs, (_, value) =>
    typeof value === 'bigint' ? value.toString() : value
  ),
  {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  }
);

  } catch (error) {
    console.error('Error fetching clubs:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch clubs' }), {
      status: 500,
    });
  }
}

