import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from '../../components/Text'

export default {
  title: 'Modules/Text',
  component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Plain = Template.bind({})
Plain.args = {
  border: false,
  gap: false,
  align: 'left',
  textSize: 'sm',
  text: 'Travel and explore the great outdoors. See the big cities you never thought you\'d visit. And experience everything in between. Travel the world! "The best way to show a child just how far our earth can go is through walking." - Tom Cruise. Please come back tomorrow for more exciting adventure stories from around all over the globe!!!'
}

export const Quote = Template.bind({})
Quote.args = {
  ...Plain.args,
  border: true,
  textSize: 'md'
}
