// app/api/debug_session/route.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/auth.config";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  console.log("Debug session:", session);
  return NextResponse.json({ session });
}