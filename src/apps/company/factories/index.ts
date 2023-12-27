import { CompanyServices } from '../company.services'
import { CompanyPrismaRepository } from '../repositories/prisma/company.prisma.repository'

export function makeCompanyRegisterServices() {
  const companyRepo = new CompanyPrismaRepository()
  const services = new CompanyServices(companyRepo)
  return services
}
