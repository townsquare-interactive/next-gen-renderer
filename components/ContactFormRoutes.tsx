'use client'
import { useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute, convertDataToMailchimp } from 'functions'
import { ContactFieldProps, FormFields } from 'types'
import cn from 'classnames'

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

        const contactData = convertDataToMailchimp(formData)

        /*         const contactData = {
            email_address: formData.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: formData.fName,
                LNAME: formData.lName,
                ADDRESS: {
                    addr1: formData.address.street,
                    addr2: '',
                    city: formData.address.city,
                    state: formData.address.state,
                    zip: formData.address.zip,
                    country: 'US',
                },
                // ZIP: formData.address.zip,
                //STATE: formData.address.state, 
                PHONE: formData.phone,
                BIRTHDAY: '',
                MESSAGE: formData.message,
            },*/

        try {
            setFormMessage('Sending....')
            await postContactFormRoute(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/contacts`, contactData)
            setFormMessage('Thank you for contacting us')
            setFormSent(true)
            console.log(formMessage)
        } catch (error) {
            console.log(error)
            setFormMessage('Form error')
        }
    }

    return (
        <>
            <div className={styles.root}>
                {contactFormData.formTitle && <h3 className={styles.title}>{contactFormData.formTitle}</h3>}
                <div className={styles['message-block']}>
                    {/* {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>} */}
                    {/*  {formMessage === 'Sending....' && <div style={{ color: 'blue' }}>{formMessage}</div>}
                    {formMessage === 'Form error' && <div style={{ color: 'red' }}>{formMessage}</div>}
                    {formMessage === 'Thank you for contacting us' && <div style={{ color: 'green' }}>{formMessage}</div>} */}
                    {formMessage && (
                        <div
                            className={cn(styles.message, {
                                [styles.blue]: formMessage === 'Sending....',
                                [styles.red]: formMessage === 'Form error',
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
