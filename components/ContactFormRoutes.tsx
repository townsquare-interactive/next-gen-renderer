'use client'
import { Fragment, useState } from 'react'
import styles from './contactform.module.scss'
import { postContactFormRoute, pushEventToDataLayer } from '../functions'
import { ContactFieldProps, ContactFormRoutesProps } from 'types'
import cn from 'classnames'
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import ModuleTitle from '../elements/ModuleTitle'
import Parser from 'html-react-parser'

const Schema = z.object({
    fName: z.string(),
    lName: z.string(),
    email: z.string().includes('@'),
    phone: z
        .string()
        .refine(
            (value) => {
                const phoneRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/
                return phoneRegex.test(value)
            },
            {
                message: 'Invalid phone number format',
            }
        )
        .optional(),
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

    const useEngage = siteData.vcita?.businessId ? true : false

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        pushEventToDataLayer('form_submit_click')
    }

    return (
        <>
            <div
                className={cn(styles.root, styles[`${modType}`], {
                    [styles.landing]: siteData.siteType === 'landing',
                })}
            >
                {contactFormData?.formEmbed ? (
                    <div className={styles['embed-form']}>
                        <h3 className={styles.title}>{contactFormData.formTitle || 'Contact Us'}</h3>
                        {Parser(contactFormData.formEmbed)}
                    </div>
                ) : (
                    <div className={cn(styles.wrapper, 'txt-color')}>
                        {title && <ModuleTitle title={title} />}
                        {contactFormData &&
                            items.map((item, ind: number) => (
                                <Fragment key={ind}>
                                    {item.plugin === '[gravity]' && (
                                        <div className={styles.item}>
                                            {contactFormData.formTitle && modType != 'modal' && !formSent && (
                                                <h3 className={styles.title}>{contactFormData.formTitle}</h3>
                                            )}
                                            <div className={styles['message-block']}>
                                                {formMessage && <div className={cn(styles.message)}>{formMessage}</div>}
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
                                                                try {
                                                                    if (!siteData.email && !useEngage) {
                                                                        throw new Error('No client email set up for this form')
                                                                    }
                                                                    if (useEngage && !values.fName) {
                                                                        throw new Error('First name is required')
                                                                    }

                                                                    setFormMessage('Sending....')
                                                                    setSubmitting(true)

                                                                    const formRoute = useEngage ? '/api/bmp-form' : `/api/contacts`

                                                                    const response = await postContactFormRoute(formRoute, {
                                                                        formData: formData,
                                                                        siteData: siteData,
                                                                    })

                                                                    if (!response.ok) {
                                                                        let errorMessage = `Status: ${response.status}, Reason: ${response.statusText}`
                                                                        try {
                                                                            const errorJson = await response.json()
                                                                            errorMessage = errorJson.error || errorJson.message || errorMessage
                                                                        } catch (jsonError) {
                                                                            console.error('Error parsing JSON:', jsonError)
                                                                        }
                                                                        throw new Error(errorMessage)
                                                                    }

                                                                    const result = await response.json()
                                                                    setFormMessage('Thank you for contacting us')
                                                                    setFormSent(true)
                                                                } catch (error: any) {
                                                                    setFormMessage(`Error: ${error.message || 'An error occurred'}`)
                                                                    setFormSent(false)
                                                                } finally {
                                                                    setSubmitting(false)
                                                                }
                                                            }, 500)
                                                        }}
                                                    >
                                                        <Form>
                                                            {contactFormData.formFields.map((field, index: number) => (
                                                                <ContactField {...field} key={index} />
                                                            ))}
                                                            <div className={styles['btn-block']}>
                                                                <button
                                                                    type="submit"
                                                                    className={cn(styles.submit, 'form-submit-btn', {
                                                                        ['landing-submit']: siteData.siteType === 'landing',
                                                                    })}
                                                                    onClick={handleClick}
                                                                >
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
                )}
            </div>
        </>
    )
}

const ContactField = (props: ContactFieldProps) => {
    const { label, placeholder, name, isReq, fieldType, isVisible, type = '', size = 'md' } = props

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

                    <Field id={name} name={name} required={isReq} as={fieldType ?? 'input'} placeholder={placeholder} type={type} />
                </div>
            )}
        </>
    )
}

export default ContactFormRoutes
