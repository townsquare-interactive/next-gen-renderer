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
            id: '6',
        },

        {
            name: 'Other',
            slug: '/',
            id: '7',
        },
    ],
    logoUrl: '/sports.png',
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
    navImage: 'football-1.jpg',
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
}

/* export const Local = Template.bind({})
Local.args = {
    videoUrl: 'https://youtu.be/cTCgU4Vz0rE',
    modLayout: 'ext',
} */
