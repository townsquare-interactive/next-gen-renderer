'use client'
import { useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute } from 'functions'

const ContactFormRoutes = () => {
    const [email, setEmail] = useState('')
    const [fName, setFirstName] = useState('')
    const [lName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [messagebox, setMessageBox] = useState('')
    const [street, setStreet] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    /* //make requests to api route

        
    {
        "email_address": "edailll@YAHOO.COM",
        "status": "subscribed",
        "merge_fields": {
          "FNAME": "title",
          "LNAME": "",
          "ADDRESS": {
            "addr1": "",
            "addr2": "",
            "city": "",
            "state": "",
            "zip": "",
            "country": "US"
          },
          "PHONE": "4445554544",
          "BIRTHDAY": "",
          "MESSAGE": "message"
        }
      }
    */

    const determineState = (name: string, value: any) => {
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

    const submit = () => {
        // email.indexOf('@') > -1 &&
        const data = {
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

        postContactFormRoute(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/contacts`, data)
    }

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
                <>
                    <form>
                        {formFields.map((field, index) => (
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
                    </form>
                    <button type="submit" className={styles.submit} onClick={submit}>
                        Send
                    </button>
                </>
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

export default ContactFormRoutes
