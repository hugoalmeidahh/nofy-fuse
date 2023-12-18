import { User } from '@prisma/client'
import { IRepository } from 'src/core/database/iRepository'

export interface IRegisterUsersRequest {
  name: string
  email: string
  password: string
}

export interface IRegisterUsersResponse {
  user: User
}

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

export interface IUserUpdate {
  id: string
  name?: string
  email?: string
  password?: string
  actived_at?: Date
}

export interface IUsersRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User | null>
  save(data: IUserUpdate): Promise<User>
}
