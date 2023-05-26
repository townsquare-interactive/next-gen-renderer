import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from '../../components/practice/Header'
import { themeStyles } from 'storydefaults'

export default {
    title: 'Practice/Header',
    component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

const Default = Template.bind({})
Default.args = {
    headline: 'Home',
    altText: 'Soccer stuff',
    themeStyles: themeStyles,
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
    imageUrl: '/soccer-3.jpg',

    reverse: false,
    modLayout: 'normal',
}
export const BackgroundTexture = Template.bind({})
BackgroundTexture.args = {
    ...Plain.args,
    backgroundImageUrl: '/seamless-5178982.png',
}

export const Reverse = Template.bind({})
Reverse.args = {
    ...Plain.args,
    reverse: true,
}

export const NoImage = Template.bind({})
NoImage.args = {
    ...Default.args,
}
export const Layout2Mobile = Template.bind({})
Layout2Mobile.args = {
    ...Plain.args,
    modLayout: 'alt-layout',
}
