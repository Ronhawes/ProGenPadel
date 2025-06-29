import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const events = await prisma.Event.findMany();

    const serialized = JSON.parse(JSON.stringify(events, (_, v) =>
      typeof v === 'bigint' ? v.toString() : v
    ));

    return new Response(JSON.stringify(serialized), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error fetching events:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch events" }), {
      status: 500,
    });
  }
}
