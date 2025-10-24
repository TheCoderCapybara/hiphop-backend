import "dotenv/config"
import { z } from "zod"
//import { AppError } from "../error/error-handler"

const envSchema = z.object({
  NODE_ENV: z.enum(["local", "test", "production"]),
  PORT: z.coerce.number().default(3333),
  DB_CLIENT: z.enum(["pg"]),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  DB_MIN_POOL: z.coerce.number(),
  DB_MAX_POOL: z.coerce.number(),
  SALT_RESULT: z.coerce.number(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  MAIL_HOST: z.string(),
  MAIL_PORT: z.coerce.number(),
  MAIL_SECURITY: z.coerce.boolean().default(false),
  MAIL_USER: z.string(),
  MAIL_PASS: z.string(),
  MAIL_FROM: z.string(),
  FRONTEND_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error("⚠️ Invalid environment variables", _env.error.issues)

  throw new Error("Invalid environment variables")
}

export const env = _env.data
