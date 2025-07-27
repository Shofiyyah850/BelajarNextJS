import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth.config";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { title, content } = await request.json();
    const session = await getServerSession(authOptions);
    const userId = (session?.user as { id?: string } | undefined)?.id;
    if (!session || !userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const authorId = userId;
    const product = await prisma.post.create({ data: { title, content, authorId } });
    return NextResponse.json(product);
  } catch (error) {
    console.error("API Error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: "Server error", detail: errorMessage }, { status: 500 });
  }
}