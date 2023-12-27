import { prisma } from '@/core/database/prisma'
import { Prisma } from '@prisma/client'
import { IUsersRepository } from '../../interfaces'

export class UsersPrismaRepository implements IUsersRepository {
  async findAll() {
    const users = await prisma.user.findMany()
    return users
  }

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

  async save(data: Prisma.UserUpdateInput) {
    const { id, ...updateData } = data
    if (!id) {
      throw new Error('More parameters is needed for updating.')
    }

    if (typeof id !== 'string') {
      throw new Error('ID is a wrong!')
    }

    const user = await prisma.user.update({
      where: { id: id as string },
      data: updateData,
    })

    return user
  }
}
