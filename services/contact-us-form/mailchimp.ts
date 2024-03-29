import { generateLayout } from 'functions'
import { ContactFormData, GlobalData } from 'types'

export async function submit(formData: ContactFormData, siteData: GlobalData) {
    //siteData changed so need to update this if we change mailchimp

    if (siteData.config?.mailChimp) {
        const AUDIENCE_ID = siteData.config.mailChimp.audId
        const API_KEY = siteData.config.mailChimp.auth
        const DATACENTER = siteData.config.mailChimp.datacenter
        const mailchimpUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `apikey ${API_KEY}`,
        }

        let body = convertDataToMailchimp(formData)

        try {
            await fetch(mailchimpUrl, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(body),
            })
        } catch (error) {
            throw error
        }
    }
}

//convert data to mailchimp schema
export const convertDataToMailchimp = (formData: ContactFormData) => {
    const contactData = {
        email_address: formData.email,
        status: 'subscribed',
        merge_fields: {
            FNAME: formData.fName,
            LNAME: formData.lName,
            ADDRESS: {
                addr1: formData.address.street,
                addr2: '',
                city: formData.address.city,
                state: formData.address.state,
                zip: formData.address.zip,
                country: 'US',
            },
            PHONE: formData.phone,
            BIRTHDAY: '',
            MESSAGE: formData.messagebox,
        },
    }

    return contactData
}
