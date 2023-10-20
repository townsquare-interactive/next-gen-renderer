'use client'
import { Fragment, useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute } from 'functions'
import { ContactFieldProps, ContactFormRoutesProps } from 'types'
import cn from 'classnames'
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import ModuleTitle from 'elements/ModuleTitle'
//import { Button } from 'elements/Button'

const Schema = z.object({
    fName: z.string(),
    lName: z.string(),
    email: z.string().includes('@'),
    phone: z.string().optional(),
    messagebox: z.string().min(2, 'Too Short!'),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
})

interface Values {
    fName: string
    messagebox: string
    email: string
    lName: string
    phone: string
    street: string
    zip: string
    city: string
    state: string
}

const ContactFormRoutes = (props: ContactFormRoutesProps) => {
    const { contactFormData, items, title, modType = 'page', siteData } = props
    const [formMessage, setFormMessage] = useState('')
    const [formSent, setFormSent] = useState(false)

    return (
        <>
            <div className={cn(styles.root, styles[`${modType}`])}>
                <div className={cn(styles.wrapper, 'txt-color')}>
                    {title && <ModuleTitle title={title} />}
                    {items.map((item, ind: number) => (
                        <Fragment key={ind}>
                            {item.plugin === '[gravity]' && (
                                <div className={styles.item}>
                                    {contactFormData.formTitle && modType != 'modal' && <h3 className={styles.title}>{contactFormData.formTitle}</h3>}
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
                                            <Formik
                                                initialValues={{
                                                    fName: '',
                                                    lName: '',
                                                    email: '',
                                                    phone: '',
                                                    messagebox: '',
                                                    street: '',
                                                    zip: '',
                                                    state: '',
                                                    city: '',
                                                }}
                                                validate={(values) => {
                                                    const errors: any = {}
                                                    /*                                                   if (!values.email) {
                                                        errors.email = 'Required'
                                                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                                        errors.email = 'Invalid email address'
                                                    } */
                                                    return errors
                                                }}
                                                validationSchema={toFormikValidationSchema(Schema)}
                                                onSubmit={async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                                                    const formData = {
                                                        fName: values.fName,
                                                        lName: values.lName,
                                                        phone: values.phone,
                                                        email: values.email,
                                                        messagebox: values.messagebox,
                                                        address: {
                                                            street: values.street,
                                                            zip: values.zip,
                                                            state: values.state,
                                                            city: values.city,
                                                        },
                                                        clientEmail: siteData.email,
                                                    }

                                                    setTimeout(async () => {
                                                        setFormMessage('Sending....')
                                                        await postContactFormRoute(`/api/contacts`, formData)
                                                        setFormMessage('Thank you for contacting us')
                                                        setFormSent(true)

                                                        setSubmitting(false)
                                                    }, 500)
                                                }}
                                            >
                                                <Form>
                                                    {contactFormData.formFields.map((field, index: number) => (
                                                        <ContactField {...field} key={index} />
                                                    ))}
                                                    <div className={styles['btn-block']}>
                                                        <button type="submit" className={styles.submit}>
                                                            Submit
                                                        </button>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </>
                                    )}
                                </div>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

const ContactField = (props: ContactFieldProps) => {
    const { label, placeholder, name, isReq, fieldType, isVisible, type, size = 'md' } = props

    return (
        <>
            {isVisible && (
                <div className={cn(styles.field, styles[`${size}`], {})}>
                    <label htmlFor={name}>
                        {label} {isReq && <span className={styles.req}>*</span>}
                    </label>

                    <span className={styles['field-err']}>
                        <ErrorMessage name={name} />
                    </span>

                    <Field id={name} name={name} required={true} as={fieldType ?? 'input'} placeholder={placeholder} type={type} />
                </div>
            )}
        </>
    )
}

export default ContactFormRoutes
