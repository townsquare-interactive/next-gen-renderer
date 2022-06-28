import { ComponentStory, ComponentMeta } from '@storybook/react'
import Images from '../components/Images'

export default {
    title: 'Modules/Images',
    component: Images,
    argTypes: {
        modLayout: {
            options: ['3-1/3', '3-2/3', '2-1/2', '2-2/3', '1-full', '1-hero'],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Images>

const Template: ComponentStory<typeof Images> = (args) => <Images {...args} />

export const ThreeTwoThirds = Template.bind({})
ThreeTwoThirds.args = {
    gap: true,
    modLayout: '3-2/3',

    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            linkText: 'Football',
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
    ...ThreeTwoThirds.args,
    modLayout: '3-1/3',
}

export const TwoTwoThird = Template.bind({})
TwoTwoThird.args = {
    ...ThreeTwoThirds.args,
    modLayout: '2-2/3',
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            linkText: 'Football',
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
    ...ThreeTwoThirds.args,
    modLayout: '1-full',
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
        },
    ],
}

export const HeroNoLink = Template.bind({})
HeroNoLink.args = {
    ...OneFull.args,
    modLayout: '1-hero',
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            headline: 'Football',
        },
    ],
}
export const HeroWithLink = Template.bind({})
HeroWithLink.args = {
    ...OneFull.args,
    modLayout: '1-hero',
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            headline: 'Football',
            linkUrl: '/destinations',
        },
    ],
}

export const NoLink = Template.bind({})
NoLink.args = {
    ...ThreeTwoThirds.args,
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

export const LinkNoText = Template.bind({})
LinkNoText.args = {
    ...ThreeTwoThirds.args,
    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            linkUrl: '/',
        },
        {
            imageUrl: '/football-3.jpg',
            altText: 'The Northern Lights in a snowy landscape',
            linkUrl: '/',
        },
        {
            imageUrl: '/football-4.jpg',
            altText: 'Man camping under the Northern Lights',
            linkUrl: '/',
        },
    ],
}

export const WithTextBox = Template.bind({})
WithTextBox.args = {
    gap: true,
    modLayout: '3-2/3',

    items: [
        {
            imageUrl: '/football-2.jpg',
            altText: 'Pond under the Northern Lights',
            linkText: 'Football',
            linkUrl: '/destinations',
            body: 'Guy holding football',
        },
        {
            imageUrl: '/football-3.jpg',
            altText: 'The Northern Lights in a snowy landscape',
            linkText: 'Leagues',
            linkUrl: '/media',
            body: 'Guy about to throw football',
        },
        {
            imageUrl: '/football-4.jpg',
            altText: 'Man camping under the Northern Lights',
            linkText: 'Reviews',
            linkUrl: '/reviews',
            body: 'Diving into the endzone for the touchdown',
        },
    ],
}
