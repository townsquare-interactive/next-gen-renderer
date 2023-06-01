import { revalidatePath } from 'next/cache'

//https://stackoverflow.com/questions/57609135/post-request-to-mailchimp

/* const todos: string[] = ['Learn React']

export default function Home() {
    async function addTodo(data: FormData) {
        'use server'
        const todo = data.get('todo') as string
        todos.push(todo)
        revalidatePath('/')
    }

    return (
        <main className="p-5">
            <h1 className="text-4xl font-bold">Todos</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <form action={addTodo}>
                <input
                    type="text"
                    name="todo"
                    className="border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                    Add Todo
                </button>
            </form>
        </main>
    )
}
 */
//react slider
//'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//import { useEffect, useState, useRef, ReactElement } from 'react'
import { CarouselProps } from 'types'
import styles from '../../components/contactform.module.scss'
import cn from 'classnames'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import axios from 'axios'
//import {createPost} from 'functions'

/* const MonkeyForm = (props: any) => {
    const url = 'https://townsquaredigital.us21.list-manage.com/subscribe/post?u=fa78ea8aea738cf2c98bcf7c4&amp;id=d0b2dd1631&amp;f_id=003a55e1f0'
    return (
        <div>
            <h2>Custom Form</h2>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => <ContactForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />}
            />
        </div>
    )
} */

const ContactForm = ({ status, message, onValidated }: any) => {
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
        console.log(title, email)

       
        try {
            //const response = await axios.post(url, { title: title, email: email }, { headers })



            const theData = {
                id: 'sdfdsfsdfdsfdfsfsd',
                email_address: email,
                unique_email_id: '719333d333',
                contact_id: '54a0e6f32732422dc841979a',
                full_name: title,
                web_id: 272421415,
                email_type: 'html',
                status: 'subscribed',
                consents_to_one_to_one_messaging: true,
                merge_fields: {
                    FNAME: 'Mul',
                    LNAME: 'Edwas',
                    ADDRESS: {
                        addr1: '',
                        addr2: '',
                        city: '',
                        state: '',
                        zip: '',
                        country: 'US',
                    },
                    PHONE: '',
                    BIRTHDAY: '',
                    MESSAGE: 'Hi this is the message for my company',
                },
                stats: {
                    avg_open_rate: 0,
                    avg_click_rate: 0,
                },
                ip_signup: '',
                timestamp_signup: '',
                ip_opt: '76.244.18.171',
                timestamp_opt: '2023-05-30T18:32:54+00:00',
                member_rating: 2,
                last_changed: '2023-05-30T18:32:54+00:00',
                language: '',
                vip: false,
                email_client: '',
                location: {
                    latitude: 0,
                    longitude: 0,
                    gmtoff: 0,
                    dstoff: 0,
                    country_code: '',
                    timezone: '',
                    region: '',
                },
                source: 'Admin Add',
                tags_count: 0,
                tags: [],
                list_id: 'd0b2dd1631',
                _links: [
                    {
                        rel: 'self',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192',
                        method: 'GET',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json',
                    },
                    {
                        rel: 'parent',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members',
                        method: 'GET',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json',
                        schema: 'https://us21.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json',
                    },
                    {
                        rel: 'update',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192',
                        method: 'PATCH',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json',
                        schema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json',
                    },
                    {
                        rel: 'upsert',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192',
                        method: 'PUT',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json',
                        schema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json',
                    },
                    {
                        rel: 'delete',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192',
                        method: 'DELETE',
                    },
                    {
                        rel: 'activity',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192/activity',
                        method: 'GET',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json',
                    },
                    {
                        rel: 'goals',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192/goals',
                        method: 'GET',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json',
                    },
                    {
                        rel: 'notes',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192/notes',
                        method: 'GET',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json',
                    },
                    {
                        rel: 'events',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192/events',
                        method: 'POST',
                        targetSchema: 'https://us21.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json',
                    },
                    {
                        rel: 'delete_permanent',
                        href: 'https://us21.api.mailchimp.com/3.0/lists/d0b2dd1631/members/099bb71d82d801cde78ae9acce219192/actions/delete-permanent',
                        method: 'POST',
                    },
                ],
            }
            await fetch(url, {
                headers: headers,
                method: 'POST',
                //body: JSON.stringify({ email_address: email }),
                body: JSON.stringify(theData),
            })
        } catch (error) {
            console.log(error)
        }
    } */
    // const { settings, children, modItems, cmsUrl, imgsize = 'landscape_4_3', useThumbnail, modType } = props
    /* 
    const slider1 = useRef(null)
    const slider2 = useRef(null)
    const [nav1, setNav1] = useState<any>(null)
    const [nav2, setNav2] = useState<any>(null) */
    //const [emailAdded, setEmail] = useState('')

    /*     useEffect(() => {
        setNav1(slider1), setNav2(slider2)
    }, [])
 */

    //const nameRef = useRef(null)
    //const emailRef = useRef(null)

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
            <div className={styles.root}>
                <h3>Form Title</h3>
                {/* <form
                    //have to show this for action to work but getting TS error
                    //action={createPost}
                    >
                        

                        <ContactField
                            label={formFields[0].label}
                            name={formFields[0].name}
                            isReq={formFields[0].isReq}
                            type={formFields[0].type}
                            fieldType={formFields[0].fieldType}
                            //inputRef={nameRef}
                        />

                        <ContactField
                            label={formFields[2].label}
                            name={formFields[2].name}
                            isReq={formFields[2].isReq}
                            type={formFields[2].type}
                            fieldType={formFields[2].fieldType}
                            //inputRef={emailRef}
                            //onChange={(e: any) => setEmail(e.target.value)}
                        />

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
    const { type, label, placeholder, name, isReq, fieldType, inputRef } = props
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
export default ContactForm

/* function onValidated(arg0: { EMAIL: any; NAME: any }) {
    throw new Error('Function not implemented.')
} */
/* function onValidated(arg0: { EMAIL: any; NAME: any }) {
    throw new Error('Function not implemented.')
}
 */
