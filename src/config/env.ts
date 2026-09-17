import { envSchema } from './env.config';

export const env = envSchema.parse(process.env);
