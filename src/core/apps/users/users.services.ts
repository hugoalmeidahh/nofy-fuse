import { promises } from 'dns'
import {
  IFindUserByIdResquest,
  IRegisterUsersRequest,
  IRegisterUsersResponse,
  ISaveUsersRequest,
  ISaveUsersResponse,
  IUserResponse,
} from './interface'
import { UsersPrismaRepository } from './repositories/prisma/users.prisma.repository'
import { hash } from 'bcryptjs'

export class UserServices {
  constructor(private usersRepository: UsersPrismaRepository) {}

  async register({
    name,
    email,
    password,
  }: IRegisterUsersRequest): Promise<IRegisterUsersResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return { user }
  }

  async findAll(): Promise<IUsersResponse> {
    const users = await this.usersRepository.findAll()

    return { users }
  }

  async findById({ id }: IFindUserByIdResquest): Promise<IUserResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new Error()
    }

    return { user }
  }

  async save({
    id,
    name,
    email,
    password,
    actived_at,
  }: ISaveUsersRequest): Promise<ISaveUsersResponse> {
    const password_hash_updated =
      password != null ? await hash(password, 6) : undefined
    const actived_at_updated =
      actived_at != null || undefined ? new Date() : undefined
    const email_updated = email != null || undefined ? email : undefined
    const name_updated = name != null || undefined ? name : undefined
    const user = await this.usersRepository.save({
      id,
      name: name_updated,
      email: email_updated,
      password_hash: password_hash_updated,
      actived_at: actived_at_updated,
    })

    return { user }
  }
}
