import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumRoleNullableFilterObjectSchema } from './EnumRoleNullableFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumTypeFilterObjectSchema } from './EnumTypeFilter.schema';
import { TypeSchema } from '../enums/Type.schema';
import { EnumGenderFilterObjectSchema } from './EnumGenderFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    emailVerified: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    image: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    role: z
      .union([
        z.lazy(() => EnumRoleNullableFilterObjectSchema),
        z.lazy(() => RoleSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    birthOfDate: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    phoneNumber: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumTypeFilterObjectSchema),
        z.lazy(() => TypeSchema),
      ])
      .optional(),
    gender: z
      .union([
        z.lazy(() => EnumGenderFilterObjectSchema),
        z.lazy(() => GenderSchema),
      ])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    job: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
