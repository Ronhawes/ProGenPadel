import prisma from '../../../../lib/prisma';

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, name, charges, club_id, picture } = body;

    const updatedCoach = await prisma.Coaches.update({
      where: { id: BigInt(id) },
      data: {
        name,
        charges: charges ? BigInt(charges) : null,
        club_id: club_id ? BigInt(club_id) : null,
        picture,
      },
    });

    const serialized = JSON.stringify(updatedCoach, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    );

    return new Response(serialized, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error updating coach:", error);
    return new Response(JSON.stringify({ error: 'Failed to update coach' }), {
      status: 500,
    });
  }
}
