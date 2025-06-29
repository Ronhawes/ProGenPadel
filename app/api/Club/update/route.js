import prisma from "../../../../lib/prisma";

export async function PUT(req) {
  const rawBody = await req.text();
  const body = JSON.parse(rawBody);
  const { email, password } = body;

  try {
    const updatedClub = await prisma.club.update({
      where: { email },
      data: { password },
    });

    const serialized = {
      ...updatedClub,
      id: updatedClub.id.toString(),
    };

    return new Response(JSON.stringify(serialized), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating club:", error);
    return new Response(JSON.stringify({ error: "Failed to update club" }), {
      status: 500,
    });
  }
}
