import prisma from '../../../../lib/prisma';

export async function GET() {
  try {
    const coaches = await prisma.Coaches.findMany();

    const serialized = JSON.stringify(coaches, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    );

    return new Response(serialized, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching coaches:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch coaches' }), {
      status: 500,
    });
  }
}
