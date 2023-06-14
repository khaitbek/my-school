import { prisma } from "@db/index";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const user = await prisma.user.findFirst({ where: { id } });
  return NextResponse.json(user);
}
export async function PUT(req: Request) {
  const newUserData = (await req.json()) as User;
  const userWithUpdatedData = await prisma.user.update({
    where: { id: newUserData.id },
    data: {
      ...newUserData,
    },
  });
  return NextResponse.json({ user: userWithUpdatedData });
}
