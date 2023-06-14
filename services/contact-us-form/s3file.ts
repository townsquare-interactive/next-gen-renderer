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

export async function submit(formData: ContactFormData) {
    let body = formData

    try {
        addFileS3([body], `${process.env.NEXT_PUBLIC_CMS_URL}/contacts`)
    } catch (error) {
        throw error
    }
}

//add file to s3 bucket
const addFileS3 = async (file: any, key: string, fileType = 'json') => {
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
        .catch((error: Error) => {
            console.error(error)
        })

    console.log('File Placed')
}
