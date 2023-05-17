import { z } from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { NestedEnumGenderWithAggregatesFilterObjectSchema } from './NestedEnumGenderWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGenderFilterObjectSchema } from './NestedEnumGenderFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumGenderWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumGenderWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumGenderFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumGenderFilterObjectSchema).optional(),
  })
  .strict();

export const EnumGenderWithAggregatesFilterObjectSchema = Schema;
