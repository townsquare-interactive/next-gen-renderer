import { NextResponse } from 'next/server'

export async function POST(request: any) {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER
    const mailchimpUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `apikey ${API_KEY}`,
    }

    let body = await request.json()

    try {
        await fetch(mailchimpUrl, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(body),
        })

        return NextResponse.json('Form submitted succesfully')
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
