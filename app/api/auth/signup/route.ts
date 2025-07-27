import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { email, name, password } = await request.json();
  if (!email || !name || !password) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, name, password: hashed },
  });
  return NextResponse.json({ id: user.id, email: user.email, name: user.name });
}
