import { z } from 'zod'

export const schema = z.object({
	name: z.string().min(4),
	email: z.string().email(),
	phone: z.string(),
	message: z.string().min(10)
})
