import { v4 as uuidv4 } from 'uuid'
import { Response } from 'express' // Assuming you're using Express
import { NextResponse } from 'next/server'

interface ErrorClass {
    message: string
    errorType: string
    state: any
}

interface ErrorState {
    req?: any
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

interface ErroredFields {
    fieldPath: string[]
    message: string
}

interface ValidationErrorType extends ErrorClass {
    state: {
        erroredFields: ErroredFields[]
    } & ErrorState
}

export class ValidationError extends BaseError {
    constructor({ message, errorType, state }: ValidationErrorType) {
        super({ message, errorType, state })
    }
}

// Handles all types of errors and calls the specified error class
export const handleFormError = (err: BaseError) => {
    const errorID = uuidv4()

    const errorData = {
        errorType: err.errorType,
        state: err.state,
    }

    // Log the error with the unique ID
    console.error(`[Error ID: ${errorID}]`, errorData, `${err.stack}`)

    return NextResponse.json({ id: errorID, error: `(ID: ${errorID}) ${err.message}` }, { status: 500 })
}
