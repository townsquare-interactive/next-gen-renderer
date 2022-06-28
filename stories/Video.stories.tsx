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
/**Video file hosted on a video providing service*/
External.args = {
    ...Default.args,
}

export const Local = Template.bind({})
/** Video file in assets bucket*/
Local.args = {
    videoUrl: '/soccervid.mp4',
    modLayout: 'local',
}
