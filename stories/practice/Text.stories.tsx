import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from '../../components/practice/Text'
import { themeStyles } from 'storydefaults'

export default {
    title: 'Practice/Text',
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
    themeStyles: themeStyles,
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
