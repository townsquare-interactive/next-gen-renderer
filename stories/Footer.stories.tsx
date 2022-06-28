import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from '../components/Footer'

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
    themeStyles: {
        mainColor: '#365070',
        textColor: 'rgb(46, 46, 46)',
        headingColor: 'rgb(46, 46, 46)',
        textColorAccent: '#fff',
        linkColor: 'rgb(230, 211, 65)',
        accentBackgroundColor: '#000',
        accentColor2: 'rgb(230, 211, 65)',
        altColor: 'rgb(230, 211, 65)',
        headerBackground: 'rgb(64,64,64)',
        footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
        navBackground: 'rgb(64,64,64,.9)',
    },
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
        },
        {
            name: 'Hockey',
            slug: '/hockey',
            id: '1',
        },
        {
            name: 'Football',
            slug: '/football',
            id: '2',
        },
        {
            name: 'Reviews',
            slug: '/reviews',
            id: '3',
        },
        {
            name: 'Contact',
            slug: '/contact',
            id: '5',
        },
        {
            name: 'Other',
            slug: '/',
            id: '6',
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
        },
        {
            name: 'Hockey',
            slug: '/hockey',
            id: '1',
        },
        {
            name: 'Football',
            slug: '/football',
            id: '2',
        },
        {
            name: 'Reviews',
            slug: '/reviews',
            id: '3',
        },
        {
            name: 'Contact',
            slug: '/contact',
            id: '5',
        },
        {
            name: 'Other',
            slug: '/',
            id: '6',
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
