'use client'
import { StoryFn, Meta } from '@storybook/react'
import ContainerHeader from '../components/ContainerHeader'
import { siteDataEx } from 'storydefaults'
import { HeaderOptions } from 'types'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')

//havel to add fontawesome since it is normally added outside of module
library.add(fas, fab, far)
export default {
    title: 'new-render/ContainerHeader',
    component: ContainerHeader,
} as Meta<typeof ContainerHeader>

const Template: StoryFn<typeof ContainerHeader> = (args) => (
    <>
        <ContainerHeader {...args} />
    </>
)

const Default = Template.bind({})
Default.args = {
    siteData: siteDataEx,
}

export const Plain = {
    render: Template,

    args: {
        ...Default.args,
    },
}

const headerOptions2: HeaderOptions = {
    //reverseHeaderLayout: true,
    //desktopBurgerNav: true,
    //reverseSocial: true,
    ctaBanner: [
        {
            label: 'Contact Us Today',
            btnType: 'btn_banner',
            link: '/article',
            window: 1,
            active: true,
            btnSize: 'btn_lg',
            icon: { iconModel: 'list-alt', iconPrefix: 'far' },
        },
    ],
    ctaBtns: [
        /* {
            label: 'Contact Us Today',
            btnType: 'btn_cta',
            link: '/article',
            window: 1,
            active: true,
            icon: { iconModel: 'list-alt', iconPrefix: 'far' },
            btnSize: 'btn_sm',
        }, */
        {
            label: 'btn next',
            btnType: 'btn_cta',
            link: '/test',
            //bgColor: 'orange',
            window: 1,
            active: true,
            btnSize: 'btn_sm',
        },
    ],
    /* textCta: [
        {
            text: 'Welcome',
        },
    ], */
}

export const CtaButtons = {
    render: Template,

    args: {
        ...Default.args,
        siteData: { ...siteDataEx, headerOptions: headerOptions2 },
    },
}

export const Hamburger = {
    render: Template,

    args: {
        ...Default.args,
        siteData: {
            ...siteDataEx,
            headerOptions: {
                desktopBurgerNav: true,
            },
        },
    },
}

export const ReverseSocial = {
    render: Template,

    args: {
        ...Default.args,
        siteData: {
            ...siteDataEx,
            headerOptions: {
                //reverseHeaderLayout: true,
                reverseSocial: true,
            },
        },
    },
}

export const ReverseLayout = {
    render: Template,

    args: {
        ...Default.args,
        siteData: {
            ...siteDataEx,
            headerOptions: {
                reverseHeaderLayout: true,
            },
        },
    },
}

export const ShowContactBox = {
    render: Template,

    args: {
        ...Default.args,
        siteData: {
            ...siteDataEx,
            contact: { ...siteDataEx.contact, showContactBox: true },
        },
    },
}
