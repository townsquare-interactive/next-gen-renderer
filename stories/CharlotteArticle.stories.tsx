import { ComponentStory, ComponentMeta } from '@storybook/react'
import CharlotteArticle from '../components/practice/CharlotteArticle'
import { ArticleItems } from '../types'
import { themeStyles } from 'storydefaults'

export default {
    title: 'CMS/CLTArticle',
    component: CharlotteArticle,
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
            options: ['article_1', 'article_2', 'article_3', 'beacon'],
            control: { type: 'radio' },
        },
        columns: {
            options: [1, 2, 3, 4],
            control: { type: 'radio' },
        },
        items: {
            align: {
                options: ['left', 'right', 'center'],
                control: { type: 'radio' },
            },
        },
    },
} as ComponentMeta<typeof CharlotteArticle>

const Template: ComponentStory<typeof CharlotteArticle> = (args) => <CharlotteArticle {...args} />

const Default = Template.bind({})
const item1: ArticleItems = {
    id: '6574f9b4_f1d5_4b10_feb6_928e62803df3',
    headline: 'Article Module',
    subheader: 'Subheader',
    image: '/football-2.jpg',
    icon: '',
    icon2: '',
    icon3: '',
    bkgrd_color: '',
    btnType: '',
    btnType2: '',
    btnSize: '',
    btnSize2: '',
    desc: 'This is the desc',
    pagelink: '',
    weblink: '',
    actionlbl: '',
    newwindow: null,
    pagelink2: '',
    weblink2: '',
    actionlbl2: '',
    newwindow2: null,
    align: '',
    isFeatured: '',
    isPlugin: '',
    headerTag: '',
    plugin: '',
    disabled: '',
}
const item2 = item1
const item3 = item1

Default.args = {
    uid: '1',
    type: 'article_1',
    well: '',
    align: '',
    imgsize: 'landscape_4_3',
    title: '',
    export: 1,
    columns: 1,
    lightbox: '',
    blockSwitch1: 1,
    scale_to_fit: '',
    items: [item1],
    themeStyles: themeStyles,
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
    items: [
        {
            ...item1,
        },
    ],
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
export const OnlySub = Template.bind({})
OnlySub.args = {
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
}
export const OnlyHeadline = Template.bind({})
OnlyHeadline.args = {
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
}
export const OnlyDesc = Template.bind({})
OnlyDesc.args = {
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
        },
    ],
}
export const ModuleTitle = Template.bind({})
ModuleTitle.args = {
    ...AlignLeft.args,
    title: 'Module Title',
}

export const ImageSquare = Template.bind({})
ImageSquare.args = {
    ...AlignLeft.args,
    imgsize: 'square_1_1',
}
export const ImageLandscape_4_3 = Template.bind({})
ImageLandscape_4_3.args = {
    ...AlignLeft.args,
    imgsize: 'landscape_4_3',
}

export const ImageLandscape_3_2 = Template.bind({})
ImageLandscape_3_2.args = {
    ...AlignLeft.args,
    imgsize: 'landscape_3_2',
}
export const ImagePortrait_3_4 = Template.bind({})
ImagePortrait_3_4.args = {
    ...AlignLeft.args,
    imgsize: 'portrait_3_4',
}
export const ImagePortrait_2_3 = Template.bind({})
ImagePortrait_2_3.args = {
    ...AlignLeft.args,
    imgsize: 'portrait_2_3',
}
export const ImageWideScreen_16_9 = Template.bind({})
ImageWideScreen_16_9.args = {
    ...AlignLeft.args,
    imgsize: 'widescreen_16_9',
}

export const ImageWideScreen_2_4_1 = Template.bind({})
ImageWideScreen_2_4_1.args = {
    ...AlignLeft.args,
    imgsize: 'widescreen_2_4_1',
}
export const ImageWideScreen_3_1 = Template.bind({})
ImageWideScreen_3_1.args = {
    ...AlignLeft.args,
    imgsize: 'widescreen_3_1',
}
export const ImageNoSizing = Template.bind({})
ImageNoSizing.args = {
    ...AlignLeft.args,
    imgsize: 'no_sizing',
}

export const Button = Template.bind({})
Button.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            /*  actionlbl2: 'Contact 2',
            pagelink2: '/', */
            align: 'center',
            icon: 'faArchway',
            /* icon2: 'faAnchor', */
            btnType: 'btn_1',
            /*           btnType2: 'btn_2', */
            btnSize: 'md',
            // btnSize:'md btn_block',
            /*   btnSize2: 'md', */
        },
    ],
}
export const TwoButtons = Template.bind({})
TwoButtons.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: 'facebook.com',
            actionlbl2: 'Contact 2',
            weblink2: 'google.com',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
            btnType2: 'btn_2',
            btnSize: 'md',
            /*             btnSize:'md btn_block', */
            btnSize2: 'md',
        },
    ],
}
export const Button2 = Template.bind({})
Button2.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            actionlbl2: 'Contact 2',
            weblink2: 'tacos.com',
            align: 'center',
            icon2: 'faAnchor',
            btnType2: 'btn_2',
            btnSize2: 'md',
        },
    ],
}
export const ButtonSizesBlock = Template.bind({})
ButtonSizesBlock.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            actionlbl2: 'Contact 2',
            pagelink2: '/',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_2',
            btnType2: 'btn_1',
            btnSize: 'lg btn_block',
            // btnSize:'md btn_block',
            btnSize2: 'lg btn_block',
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
            weblink2: 'facebook.com',
            align: 'left',
        },
    ],
}

export const ButtonNoLink = Template.bind({})
ButtonNoLink.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            actionlbl: 'hello',
            align: 'left',
        },
    ],
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
    ...Default.args,
    columns: 2,
    items: [{ ...item1 }, { ...item2 }, { ...item3 }],
}

export const ThreeColumns = Template.bind({})
ThreeColumns.args = {
    ...Default.args,
    columns: 3,
    items: [{ ...item1 }, { ...item2 }, { ...item3 }],
}

export const FourColumns = Template.bind({})
FourColumns.args = {
    ...Default.args,
    columns: 4,
    items: [{ ...item1 }, { ...item2 }, { ...item3 }, { ...item1 }],
}

export const Border = Template.bind({})
Border.args = {
    ...AlignLeft.args,
    well: '1',
}

export const Featured = Template.bind({})
Featured.args = {
    ...AlignLeft.args,
    items: [{ ...item1, isFeatured: 'active', align: 'left' }],
}

export const MultiFeatured = Template.bind({})
MultiFeatured.args = {
    ...AlignLeft.args,
    columns: 3,
    items: [{ ...item1 }, { ...item1, isFeatured: 'active' }, { ...item1 }],
}

export const MultipleBorder = Template.bind({})
MultipleBorder.args = {
    ...ThreeColumns.args,
    well: '1',
}
export const MultipleBorderButtons = Template.bind({})
MultipleBorderButtons.args = {
    ...ThreeColumns.args,
    columns: 3,
    well: '1',
    items: [
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            // actionlbl2: 'Contact 2',
            //pagelink2: '/',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
        },
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            // actionlbl2: 'Contact 2',
            //pagelink2: '/',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
        },
        {
            ...item1,
            actionlbl: 'Contact Us',
            pagelink: '/',
            // actionlbl2: 'Contact 2',
            //pagelink2: '/',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
        },
    ],
}
export const MultipleBorderLinked = Template.bind({})
MultipleBorderLinked.args = {
    ...ThreeColumns.args,
    columns: 3,
    well: '1',
    items: [
        {
            ...item1,
            pagelink: '/',
            align: 'center',
        },
        {
            ...item1,
            pagelink: '/',
            align: 'center',
        },
        {
            ...item1,
            pagelink: '/',
            align: 'center',
        },
    ],
}
export const CustomClass = Template.bind({})
CustomClass.args = {
    ...AlignLeft.args,
    class: 'hello',
}

export const Caption = Template.bind({})
Caption.args = {
    ...Plain.args,

    items: [{ ...item1, caption_tag: 'caption', captionOn: 0 }],
}

export const Hidden = Template.bind({})
Hidden.args = {
    ...Plain.args,
    items: [{ ...item1, disabled: 'disabled' }],
}
export const V2 = Template.bind({})
V2.args = {
    ...Plain.args,
    type: 'article_2',
}
export const V2Multiple = Template.bind({})
V2Multiple.args = {
    ...Plain.args,
    type: 'article_2',
    columns: 2,
    items: [{ ...item1 }, { ...item1 }, { ...item1 }, { ...item1 }],
}
export const V3 = Template.bind({})
V3.args = {
    ...Plain.args,
    type: 'article_3',
    items: [{ ...item1, align: 'left' }],
}
export const V3Multiple = Template.bind({})
V3Multiple.args = {
    ...Plain.args,
    type: 'article_3',
    columns: 2,
    items: [
        { ...item1, align: 'right' },
        { ...item1, align: 'right' },
        { ...item1, align: 'right' },
        { ...item1, align: 'right' },
    ],
}
export const V3SmallText = Template.bind({})
V3SmallText.args = {
    ...Plain.args,
    type: 'article_3',
    items: [{ ...item1, align: 'left', headSize: 'font_xs', descSize: 'font_lg' }],
}
export const Icon3 = Template.bind({})
Icon3.args = {
    ...Plain.args,

    items: [{ ...item1, icon3: 'faAnchor' }],
}
