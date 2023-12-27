import { companyRoutes } from '@/apps/company/company.url'
import { FastifyInstance } from 'fastify'

export async function privateRoutes(route: FastifyInstance) {
  // route.register(privateRoutes)
  route.register(companyRoutes)
}
