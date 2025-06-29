import prisma from "../../../../lib/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id || isNaN(id)) {
      return new Response(JSON.stringify({ error: "Invalid ID" }), {
        status: 400,
      });
    }

    await prisma.club.delete({
      where: { id: BigInt(id) }, // Use BigInt if your `id` is BigInt in schema
    });

    return new Response(JSON.stringify({ message: "Club deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting club:", error);
    return new Response(JSON.stringify({ error: "Failed to delete club" }), {
      status: 500,
    });
  }
}
