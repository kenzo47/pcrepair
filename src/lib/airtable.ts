import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '$env/static/private';

export async function submitToAirtable(form: any): Promise<void> {
  const { name, email, phone, message } = form.data;
  const AIRTABLE_URL: string = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Submissions`;

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
  };

  await fetch(AIRTABLE_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
