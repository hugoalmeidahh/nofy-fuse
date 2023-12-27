import { User } from '@prisma/client'
import { IRepository } from '@/core/database/iRepository'

// Register
export interface IRegisterUsersRequest {
  name: string
  email: string
  password: string
}

export interface IRegisterUsersResponse {
  user: User
}

// Save
export interface ISaveUsersRequest {
  id: string
  name?: string
  email?: string
  password?: string
  actived_at?: Date
}

export interface ISaveUsersResponse {
  user: User
}

// Find
export interface IFindUserByIdResquest {
  id: string
}

export interface IUserResponse {
  user: User
}

export interface IUserUpdate {
  id: string
  name?: string
  email?: string
  password?: string
  actived_at?: Date
}

// Find All
export interface IUsersResponse {
  users: User[]
}

export interface IUsersRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User | null>
}
