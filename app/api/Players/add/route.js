import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, club_id, picture ,email, password } = body;

    // Validate that name is provided and is a string
    if (!name || typeof name !== 'string') {
      return new Response(JSON.stringify({ error: "Name is required and must be a string" }), {
        status: 400,
      });
    }

    // Optional: validate club_id if provided
    const clubIdValue = club_id !== undefined ? BigInt(club_id) : undefined;

    const newPlayer = await prisma.players.create({
      data: {
        name,
        club_id: clubIdValue,
        picture,
        email, 
        password 
      },
    });

    // Return a serialized version of the player
    return new Response(JSON.stringify({
      id: newPlayer.id.toString(),
      created_at: newPlayer.created_at,
      name: newPlayer.name,
      club_id: newPlayer.club_id ? newPlayer.club_id.toString() : null,
      picture: newPlayer.picture,
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error creating player:", error);
    return new Response(JSON.stringify({ error: "Failed to create player" }), {
      status: 500,
    });
  }
}
