import { NextRequest, NextResponse } from 'next/server'
import { ContactFormSubmitFn } from 'types'
import { submit as mailchimpSubmit } from '../../../services/contact-us-form/mailchimp'
import { submit as s3FilePost } from '../../../services/contact-us-form/s3file'
import { submit as webhookSubmit } from '../../../services/contact-us-form/webhook'
import { submit as SES } from '../../../services/contact-us-form/SES'
import { submit as BMP } from '../../../services/contact-us-form/BMP'
import { handleFormError } from 'services/contact-us-form/errors'

export async function POST(request: NextRequest, res: any) {
    const formRequest = await request.json()

    const formService = formRequest.formData.formService ? formRequest.formData.formService : formRequest.siteData.formService

    let submit: ContactFormSubmitFn
    console.log('formService', formService)
    switch (formService) {
        case 'mailchimp':
            submit = mailchimpSubmit
            break

        case 's3':
            submit = s3FilePost
            break

        case 'webhook':
            submit = webhookSubmit
            break

        case 'SES':
            submit = SES
            break

        case 'BMP':
            submit = BMP
            break

        default:
            submit = webhookSubmit
            break
    }

    try {
        await submit(formRequest.formData, formRequest.siteData)
        return NextResponse.json('Form submitted succesfully')
    } catch (error: any) {
        return handleFormError(error, res)
    }
}
