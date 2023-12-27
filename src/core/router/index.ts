import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { privateRoutes } from './privateRoutes'
import { publicRoutes } from 'src/routes'
import { STATUS } from '../constants'

export async function Routes(route: FastifyInstance) {
  route.register(privateRoutes)
  route.register(publicRoutes)

  route.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    return reply.status(STATUS.SUCCESS).send()
  })
}
