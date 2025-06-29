import prisma from '../../../../lib/prisma';

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing court ID' }), {
        status: 400,
      });
    }

    await prisma.Courts.delete({
      where: { id: BigInt(id) },
    });

    return new Response(JSON.stringify({ message: 'Court deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error deleting court:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete court' }), {
      status: 500,
    });
  }
}
