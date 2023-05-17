import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    image: z.literal(true).optional(),
    role: z.literal(true).optional(),
    password: z.literal(true).optional(),
    address: z.literal(true).optional(),
    birthOfDate: z.literal(true).optional(),
    phoneNumber: z.literal(true).optional(),
    type: z.literal(true).optional(),
    gender: z.literal(true).optional(),
    description: z.literal(true).optional(),
    job: z.literal(true).optional(),
  })
  .strict();

export const UserMaxAggregateInputObjectSchema = Schema;
