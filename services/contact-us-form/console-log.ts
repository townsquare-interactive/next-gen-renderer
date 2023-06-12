import { ContactFormSubmitFn, ContactFormData } from 'types'
import fs from 'fs'

export const submit: ContactFormSubmitFn = async (formData: ContactFormData) => {
    console.log(`formData = ${JSON.stringify(formData, null, 2)}`)
    fs.writeFileSync('/tmp/console.log', `formData = ${JSON.stringify(formData, null, 2)}`)
}
