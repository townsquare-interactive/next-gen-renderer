import { StoryFn, Meta } from '@storybook/react'
import ContactFormRoutes from 'components/ContactFormRoutes'
import { ArticleItems } from '../types'
import { buttonList1, buttonList2, buttonListJust2, createStoryStyles, icon, itemStyle, imageSizes, img2, themeStyles, siteDataEx } from 'storydefaults'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')

library.add(fas, fab, far)

export default {
    title: 'new-render/Contact Form',
    component: ContactFormRoutes,
    argTypes: {
        siteData: {
            email: {
                control: { type: 'text' },
            },
            vcita: {
                businessId: {
                    control: { type: 'text' },
                },
            },
        },
    },
} as Meta<typeof ContactFormRoutes>

const Template: StoryFn<typeof ContactFormRoutes> = (args) => (
    <>
        <div>
            <h3>This is a visual render of the form only. The API route is not available to be used on Storybook so submitting will not work.</h3>
            <p>For the embed version try changing the embed field in the contactFormData prop to see how different embed codes render</p>
            {colorStyles && <style>{colorStyles}</style>}
            <ContactFormRoutes {...args} />
        </div>
    </>
)

const Default = Template.bind({})

const formProps: any = {
    id: '1af6a292-1c5a-49c2-bc16-0911b018d44c',
    uid: '1af6a292-1c5a-49c2-bc16-0911b018d44c',
    type: 'plugin',
    items: [
        {
            align: 'center',
            plugin: '[gravity]',
            gravity_id: 120853,
            gravity_show_title: 'false',
        },
    ],
    columns: 1,
    imgsize: 'no_sizing',
    blockSwitch1: 1,
    customClassName: '',
    contactFormData: {
        formTitle: 'Contact Us',
        formService: '',
        formEmbed: '',
        email: '',
        formFields: [
            {
                name: 'fName',
                placeholder: 'Enter Name',
                type: 'text',
                label: 'First Name',
                isReq: true,
                fieldType: 'input',
                isVisible: true,
                size: 'sm',
            },
            {
                name: 'lName',
                placeholder: 'Enter Name',
                type: 'text',
                label: 'Last Name',
                isReq: true,
                fieldType: 'input',
                isVisible: true,
                size: 'sm',
            },
            {
                name: 'phone',
                type: 'phone',
                label: 'Phone',
                isReq: false,
                fieldType: 'input',
                isVisible: true,
                size: 'lg',
            },
            {
                name: 'email',
                type: 'email',
                label: 'Email',
                isReq: true,
                fieldType: 'input',
                isVisible: true,
                size: 'lg',
            },
            {
                label: 'Message',
                name: 'messagebox',
                isReq: true,
                fieldType: 'textarea',
                isVisible: true,
                size: 'lg',
            },
        ],
        btnStyles: {
            btnStyle: 'round',
            btnType: 'btn_1 btn_p1',
        },
    },
    modId: '1af6a292-1c5a-49c2-bc16-0911b018d44c',
    modCount: 3,
    columnLocation: 0,
    isSingleColumn: false,
    themeStyles: themeStyles,
    cmsUrl: 'https://www.tacobell.com/',
    siteData: { ...siteDataEx, email: 'testemail05@gmail.com', siteType: 'landing' },
    pageModalVars: [],
}

Default.args = formProps

const colorStyles = createStoryStyles(themeStyles)

export const Plain = {
    render: Template,

    args: {
        ...Default.args,
    },
}

export const Embed = {
    render: Template,

    args: {
        ...Default.args,
        contactFormData: {
            formTitle: 'Embed Form',
            formService: '',
            formEmbed: `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfcPreoKL9A9oo7-6d2LXrKEjmRyhB-lOlRxTSD0lCiyIErnw/viewform?embedded=true" width="640" height="621" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`,
            email: '',
            formFields: [
                {
                    name: 'fName',
                    placeholder: 'Enter Name',
                    type: 'text',
                    label: 'First Name',
                    isReq: true,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'sm',
                },
                {
                    name: 'lName',
                    placeholder: 'Enter Name',
                    type: 'text',
                    label: 'Last Name',
                    isReq: true,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'sm',
                },
                {
                    name: 'phone',
                    type: 'phone',
                    label: 'Phone',
                    isReq: false,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'lg',
                },
                {
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    isReq: true,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'lg',
                },
                {
                    label: 'Message',
                    name: 'messagebox',
                    isReq: true,
                    fieldType: 'textarea',
                    isVisible: true,
                    size: 'lg',
                },
            ],
            btnStyles: {
                btnStyle: 'round',
                btnType: 'btn_1 btn_p1',
            },
        },
    },
}

export const BMP = {
    render: Template,

    args: {
        ...Default.args,
        contactFormData: {
            formTitle: 'BMP Form',
            formService: 'BMP',
            formEmbed: ``,
            email: '',
            formFields: [
                {
                    name: 'fName',
                    placeholder: 'Enter Name',
                    type: 'text',
                    label: 'First Name',
                    isReq: true,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'sm',
                },
                {
                    name: 'lName',
                    placeholder: 'Enter Name',
                    type: 'text',
                    label: 'Last Name',
                    isReq: true,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'sm',
                },
                {
                    name: 'phone',
                    type: 'phone',
                    label: 'Phone',
                    isReq: false,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'lg',
                },
                {
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    isReq: true,
                    fieldType: 'input',
                    isVisible: true,
                    size: 'lg',
                },
                {
                    label: 'Message',
                    name: 'messagebox',
                    isReq: true,
                    fieldType: 'textarea',
                    isVisible: true,
                    size: 'lg',
                },
            ],
            btnStyles: {
                btnStyle: 'round',
                btnType: 'btn_1 btn_p1',
            },
            siteData: { ...siteDataEx, formService: 'BMP', vcita: { businessId: 'd2g9nvoehntqdy39' } },
        },
    },
}
