import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const clubName = searchParams.get('name');

    if (!clubName) {
      return new Response(JSON.stringify({ error: 'Club name is required' }), {
        status: 400,
      });
    }

    const club = await prisma.club.findFirst({
      where: {
        name: {
          equals: clubName.trim(),
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        name: true,
        peak_hours: true,
        off_peak_hrs: true,
        Courts: {
          select: {
            id: true,
            name: true,
          },
        },
        Sessions: {
  select: {
    id: true,
    date: true,
    time: true,
    court_id: true,
    Courts: { // 👈 must match model relation
      select: {
        name: true
      }
    }
  }
}

      },
    });

    if (!club) {
      return new Response(JSON.stringify({ error: 'Club not found' }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify(club, (_, value) =>
        typeof value === 'bigint' ? value.toString() : value
      ),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching club:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch club' }), {
      status: 500,
    });
  }
}
