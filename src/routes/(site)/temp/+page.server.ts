import { submitToAirtable } from '$lib/airtable'
import { schema } from '$lib/schemas/ContactForm'
import { fail } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const form = await superValidate(schema)
	return { form }
}

export const actions = {
	default: async event => {
		const form = await superValidate(event, schema)

		// Convenient validation check:
		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form })
		}

    await submitToAirtable(form)
  
    return {
      form,
    }
  },	
}

