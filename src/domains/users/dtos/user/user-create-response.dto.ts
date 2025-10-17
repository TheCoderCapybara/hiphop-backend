export interface UserResponseDto {
  id: string
  name: string
  email: string
  status: boolean
  password?: string
  created_at: Date
  updated_at: Date
}
