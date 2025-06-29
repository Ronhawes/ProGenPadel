import prisma from '../../../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, charges, club_id, description, picture } = body;

    const newEvent = await prisma.Event.create({
      data: {
        name,
        description,
        picture,
        charges: charges ? BigInt(charges) : null,
        club_id: club_id ? BigInt(club_id) : null,
      },
    });

    // Serialize BigInt
    const serialized = JSON.parse(JSON.stringify(newEvent, (_, v) =>
      typeof v === 'bigint' ? v.toString() : v
    ));

    return new Response(JSON.stringify(serialized), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error creating event:", error);
    return new Response(JSON.stringify({ error: "Failed to create event" }), {
      status: 500,
    });
  }
}
