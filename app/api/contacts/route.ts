import { NextResponse } from 'next/server'

export async function POST(request) {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `apikey ${API_KEY}`,
    }

    /*   const res = await fetch(url , {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY ,
    },
  });

    const data = await res.json(); 
 */

    let body = await request.json()

    await fetch(url, {
        headers: headers,
        method: 'POST',
        //body: JSON.stringify({ email_address: email }),
        body: JSON.stringify(body),
    })

    return NextResponse.json(body)
}
