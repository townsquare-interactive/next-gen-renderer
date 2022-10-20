import { ComponentStory, ComponentMeta } from '@storybook/react'
import MyHeader from '../components/MyHeader'

export default {
    title: 'New/MyHeader',
    component: MyHeader,
} as ComponentMeta<typeof MyHeader>

const Template: ComponentStory<typeof MyHeader> = (args) => <MyHeader {...args} />

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

    CMSLayout: {
        themeStyles: {
            mainColor: '#365070',
            textColor: 'rgb(46, 46, 46)',
            headingColor: 'rgb(46, 46, 46)',
            textColorAccent: '#fff',
            linkColor: 'rgb(230, 211, 65)',
            accentBackgroundColor: '#000',
            accentColor2: 'rgb(230, 211, 65)',
            altColor: 'rgb(230, 211, 65)',
            headerBackground: 'rgb(64,64,64)',
            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
            navBackground: 'rgb(64,64,64,.9)',
            BckdHeaderSocial: '#12343d',
            NavText: 'rgba(237,237,223,1)',
            subHeadingColor: '#5b5b5b',
            linkHover: '#00ab80',
        },
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
        social: ['http://www.facebook.com/Tipsyburro', 'http://www.twitter.com/nbc'],
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
        },
        siteName: "Plastic Mind's Friends & Co.",
        phoneNumber: '9195400390',
        email: 'email@email.com',
        url: 'http://wordpress.test',
        modules: [
            {
                componentType: 'navigation',
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
                            linkUrl: 'https://www.google.com/',
                        },
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
