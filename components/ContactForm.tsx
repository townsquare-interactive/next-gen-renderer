//react slider
'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'
import styles from './contactform.module.scss'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const MailChimpForm = (props: any) => {
    const url = process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_URL || ''
    return (
        <div>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <ContactForm status={status} message={message} onValidated={(formData: any) => subscribe(formData)} />
                )}
            />
        </div>
    )
}

const ContactForm = ({ status, message, onValidated }: any) => {
    const [email, setEmail] = useState('')
    const [fName, setFirstName] = useState('')
    const [lName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [messagebox, setMessageBox] = useState('')
    const [street, setStreet] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    const determineState = (name: string, value: any) => {
        /*  switch (name) {
            case 'fName':
                setFirstName(value)
                console.log(fName)
                break
            case 'lName':
                setLastName(value)
                break
            case 'phone':
                setPhone(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'messagebox':
                setMessageBox(value)
                break
            case 'street':
                setStreet(value)
                break
            case 'zip':
                setZip(value)
                break
            case 'city':
                setCity(value)
                break
            case 'state':
                setState(value)
                break
        } */
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

    const submit = () =>
        // email.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email ? email : '',
            FNAME: fName ? fName : '',
            LNAME: lName ? lName : '',
            MESSAGE: messagebox ? messagebox : '',
            PHONE: phone ? phone : '',
            STREET: street ? street : '',
            ZIP: zip ? zip : '',
            CITY: city ? city : '',
            STATE: state ? state : '',
        })

    const formFields = [
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
            name: 'message',
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
            isVisible: false,
        },
        {
            label: 'Zip Code',
            name: 'zip',
            isReq: false,
            fieldType: 'input',
            isVisible: false,
        },
        {
            label: 'City',
            name: 'city',
            isReq: false,
            fieldType: 'input',
            isVisible: false,
        },
        {
            label: 'State',
            name: 'state',
            isReq: false,
            fieldType: 'input',
            isVisible: false,
        },
    ]

    return (
        <>
            <div className={styles.root}>
                <h3>Form Title</h3>

                <div className={styles.message}>
                    {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
                    {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
                    {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
                </div>

                {status != 'success' &&
                    formFields.map((field, index) => (
                        <ContactField
                            fieldType={field.fieldType}
                            name={field.name}
                            isReq={field.isReq}
                            key={index}
                            determineState={determineState}
                            label={field.label}
                            isVisible={field.isVisible}
                        />
                    ))}

                <button type="submit" className={styles.submit} onClick={submit}>
                    Send
                </button>
            </div>
        </>
    )
}

const ContactField = (props: any) => {
    const { type, label, placeholder, name, isReq, fieldType, inputRef, determineState, isVisible } = props
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

export default MailChimpForm
