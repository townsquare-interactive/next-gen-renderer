import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContainerHeader from '../components/ContainerHeader'
import { themeStyles } from 'storydefaults'
import { social } from 'storydefaults'

export default {
    title: 'New/ContainerHeader',
    component: ContainerHeader,
} as ComponentMeta<typeof ContainerHeader>

const Template: ComponentStory<typeof ContainerHeader> = (args) => <ContainerHeader {...args} />

const Default = Template.bind({})
Default.args = {
    pages: [
        {
            name: 'Test Page',
            slug: 'test-page',
            url: '/test-page/',
            id: '924',
            page_type: 'blank',
        },
        {
            name: 'Article v1 Permutations',
            slug: 'article-v1-permutations',
            url: '/article-v1-permutations/',
            id: '935',
            page_type: 'blank',
        },
        {
            name: 'New Page',
            slug: 'new-page',
            url: '/new-page/',
            id: '950',
            page_type: 'blank',
        },
        {
            name: 'Home',
            slug: 'home',
            url: '/home/',
            id: '839',
            page_type: 'homepage',
        },
        {
            name: 'Colors',
            slug: 'colors',
            url: '/colors/',
            id: '907',
            page_type: 'blank',
        },
    ],
    themeStyles: themeStyles,

    siteData: {
        themeStyles: themeStyles,
        cmsUrl: 'clt.com',

        logos: { show: 1, type: 'image', markup: '', hasLinks: false, alignment: 'center', image_src: '/files/2022/09/Yos2.jpg', image_link: '/' },
        mobileLogos: {
            show: 1,
            type: 'image',
            markup: '',
            hasLinks: false,
            alignment: 'left',
            image_src: '/files/2022/07/jremodeling-logo.png',
            image_link: '/',
        },
        social: social,
        contact: {
            phone: {
                name: 'Phone',
                number: '(919) 540-0390',
                disabled: '',
                isPrimaryPhone: true,
            },
            email: {
                name: 'Email',
                email: 'email@email.com',
                disabled: '',
                isPrimaryEmail: true,
            },
            icons: {
                phone: ['fas', 'phone'],
                email: ['fas', 'envelope'],
                location: ['fas', 'location-pin'],
            },
        },
        siteName: "Plastic Mind's Friends & Co.",
        phoneNumber: '9195400390',
        email: 'email@email.com',
        url: 'http://wordpress.test',
        modules: [
            {
                componentType: 'navigation',
                component: 'navigation',
                attributes: {
                    logoUrl: '/files/2022/08/EiffelWater1.jpg',
                    pages: [
                        {
                            name: 'Test Page',
                            slug: 'test-page',
                            url: '/test-page/',
                            id: '924',
                            page_type: 'blank',
                        },
                        {
                            name: 'Article v1 Permutations',
                            slug: 'article-v1-permutations',
                            url: '/article-v1-permutations/',
                            id: '935',
                            page_type: 'blank',
                        },
                        {
                            name: 'New Page',
                            slug: 'new-page',
                            url: '/new-page/',
                            id: '950',
                            page_type: 'blank',
                        },
                        {
                            name: 'Home',
                            slug: 'home',
                            url: '/home/',
                            id: '839',
                            page_type: 'homepage',
                        },
                        {
                            name: 'Colors',
                            slug: 'colors',
                            url: '/colors/',
                            id: '907',
                            page_type: 'blank',
                        },
                    ],
                    navStyle: 'layout1',
                    borderNum: 7,
                    navImage: '/files/2022/08/EiffelWater1.jpg',
                },
            },
            {
                componentType: 'footer',
                component: 'footer',
                attributes: {
                    pages: [
                        {
                            name: 'Test Page',
                            slug: 'test-page',
                            url: '/test-page/',
                            id: '924',
                            page_type: 'blank',
                        },
                        {
                            name: 'Article v1 Permutations',
                            slug: 'article-v1-permutations',
                            url: '/article-v1-permutations/',
                            id: '935',
                            page_type: 'blank',
                        },
                        {
                            name: 'New Page',
                            slug: 'new-page',
                            url: '/new-page/',
                            id: '950',
                            page_type: 'blank',
                        },
                        {
                            name: 'Home',
                            slug: 'home',
                            url: '/home/',
                            id: '839',
                            page_type: 'homepage',
                        },
                        {
                            name: 'Colors',
                            slug: 'colors',
                            url: '/colors/',
                            id: '907',
                            page_type: 'blank',
                        },
                    ],
                    navStyle: 'layout1',
                    borderNum: 7,
                    socialData: [
                        {
                            linkUrl: 'https://www.facebook.com',
                        },
                        {
                            linkUrl: 'https://www.instagram.com',
                        },
                        {
                            linkUrl: 'https://www.twitter.com',
                        },
                    ],
                    addressData: {
                        street: '444 happy road',
                        cityState: 'Townsville, Georgia',
                        zip: '47384',
                    },
                },
            },
        ],
    },
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
}