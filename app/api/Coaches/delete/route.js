import prisma from '../../../../lib/prisma';

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), {
        status: 400,
      });
    }

    await prisma.Coaches.delete({
      where: { id: BigInt(id) },
    });

    return new Response(JSON.stringify({ message: "Coach deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting coach:", error);
    return new Response(JSON.stringify({ error: "Failed to delete coach" }), {
      status: 500,
    });
  }
}
