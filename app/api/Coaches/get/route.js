import prisma from '../../../../lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Coach ID is required" }), {
        status: 400,
      });
    }

    const coach = await prisma.Coaches.findUnique({
      where: { id: BigInt(id) },
    });

    if (!coach) {
      return new Response(JSON.stringify({ error: "Coach not found" }), {
        status: 404,
      });
    }

    // Convert BigInt fields to strings
    const serialized = {
      ...coach,
      id: coach.id?.toString(),
      charges: coach.charges?.toString(),
      club_id: coach.club_id?.toString(),
    };

    return new Response(JSON.stringify(serialized), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error fetching coach:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch coach" }), {
      status: 500,
    });
  }
}
