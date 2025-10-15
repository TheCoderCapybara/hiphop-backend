import { generateHash } from "../../../shared/utils/encrypt"
import type { IUserDTO } from "../dtos/users.dto"
import type { IUsersRepository } from "../../users/infra/repositories/"

export class CreateUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(user: IUserDTO): Promise<void> {
    const userExists = await this.usersRepository.getByEmail(user.email)

    if (userExists) {
      throw new Error("User already exists")
    }

    const hashedPassword = await generateHash(user.password)

    Object.assign(user, { password: hashedPassword })

    await this.usersRepository.create(user)
  }
}
