import type { ContactFormData, GlobalData } from 'types'

export const submit = async (formData: ContactFormData, siteData: GlobalData) => {
    const getVcitaToken = () => {
        if (process.env.VCITA_SANDBOX_ON === '1') {
            return process.env.VCITA_SANDBOX_TOKEN
        } else {
            return process.env.VCITA_TOKEN
        }
    }

    const vcitaToken = getVcitaToken()

    const paramsQueryString = JSON.stringify({
        business_id: siteData.vcita?.businessId,
        unique_id: siteData.vcita?.businessId,
        first_name: formData.fName,
        identifier_type: 'unique_id',
        request_title: 'Contact Form',
        message_data: formData,
        email: formData.email,
    })

    const url = `https://api.vcita.biz/platform/v1/leadgen`
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: `Token token="${vcitaToken}"`,
            'X-On-Behalf-Of': siteData.vcita?.businessId || '',
        },
        body: paramsQueryString,
    }

    try {
        const res = await fetch(url, options)

        if (!res.ok) {
            const errorBody = await res.text()
            const errorJson = JSON.parse(errorBody)
            let errorMessage = `Status: ${res.status}, Reason: ${res.statusText}`

            if (errorJson.message) errorMessage += `, Message: ${errorJson.message}`
            if (errorJson.error) errorMessage += `, Error: ${errorJson.error}`

            throw new Error(errorMessage)
        }
        const response = await res.json()
        return response
    } catch (error) {
        console.error('Error during BMP fetch:', error)
        throw error
    }
}
