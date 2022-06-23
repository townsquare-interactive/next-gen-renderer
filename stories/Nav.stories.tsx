import { ComponentStory, ComponentMeta } from '@storybook/react'
import Nav from '../components/Nav'

export default {
    title: 'Modules/Nav',
    component: Nav,
} as ComponentMeta<typeof Nav>

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />

export const Plain = Template.bind({})
Plain.args = {
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
}
