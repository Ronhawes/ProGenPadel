import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get('id');

    if (!idParam) {
      return new Response(JSON.stringify({ error: 'Missing player ID' }), {
        status: 400,
      });
    }

    const id = BigInt(idParam); // Convert string to BigInt

    const player = await prisma.Players.findUnique({
      where: { id },
    });

    if (!player) {
      return new Response(JSON.stringify({ error: 'Player not found' }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify(player, (_, value) =>
        typeof value === 'bigint' ? value.toString() : value
      ),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error fetching player by ID:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch player' }), {
      status: 500,
    });
  }
}
