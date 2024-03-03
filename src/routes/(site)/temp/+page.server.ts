import { schema } from '$lib/schemas/ContactForm'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const form = await superValidate(schema)
	return { form }
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema)

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form })
		}

		// TODO: Do something with the validated form.data
		console.log(form)

		// Yep, return { form } here too
		return { form }
	}
}

