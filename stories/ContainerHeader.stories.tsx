'use client'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContainerHeader from '../components/ContainerHeader'
import { themeStyles, siteDataEx } from 'storydefaults'
import { social } from 'storydefaults'
import { HeaderOptions } from 'types'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import SlidingHeader from 'elements/SlidingHeader'
const { library } = require('@fortawesome/fontawesome-svg-core')

library.add(fas, fab, far)
export default {
    title: 'new-renderContainerHeader',
    component: ContainerHeader,
} as ComponentMeta<typeof ContainerHeader>

const Template: ComponentStory<typeof ContainerHeader> = (args) => (
    <>
        <ContainerHeader {...args} />
    </>
)

const Default = Template.bind({})
Default.args = {
    siteData: siteDataEx,
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
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

export const CtaButtons = Template.bind({})
CtaButtons.args = {
    ...Default.args,
    siteData: { ...siteDataEx, headerOptions: headerOptions2 },
}

export const Hamburger = Template.bind({})
Hamburger.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        headerOptions: {
            desktopBurgerNav: true,
        },
    },
}

export const ReverseSocial = Template.bind({})
ReverseSocial.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        headerOptions: {
            //reverseHeaderLayout: true,
            reverseSocial: true,
        },
    },
}

export const ReverseLayout = Template.bind({})
ReverseLayout.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        headerOptions: {
            reverseHeaderLayout: true,
        },
    },
}

export const ShowContactBox = Template.bind({})
ShowContactBox.args = {
    ...Default.args,
    siteData: {
        ...siteDataEx,
        contact: { ...siteDataEx.contact, showContactBox: true },
    },
}
