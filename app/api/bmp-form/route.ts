import { NextRequest, NextResponse } from 'next/server'
import { submitLeadToEngage } from 'api-functions'

export async function POST(request: NextRequest) {
    const formRequest = await request.json()

    try {
        await submitLeadToEngage(formRequest.siteData.vcita?.businessId, formRequest.formData)
        return NextResponse.json('Form submitted succesfully')
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 })
    }
}
