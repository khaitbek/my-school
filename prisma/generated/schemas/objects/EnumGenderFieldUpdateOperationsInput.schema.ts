import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumGenderFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => GenderSchema).optional(),
  })
  .strict();

export const EnumGenderFieldUpdateOperationsInputObjectSchema = Schema;
