import { generateLayout } from 'functions'
import { ContactFormData } from 'types'

export async function submit(formData: ContactFormData) {
    const { CMSLayout } = await generateLayout()

    if (CMSLayout.config.zapierUrl) {
        let body = formData

        const useZap = false
        const zapUrl = CMSLayout.config.zapierUrl
        const makeUrl = CMSLayout.config.makeUrl

        const webhookUrl = useZap ? zapUrl : makeUrl

        try {
            await fetch(webhookUrl, {
                method: 'POST',
                body: JSON.stringify(body),
            })
        } catch (error) {
            throw error
        }
    }
}
