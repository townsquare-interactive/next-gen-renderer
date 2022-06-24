import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from '../components/Header'

export default {
    title: 'Modules/Header',
    component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

const Default = Template.bind({})
Default.args = {
    headline: 'Home',
    altText: 'Soccer stuff',
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
    imageUrl: '/soccer-3.jpg',
    backgroundImageUrl: '/seamless-5178982.png',
    reverse: false,
    modLayout: 'normal',
}

export const Reverse = Template.bind({})
Reverse.args = {
    ...Plain.args,
    reverse: true,
}
export const NoBgImage = Template.bind({})
NoBgImage.args = {
    ...Default.args,
    imageUrl: '/soccer-3.jpg',
}

export const NoImage = Template.bind({})
NoImage.args = {
    ...Default.args,
    backgroundImageUrl: '/seamless-5178982.png',
}
export const Layout2Mobile = Template.bind({})
Layout2Mobile.args = {
    ...Plain.args,
    modLayout: 'alt-layout',
}
