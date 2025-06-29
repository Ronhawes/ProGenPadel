import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, charges, club_id, picture, email, password } = body;

    const newCoach = await prisma.Coaches.create({
      data: {
        name,
        charges: charges ? BigInt(charges) : null,
        club_id: club_id ? BigInt(club_id) : null,
        picture,
        email, 
        password 
      },
    });

    const serialized = JSON.stringify(newCoach, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    );

    return new Response(serialized, {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error adding coach:", error);
    return new Response(JSON.stringify({ error: 'Failed to add coach' }), {
      status: 500,
    });
  }
}
