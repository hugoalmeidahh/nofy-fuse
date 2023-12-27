import { FastifyInstance } from 'fastify'
import controller from './company.controller'

export const companyRoutes = async (route: FastifyInstance) => {
  route.post('/company', controller.create)
  // route.get('/company', controller.readAll)
}
