import {
  UserUpdateOneSchema,
  UserWhereUniqueInputObjectSchema,
} from "@db/generated/schemas";
"use server";

import { prisma } from "@db/index";
import { User } from "@prisma/client";
import { z } from "zod";

export async function addUser(user: User) {
  return await prisma.user.create({ data: user });
}

export async function deleteUser(
  where: z.infer<typeof UserWhereUniqueInputObjectSchema>
) {
  return await prisma.user.delete({
    where,
  });
}
