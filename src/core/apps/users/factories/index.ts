import { UsersPrismaRepository } from '../repositories/prisma/users.prisma.repository'
import { UserServices } from '../users.services'

export function makeUserRegisterServices() {
  const userRepository = new UsersPrismaRepository()
  const services = new UserServices(userRepository)
  return services
}
