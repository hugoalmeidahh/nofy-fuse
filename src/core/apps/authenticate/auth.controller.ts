import { STATUS } from '@/core/constants'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeAuthServices } from './factories'
import { LoginBodySchemaValidation } from './validations'
import { InvalidCredentialsError } from '@/core/errors'

async function login(request: FastifyRequest, reply: FastifyReply) {
  const loginBodySchema = LoginBodySchemaValidation.parse(request.body)

  try {
    const AuthSrv = makeAuthServices()
    const { user } = await AuthSrv.login(loginBodySchema)

    const token = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
        },
      },
    )

    return reply.status(STATUS.SUCCESS).send({ token })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(STATUS.BAD_REQUEST).send(error)
    }

    throw error
  }
}

export default {
  login,
}
