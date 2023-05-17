import { z } from 'zod';
import { TypeSchema } from '../enums/Type.schema';
import { NestedEnumTypeWithAggregatesFilterObjectSchema } from './NestedEnumTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTypeFilterObjectSchema } from './NestedEnumTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => TypeSchema).optional(),
    in: z
      .union([z.lazy(() => TypeSchema).array(), z.lazy(() => TypeSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => TypeSchema).array(), z.lazy(() => TypeSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => TypeSchema),
        z.lazy(() => NestedEnumTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumTypeWithAggregatesFilterObjectSchema = Schema;
