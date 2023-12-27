import {
  IRegisterCompanyRequest,
  ICompanyRepository,
  ICompanyResponse,
} from './interfaces'
import { hash } from 'bcryptjs'
import { SameWithCnpj } from './errors/sameWithCnpj'

export class CompanyServices {
  constructor(private companyRepository: ICompanyRepository) {}

  async register({
    name,
    cnpj,
    address,
    cep,
    city,
    country,
    state,
    userId,
  }: IRegisterCompanyRequest): Promise<ICompanyResponse> {
    const userWithSameCnpj = await this.companyRepository.findByCnpj(cnpj)

    if (userWithSameCnpj) {
      throw new SameWithCnpj()
    }

    const company = await this.companyRepository.create({
      name,
      cnpj,
      address,
      cep,
      city,
      country,
      state,
      userId,
    })

    return { company }
  }
}
