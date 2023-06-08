'use client'
import { useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute, convertDataToMailchimp } from 'functions'
import { ContactFieldProps, FormFields } from 'types'
import cn from 'classnames'

const contactFormData = {
    formTitle: 'Contact Us',
    formFields: [
        {
            name: 'fName',
            placeholder: 'Enter Name',
            type: 'text',
            label: 'First Name',
            isReq: true,
            fieldType: 'input',
            isVisible: true,
        },
        {
            name: 'lName',
            placeholder: 'Enter Name',
            type: 'text',
            label: 'Last Name',
            isReq: true,
            fieldType: 'input',
            isVisible: true,
        },

        {
            name: 'email',
            // placeholder:'Enter Name',
            type: 'email',
            label: 'Email',
            isReq: true,
            fieldType: 'input',
            isVisible: true,
        },
        {
            name: 'phone',
            // placeholder:'Enter Name',
            type: 'phone',
            label: 'Phone',
            isReq: false,
            fieldType: 'input',
            isVisible: true,
        },
        {
            label: 'Message',
            name: 'messagebox',
            isReq: true,
            fieldType: 'textarea',
            isVisible: true,
        },
        {
            label: 'Address',
            subLabel: 'Street Address',
            name: 'street',
            isReq: false,
            fieldType: 'input',
            isVisible: true,
        },
        {
            label: 'Zip Code',
            name: 'zip',
            isReq: false,
            fieldType: 'input',
            isVisible: true,
        },
        {
            label: 'City',
            name: 'city',
            isReq: false,
            fieldType: 'input',
            isVisible: true,
        },
        {
            label: 'State',
            name: 'state',
            isReq: false,
            fieldType: 'input',
            isVisible: true,
        },
    ],
}

//props: { contactFormData: { formFields: FormFields[]; formTitle: string } }

const ContactFormRoutes = () => {
    //const { contactFormData } = props

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

    // email.indexOf('@') > -1 &&

    const submit = async () => {
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
            const contactData = convertDataToMailchimp(formData)

            //post data to contacts api route handler
            try {
                setFormMessage('Sending....')
                await postContactFormRoute(`/api/contacts`, contactData)
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
                            {contactFormData.formFields.map((field, index) => (
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
                        <button type="submit" className={styles.submit} onClick={submit}>
                            Send
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
