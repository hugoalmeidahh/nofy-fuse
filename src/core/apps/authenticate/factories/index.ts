import { UsersPrismaRepository } from '../../users/repositories/prisma/users.prisma.repository'
import { AuthenticateServices } from '../auth.services'

export function makeAuthServices() {
  const userRepository = new UsersPrismaRepository()
  const services = new AuthenticateServices(userRepository)
  return services
}
