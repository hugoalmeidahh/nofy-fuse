import { z } from 'zod'

export const LoginBodySchemaValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})
