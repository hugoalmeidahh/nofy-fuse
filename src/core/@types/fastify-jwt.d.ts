import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      role: 'ADMIN' | 'USER'
      sub: string
    }
  }
}
