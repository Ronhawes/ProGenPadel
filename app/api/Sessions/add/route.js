import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { player_id, club_id, court_id, time, coach_id } = body;

    // Validation
    if (!player_id || !club_id || !court_id || !time || !Array.isArray(time)) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        { status: 400 }
      );
    }

    // Convert to BigInt
    const playerId = BigInt(player_id);
    const clubId = BigInt(club_id);
    const courtId = BigInt(court_id);
    const coachId = coach_id ? BigInt(coach_id) : null;

    // Check if entities exist - using correct Prisma client properties
    const [player, club, court] = await Promise.all([
      prisma.players.findUnique({ where: { id: playerId } }),
      prisma.club.findUnique({ where: { id: clubId } }),
      prisma.courts.findUnique({ where: { id: courtId } }), // Note: 'courts' not 'court'
    ]);

    if (!player) {
      return new Response(
        JSON.stringify({ error: `Player with ID ${player_id} not found` }),
        { status: 404 }
      );
    }
    if (!club) {
      return new Response(
        JSON.stringify({ error: `Club with ID ${club_id} not found` }),
        { status: 404 }
      );
    }
    if (!court) {
      return new Response(
        JSON.stringify({ error: `Court with ID ${court_id} not found` }),
        { status: 404 }
      );
    }

    // Create session - assuming your Sessions model is also plural
       const session = await prisma.sessions.create({
  data: {
    time,
    Club: { connect: { id: clubId } },
    Courts: { connect: { id: courtId } },
    Players: { connect: { id: playerId } },
    Coaches: coachId ? { connect: { id: coachId } } : undefined,
  },
});



    // Format response
    const response = {
      id: session.id.toString(),
      player_id: playerId.toString(),
      court_id: courtId.toString(),
      club_id: clubId.toString(),
      time: session.time,
      player_name: player.name,
      club_name: club.name,
      charges: court.charges?.toString() || 'N/A', // Now correctly referencing court.charges
      court_name: court.name || 'N/A'
    };

    return new Response(JSON.stringify(response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error adding session:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to add session',
        details: error.message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      }), 
      { status: 500 }
    );
  }
}