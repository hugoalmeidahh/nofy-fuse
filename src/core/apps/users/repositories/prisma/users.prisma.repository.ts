import { prisma } from 'src/core/database/prisma'
import { Prisma } from '@prisma/client'
import { IUsersRepository, IUserUpdate } from '../../interface'

export class UsersPrismaRepository implements IUsersRepository {
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } })
    return user
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } })
    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }

  async save(data: IUserUpdate) {
    const user = await prisma.user.update({
      where: {
        id: data?.id,
      },
      data,
    })
    return user
  }
}
