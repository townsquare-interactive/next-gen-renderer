import { ContactFormData } from 'types'

export async function submit(formData: ContactFormData) {
    let body = formData

    try {
        await fetch('***REMOVED***', {
            method: 'POST',
            body: JSON.stringify(body),
        })
    } catch (error) {
        throw error
    }
}
