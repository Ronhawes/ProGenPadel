import prisma from '../../../../lib/prisma';

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing event ID" }), {
        status: 400,
      });
    }

    await prisma.Event.delete({
      where: { id: BigInt(id) },
    });

    return new Response(JSON.stringify({ message: "Event deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error deleting event:", error);
    return new Response(JSON.stringify({ error: "Failed to delete event" }), {
      status: 500,
    });
  }
}
