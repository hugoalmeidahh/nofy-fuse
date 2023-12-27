import { FastifyInstance } from 'fastify'
import controller from './auth.controller'

export const authRoutes = async (route: FastifyInstance) => {
  route.post('/login', controller.login)
}
