import prisma from "../../../../lib/prisma";

export async function PUT(req) {
  try {
    const rawBody = await req.text();
    const body = JSON.parse(rawBody);
    const { id, name, picture, club_id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: "Player ID is required" }), {
        status: 400,
      });
    }

    const updatedPlayer = await prisma.Players.update({
      where: { id: BigInt(id) },
      data: {
        ...(name && { name }),
        ...(picture && { picture }),
        ...(club_id && { club_id: BigInt(club_id) }),
      },
    });

    // Serialize BigInt values to strings
    const serialized = JSON.parse(
      JSON.stringify(updatedPlayer, (_, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    return new Response(JSON.stringify(serialized), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error updating player:", error);
    return new Response(JSON.stringify({ error: "Failed to update player" }), {
      status: 500,
    });
  }
}
