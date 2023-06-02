//react slider
'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//import { useRef, useState } from 'react'
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
    let email: any
    let fName: any
    let lName: any
    let phone: any
    let messagebox: any
    let street: any
    let zip: any
    let city: any
    let state: any

    const submit = () =>
        email &&
        fName &&
        lName &&
        phone &&
        messagebox &&
        street &&
        zip &&
        city &&
        state &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value || '',
            FNAME: fName.value || '',
            LNAME: lName.value || '',
            MESSAGE: messagebox.value || '',
            PHONE: phone.value || '',
            STREET: street.value || '',
            ZIP: zip.value || '',
            CITY: city.value || '',
            STATE: state.value || '',
        })

    /*   const formFields = [
        {
            name: 'fName',
            placeholder: 'Enter Name',
            type: 'text',
            label: 'First Name',
            isReq: true,
            fieldType: 'input',
        },
        {
            name: 'lName',
            placeholder: 'Enter Name',
            type: 'text',
            label: 'Last Name',
            isReq: true,
            fieldType: 'input',
        },

        {
            name: 'email',
            // placeholder:'Enter Name',
            type: 'email',
            label: 'Email',
            isReq: true,
            fieldType: 'input',
        },
        {
            name: 'phone',
            // placeholder:'Enter Name',
            type: 'phone',
            label: 'Phone',
            isReq: false,
            fieldType: 'input',
        },
        {
            label: 'Message',
            name: 'message',
            isReq: true,
            fieldType: 'textarea',
        },
    ] */

    const formFieldsObj = {
        firstName: {
            isVisible: true,
            label: 'First Name',
            isReq: true,
            classname: '',
            type: 'text',
            placeholder: 'first name',
        },
        lastName: {
            isVisible: true,
            label: 'Last Name',
            isReq: true,
            classname: '',
            type: 'text',
            placeholder: 'last name',
        },
        email: {
            isVisible: true,
            label: 'Email',
            isReq: true,
            classname: '',
            type: 'email',
            placeholder: '',
        },
        phone: {
            isVisible: true,
            label: 'Phone',
            isReq: false,
            classname: '',
            type: 'phone',
        },
        message: {
            isVisible: true,
            label: 'Message',
            isReq: true,
            classname: '',
            type: 'textarea',
        },
        streetAddress: {
            isVisible: true,
            label: 'Street Address',
            isReq: false,
            classname: '',
            type: 'text',
        },
        zipCode: {
            isVisible: true,
            label: 'Zip Code',
            isReq: false,
            classname: '',
            type: 'number',
        },
        city: {
            isVisible: true,
            label: 'City',
            isReq: false,
            classname: '',
            type: 'text',
        },
        state: {
            isVisible: true,
            label: 'State',
            isReq: true,
            classname: '',
            type: 'text',
        },
    }

    return (
        <>
            <div className={styles.root}>
                <h3>Form Title</h3>

                <div className={styles.message}>
                    {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
                    {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
                    {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
                </div>

                <div className={styles.field}>
                    <label>
                        {formFieldsObj.firstName.label} {formFieldsObj.firstName.isReq && <span className={styles.req}>*</span>}
                    </label>
                    <input ref={(node) => (fName = node)} type="text" placeholder="First name" />
                </div>
                <div className={styles.field}>
                    <label>
                        {formFieldsObj.lastName.label} {formFieldsObj.lastName.isReq && <span className={styles.req}>*</span>}
                    </label>
                    <input ref={(node) => (lName = node)} type="text" placeholder="Last name" />
                </div>
                <div className={styles.field}>
                    <label>
                        {formFieldsObj.email.label} {formFieldsObj.email.isReq && <span className={styles.req}>*</span>}
                    </label>
                    <input ref={(node) => (email = node)} type="email" placeholder="Your email" />
                </div>
                <div className={styles.field}>
                    <label>
                        {formFieldsObj.phone.label} {formFieldsObj.phone.isReq && <span className={styles.req}>*</span>}
                    </label>
                    <input ref={(node) => (phone = node)} type="phone" placeholder="Your phone" />
                </div>
                <div className={styles.field}>
                    <label>Address {formFieldsObj.streetAddress.isReq && <span className={styles.req}>*</span>}</label>
                    <input ref={(node) => (street = node)} type="textarea" />
                    <span>Street Address</span>
                </div>
                <div className={styles.field}>
                    <input ref={(node) => (zip = node)} type="textarea" />
                    <span>{formFieldsObj.zipCode.label}</span>
                </div>
                <div className={styles.field}>
                    <input ref={(node) => (city = node)} type="textarea" />
                    <span>{formFieldsObj.city.label}</span>
                </div>
                <div className={styles.field}>
                    <input ref={(node) => (state = node)} type="textarea" />
                    <span>{formFieldsObj.state.label}</span>
                </div>
                <div className={styles.field}>
                    <label>
                        {formFieldsObj.message.label} {formFieldsObj.message.isReq && <span className={styles.req}>*</span>}
                    </label>
                    <input ref={(node) => (messagebox = node)} type="textarea" placeholder="Message" />
                </div>

                <button type="submit" className={styles.submit} onClick={submit}>
                    Send
                </button>
            </div>
        </>
    )
}

/* const ContactField = (props: any) => {
    const { type, label, placeholder, name, isReq, fieldType, inputRef } = props
    return (
        <div className={styles.field}>
            <label>
                {label} {isReq && <span className={styles.req}>*</span>}
            </label>
            {fieldType === 'input' && <input type={type} name={name} placeholder={placeholder} required={isReq || false} ref={inputRef}></input>}
            {fieldType === 'textarea' && <textarea name={name} placeholder={placeholder || ''} required={isReq || false} ref={inputRef}></textarea>}
        </div>
    )
} */

export default MailChimpForm

/* function onValidated(arg0: { EMAIL: any; NAME: any }) {
    throw new Error('Function not implemented.')
} */
