import { User } from '@prisma/client'

export interface IAuthLoginRequest {
  email: string
  password: string
}

export interface IAuthLoginResponse {
  user: User
}
