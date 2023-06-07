'use server'
import { subscribeMailChimp } from '../functions'
export async function createPost(data: any) {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    //const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `apikey ${API_KEY}`,
    }

    const title = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const phone = data.get('phone')
    console.log(title, email, message, phone)

    try {
        const minData = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: title,
                LNAME: '',
                ADDRESS: {
                    addr1: '',
                    addr2: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: 'US',
                },
                PHONE: phone,
                BIRTHDAY: '',
                MESSAGE: message,
            },
        }
        /* await fetch(url, {
            headers: headers,
            method: 'POST',
            //body: JSON.stringify({ email_address: email }),
            body: JSON.stringify(minData),
        }) */

        await subscribeMailChimp(url, headers, minData)
    } catch (error) {
        console.log(error)
    }
}
