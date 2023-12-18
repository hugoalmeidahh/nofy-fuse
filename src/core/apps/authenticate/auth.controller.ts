import { FastifyReply, FastifyRequest } from 'fastify'
import { authBodySchema } from './auth.validation'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email, password } = authBodySchema.parse(request.body)

  try {
  } catch (error) {}
}
