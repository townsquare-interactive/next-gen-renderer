import { NextResponse } from 'next/server'
import { ContactFormSubmitFn } from 'types'
import { submit as mailchimpSubmit } from '../../../services/contact-us-form/mailchimp'
import { submit as s3FilePost } from '../../../services/contact-us-form/s3file'
import { submit as webhookSubmit } from '../../../services/contact-us-form/webhook'

export async function POST(request: any) {
    const formRequest = await request.json()
    console.log('sietData', formRequest.siteData)

    let submit: ContactFormSubmitFn
    switch (formRequest.formData.formService) {
        case 'mailchimp':
            submit = mailchimpSubmit
            break

        case 's3':
            submit = s3FilePost
            break

        case 'webhook':
            submit = webhookSubmit
            break

        default:
            submit = webhookSubmit
            break
    }

    try {
        await submit(formRequest.formData, formRequest.siteData)
        return NextResponse.json('Form submitted succesfully')
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
