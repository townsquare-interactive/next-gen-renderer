import { StoryFn, Meta } from '@storybook/react'
import Card from '../components/Card'
import { ArticleItems } from '../types'
import { themeStyles, buttonList1, buttonList2, buttonListJust2, createStoryStyles, imageSizes, img2 } from 'storydefaults'

export default {
    title: 'new-render/Card',
    component: Card,
    argTypes: {
        imgsize: {
            options: ['landscape_4_3', 'landscape_3_2', 'portrait_3_4', 'portrait_2_3', 'square_1_1', 'widescreen_16_9', 'widescreen_2_4_1', 'widescreen_3_1'],
            control: { type: 'radio' },
        },
        well: {
            options: ['', '1'],
            control: { type: 'radio' },
        },
        type: {
            options: ['card_1', 'card_2'],
            control: { type: 'radio' },
        },
        items: {
            align: {
                options: ['left', 'right', 'center'],
                control: { type: 'radio' },
            },
        },
    },
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = (args) => (
    <>
        {colorStyles && <style>{colorStyles}</style>}
        <Card {...args} />
    </>
)

const Default = Template.bind({})
const item1: ArticleItems = {
    id: '1edcc99c_9904_445b_dbac_9029c0d9e456',
    nextImageSizes: imageSizes.normal,
    desc: 'changed',
    icon: '',
    align: 'center',
    icon2: '',
    icon3: '',
    image: img2,
    plugin: '',
    btnSize: '',
    btnType: '',
    weblink: '',
    btnSize2: '',
    btnType2: '',
    disabled: '',
    headline: 'changed article',
    isPlugin: '',
    pagelink: '/article/',
    weblink2: '',
    actionlbl: 'Button1',
    headerTag: '1',
    imageSize: {
        width: 4592,
        height: 2584,
        size: '5.09 MB',
    },
    newwindow: '',
    pagelink2: '/banner/',
    subheader: '',
    actionlbl2: 'Button2',
    isFeatured: '',
    newwindow2: '',
    pagelinkId: '',
    bkgrd_color: '',
    pagelink2Id: '',
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
            blockBtn: false,
        },
        {
            name: 'btn2',
            link: '/banner/',
            window: '',
            label: 'Button2',
            active: true,
            btnType: 'btn_2',
            btnSize: 'btn_md',
            linkType: 'local',
            blockBtn: false,
        },
    ],
    btnCount: 2,
    isWrapLink: false,
    //visibleButton: true,
    isBeaconHero: false,
    imagePriority: false,
    itemCount: 1,
    imageType: 'crop',
}

const item2 = item1
const item3 = item1

Default.args = {
    modId: '1',
    type: 'card_1',
    well: '',
    align: 'center',
    imgsize: 'landscape_4_3',
    title: '',
    export: 1,
    columns: 1,
    lightbox: '',
    blockSwitch1: 1,
    scale_to_fit: '',
    items: [item1],
    themeStyles: themeStyles,
    cmsUrl: 'clttestsiteforjoshedwards.production.townsquareinteractive.com',
}

let colorStyles: string
if (Default.args?.themeStyles) {
    colorStyles = createStoryStyles(Default.args.themeStyles)
}

export const Plain = {
    render: Template,

    args: {
        ...Default.args,
        items: [
            {
                ...item1,
            },
        ],
    },
}

export const CardV2 = {
    render: Template,

    args: {
        ...Plain.args,
        type: 'card_2',
        items: [
            {
                ...item1,
                align: 'left',
            },
        ],
    },
}

export const NoImage = {
    render: Template,

    args: {
        ...Default.args,
        items: [
            {
                ...item1,
                image: '',
            },
        ],
    },
}

export const AlignLeft = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                align: 'left',
            },
        ],
    },
}

export const AlignRight = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                align: 'right',
            },
        ],
    },
}

export const H1 = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                headerTag: '1',
                align: 'left',
            },
        ],
    },
}

export const OnlySub = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                subheader: 'Only Subheadline',
                headline: '',
                desc: '',
                image: '',
                align: '',
            },
        ],
    },
}

export const OnlyHeadline = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                subheader: '',
                headline: 'Only Headline',
                desc: '',
                image: '',
                align: '',
            },
        ],
    },
}

export const OnlyDesc = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                subheader: '',
                headline: '',
                desc: 'Only Desc',
                image: '',
                align: '',
            },
        ],
    },
}

export const OnlyImage = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                subheader: '',
                headline: '',
                desc: '',
            },
        ],
    },
}

export const ModuleTitle = {
    render: Template,

    args: {
        ...AlignLeft.args,
        title: 'Module Title',
    },
}

export const ImageSquare = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'square_1_1',
    },
}

export const ImageLandscape_4_3 = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'landscape_4_3',
    },
}

export const ImageLandscape_3_2 = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'landscape_3_2',
    },
}

export const ImagePortrait_3_4 = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'portrait_3_4',
    },
}

export const ImagePortrait_2_3 = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'portrait_2_3',
    },
}

export const ImageWideScreen_16_9 = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'widescreen_16_9',
    },
}

export const ImageWideScreen_2_4_1 = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'widescreen_2_4_1',
    },
}

export const ImageWideScreen_3_1 = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'widescreen_3_1',
    },
}

export const ImageNoSizing = {
    render: Template,

    args: {
        ...AlignLeft.args,
        imgsize: 'no_sizing',
    },
}

export const Button = {
    render: Template,

    args: {
        ...Default.args,
        items: [
            {
                ...item1,
                buttonList: buttonList1,
                btnCount: 1,
                isWrapLink: true,
                visibleButton: true,
            },
        ],
    },
}

export const TwoButtons = {
    render: Template,

    args: {
        ...Button.args,
        items: [
            {
                ...item1,
                buttonList: buttonList2,
                btnCount: 2,
                isWrapLink: false,
                visibleButton: true,
            },
        ],
    },
}

export const Button2 = {
    render: Template,

    args: {
        ...Default.args,
        items: [
            {
                ...item1,
                buttonList: buttonListJust2,
                btnCount: 2,
                isWrapLink: false,
                visibleButton: true,
            },
        ],
    },
}

export const ButtonSizesBlock = {
    render: Template,

    args: {
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
                btnCount: 2,
                isWrapLink: false,
                visibleButton: true,
            },
        ],
    },
}

export const LinkNoButton = {
    render: Template,

    args: {
        ...Default.args,
        well: '1',
        modId: '6223',
        items: [
            {
                ...item1,
                weblink: 'https://www.facebook.com/',
                align: 'left',
                newwindow: 1,
                isWrapLink: true,
            },
        ],
    },
}

export const Border = {
    render: Template,

    args: {
        ...AlignLeft.args,
        well: '1',
    },
}

export const Featured = {
    render: Template,

    args: {
        ...AlignLeft.args,
        items: [{ ...item1, isFeatured: 'active', align: 'left' }],
    },
}

export const Featured2 = {
    render: Template,

    args: {
        ...LinkNoButton.args,
        items: [
            {
                ...item1,
                isFeatured: 'active',
                align: 'left',
                image: '',
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
                btnCount: 1,
                isWrapLink: true,
                visibleButton: true,
            },
        ],
    },
}

export const Caption = {
    render: Template,

    args: {
        ...Plain.args,

        items: [{ ...item1, caption_tag: 'caption', captionOn: 0 }],
    },
}

export const TextSizes = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            { ...item1, headSize: 'font_xs', descSize: 'font_sm' },
            { ...item1, headSize: 'font_md', descSize: 'font_md' },
            { ...item1, headSize: 'font_xl', descSize: 'font_xl' },
        ],
    },
}

export const Icon3 = {
    render: Template,

    args: {
        ...Plain.args,

        items: [{ ...item1, icon3: 'faAnchor', imageIcon: { iconModel: 'angry', iconPrefix: 'far' } }],
    },
}

export const UseAccentColor = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                useAccentColor: true,
                image: '',
            },
        ],
    },
}

export const RoundedBorder = {
    render: Template,

    args: {
        ...Plain.args,
        items: [
            {
                ...item1,
                useAccentColor: true,
                borderType: 'round',
            },
        ],
    },
}
