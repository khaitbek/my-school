import { z } from 'zod';

export const GenderSchema = z.enum(['MALE', 'FEMALE']);
