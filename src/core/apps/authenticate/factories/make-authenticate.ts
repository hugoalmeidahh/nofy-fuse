import { UsersPrismaRepository } from '../../users/repositories/prisma/users.prisma.repository'
import { AuthServices } from '../auth.services'

export function makeUserRegisterServices() {
  const userRepository = new UsersPrismaRepository()
  const services = new AuthServices(userRepository)
  return services
}
