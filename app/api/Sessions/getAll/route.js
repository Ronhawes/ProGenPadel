import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const sessions = await prisma.sessions.findMany({
      include: {
        Players: { select: { name: true } },
        Coaches: { select: { name: true } },
        Club: { select: { name: true } },
        Courts: { select: { name: true, charges: true } },
      },
    });

    const serializedSessions = sessions.map(session => ({
      id: session.id.toString(),
      created_at: session.created_at,
      player_id: session.player_id?.toString(),
      coach_id: session.coach_id?.toString(),
      court_id: session.court_id?.toString(),
      club_id: session.club_id?.toString(),
      charges: session.charges?.toString(),
      player_name: session.Players?.name || null,
      coach_name: session.Coaches?.name || null,
      club_name: session.Club?.name || null,
      court_name: session.Courts?.name || null,
      court_charges: session.Courts?.charges?.toString() || null,
    }));

    return new Response(JSON.stringify(serializedSessions), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error fetching sessions:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch sessions" }), {
      status: 500,
    });
  }
}
