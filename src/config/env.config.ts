import { Logger } from '@nestjs/common';
import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().int().positive(),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  DB_NAME: z.string().min(1),
  DB_SCHEMA: z.string().min(1),
  DB_LOGGING: z.enum(['true', 'false']).transform((v) => v === 'true'),
  DB_SYNCHRONIZE: z.enum(['true', 'false']).transform((v) => v === 'true'),
});

export function validateEnv(config: Record<string, unknown>) {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    const logger = new Logger('EnvValidation');

    logger.error('Invalid environment variables');

    for (const error of result.error.issues) {
      logger.error(`${error.path.join('.')}: ${error.message}`);
    }

    throw new Error('Invalid environment variables');
  }

  return result.data;
}
