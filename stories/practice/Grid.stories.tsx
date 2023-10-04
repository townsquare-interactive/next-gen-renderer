import { ComponentStory, ComponentMeta } from '@storybook/react'
import Grid from '../../components/practice/Grid'
import { themeStyles } from '../../storydefaults'

export default {
    title: 'Practice/Grid',
    component: Grid,
    argTypes: {},
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

const Default = Template.bind({})
Default.args = {
    items: [
        {
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-1.jpg',
            headline: 'Headline',
            linkUrl: '/',
            btnText: 'contact us',
            themeStyles: themeStyles,
        },
        {
            body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-3.jpg',
            headline: 'Headline',
            linkUrl: '/',
            btnText: 'contact us',
            themeStyles: themeStyles,
        },
        {
            body: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imageUrl: '/football-4.jpg',
            headline: 'Headline',
            linkUrl: '/',
            btnText: 'contact us',
            themeStyles: themeStyles,
        },
    ],
    themeStyles: themeStyles,
}
