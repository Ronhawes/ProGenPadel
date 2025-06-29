import prisma from '../../../../lib/prisma'; // or correct relative path if not using alias

export async function GET(req) {
  try {
    const clubs = await prisma.Players.findMany();
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
    console.error('Error fetching players:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch players' }), {
      status: 500,
    });
  }
}

