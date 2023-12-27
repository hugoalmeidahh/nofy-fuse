import { Company } from '@prisma/client'
import { IRepository } from '@/core/database/iRepository'

// Register
export interface IRegisterCompanyRequest {
  name: string
  cnpj: string
  address: string
  cep: string
  city: string
  state: string
  country: string
  userId: string
}

export interface ICompanyRequestBody {
  name: string
  cnpj: string
  address: string
  cep: string
  city: string
  state: string
  country: string
  userId: string
}

export interface ICompanyUser {
  sub: string
}

export interface ICompanyResponse {
  company: Company
}

export interface ICompaniesResponse {
  companies: Company[]
}

export interface ICompanyRepository extends IRepository<Company> {
  findByCnpj(cnpj: string): Promise<Company | null>
}
