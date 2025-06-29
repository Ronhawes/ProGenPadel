import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name,club_manager ,email, password  } = body;

    // Validate that name exists
    if (!name || typeof name !== 'string') {
      return new Response(JSON.stringify({ error: "Name is required and must be a string" }), {
        status: 400,
      });
    }

    const newClub = await prisma.club.create({
      data: {
        name,
        club_manager,
        email, 
        password 
        // You could also initialize related fields if needed, but it's not required here
      },
    });

    return new Response(JSON.stringify({
      id: newClub.id.toString(), // BigInt to string for serialization
      created_at: newClub.created_at,
      name: newClub.name,
    }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating club:", error);
    return new Response(JSON.stringify({ error: "Failed to create club" }), {
      status: 500,
    });
  }
}
