import { v4 as uuidv4 } from 'uuid'
import { Response } from 'express' // Assuming you're using Express
import { NextResponse } from 'next/server'

interface ErrorClass {
    message: string
    errorType: string
    state: any
}

abstract class BaseError extends Error {
    public errorType: string
    public state: any

    constructor({ message, errorType, state }: ErrorClass) {
        super(message)
        this.name = new.target.name
        this.errorType = errorType
        this.state = state
        Error.captureStackTrace(this, this.constructor)
    }
}

export class FormError extends BaseError {
    constructor({ message, errorType, state }: ErrorClass) {
        super({ message, errorType, state })
    }
}

// Handles all types of errors and calls the specified error class
export const handleFormError = (err: BaseError, res: Response, url: string = '') => {
    const errorID = uuidv4()

    const errorData = {
        errorType: err.errorType,
        state: err.state,
    }

    //const errorIDMessage = ` (Error ID: ${errorID})`

    // Log the error with the unique ID
    console.error(`[Error ID: ${errorID}]`, errorData, `${err.stack}`)

    return NextResponse.json({ id: errorID, error: `(ID: ${errorID}) ${err.message}` }, { status: 500 })
}
