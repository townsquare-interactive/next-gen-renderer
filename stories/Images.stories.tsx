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
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            linkText: 'Destinations',
            linkUrl: '/destinations',
        },
        {
            imageUrl: '/football-3.jpg',
            altText: 'The Northern Lights in a snowy landscape',
            linkText: 'Media',
            linkUrl: '/media',
        },
        {
            imageUrl: '/football-4.jpg',
            altText: 'Man camping under the Northern Lights',
            linkText: 'Reviews',
            linkUrl: '/reviews',
        },
    ],
}
export const ThreeOneThird = Template.bind({})
ThreeOneThird.args = {
    ...Plain.args,
    modLayout: '3-1/3',
}

export const TwoTwoThird = Template.bind({})
TwoTwoThird.args = {
    ...Plain.args,
    modLayout: '2-2/3',
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            linkText: 'Destinations',
            linkUrl: '/destinations',
        },
        {
            imageUrl: '/football-3.jpg',
            altText: 'The Northern Lights in a snowy landscape',
            linkText: 'Media',
            linkUrl: '/media',
        },
    ],
}

export const TwoOneHalf = Template.bind({})
TwoOneHalf.args = {
    ...TwoTwoThird.args,
    modLayout: '2-1/2',
}

export const OneFull = Template.bind({})
OneFull.args = {
    ...Plain.args,
    modLayout: '1-full',
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            linkText: 'Destinations',
            linkUrl: '/destinations',
        },
    ],
}

export const Hero = Template.bind({})
Hero.args = {
    ...OneFull.args,
    modLayout: '1-hero',
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            headline: 'Destinations',
            linkUrl: '/destinations',
        },
    ],
}

export const NoLink = Template.bind({})
NoLink.args = {
    ...Plain.args,
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
        },
        {
            imageUrl: '/football-3.jpg',
            altText: 'The Northern Lights in a snowy landscape',
        },
        {
            imageUrl: '/football-4.jpg',
            altText: 'Man camping under the Northern Lights',
        },
    ],
}
