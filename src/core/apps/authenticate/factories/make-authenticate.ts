export function makeAuthenticate() {
  const usersRepository = new PrismaRepository()
  const authenticateServices = new AuthenticateServices(usersRepository)

  return authenticateServices
}
