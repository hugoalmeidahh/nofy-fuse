import { FastifyInstance } from 'fastify'
import controller from './users.controller'

export const userRoutes = async (route: FastifyInstance) => {
  route.post('/users', controller.create)
  route.get('/users', controller.readAll)
}
