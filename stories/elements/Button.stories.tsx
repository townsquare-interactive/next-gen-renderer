import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../../components/practice/Button'
import { themeStyles } from 'storydefaults'

export default {
    title: 'Elements/Button',
    component: Button,
    argTypes: {
        btnType: {
            options: ['normal', 'accent', 'alt', 'alt2', 'accent2'],
            control: { type: 'radio' },
        },
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Plain = Template.bind({})
Plain.args = {
    text: 'CONTACT',
    btnType: 'normal',
    linkUrl: '/',
    themeStyles: themeStyles,
}

export const Accent = Template.bind({})
Accent.args = {
    ...Plain.args,
    btnType: 'accent',
}

export const Alt = Template.bind({})
Alt.args = {
    ...Plain.args,
    btnType: 'alt',
}
export const Alt2 = Template.bind({})
Alt2.args = {
    ...Plain.args,
    btnType: 'alt2',
}
export const Accent2 = Template.bind({})
Accent2.args = {
    ...Plain.args,
    btnType: 'accent2',
}
