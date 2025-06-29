import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Session ID is required" }), {
        status: 400,
      });
    }

    const session = await prisma.sessions.findUnique({
      where: { id: BigInt(id) },
      include: {
        Players: { select: { name: true } },
        Club: { select: { name: true } },
        Courts: { select: { name: true, charges: true } },
        Coaches: { select: { name: true } },
      },
    });

    if (!session) {
      return new Response(JSON.stringify({ error: "Session not found" }), {
        status: 404,
      });
    }

    const serialized = {
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
    };

    return new Response(JSON.stringify(serialized), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error fetching session:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch session" }), {
      status: 500,
    });
  }
}
