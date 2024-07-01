import { ContactFormData } from 'types'

export const submitLeadToEngage = async (vcitaBusinessId: string, formData: ContactFormData) => {
    const getVcitaToken = () => {
        if (process.env.VCITA_SANDBOX_ON === '1') {
            return process.env.VCITA_SANDBOX_TOKEN
        } else {
            return process.env.VCITA_TOKEN
        }
    }

    const vcitaToken = getVcitaToken()

    const paramsQueryString = JSON.stringify({
        business_id: vcitaBusinessId,
        unique_id: vcitaBusinessId,
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
            'X-On-Behalf-Of': vcitaBusinessId,
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
        console.log(response)
        return response
    } catch (error) {
        console.error('Error during fetch:', error)
        throw error
    }
}
