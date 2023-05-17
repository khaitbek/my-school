import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'email',
  'emailVerified',
  'image',
  'role',
  'password',
  'address',
  'birthOfDate',
  'phoneNumber',
  'type',
  'gender',
  'description',
  'job',
]);
