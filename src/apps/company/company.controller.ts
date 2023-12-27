import { FastifyReply, FastifyRequest } from 'fastify'
import { makeCompanyRegisterServices } from './factories'
import { CompanyBodySchemaValidation } from './validations'
import { STATUS } from '@/core/constants'
import { ICompanyRequestBody, ICompanyUser } from './interfaces'

const CompanySrv = makeCompanyRegisterServices()

async function create(
  request: FastifyRequest<{ Body: ICompanyRequestBody; User: ICompanyUser }>,
  reply: FastifyReply,
) {
  try {
    const { sub } = request.user
    const payload: ICompanyRequestBody = request.body
    payload.userId = sub

    const companyBodySchema = CompanyBodySchemaValidation.parse(payload)

    const company = await CompanySrv.register(companyBodySchema)
    return reply.status(STATUS.CREATED).send(company)
  } catch (error) {
    if (error?.name === 'ZodError') {
      return reply.status(STATUS.BAD_REQUEST).send({ error })
    }
    return reply.status(500).send({ error })
  }
}

export default {
  create,
}
