import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { player_id, charges, coach_id, court_id, club_id } = body;

    const session = await prisma.Sessions.create({
      data: {
        player_id: player_id ? BigInt(player_id) : undefined,
        charges: charges ? BigInt(charges) : undefined,
        coach_id: coach_id ? BigInt(coach_id) : undefined,
        court_id: court_id ? BigInt(court_id) : undefined,
        club_id: club_id ? BigInt(club_id) : undefined,
      },
    });

    const serialized = {
      ...session,
      id: session.id.toString(),
      player_id: session.player_id?.toString(),
      charges: session.charges?.toString(),
      coach_id: session.coach_id?.toString(),
      court_id: session.court_id?.toString(),
      club_id: session.club_id?.toString(),
    };

    return new Response(JSON.stringify(serialized), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding session:', error);
    return new Response(JSON.stringify({ error: 'Failed to add session' }), {
      status: 500,
    });
  }
}
