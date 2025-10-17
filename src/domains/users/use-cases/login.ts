import jwt from "jsonwebtoken"

import { env } from "../../../shared/env/enviroments"

import { compareHash } from "../../../shared/utils/encrypt"
import type { AuthRequestDto } from "../dtos/auth/auth.request"
import type { UsersRepositoryInterface } from "../repositories/users-repository.interface"

export class Login {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(data: AuthRequestDto) {
    const user = await this.usersRepository.getUserByEmail(data.email)

    if (!user || !user.password) {
      throw new Error("user not found")
    }

    const passwordsMatch = await compareHash(data.password, user.password)

    if (!passwordsMatch) {
      throw new Error("invalid credentials")
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    } as any)

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
      token,
    }
  }
}
