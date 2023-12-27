import { FastifyInstance } from 'fastify'
import { userRoutes } from '../apps/users/users.url'
import { verify } from '@/core/http/middleware/verify'
import { privateRoutes as settingsPrivateRoutes } from 'src/routes'

export const privateRoutes = async (route: FastifyInstance) => {
  route.addHook('onRequest', verify)
  route.register(settingsPrivateRoutes)
  console.log('PrivateRouters')
  route.register(userRoutes)
}
