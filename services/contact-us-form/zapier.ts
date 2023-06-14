import { ContactFormData } from 'types'

export async function submit(formData: ContactFormData) {
    let body = formData
    const zapUrl = process.env.ZAPIER_URL || ''

    try {
        await fetch(zapUrl, {
            method: 'POST',
            body: JSON.stringify(body),
        })
    } catch (error) {
        throw error
    }
}
