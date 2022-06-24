import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from '../components/Carousel'

export default {
    title: 'Modules/Carousel',
    component: Carousel,
    argTypes: {
        slideCount: {
            options: [1, 2, 3],
            control: { type: 'radio' },
        },
        modLayout: {
            options: ['images', 'text'],
            control: { type: 'radio' },
        },
        autoPlay: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />

const Default = Template.bind({})
Default.args = {
    autoPlay: true,
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
    items: [
        {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-1.jpg',
            byline: '-Rupert Tolson',
        },
        {
            text: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-3.jpg',
            byline: '-Jeff Grover',
        },
        {
            text: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-4.jpg',
            byline: '-Mark Ilten',
        },
        {
            text: ' proident, sunt in culpa qui officia deserunt mollit anim id est laborum. proident, sunt in culpa qui officia deserunt mollit anim id est laborum.proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imageUrl: '/football-5.jpg',
            byline: '-Sarah Patterson',
        },
    ],
}

export const Text = Template.bind({})
Text.args = {
    ...Default.args,
    modLayout: 'text',
    slideCount: 3,
}

export const OneImage = Template.bind({})
OneImage.args = {
    ...Default.args,
    modLayout: 'images',
    slideCount: 1,
    items: [
        {
            imageUrl: '/football-1.jpg',
        },
        {
            imageUrl: '/football-2.jpg',
        },
        {
            imageUrl: '/football-3.jpg',
        },
        {
            imageUrl: '/football-4.jpg',
        },
    ],
}

export const _2Images = Template.bind({})
_2Images.args = {
    ...OneImage.args,
    modLayout: 'images',
    slideCount: 2,
}

export const _3Images = Template.bind({})
_3Images.args = {
    ...OneImage.args,
    modLayout: 'images',
    slideCount: 3,
}
