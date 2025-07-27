import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const { title, content, author } = await request.json();
  const id = params.id;
  try {
    const updated = await prisma.post.update({
      where: { id },
      data: { title, content, author },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Product not found or update failed." }, { status: 400 });
  }
}
