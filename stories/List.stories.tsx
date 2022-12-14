import { ComponentStory, ComponentMeta } from '@storybook/react'
import List from '../components/practice/List'
import { themeStyles } from 'storydefaults'
export default {
    /**
     * The is the list component.
     */
    title: 'Modules/List',
    component: List,
    argTypes: {
        textSize: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'radio' },
        },
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Plain = Template.bind({})
Plain.args = {
    headline: 'Hello',
    body: 'text goes here, text goes here, text goes here, text goes here, text goes here',
    themeStyles: themeStyles,
    textSize: 'md',
    border: false,
    align: 'left',
}

export const Large = Template.bind({})
Large.args = {
    ...Plain.args,
    textSize: 'lg',
}

export const Border = Template.bind({})
Border.args = {
    ...Large.args,
    border: true,
}

export const Image = Template.bind({})
Image.args = {
    ...Large.args,
    imageUrl: '/football-1.jpg',
}
export const ImageReverse = Template.bind({})
ImageReverse.args = {
    ...Image.args,
    reverse: true,
}
export const WithButton = Template.bind({})
WithButton.args = {
    ...Large.args,
    imageUrl: '/football-1.jpg',
    border: true,
    btnText: 'contact us',
    linkUrl: '/',
}
export const Card = Template.bind({})
Card.args = {
    ...Large.args,
    imageUrl: '/football-1.jpg',
    modLayout: 'card',
    btnText: 'contact us',
    linkUrl: '/',
}
export const CardReverse = Template.bind({})
CardReverse.args = {
    ...Card.args,
    imageUrl: '/football-1.jpg',
    reverse: true,
    btnText: 'contact us',
    linkUrl: '/',
}
