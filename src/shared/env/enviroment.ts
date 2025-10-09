import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(["local", "test", "production"]),
  PORT: z.coerce.number().default(3333),
  DB_CLIENT: z.string,
  DB_POOL_MIN: z.coerce.number().default(1),
  DB_POOL_MAX: z.coerce.number().default(100),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(5432),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error("⚠️ Invalid environment variables", _env.error.issues)
  throw new Error("Invalid environment variables")
}

export const env = _env.data
