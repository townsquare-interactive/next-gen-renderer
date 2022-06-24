import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from '../components/Text'

export default {
    title: 'Modules/Text',
    component: Text,
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
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Plain = Template.bind({})
Plain.args = {
    text: 'hello',
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
    textSize: 'md',
}

export const Large = Template.bind({})
Large.args = {
    ...Plain.args,
    textSize: 'lg',
}

export const Right = Template.bind({})
Right.args = {
    ...Large.args,
    align: 'right',
}

export const Center = Template.bind({})
Center.args = {
    ...Large.args,
    align: 'center',
}

export const Border = Template.bind({})
Border.args = {
    ...Center.args,
    border: true,
}
