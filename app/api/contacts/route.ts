import { NextResponse } from 'next/server'
import { ContactFormData, ContactFormSubmitFn } from 'types'
import { submit as mailchimpSubmit } from '../../../services/contact-us-form/mailchimp'
import { submit as consoleSubmit } from '../../../services/contact-us-form/console-log'

export async function POST(request: any) {
    const formData = await request.json()

    const contactUsService = 'mailchimp'
    //
    let submit: ContactFormSubmitFn
    /*switch (contactUsService) {
        case 'console-log':
            submit = consoleSubmit
            break
        case 'mailchimp':
            submit = mailchimpSubmit
            break

        default:
            submit = mailchimpSubmit
            break
    } */

    submit = mailchimpSubmit

    try {
        await submit(formData)
        return NextResponse.json('Form submitted succesfully')
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
