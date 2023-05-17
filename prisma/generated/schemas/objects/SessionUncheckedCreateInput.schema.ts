import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    sessionToken: z.string(),
    userId: z.string(),
    expires: z.string(),
  })
  .strict();

export const SessionUncheckedCreateInputObjectSchema = Schema;
