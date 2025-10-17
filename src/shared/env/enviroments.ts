import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  NODE_ENV: z.enum(["local", "test", "production"]),
  PORT: z.coerce.number().default(3333),
  DB_CLIENT: z.enum(["pg"]),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  DB_POOL_MIN: z.coerce.number(),
  DB_POOL_MAX: z.coerce.number(),
  SALT_RESULT: z.coerce.number().default(10),
  JWT_SECRET: z.string().min(1),
  JWT_EXPIRES_IN: z.string().default("1h"),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error("⚠️ Invalid environment variables", _env.error.issues)

  throw new Error("Invalid environment variables")
}

export const env = _env.data
