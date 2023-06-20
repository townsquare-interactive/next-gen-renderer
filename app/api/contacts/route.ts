import { NextResponse } from 'next/server'
import { ContactFormSubmitFn } from 'types'
import { submit as mailchimpSubmit } from '../../../services/contact-us-form/mailchimp'
import { submit as s3FilePost } from '../../../services/contact-us-form/s3file'
import { submit as webhookSubmit } from '../../../services/contact-us-form/webhook'

export async function POST(request: any) {
    const formData = await request.json()

    let submit: ContactFormSubmitFn
    switch (formData.formService) {
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
        await submit(formData)
        return NextResponse.json('Form submitted succesfully')
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
