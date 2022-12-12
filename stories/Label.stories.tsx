import { ComponentStory, ComponentMeta } from '@storybook/react'
import Label from '../components/practice/Label'
import { themeStyles } from 'storydefaults'
export default {
    title: 'Modules/Label',
    component: Label,
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
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Plain = Template.bind({})
Plain.args = {
    text: 'text goes here',
    themeStyles: themeStyles,
    textSize: 'md',
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

export const BorderGap = Template.bind({})
BorderGap.args = {
    ...Border.args,
    align: 'center',
    gap: true,
}
