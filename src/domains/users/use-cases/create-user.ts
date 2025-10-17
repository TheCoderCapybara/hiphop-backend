import type { IUserDTO } from "../dtos/users.dto"
import type { UsersRepositoryInterface } from "../../users/repositories/users-repository.interface"
import { generateHash } from "../../../shared/utils/encrypt"

export class CreateUser {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(data: IUserDTO): Promise<void> {
    const userExists = await this.usersRepository.getUserByEmail(data.email)

    if (userExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await generateHash(data.password)

    Object.assign(data, { password: passwordHash })

    await this.usersRepository.create(data)
  }
}
