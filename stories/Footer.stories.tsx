import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from '../components/Footer'
import { themeStyles } from 'storydefaults'

export default {
    title: 'Modules/Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

const Default = Template.bind({})
Default.args = {
    socialData: [
        {
            linkUrl: 'https://www.google.com/',
        },
        {
            linkUrl: 'https://www.facebook.com',
        },
        {
            linkUrl: 'https://www.instagram.com',
        },
        {
            linkUrl: 'https://www.twitter.com',
        },
    ],

    borderNum: 4,
    addressData: {
        street: '1849 Greenyard Lane',
        cityState: 'Burton, Kansas',
        zip: '47404',
    },
    siteName: 'EliteSports',
    phoneNumber: '913-452-2295',

    /* logoUrl: '/sports.png', */
    themeStyles: themeStyles,
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
    logoUrl: '/sports.png',
    pages: [
        {
            name: 'Home',
            slug: '/home',
            id: '0',
            page_type: '',
            url: '/home',
        },
        {
            name: 'Hockey',
            slug: '/hockey',
            url: '/hockey',
            id: '1',
            page_type: '',
        },
        {
            name: 'Football',
            slug: '/football',
            url: '/football',
            id: '2',
            page_type: '',
        },
        {
            name: 'Reviews',
            slug: '/reviews',
            url: '/reviews',
            id: '3',
            page_type: '',
        },

        {
            name: 'Contact',
            slug: '/contact',
            url: '/contact',
            id: '6',
            page_type: '',
        },

        {
            name: 'Other',
            slug: '/',
            url: '/',
            id: '7',
            page_type: '',
        },
    ],
}
export const NoLogo = Template.bind({})
NoLogo.args = {
    ...Default.args,
    pages: [
        {
            name: 'Home',
            slug: '/home',
            id: '0',
            page_type: '',
            url: '/home',
        },
        {
            name: 'Hockey',
            slug: '/hockey',
            url: '/hockey',
            id: '1',
            page_type: '',
        },
        {
            name: 'Football',
            slug: '/football',
            url: '/football',
            id: '2',
            page_type: '',
        },
        {
            name: 'Reviews',
            slug: '/reviews',
            url: '/reviews',
            id: '3',
            page_type: '',
        },

        {
            name: 'Contact',
            slug: '/contact',
            url: '/contact',
            id: '6',
            page_type: '',
        },

        {
            name: 'Other',
            slug: '/',
            url: '/',
            id: '7',
            page_type: '',
        },
    ],
}
export const NoNav = Template.bind({})
NoNav.args = {
    ...Default.args,
}

/* export const Local = Template.bind({})
Local.args = {
    videoUrl: 'https://youtu.be/cTCgU4Vz0rE',
    modLayout: 'ext',
} */
