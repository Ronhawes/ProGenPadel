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

    await prisma.Players.delete({
      where: { id: BigInt(id) }, // Use BigInt if your `id` is BigInt in schema
    });

    return new Response(JSON.stringify({ message: "Player deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting player:", error);
    return new Response(JSON.stringify({ error: "Failed to delete player" }), {
      status: 500,
    });
  }
}


