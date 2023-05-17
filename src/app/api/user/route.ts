import { prisma } from "@db/index";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);
  const user = await prisma.user.findFirst({ where: { id } })
  return NextResponse.json(user);
}