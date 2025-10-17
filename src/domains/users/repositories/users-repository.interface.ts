import type { UserCreateRequestDto } from "../dtos/user/user-create-request.dto"
import type { UserResponseDto } from "../dtos/user/user-create-response.dto"

export interface UsersRepositoryInterface {
  create(user: UserCreateRequestDto): Promise<void>
  getUserByEmail(email: string): Promise<UserResponseDto | null>
}
