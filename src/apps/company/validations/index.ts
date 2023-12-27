import { z } from 'zod'

export const CompanyBodySchemaValidation = z.object({
  name: z.string(),
  cnpj: z.string().min(15),
  address: z.string(),
  cep: z.string(),
  city: z.string(),
  country: z.string(),
  state: z.string(),
  userId: z.string(),
})
