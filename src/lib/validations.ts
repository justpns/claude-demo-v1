import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().email('Please enter a valid email address'),
  role: z.string().optional(),
})

export type RegisterInput = z.infer<typeof registerSchema>
