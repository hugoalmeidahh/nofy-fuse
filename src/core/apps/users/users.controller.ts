import { STATUS } from '@/core/constants'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeUserRegisterServices } from './factories'
import { RegisterBodySchemaValidation } from './validations'

const UserSrv = makeUserRegisterServices()

async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = RegisterBodySchemaValidation.parse(request.body)
  const user = await UserSrv.register(registerBodySchema)
  console.log(user)
  return reply.status(STATUS.CREATED).send()
}

const readAll = async (request: FastifyRequest, reply: FastifyReply) => {
  const users = await UserSrv.findAll()
  return reply.status(STATUS.SUCCESS).send(users)
}

export default {
  create,
  readAll,
}
