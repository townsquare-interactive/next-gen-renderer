import { NextResponse } from 'next/server'
import { ContactFormData, ContactFormSubmitFn } from 'types'
/* import { submit as mailchimpSubmit } from '../../../services/contact-us-form/mailchimp'
import { submit as consoleSubmit } from '../../../services/contact-us-form/console-log'
import { submit as s3FilePost } from '../../../services/contact-us-form/s3file' */
import { submit as webhookSubmit } from '../../../services/contact-us-form/webhook'

export async function POST(request: any) {
    const formData = await request.json()
    console.log(formData)

    const contactUsService = 'mailchimp'
    let submit: ContactFormSubmitFn
    /*  switch (contactUsService) {
        case 'mailchimp':
            submit = zapierSubmit
            break

        default:
            submit = mailchimpSubmit
            break
    } */

    submit = webhookSubmit

    try {
        await submit(formData)
        return NextResponse.json('Form submitted succesfully')
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
