import { generateLayout } from 'functions'
import { ContactFormData } from 'types'

export async function submit(formData: ContactFormData) {
    const { CMSLayout } = await generateLayout()

    if (CMSLayout.config.zapierUrl) {
        let body = formData

        //const zapUrl = process.env.ZAPIER_URL || ''

        try {
            await fetch(CMSLayout.config.zapierUrl, {
                method: 'POST',
                body: JSON.stringify(body),
            })
        } catch (error) {
            throw error
        }
    }
}
