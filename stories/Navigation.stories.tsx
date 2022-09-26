import { ComponentStory, ComponentMeta } from '@storybook/react'
import Navigation from '../components/Navigation'

export default {
    title: 'Modules/Navigation',
    component: Navigation,
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />

const Default = Template.bind({})
Default.args = {
    navCheck: false,
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
    navImage: '/football-1.jpg',
}
/* export const NotFixed = Template.bind({})
NotFixed.args = {
    ...Default.args,
    logoUrl: '/sports.png',
    navImage: '/football-1.jpg',
    navStyle: 'layout2',
} */
export const NoNavbarImage = Template.bind({})
NoNavbarImage.args = {
    ...Default.args,
    logoUrl: '/sports.png',
}

export const NoLogo = Template.bind({})
NoLogo.args = {
    ...Default.args,
    navImage: '/football-1.jpg',
}

/* export const Local = Template.bind({})
Local.args = {
    videoUrl: 'https://youtu.be/cTCgU4Vz0rE',
    modLayout: 'ext',
} */
