"use server";

import { prisma } from "@db/index";
import { User } from "@prisma/client";

export async function getUsers() {
  return await prisma.user.findMany();
}

export async function getUser(id: User["id"]) {
  return await prisma.user.findFirst({
    where: {
      id
    }
  });
}

export async function addUser(user: User) {
  await prisma.user.create({ data: user })
}