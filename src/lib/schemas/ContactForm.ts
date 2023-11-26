import { z } from 'zod'

export const schema = z.object({
	name: z.string().min(2, { message: 'Voer een geldige naam in.' }),
	email: z.string().email().min(1, { message: 'Voer een geldig email adres in.' }),
	phone: z.string().optional(),
	message: z.string().min(10, { message: 'Voer een geldig bericht in.' })
})
