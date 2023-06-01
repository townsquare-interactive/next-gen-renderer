//react slider
'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState, useRef, ReactElement } from 'react'
import { CarouselProps } from 'types'
import styles from './contactform.module.scss'
import cn from 'classnames'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import axios from 'axios'
//import {createPost} from 'functions'

const MonkeyForm = (props: any) => {
    const url = 'https://townsquaredigital.us21.list-manage.com/subscribe/post?u=fa78ea8aea738cf2c98bcf7c4&amp;id=d0b2dd1631&amp;f_id=003a55e1f0'
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

    const submit = () =>
        email &&
        fName &&
        lName &&
        phone &&
        messagebox &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
            FNAME: fName.value,
            LNAME: lName.value,
            MESSAGE: messagebox.value,
            PHONE: phone.value,
            /*  merge_fields: {
                FNAME: fName.value,
                PHONE: phone.value,
                MESSAGE: messagebox.value,
                //MESSAGE: messagebox.value,
                //LNAME: 'mcgee',
                              ADDRESS: {
                    addr1: 'sdf',
                    addr2: 'sdf',
                    city: 'dsf',
                    state: 'sdf',
                    zip: '28204',
                    country: 'US',
                }, 
                //PHONE: '4444444444',
                //BIRTHDAY: '12/29/1940',
            },*/
        })

    const nameRef = useRef(null)
    const emailRef = useRef(null)

    /* const subscribeUser = async (e) => {
        e.preventDefault()

        const res = await fetch('/api/subscribeuser', {
            body: JSON.stringify({
                email: emailRef.current.value,
                name: nameRef.current.value,
            }),

            headers: {
                'Content-Type': 'application/json',
            },

            method: 'POST',
        })
    } */
    /*     const subscribeUser = async (e: any) => {
        e.preventDefault()

        try {
            const response = await axios.post('/api/addcontact', { email })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    } */

    const formFields = [
        {
            name: 'name',
            placeholder: 'Enter Name',
            type: 'text',
            label: 'Name',
            isReq: true,
            fieldType: 'input',
        },
        {
            name: 'company',
            // placeholder:'Enter Company Name',
            type: 'text',
            label: 'Company Name',
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
            isReq: true,
            fieldType: 'input',
        },
        {
            label: 'Message',
            name: 'message',
            isReq: true,
            fieldType: 'textarea',
        },
    ]

    return (
        <>
            {true ? (
                <div className={styles.root}>
                    <h3>Form Title</h3>
                    {/*  <form
                    //onSubmit={subscribeUser}
                    //action={createPost}
                    >
                                          {formFields.map((field, index) => (
                        <ContactField label={field.label} name={field.name} isReq={field.isReq} type={field.type} fieldType={field.fieldType} key={index} />
                    ))} */}

                    {/* <ContactField
                            label={formFields[0].label}
                            name={formFields[0].name}
                            isReq={formFields[0].isReq}
                            type={formFields[0].type}
                            fieldType={formFields[0].fieldType}
                            inputRef={nameRef}
                        />

                        <ContactField
                            label={formFields[2].label}
                            name={formFields[2].name}
                            isReq={formFields[2].isReq}
                            type={formFields[2].type}
                            fieldType={formFields[2].fieldType}
                            inputRef={emailRef}
                            //onChange={(e: any) => setEmail(e.target.value)}
                        /> */}
                    {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
                    {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
                    {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
                    <input style={{ fontSize: '2em', padding: 5 }} ref={(node) => (fName = node)} type="text" placeholder="First name" />
                    <input style={{ fontSize: '2em', padding: 5 }} ref={(node) => (lName = node)} type="text" placeholder="Last name" />
                    <br />
                    <input style={{ fontSize: '2em', padding: 5 }} ref={(node) => (email = node)} type="email" placeholder="Your email" />
                    <input style={{ fontSize: '2em', padding: 5 }} ref={(node) => (phone = node)} type="phone" placeholder="Your phone" />
                    <input style={{ fontSize: '2em', padding: 5 }} ref={(node) => (messagebox = node)} type="textarea" placeholder="Message" />

                    <button type="submit" className={styles.submit} onClick={submit}>
                        Send
                    </button>

                    {/*  </form> */}
                </div>
            ) : (
                <div
                    style={{
                        background: '#efefef',
                        borderRadius: 2,
                        padding: 10,
                        display: 'inline-block',
                    }}
                >
                    {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
                    {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
                    {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
                    <input style={{ fontSize: '2em', padding: 5 }} ref={(node) => (fName = node)} type="text" placeholder="Your name" />
                    <br />
                    <input style={{ fontSize: '2em', padding: 5 }} ref={(node) => (email = node)} type="email" placeholder="Your email" />
                    <br />
                    <button style={{ fontSize: '2em', padding: 5 }} onClick={submit}>
                        Submit
                    </button>
                </div>
            )}
        </>
    )
}

const ContactField = (props: any) => {
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
}

/* const MailForm = (props: any) => {
    const url = 'https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e'
    return (
        <div>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => <ContactForm status={status} message={message} onValidated={(formData:any) => subscribe(formData)} />}
            />
        </div>
    )
}
 */
export default MonkeyForm

function onValidated(arg0: { EMAIL: any; NAME: any }) {
    throw new Error('Function not implemented.')
}
/* function onValidated(arg0: { EMAIL: any; NAME: any }) {
    throw new Error('Function not implemented.')
}
 */
