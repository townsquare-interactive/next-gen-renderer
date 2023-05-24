'use client'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContainerFooter from '../components/ContainerFooter'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')
import { siteDataEx } from 'storydefaults'

library.add(fas, fab, far)
export default {
    title: 'new-render/ContainerFooter',
    component: ContainerFooter,
} as ComponentMeta<typeof ContainerFooter>

const Template: ComponentStory<typeof ContainerFooter> = (args) => <ContainerFooter {...args} />

const Default = Template.bind({})
Default.args = {
    siteData: siteDataEx,
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
}

export const Social = Template.bind({})
Social.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        composites: {
            footer: {
                type: 'composite',
                layout: null,
                columns: 3,
                modules: {
                    type: 'composite',
                    items: [
                        {
                            title: '',
                            component: 'social_media',
                        },
                    ],
                },
                sections: null,
            },
        },
    },
}

export const TextWidget = Template.bind({})
TextWidget.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        composites: {
            footer: {
                type: 'composite',
                layout: null,
                columns: 3,
                modules: {
                    type: 'composite',
                    items: [
                        {
                            text: 'dscc',
                            title: 'This is a footer text widget',
                            filter: false,
                            component: 'text',
                        },
                    ],
                },
                sections: null,
            },
        },
    },
}
export const Menu = Template.bind({})
Menu.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        composites: {
            footer: {
                type: 'composite',
                layout: null,
                columns: 4,
                modules: {
                    type: 'composite',
                    items: [
                        {
                            title: '',
                            component: 'nav_menu',
                            nav_menu: 62387,
                        },
                    ],
                },
                sections: null,
            },
        },
    },
}
export const MultiWidgets = Template.bind({})
MultiWidgets.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        composites: {
            footer: {
                type: 'composite',
                layout: null,
                columns: 4,
                modules: {
                    type: 'composite',
                    items: [
                        {
                            text: 'dscc',
                            title: 'This is a footer text widget',
                            filter: false,
                            component: 'text',
                        },
                        {
                            title: '',
                            component: 'social_media',
                        },
                        {
                            title: '',
                            component: 'nav_menu',
                            nav_menu: 62387,
                        },
                    ],
                },
                sections: null,
            },
        },
    },
}
