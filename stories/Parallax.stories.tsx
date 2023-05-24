import { ComponentStory, ComponentMeta } from '@storybook/react'
import Parallax from '../components/Parallax'
import { ArticleItems } from '../types'
import { themeStyles, buttonList1, buttonList2, buttonListJust2, createStoryStyles, icon, itemStyle, imageSizes } from 'storydefaults'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')

library.add(fas, fab, far)

export default {
    title: 'new-render/Parallax',
    component: Parallax,
    argTypes: {
        imgsize: {
            options: ['landscape_4_3', 'landscape_3_2', 'portrait_3_4', 'portrait_2_3', 'square_1_1', 'widescreen_16_9', 'widescreen_2_4_1', 'widescreen_3_1'],
            control: { type: 'radio' },
        },
        well: {
            options: ['', '1'],
            control: { type: 'radio' },
        },
        columns: {
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
        },
        type: {
            options: ['article_1', 'article_2', 'article_3', 'article'],
            control: { type: 'radio' },
        },
        items: {
            align: {
                options: ['left', 'right', 'center'],
                control: { type: 'radio' },
            },
        },
    },
} as ComponentMeta<typeof Parallax>

const Template: ComponentStory<typeof Parallax> = (args) => (
    <>
        {colorStyles && <style>{colorStyles}</style>}
        <Parallax {...args} />
    </>
)

const Default = Template.bind({})

const item1: ArticleItems = {
    id: '6f308c26_64c1_4a1d_af75_bb3f9f3dd9dc',
    nextImageSizes: imageSizes.normal,
    desc: 'The desc',
    icon: '',
    align: 'center',
    icon2: '',
    icon3: '',
    image: '/files/2022/08/AngelTop.jpg',
    plugin: '',
    btnSize: '',
    btnType: '',
    weblink: '',
    btnSize2: '',
    btnType2: '',
    disabled: '',
    headline: 'Parallax',
    isPlugin: '',
    pagelink: '/other/',
    weblink2: '',
    actionlbl: 'Btn1',
    headerTag: '1',
    imageSize: {
        width: 1500,
        height: 844,
        size: '173.49 kB',
    },
    newwindow: '',
    pagelink2: '/newpage/',
    subheader: 'SUb',
    actionlbl2: 'Btn2',
    isFeatured: '',
    newwindow2: '',
    pagelinkId: 688906,
    bkgrd_color: '',
    pagelink2Id: 717876,
    promoColor: '#3eb183',
    buttonList: [
        {
            name: 'btn1',
            link: '/other/',
            window: '',
            label: 'Btn1',
            active: true,
            btnType: 'btn_1',
            btnSize: 'btn_md',
            linkType: 'local',
            blockBtn: false,
        },
        {
            name: 'btn2',
            link: '/newpage/',
            window: '',
            label: 'Btn2',
            active: true,
            btnType: 'btn_2',
            btnSize: 'btn_md',
            linkType: 'local',
            blockBtn: false,
        },
    ],
    linkNoBtn: false,
    twoButtons: true,
    isWrapLink: false,
    visibleButton: true,
    isBeaconHero: false,
    imagePriority: false,
    itemCount: 1,
    imageType: 'crop',
    itemStyle: itemStyle.noImage,
}

const plaxmod = {
    uid: '9e319b47_9448_4e73_ed16_88b019618745',
    lazy: '',
    type: 'parallax_1',
    well: '',
    align: '',
    class: '',
    items: [item1],
    title: '',
    export: 1,
    columns: 1,
    imgsize: 'widescreen_2-4_1',
    lightbox: '',
    blockField1: '',
    blockField2: '',
    blockSwitch1: 1,
    scale_to_fit: '',
    modId: '9e319b47_9448_4e73_ed16_88b019618745',
    modCount: 1,
    columnLocation: 0,
    isSingleColumn: false,
    themeStyles: {
        logoColor: '#05cae0',
        headingColor: '#454545',
        subHeadingColor: '#454545',
        textColor: '#717171',
        linkColor: '#45ffd8',
        linkHover: '#40dcbc',
        btnText: '#ffffff',
        btnBackground: '#009374',
        textColorAccent: '#ffffff',
        heroSubheadline: '#ffffff',
        heroText: '#e00f0f',
        heroBtnText: '#fafaeb',
        heroBtnBackground: '#00c2d8',
        heroLink: '#DDDDDD',
        heroLinkHover: 'transparent',
        captionText: 'rgba(250,250,235,1)',
        captionBackground: 'rgba(0,194,216,.5)',
        NavText: 'rgba(237,237,223,1)',
        navHover: '#009374',
        navCurrent: '#d20000',
        backgroundMain: 'rgba(0,0,0,.2)',
        bckdContent: 'rgba(255,255,255,1)',
        headerBackground: 'rgba(16,37,46,1)',
        BckdHeaderSocial: '#12343d',
        accentBackgroundColor: '#12343d',
        backgroundHero: '#ffc83d',
        footerBackground: 'rgba(16,37,46,1)',
        footerText: '#dbf8ff',
        footerLink: '#dbf8ff',
        promoText: '#ffffff',
        promoColor: '#3eb183',
        promoColor2: '#00a4fc',
        promoColor3: '#c037dd',
        promoColor4: '#e02aa0',
        promoColor5: '#30829b',
        promoColor6: '#10252e',
    },
    cmsUrl: 'clttestsiteforjoshedwards.production.townsquareinteractive.com',
}

Default.args = plaxmod

let colorStyles: string
if (Default.args?.themeStyles) {
    colorStyles = createStoryStyles(Default.args.themeStyles)
}
export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
}

export const NoImage = Template.bind({})
NoImage.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            image: '',
        },
    ],
}
export const AlignLeft = Template.bind({})
AlignLeft.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            align: 'left',
        },
    ],
}
export const AlignRight = Template.bind({})
AlignRight.args = {
    ...Plain.args,
    items: [
        {
            ...item1,

            align: 'right',
        },
    ],
}
export const H1 = Template.bind({})
H1.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            headerTag: '1',
            align: 'left',
        },
    ],
}

export const OnlyImage = Template.bind({})
OnlyImage.args = {
    ...Plain.args,
    items: [
        {
            ...item1,
            subheader: '',
            headline: '',
            desc: '',
            align: '',
            visibleButton: false,
        },
    ],
}

export const Button = Template.bind({})
Button.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            buttonList: buttonList1,
            twoButtons: false,
            isWrapLink: true,
            visibleButton: true,
        },
    ],
}
export const TwoButtons = Template.bind({})
TwoButtons.args = {
    ...Button.args,
    items: [
        {
            ...item1,
            buttonList: buttonList2,
            twoButtons: true,
            isWrapLink: false,
            visibleButton: true,
        },
    ],
}
export const Button2 = Template.bind({})
Button2.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            buttonList: buttonListJust2,
            twoButtons: true,
            isWrapLink: false,
            visibleButton: true,
        },
    ],
}
export const ButtonSizesBlock = Template.bind({})
ButtonSizesBlock.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            buttonList: [
                {
                    name: 'btn1',
                    link: '/article/',
                    window: '',
                    label: 'Button1',
                    active: true,
                    btnType: 'btn_1',
                    btnSize: 'btn_md',
                    linkType: 'local',
                    blockBtn: true,
                },
            ],
            twoButtons: true,
            isWrapLink: false,
            visibleButton: true,
        },
    ],
}
export const LinkNoButton = Template.bind({})
LinkNoButton.args = {
    ...Default.args,
    well: '1',
    items: [
        {
            ...item1,
            weblink: 'https://www.facebook.com/',
            align: 'left',
            newwindow: 1,
            isWrapLink: true,
            visibleButton: false,
        },
    ],
}

export const Border = Template.bind({})
Border.args = {
    ...NoImage.args,
    well: '1',
    items: [
        {
            ...item1,
            image: '',
            promoColor: '#3eb183',
            textureImage: {
                image: '/subtle-white-feathers.png',
                gradientColors: ['#3eb183', '#00a4fc'],
            },
            itemStyle: itemStyle.borderStyle,
        },
    ],
}

export const ModColorCustom = Template.bind({})
ModColorCustom.args = {
    ...NoImage.args,
    modId: '6446',
    items: [
        {
            ...item1,
            //image: '',
            modColor1: 'rgb(251,13,13)',
            buttonList: [
                {
                    name: 'btn1',
                    link: '/other/',
                    window: '',
                    label: 'Btn1',
                    active: true,
                    btnType: 'btn_override',
                    btnSize: 'btn_md',
                    linkType: 'local',
                    blockBtn: false,
                },
                {
                    name: 'btn2',
                    link: '/newpage/',
                    window: '',
                    label: 'Btn2',
                    active: true,
                    btnType: 'btn2_override',
                    btnSize: 'btn_md',
                    linkType: 'local',
                    blockBtn: false,
                },
            ],
            itemStyle: { background: `rgb(251,13,13)` },
        },
    ],
}
export const CustomHeight = Template.bind({})
CustomHeight.args = {
    ...Plain.args,
    well: '1',
    items: [
        {
            ...item1,
            modOne: 300,
        },
    ],
}

export const ImageOpacity = Template.bind({})
ImageOpacity.args = {
    ...Plain.args,
    well: '1',
    items: [
        {
            ...item1,
            modOpacity: 0.5,
        },
    ],
}

export const Featured = Template.bind({})
Featured.args = {
    ...AlignLeft.args,
    items: [{ ...item1, isFeatured: 'active', align: 'left' }],
}

export const Hidden = Template.bind({})
Hidden.args = {
    ...Plain.args,
    items: [{ ...item1, disabled: 'disabled' }],
}

export const Icon3 = Template.bind({})
Icon3.args = {
    ...Plain.args,

    items: [{ ...item1, icon3: 'faAnchor', imageIcon: icon }],
}
