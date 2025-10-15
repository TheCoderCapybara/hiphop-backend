import { connection } from "../../../../config/database"
import type { IUserDTO } from "../../dtos/users.dto"
import type { IUsersRepository } from "../users-repository.interface"

export class UsersRepository implements IUsersRepository {
  async create(user: IUserDTO): Promise<void> {
    await connection
      .insert({
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into("users")
  }

  async getByEmail(email: string): Promise<IUserDTO | null> {
    const user = await connection
      .select("*")
      .from("users")
      .where("email", email)
      .first()

    return user
  }
}
