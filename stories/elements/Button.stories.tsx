import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../../elements/Button'

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
