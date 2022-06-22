import { ComponentStory, ComponentMeta } from '@storybook/react'
import Label from '../../components/Label'

export default {
  title: 'Modules/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Plain = Template.bind({})
Plain.args = {
  text: 'text goes here',
  border: false,
  gap: false,
  align: 'left',
  textSize: 'sm',
  themeStyles: {
    headingColor: '#000'
  }
}
