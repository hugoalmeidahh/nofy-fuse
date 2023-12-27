import { prisma } from '@/core/database/prisma'
import { Prisma } from '@prisma/client'
import { ICompanyRepository } from '../../interfaces'

export class CompanyPrismaRepository implements ICompanyRepository {
  async findAll() {
    const companies = await prisma.company.findMany()
    return companies
  }

  async findByCnpj(cnpj: string) {
    const company = await prisma.company.findUnique({ where: { cnpj } })
    return company
  }

  async findById(id: string) {
    const company = await prisma.company.findUnique({ where: { id } })
    return company
  }

  async create(data: Prisma.CompanyCreateInput) {
    const company = await prisma.company.create({
      data,
    })
    return company
  }

  async save(data: Prisma.CompanyUpdateInput) {
    const { id, ...updateData } = data
    if (!id) {
      throw new Error('More parameters is needed for updating.')
    }

    if (typeof id !== 'string') {
      throw new Error('ID is a wrong!')
    }

    const company = await prisma.company.update({
      where: { id: id as string },
      data: updateData,
    })

    return company
  }
}
