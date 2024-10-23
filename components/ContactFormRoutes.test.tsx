import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactFormRoutes from './ContactFormRoutes'
import { ContactField } from './ContactFormRoutes'
import { vi } from 'vitest'
import { it, describe, expect, afterEach } from 'vitest'
import { postContactFormRoute } from '../functions'
import { Form, Formik } from 'formik'

// Mock the postContactFormRoute function
vi.mock('../functions', async () => {
    const actual: any = await vi.importActual('../functions')
    return {
        ...actual,
        postContactFormRoute: vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({}),
        }),
    }
})

const mockedPostContactFormRoute = vi.mocked(postContactFormRoute)

const label1 = { label: 'First Name', placeholder: 'First Name', name: 'fName', isReq: true, fieldType: 'input', isVisible: true }

const siteData = {
    logos: {
        footer: {
            pct: 100,
            slots: [],
            activeSlots: [0],
        },
        header: {
            pct: 100,
            slots: [
                {
                    show: 1,
                    type: 'image',
                    markup: '',
                    hasLinks: false,
                    alignment: 'center',
                    image_src: 'https://images.getbento.com/accounts/22022076ca31682d32e6a3253b8e9e7c/media/images/75474fed-pig-yellow.png',
                    image_link: '/',
                },
                {
                    show: 0,
                    type: 'text',
                    markup: '',
                    hasLinks: false,
                    alignment: 'left',
                    image_src: '',
                    image_link: '/',
                },
                {
                    show: 0,
                    type: 'text',
                    markup: '',
                    hasLinks: false,
                    alignment: 'left',
                    image_src: '',
                    image_link: '/',
                },
            ],
            activeSlots: [0],
        },
        mobile: {
            pct: 100,
            slots: [],
            activeSlots: [0],
        },
    },
    social: [],
    contact: {
        email: [
            {
                name: '',
                email: '',
                disabled: '',
                isPrimaryEmail: false,
            },
        ],
        phone: [
            {
                name: 'Phone',
                number: '923493439',
                disabled: '',
                isPrimaryPhone: true,
            },
        ],
        displayInFooter: true,
        selectedPrimaryEmailLabel: '',
        selectedPrimaryPhoneLabel: 'Phone',
        selectedPrimaryPhoneNumber: '923493439',
        selectedPrimaryEmailAddress: 'jedwards404@gmail.com',
        showContactBox: false,
    },
    siteName: 'Federalist Pig',
    phoneNumber: '923493439',
    email: 'jedwards404@gmail.com',
    url: 'https://www.bmptestsite.com/',
    cmsNav: [
        {
            ID: 862283,
            menu_list_id: 77555,
            title: 'Home',
            post_type: 'nav_menu_item',
            type: 'post_type',
            menu_item_parent: 0,
            object_id: 774341,
            object: 'page',
            target: '',
            classes: null,
            menu_order: 1,
            mi_url: null,
            url: '/',
            submenu: [],
            slug: 'home',
        },
    ],
    seo: {
        global: {
            aiosp_home_title: 'Top HVAC and Plumbing Services',
            aiosp_home_description: 'Expert HVAC and Plumbing Services for Reliable Home Comfort Solutions',
            aiosp_google_verify: '[google_verify]',
        },
    },
    cmsColors: {
        logoColor: '#444444',
        headingColor: '#092150',
        subHeadingColor: '#092150',
        textColor: '#444444',
        linkColor: '#db1a21',
        linkHover: '#db1a21',
        btnText: '#ffffff',
        btnBackground: '#db1a21',
        textColorAccent: '#ffffff',
        heroSubheadline: '#ffffff',
        heroText: '#ffffff',
        heroBtnText: '#ffffff',
        heroBtnBackground: '#444444',
        heroLink: '#DDDDDD',
        heroLinkHover: '#dddddd',
        captionText: '#ffffff',
        captionBackground: 'rgba(0,0,0,0.4)',
        NavText: '#666666',
        navHover: '#db1a21',
        navCurrent: '#db1a21',
        backgroundMain: '#ffffff',
        bckdContent: 'rgba(255,255,255,1)',
        headerBackground: '#000000',
        BckdHeaderSocial: '#ffffff',
        accentBackgroundColor: '#092150',
        backgroundHero: '#092150',
        footerBackground: '#2E3A45',
        footerText: '#F1F1F1',
        footerTextOverride: '#F1F1F1',
        footerLink: '#7fa7b8',
        promoText: '#ffffff',
        promoColor: '#db1a21',
        promoColor2: '#092150',
        promoColor3: '#7fa7b8',
        promoColor4: '#092150',
        promoColor5: '#f2f6fc',
        promoColor6: '#092150',
    },
    theme: 'beacon-theme_charlotte',
    cmsUrl: 'https://www.bmptestsite.com/',
    s3Folder: 'bmptestsite',
    favicon: '',
    fontImport:
        '@import url(https://fonts.googleapis.com/css?family=Oswald:400,700|Open+Sans:400,700,400italic,700italic|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap);',
    publishedDomains: ['bmptestsite.vercel.app'],
    config: {
        zapierUrl: '',
        makeUrl: 'https://hook.us1.make.com/5ag2mwfm3rynjgumcjgu76wseppexe3s',
    },
    styles: {
        global: '',
        custom: '',
    },
    headerOptions: {
        ctaBtns: [
            {
                label: 'CONTACT US',
                link: 'tel:923493439',
                active: true,
                opensModal: -1,
                window: 0,
                btnType: 'btn_cta_landing',
                btnSize: 'btn_md',
                googleIcon: "<span class='material-symbols-outlined call cta-icon'>phone_android</span>",
                icon: {
                    iconPrefix: 'fas',
                    iconModel: 'mobile-screen',
                },
                action: 'ls-contact',
            },
            {
                link: 'tel:923493439',
                active: true,
                opensModal: -1,
                window: 1,
                btnType: 'btn_cta_landing',
                btnSize: 'btn_md',
                googleIcon: "<span class='material-symbols-outlined cta-icon'>calendar_clock</span>",
                action: 'ls-schedule',
                icon: {
                    iconPrefix: 'far',
                    iconModel: 'calendar',
                },
                label: 'Schedule NOW',
            },
        ],
        hideNav: true,
        hideSocial: true,
        mobileHeaderBtns: [
            {
                label: 'CONTACT',
                link: 'tel:923493439',
                active: true,
                opensModal: -1,
                window: 0,
                btnType: 'btn_cta_landing',
                btnSize: 'btn_md',
                googleIcon: "<span class='material-symbols-outlined call cta-icon'>phone_android</span>",
                icon: {
                    iconPrefix: 'fas',
                    iconModel: 'mobile-screen',
                },
                action: 'ls-contact',
            },
            {
                link: 'tel:923493439',
                active: true,
                opensModal: -1,
                window: 1,
                btnType: 'btn_cta_landing',
                btnSize: 'btn_md',
                googleIcon: "<span class='material-symbols-outlined cta-icon'>calendar_clock</span>",
                action: 'ls-schedule',
                icon: {
                    iconPrefix: 'far',
                    iconModel: 'calendar',
                },
                label: 'Schedule',
            },
        ],
    },
    siteType: 'landing',
    customComponents: [
        {
            type: 'Engage',
            apiKey: 'fake',
        },
    ],
    vcita: {
        businessId: 'fake',
        actions: [
            {
                name: 'schedule',
                text: 'Schedule Now',
                href: 'https://tstest.myclients.io/site/9mov7u02gx2b57pf/action/w4h7zch15hst5825?mode=embed',
                target: '',
                dataOrigin: 'livesite_menu',
                class: 'livesite-schedule',
            },
            {
                name: 'contact',
                text: 'Get in touch',
                href: 'https://tstest.myclients.io/site/9mov7u02gx2b57pf/action/195y3g4o90w7gk0x?mode:embed',
                target: '',
                dataOrigin: 'livesite_menu',
                dataOptions: 'title:Contact Request;message:',
            },
        ],
        themeStyles: {
            logoColor: '#444444',
            headingColor: '#092150',
            subHeadingColor: '#092150',
            textColor: '#444444',
            linkColor: '#db1a21',
            linkHover: '#db1a21',
            btnText: '#ffffff',
            btnBackground: '#db1a21',
            textColorAccent: '#ffffff',
            heroSubheadline: '#ffffff',
            heroText: '#ffffff',
            heroBtnText: '#ffffff',
            heroBtnBackground: '#444444',
            heroLink: '#DDDDDD',
            heroLinkHover: '#dddddd',
            captionText: '#ffffff',
            captionBackground: 'rgba(0,0,0,0.4)',
            NavText: '#666666',
            navHover: '#db1a21',
            navCurrent: '#db1a21',
            backgroundMain: '#ffffff',
            bckdContent: 'rgba(255,255,255,1)',
            headerBackground: '#000000',
            BckdHeaderSocial: '#ffffff',
            accentBackgroundColor: '#092150',
            backgroundHero: '#092150',
            footerBackground: '#2E3A45',
            footerText: '#F1F1F1',
            footerTextOverride: '#F1F1F1',
            footerLink: '#7fa7b8',
            promoText: '#ffffff',
            promoColor: '#db1a21',
            promoColor2: '#092150',
            promoColor3: '#7fa7b8',
            promoColor4: '#092150',
            promoColor5: '#f2f6fc',
            promoColor6: '#092150',
        },
    },
}

afterEach(() => {
    cleanup()
})

describe('ContactFormRoutes', () => {
    const itemExample = {
        align: 'center',
        plugin: '[gravity]',
        id: '12',
        isPlugin: '1',
        disabled: '',
        isFeatured: false,
        bkgrd_color: '',
        headerTag: '',
        buttonList: [],
    }

    it('renders the form correctly', () => {
        const contactFormData = {
            formEmbed: '',
            formTitle: 'Contact Us',
            formFields: [
                label1,
                { label: 'Last Name', placeholder: 'Last Name', name: 'lName', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Email', placeholder: 'Email', name: 'email', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Message', placeholder: 'Message', name: 'messagebox', isReq: true, fieldType: 'textarea', isVisible: true },
            ],
        }
        render(<ContactFormRoutes contactFormData={contactFormData} items={[itemExample]} title="" modType="page" siteData={siteData} />)

        expect(screen.getByText('First Name')).toBeInTheDocument()
        expect(screen.getByText('Last Name')).toBeInTheDocument()
        expect(screen.getByText('Email')).toBeInTheDocument()
        expect(screen.getByText('Message')).toBeInTheDocument()
        expect(screen.getByText('Contact Us')).toBeInTheDocument() //formtitle
    })

    it('submits the form successfully', async () => {
        const contactFormData = {
            formEmbed: '',
            formTitle: 'Contact Us',
            formFields: [
                label1,
                { label: 'Last Name', placeholder: 'Last Name', name: 'lName', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Email', placeholder: 'Email', name: 'email', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Message', placeholder: 'Message', name: 'messagebox', isReq: true, fieldType: 'textarea', isVisible: true },
            ],
        }
        render(<ContactFormRoutes contactFormData={contactFormData} items={[itemExample]} title="Contact Us" modType="page" siteData={siteData} />)

        fireEvent.change(screen.getByRole('textbox', { name: /First Name/i }), { target: { value: 'John' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Last Name/i }), { target: { value: 'Doe' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Email/i }), { target: { value: 'john.doe@example.com' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Message/i }), { target: { value: 'Hello, this is a test message.' } })

        fireEvent.click(screen.getByText('Submit'))

        await waitFor(() => {
            expect(mockedPostContactFormRoute).toHaveBeenCalledTimes(1)
            expect(screen.getByText('Thank you for contacting us')).toBeInTheDocument()
        })
    })

    it('handles form submission error', async () => {
        const contactFormData = {
            formEmbed: '',
            formTitle: 'Contact Us',
            formFields: [
                label1,
                { label: 'Last Name', placeholder: 'Last Name', name: 'lName', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Email', placeholder: 'Email', name: 'email', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Message', placeholder: 'Message', name: 'messagebox', isReq: true, fieldType: 'textarea', isVisible: true },
            ],
        }
        mockedPostContactFormRoute.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ error: 'Submission failed' }), //set it so submission fails to test error
            headers: new Headers(),
            redirected: false,
            status: 400,
            statusText: 'Bad Request',
            type: 'basic',
            url: '',
            clone: function () {
                return this
            },
            body: null,
            bodyUsed: false,
            arrayBuffer: async () => new ArrayBuffer(0),
            blob: async () => new Blob(),
            formData: async () => new FormData(),
            text: async () => '',
        })

        render(<ContactFormRoutes contactFormData={contactFormData} items={[itemExample]} title="Contact Us" modType="page" siteData={siteData} />)

        fireEvent.change(screen.getByRole('textbox', { name: /First Name/i }), { target: { value: 'John' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Last Name/i }), { target: { value: 'Doe' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Email/i }), { target: { value: 'john.doe@example.com' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Message/i }), { target: { value: 'Hello, this is a test message.' } })

        fireEvent.click(screen.getByText('Submit'))

        await waitFor(() => {
            expect(screen.getByText('Error: Submission failed')).toBeInTheDocument()
        })
    })

    it('throws error when engage is not in use and no client email is found', async () => {
        //set email and vcita to null to cause error
        const siteData2 = { ...siteData, email: '', vcita: null }
        const contactFormData = {
            formEmbed: '',
            formTitle: 'Contact Us',
            formFields: [
                label1,
                { label: 'Last Name', placeholder: 'Last Name', name: 'lName', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Email', placeholder: 'Email', name: 'email', isReq: true, fieldType: 'input', isVisible: true },
                { label: 'Message', placeholder: 'Message', name: 'messagebox', isReq: true, fieldType: 'textarea', isVisible: true },
            ],
        }

        render(<ContactFormRoutes contactFormData={contactFormData} items={[itemExample]} title="Contact Us" modType="page" siteData={siteData2} />)

        fireEvent.change(screen.getByRole('textbox', { name: /First Name/i }), { target: { value: 'John' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Last Name/i }), { target: { value: 'Doe' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Email/i }), { target: { value: 'john.doe@example.com' } })
        fireEvent.change(screen.getByRole('textbox', { name: /Message/i }), { target: { value: 'Hello, this is a test message.' } })

        fireEvent.click(screen.getByText('Submit'))

        await waitFor(() => {
            expect(screen.getByText('Error: No client email set up for this form')).toBeInTheDocument()
        })
    })
})

describe('ContactField', () => {
    const fieldEx = { label: 'First Name', placeholder: 'First Name', name: 'fName', isReq: true, fieldType: 'input', isVisible: true }

    //set for formik
    const initValues = {
        fName: '',
        lName: '',
        email: '',
        phone: '',
        messagebox: '',
        street: '',
        zip: '',
        state: '',
        city: '',
    }

    //have to wrap with Formik so that the formik components inside render correctly
    it('renders the required field correctly', () => {
        render(
            <Formik initialValues={initValues} onSubmit={() => console.log('form submitted')}>
                <Form>
                    <ContactField {...fieldEx} />{' '}
                </Form>
            </Formik>
        )

        expect(screen.getByText('First Name')).toBeInTheDocument()
        expect(screen.getByText('*')).toBeInTheDocument()
    })
    it('renders multiple fields correctly', () => {
        render(
            <Formik initialValues={initValues} onSubmit={() => console.log('form submitted')}>
                <Form>
                    <ContactField {...fieldEx} />
                    <ContactField {...{ ...fieldEx, label: 'Last Name' }} />
                    <ContactField {...{ ...fieldEx, label: 'Email' }} />
                    <ContactField {...{ ...fieldEx, label: 'Message' }} />
                </Form>
            </Formik>
        )

        expect(screen.getByText('First Name')).toBeInTheDocument()
        expect(screen.getByText('Last Name')).toBeInTheDocument()
        expect(screen.getByText('Email')).toBeInTheDocument()
        expect(screen.getByText('Message')).toBeInTheDocument()
    })
    it('renders the non required field correctly', () => {
        render(
            <Formik initialValues={initValues} onSubmit={() => console.log('form submitted')}>
                <Form>
                    <ContactField {...{ ...fieldEx, isReq: false }} />
                </Form>
            </Formik>
        )

        expect(screen.getByText('First Name')).toBeInTheDocument()
        expect(screen.queryByText('*')).not.toBeInTheDocument()
    })
})
