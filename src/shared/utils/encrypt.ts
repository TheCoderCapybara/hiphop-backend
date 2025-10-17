import bcrypt from "bcrypt"
import { env } from "../env/enviroments"

export async function generateHash(password: string): Promise<string> {
  return await bcrypt.hash(password, env.SALT_RESULT)
}

export async function compareHash(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword)
}
