import type { IUserDTO } from "../dtos/users.dto"

export interface IUsersRepository {
  create(user: IUserDTO): Promise<void>
  getByEmail(email: string): Promise<IUserDTO | null>
}
