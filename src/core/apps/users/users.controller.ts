import { STATUS } from '@/core/constants'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeUserRegisterServices } from './factories'
import { RegisterBodySchemaValidation } from './validation'
import { prisma } from '@/core/database/prisma'

const UserSrv = makeUserRegisterServices()

async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = RegisterBodySchemaValidation.parse(request.body)

  const user = await UserSrv.register(registerBodySchema)

  console.log(user)

  return reply.status(STATUS.CREATED).send()
  // const registerBodySchema = z.object({
  //   name: z.string(),
  //   email: z.string().email(),
  //   password: z.string().min(12),
  // })
  // const { name, email, password } = registerBodySchema.parse(request.body)
  // const password_hash = await hash(password, 6)
  // await prisma.user.create({
  //   data: {
  //     name,
  //     email,
  //     password_hash,
  //   },
  // })
  // return reply.status(201).send()
}

const readAll = async (request: FastifyRequest, reply: FastifyReply) => {
  // const users = await prisma.user.findMany()
  // console.log(users)
  // return reply.status(200).send(users)
}

export default {
  create,
  readAll,
}
