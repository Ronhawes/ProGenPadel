import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const courts = await prisma.Courts.findMany();

    const serialized = JSON.parse(JSON.stringify(courts, (_, v) =>
      typeof v === 'bigint' ? v.toString() : v
    ));

    return new Response(JSON.stringify(serialized), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching courts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch courts' }), {
      status: 500,
    });
  }
}
