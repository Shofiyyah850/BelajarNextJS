import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const description = formData.get("description") as string;
  const authorId = formData.get("authorId") as string;

  if (!file || !description || !authorId) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadsDir, { recursive: true });
  const fileName = `${Date.now()}_${file.name}`;
  const filePath = path.join(uploadsDir, fileName);
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(filePath, buffer);
  const fileUrl = `/uploads/${fileName}`;

  const order = await prisma.customOrder.create({
    data: {
      description,
      fileUrl,
      authorId,
    },
  });

  return NextResponse.json({ message: "Order uploaded successfully.", order });
}
