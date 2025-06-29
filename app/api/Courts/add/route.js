import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, charges, club_id } = body;

    const newCourt = await prisma.Courts.create({
      data: {
        name,
        charges: charges ? BigInt(charges) : null,
        club_id: club_id ? BigInt(club_id) : null,
       
      },
    });

    // BigInt-safe JSON serialization
    const serialized = JSON.stringify(newCourt, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    );

    return new Response(serialized, {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error adding court:", error);
    return new Response(JSON.stringify({ error: 'Failed to add court' }), {
      status: 500,
    });
  }
}
