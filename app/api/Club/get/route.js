import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const clubs = await prisma.club.findMany({
      select: {
        id: true,
        name: true,
        peak_hours: true,
        off_peak_hrs: true,
        Courts: {
          select: {
            name: true,
          },
        },
        Sessions: {
          select: {
            id: true,
            date: true,
            time: true,
          },
        },
      },
    });

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
