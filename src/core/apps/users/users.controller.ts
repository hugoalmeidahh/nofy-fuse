import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from 'src/core/database/prisma'
import { z } from 'zod'
import { hash } from 'bcryptjs'

async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(12),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  const password_hash = await hash(password, 6)

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash,
    },
  })

  return reply.status(201).send()
}

const readAll = async (request: FastifyRequest, reply: FastifyReply) => {
  const users = await prisma.user.findMany()
  console.log(users)
  return reply.status(200).send(users)
}

export default {
  create,
  readAll,
}
