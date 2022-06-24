import { ComponentStory, ComponentMeta } from '@storybook/react'
import Video from '../components/Video'

export default {
    title: 'Modules/Video',
    component: Video,
} as ComponentMeta<typeof Video>

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />

const Default = Template.bind({})
Default.args = {
    videoUrl: 'https://youtu.be/cTCgU4Vz0rE',
    modLayout: 'ext',
}

export const External = Template.bind({})
External.args = {
    ...Default.args,
}

/* export const Local = Template.bind({})
Local.args = {
    videoUrl: 'https://youtu.be/cTCgU4Vz0rE',
    modLayout: 'ext',
} */
