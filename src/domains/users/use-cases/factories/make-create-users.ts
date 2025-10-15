import { CreateUser } from "../create-user"
import { UsersRepository } from "../../repositories/knex/users.repository"

export function createUserFactory() {
  const usersRepository = new UsersRepository()
  const createUser = new CreateUser(usersRepository)

  return createUser
}
