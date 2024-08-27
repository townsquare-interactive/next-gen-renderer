import { NextRequest, NextResponse } from 'next/server'
import { ContactFormSubmitFn } from 'types'
import { submit as mailchimpSubmit } from '../../../services/contact-us-form/mailchimp'
import { submit as s3FilePost } from '../../../services/contact-us-form/s3file'
import { submit as webhookSubmit } from '../../../services/contact-us-form/webhook'
import { submit as SES } from '../../../services/contact-us-form/SES'
import { submit as BMP } from '../../../services/contact-us-form/BMP'
import { handleFormError } from 'services/contact-us-form/errors'
import { ContactFormSchema, zodDataParse } from 'zod-objects'

export async function POST(request: NextRequest, res: any) {
    const formRequest = await request.json()
    try {
        //validate request data
        const validatedFormData = zodDataParse(formRequest.formData, ContactFormSchema)
        const formService = validatedFormData.formService ? validatedFormData.formService : formRequest.siteData.formService
        console.log('formService', formService)

        let submit: ContactFormSubmitFn
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

        await submit(validatedFormData, formRequest.siteData)
        return NextResponse.json('Form submitted succesfully')
    } catch (error: any) {
        return handleFormError(error)
    }
}
