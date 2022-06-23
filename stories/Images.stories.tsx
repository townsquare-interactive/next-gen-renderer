import { ComponentStory, ComponentMeta } from '@storybook/react'
import Images from '../components/Images'

export default {
    title: 'Modules/Images',
    component: Images,
} as ComponentMeta<typeof Images>

const Template: ComponentStory<typeof Images> = (args) => <Images {...args} />

export const Plain = Template.bind({})
Plain.args = {
    gap: true,
    modLayout: '3-2/3',

    items: [
        {
            imageUrl: '/football-002.jpg',
            altText: 'Pond under the Northern Lights',
            linkText: 'Destinations',
            linkUrl: '/destinations',
        },
        {
            imageUrl: '/football-003.jpg',
            altText: 'The Northern Lights in a snowy landscape',
            linkText: 'Media',
            linkUrl: '/media',
        },
        {
            imageUrl: '/football-004.jpg',
            altText: 'Man camping under the Northern Lights',
            linkText: 'Reviews',
            linkUrl: '/reviews',
        },
    ],
}
