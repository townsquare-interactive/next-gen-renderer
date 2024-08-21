import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import type { ContactFormData, GlobalData } from 'types'
import { FormError } from './errors'

const sesClient = new SESClient({
    region: process.env.S3_DEFAULT_REGION,
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID!,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY_ID!,
    },
})

export const submit = async (formData: ContactFormData, siteData: GlobalData) => {
    try {
        const params = {
            Source: process.env.SENDER_EMAIL!,
            Destination: {
                ToAddresses: ['jedwards405@gmail.com' || siteData.email],
            },
            Message: {
                Subject: { Data: `New Form Submission from ${formData.fName} ${formData.lName}` },
                Body: {
                    Text: { Data: formData.messagebox },
                    Html: {
                        Data: `<strong>You have a new form submission:</strong><br/><br/>Name: ${formData.fName} ${formData.lName}<br/>Email: ${formData.email}<br/>Phone: ${formData.phone}<br/>Message: ${formData.messagebox}<br/>Street Address: ${formData.address.street}<br/>City: ${formData.address.city}<br/>State: ${formData.address.state}<br/>Zip: ${formData.address.zip}`,
                    },
                },
            },
        }

        const command = new SendEmailCommand(params)
        await sesClient.send(command)
    } catch (error: any) {
        console.error('Error sending email:', error)
        throw new FormError({
            message: error.message,
            errorType: 'FRM-001',
            state: { formStatus: 'submission not sent' },
        })
    }
}
