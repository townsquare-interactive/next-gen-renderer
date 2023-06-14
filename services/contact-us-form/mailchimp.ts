import { generateLayout } from 'functions'
import { ContactFormData } from 'types'

const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.S3_DEFAULT_REGION,
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY_ID,
    //logger: console,
})
const s3 = new AWS.S3()

const tsiBucket = 'townsquareinteractive'
const bucketUrl = 'https://townsquareinteractive.s3.amazonaws.com'

//add file to s3 bucket
const addFileS3 = async (file, key, fileType = 'json') => {
    const s3ContentType = fileType.includes('css') ? 'text/css' : 'application/json'
    const body = fileType === 'json' ? JSON.stringify(file) : file

    await s3
        .putObject({
            Body: body,
            Bucket: tsiBucket,
            Key: key + `.${fileType}`,
            ContentType: s3ContentType,
        })
        .promise()
        .catch((error) => {
            console.error(error)
        })

    console.log('File Placed')
}

export async function submit(formData: ContactFormData) {
    const { CMSLayout } = await generateLayout()

    if (CMSLayout.config.mailChimp) {
        const AUDIENCE_ID = CMSLayout.config.mailChimp.audId
        const API_KEY = CMSLayout.config.mailChimp.auth
        const DATACENTER = CMSLayout.config.mailChimp.datacenter
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

            addFileS3(body, `${process.env.NEXT_PUBLIC_CMS_URL}/contacts`)
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
