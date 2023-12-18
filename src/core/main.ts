import fastify from 'fastify'
import jwt from '@fastify/jwt'
import { Routes } from './router'
import { env } from 'env'

export const main = fastify()

main.register(jwt, { secret: env.JWT_SECRET })

main.register(Routes)
