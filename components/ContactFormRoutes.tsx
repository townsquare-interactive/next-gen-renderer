'use client'
import { useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute } from 'functions'
import { ContactFieldProps, ContactFormRoutesProps } from 'types'
import cn from 'classnames'
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import * as Yup from 'yup'
import { convertDataToMailchimp } from 'services/contact-us-form/mailchimp'

const Schema = z.object({
    fName: z.string(),
    lName: z.string(),
    email: z.string().includes('@'),
    phone: z.string().optional(),
    messagebox: z.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
})

/* const SignupSchema = Yup.object().shape({
    fName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    messagebox: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    zip: Yup.number(),
    street: Yup.number(),
    city: Yup.number(),
    state: Yup.number(),
}) */

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
    const { contactFormData } = props
    const [formMessage, setFormMessage] = useState('')
    const [formSent, setFormSent] = useState(false)

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
                                if (!values.email) {
                                    errors.email = 'Required'
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address'
                                }
                                return errors
                            }}
                            validationSchema={toFormikValidationSchema(Schema)}
                            //validationSchema={SignupSchema}
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
                                }

                                setTimeout(async () => {
                                    setFormMessage('Sending....')
                                    console.log(convertDataToMailchimp(formData))
                                    await postContactFormRoute(`/api/contacts`, formData)
                                    setFormMessage('Thank you for contacting us')
                                    setFormSent(true)

                                    setSubmitting(false)
                                }, 500)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    {contactFormData.formFields.map((field, index: number) => (
                                        <ContactField
                                            fieldType={field.fieldType}
                                            name={field.name}
                                            isReq={field.isReq}
                                            key={index}
                                            // determineState={determineState}
                                            label={field.label}
                                            isVisible={field.isVisible}
                                            placeholder={field.placeholder}
                                            type={field.type}
                                        />
                                    ))}

                                    <button type="submit" className={styles.submit}>
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
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
                    <label htmlFor={name}>
                        {label} {isReq && <span className={styles.req}>*</span>}
                    </label>
                    <ErrorMessage name={name} />

                    <Field id={name} name={name} type={fieldType} required={isReq} />
                </div>
            )}
        </>
    )
}

export default ContactFormRoutes
