import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { TypeSchema } from '../enums/Type.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    role: z
      .lazy(() => RoleSchema)
      .optional()
      .nullable(),
    password: z.string(),
    address: z.string(),
    birthOfDate: z.string(),
    phoneNumber: z.string(),
    type: z.lazy(() => TypeSchema).optional(),
    gender: z.lazy(() => GenderSchema).optional(),
    description: z.string(),
    job: z.string(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
