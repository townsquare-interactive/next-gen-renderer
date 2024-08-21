import type { ContactFormData, GlobalData } from 'types'

export async function submit(formData: ContactFormData, siteData: GlobalData) {
    if (siteData.config?.zapierUrl || siteData.config?.makeUrl) {
        let body = formData

        const useZap = false
        const zapUrl = siteData.config?.zapierUrl
        const makeUrl = siteData.config?.makeUrl
        const webhookUrl = useZap ? zapUrl : makeUrl

        try {
            await fetch(webhookUrl || '', {
                method: 'POST',
                body: JSON.stringify(body),
            })
        } catch (error) {
            throw error
        }
    }
}
