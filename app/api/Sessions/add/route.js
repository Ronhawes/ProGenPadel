import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { player_id, player_email, club_id, court_id, coach_id, time, date } = body;

    // Validate required fields
    if (!club_id || !court_id || !Array.isArray(time) || !time.length || !date) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields (club_id, court_id, time, date)' }),
        { status: 400 }
      );
    }

    // Ensure at least player_id or player_email is present
    if (!player_id && !player_email) {
      return new Response(
        JSON.stringify({ error: 'Either player_id or player_email is required' }),
        { status: 400 }
      );
    }

    // Parse IDs
    const clubId = BigInt(club_id);
    const courtId = BigInt(court_id);
    const coachId = coach_id ? BigInt(coach_id) : null;
    const playerId = player_id ? BigInt(player_id) : null;
    const sessionDate = new Date(date);

    // Check if related records exist
    const [club, court] = await Promise.all([
      prisma.club.findUnique({ where: { id: clubId } }),
      prisma.courts.findUnique({ where: { id: courtId } }),
    ]);

    if (!club) {
      return new Response(JSON.stringify({ error: `Club with ID ${club_id} not found` }), { status: 404 });
    }

    if (!court) {
      return new Response(JSON.stringify({ error: `Court with ID ${court_id} not found` }), { status: 404 });
    }

    // Check for conflicting sessions at same club, court, date, and time
    const conflictFilter = {
      club_id: clubId,
      court_id: courtId,
      date: sessionDate,
      ...(playerId
        ? { player_id: playerId }
        : player_email
        ? { player_email }
        : {}),
    };

    const existing = await prisma.sessions.findMany({
      where: conflictFilter,
      select: { time: true },
    });

    const hasConflict = existing.some((session) =>
      session.time.some((t) => time.includes(t))
    );

    if (hasConflict) {
      return new Response(
        JSON.stringify({
          error:
            'Conflict: You already have a session booked at this club, court, and time on the selected date.',
        }),
        { status: 409 }
      );
    }

    // Create session
    const session = await prisma.sessions.create({
      data: {
        date: sessionDate,
        time,
        player_email: player_email || null,
        Club: { connect: { id: clubId } },
        Courts: { connect: { id: courtId } },
        ...(playerId && { Players: { connect: { id: playerId } } }),
        ...(coachId && { Coaches: { connect: { id: coachId } } }),
      },
    });

    // Respond with session info
    return new Response(
      JSON.stringify({
        id: session.id.toString(),
        court_id: courtId.toString(),
        club_id: clubId.toString(),
        player_id: playerId?.toString() || null,
        player_email: player_email || null,
        time: session.time,
        date: session.date,
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error adding session:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to add session',
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
