import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { NestedEnumGenderFilterObjectSchema } from './NestedEnumGenderFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumGenderFilter> = z
  .object({
    equals: z.lazy(() => GenderSchema).optional(),
    in: z
      .union([z.lazy(() => GenderSchema).array(), z.lazy(() => GenderSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => GenderSchema).array(), z.lazy(() => GenderSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => GenderSchema),
        z.lazy(() => NestedEnumGenderFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumGenderFilterObjectSchema = Schema;
