'use client'
import { useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute } from 'functions'
import { ContactFieldProps, FormFields } from 'types'

const ContactFormRoutes = (props: { contactFormData: { formFields: FormFields[]; formTitle: string } }) => {
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
    //const [formMessage, setFormMessage] = useState('')

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
        const contactData = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: fName,
                LNAME: lName,
                ADDRESS: {
                    addr1: '',
                    addr2: '',
                    city: '',
                    state: '',
                    zip: '',
                    country: 'US',
                },
                PHONE: phone,
                BIRTHDAY: '',
                MESSAGE: messagebox,
            },
        }

        await postContactFormRoute(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/contacts`, contactData)
    }

    return (
        <>
            <div className={styles.root}>
                {contactFormData.formTitle && <h3>{contactFormData.formTitle}</h3>}
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
