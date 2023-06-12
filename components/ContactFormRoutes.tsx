'use client'
import { useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute } from 'functions'
import { ContactFieldProps, ContactFormRoutesProps } from 'types'
import cn from 'classnames'

const ContactFormRoutes = (props: ContactFormRoutesProps) => {
    const { contactFormData } = props

    const [email, setEmail] = useState('')
    const [fName, setFirstName] = useState('')
    const [lName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [messagebox, setMessageBox] = useState('')
    const [street, setStreet] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [formMessage, setFormMessage] = useState('')
    const [formSent, setFormSent] = useState(false)

    const determineState = (name: string, value: string) => {
        if (name === 'fName') {
            setFirstName(value)
        } else if (name === 'lName') {
            setLastName(value)
        } else if (name === 'phone') {
            setPhone(value)
        } else if (name === 'email') {
            setEmail(value)
        } else if (name === 'messagebox') {
            setMessageBox(value)
        } else if (name === 'street') {
            setStreet(value)
        } else if (name === 'zip') {
            setZip(value)
        } else if (name === 'city') {
            setCity(value)
        } else if (name === 'state') {
            setState(value)
        }
    }

    const submitForm = async () => {
        if (email.indexOf('@') <= -1) {
            setFormMessage('Email not entered correctly')
        } else {
            const formData = {
                fName: fName,
                lName: lName,
                phone: phone,
                email: email,
                message: messagebox,
                address: {
                    street: street,
                    zip: zip,
                    state: state,
                    city: city,
                },
            }

            //convert data to mailchimp schema
            //const contactData = convertDataToMailchimp(formData)

            //post data to contacts api route handler
            try {
                setFormMessage('Sending....')
                await postContactFormRoute(`/api/contacts`, formData)
                setFormMessage('Thank you for contacting us')
                setFormSent(true)
                console.log(formMessage)
            } catch (error) {
                console.log(error)
                setFormMessage('Form error')
            }
        }
    }

    return (
        <>
            <div className={styles.root}>
                {contactFormData.formTitle && <h3 className={styles.title}>{contactFormData.formTitle}</h3>}
                <div className={styles['message-block']}>
                    {formMessage && (
                        <div
                            className={cn(styles.message, {
                                [styles.blue]: formMessage === 'Sending....',
                                [styles.red]: formMessage === 'Form error' || formMessage === 'Email not entered correctly',
                                [styles.green]: formSent,
                            })}
                        >
                            {formMessage}
                        </div>
                    )}
                </div>
                {!formSent && (
                    <>
                        <form>
                            {contactFormData.formFields.map((field, index: number) => (
                                <ContactField
                                    fieldType={field.fieldType}
                                    name={field.name}
                                    isReq={field.isReq}
                                    key={index}
                                    determineState={determineState}
                                    label={field.label}
                                    isVisible={field.isVisible}
                                    placeholder={field.placeholder}
                                    type={field.type}
                                />
                            ))}
                        </form>
                        <button type="submit" className={styles.submit} onClick={submitForm}>
                            Submit
                        </button>
                    </>
                )}
            </div>
        </>
    )
}

const ContactField = (props: ContactFieldProps) => {
    const { type, label, placeholder, name, isReq, fieldType, determineState, isVisible } = props
    return (
        <>
            {isVisible && (
                <div className={styles.field}>
                    <label>
                        {label} {isReq && <span className={styles.req}>*</span>}
                    </label>
                    {fieldType === 'input' && (
                        <input
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            required={isReq || false}
                            onChange={(event) => determineState(name, event.target.value ?? '')}
                        ></input>
                    )}
                    {fieldType === 'textarea' && (
                        <textarea
                            name={name}
                            placeholder={placeholder || ''}
                            required={isReq || false}
                            onChange={(event) => determineState(name, event.target.value ?? '')}
                        ></textarea>
                    )}
                </div>
            )}
        </>
    )
}

export default ContactFormRoutes
