import {
	AIRTABLE_API_KEY,
	AIRTABLE_BASE_ID,
} from '$env/static/private'
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

    const { name, email, phone, message } = form.data
    const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`
		
	
    const data = {
      records: [
        {
          fields: {
						'Name': name,
						'Email': email,
						'Phone': phone,
						'Message': message,
          },
        },
      ],
    }
    await fetch(AIRTABLE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return {
      form,
    }
  },	
}

