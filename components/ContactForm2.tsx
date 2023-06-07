//react slider
//'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//import { useEffect, useState, useRef, ReactElement } from 'react'
import { CarouselProps } from 'types'
import styles from './contactform.module.scss'
import cn from 'classnames'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import axios from 'axios'
import { subscribeMailChimp } from '../functions'
import { createPost } from './createPost'
//import {createPost} from 'functions'

/* async function createPost(data: any) {
    'use server'
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    //const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `apikey ${API_KEY}`,
    }

    const title = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const phone = data.get('phone')
    console.log(title, email, message, phone)

    try {
        const minData = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: title,
                LNAME: '',
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
                MESSAGE: message,
            },
        }
         await fetch(url, {
            headers: headers,
            method: 'POST',
            //body: JSON.stringify({ email_address: email }),
            body: JSON.stringify(minData),
        }) 

       //  await subscribeMailChimp(url, headers, minData) 
    } catch (error) {
        console.log(error)
    }
} */

const ContactForm = () => {
    const formFields = [
        {
            name: 'name',
            placeholder: 'Enter Name',
            type: 'text',
            label: 'Name',
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
            isReq: true,
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
    ]

    return (
        <>
            <div className={styles.root}>
                <h3>Form Title</h3>
                {/*  <form
                    //have to show this for action to work but getting TS error
                    action={createPost}
                >
                    {formFields.map((field, index) => (
                        <ContactField
                            fieldType={field.fieldType}
                            name={field.name}
                            isReq={field.isReq}
                            key={index}
                            label={field.label}
                            isVisible={field.isVisible}
                        />
                    ))}

                    <button
                        type="submit"
                        className={styles.submit}
                        //onClick={submit}
                    >
                        Send
                    </button>
                </form> */}
            </div>
        </>
    )
}

const ContactField = (props: any) => {
    const { type, label, placeholder, name, isReq, fieldType } = props
    return (
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
                    //ref={inputRef}
                ></input>
            )}
            {fieldType === 'textarea' && (
                <textarea
                    name={name}
                    placeholder={placeholder || ''}
                    required={isReq || false}
                    //</div>ref={inputRef}
                ></textarea>
            )}
        </div>
    )
}

export default ContactForm
