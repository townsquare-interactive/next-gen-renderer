import { ComponentStory, ComponentMeta } from '@storybook/react'
import Article from '../components/practice/BeaconArticle'
import { ArticleItems } from '../types'
import { themeStyles } from 'storydefaults'

export default {
    title: 'OldCms/Article',
    component: Article,
    argTypes: {
        imgsize: {
            options: ['landscape_4_3', 'landscape_3_2', 'portrait_3_4', 'portrait_2_3', 'square_1_1', 'widescreen_16_9', 'widescreen_2_4_1', 'widescreen_3_1'],
            control: { type: 'radio' },
        },
        items: {
            align: {
                options: ['left', 'right', 'center'],
                control: { type: 'radio' },
            },
        },
    },
} as ComponentMeta<typeof Article>

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />

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
    align: 'center',
    isFeatured: '',
    isPlugin: '',
    headerTag: '',
    plugin: '',
    disabled: '',
    buttonList: [
        {
            name: 'btn1',
            link: '/',
            window: '',
            icon: { iconPrefix: 'fas', iconModel: 'rocket' },
            label: 'Contact Us Today',
            active: false,
            linkType: 'local',
        },
        {
            name: 'btn2',
            link: '/columns/',
            icon: { iconPrefix: 'fab', iconModel: 'facebook-square' },
            label: 'button 2',
            active: false,
            linkType: 'local',
        },
    ],
}
const item2 = item1
const item3 = item1

Default.args = {
    uid: '1',
    type: 'article',
    well: '',
    align: 'left',
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
            align: 'left',
        },
    ],
}
export const LinkNoButton = Template.bind({})
LinkNoButton.args = {
    ...Default.args,
    items: [
        {
            ...item1,
            pagelink: '/',
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

export const MultipleBorder = Template.bind({})
MultipleBorder.args = {
    ...ThreeColumns.args,
    well: '1',
}
export const CustomClass = Template.bind({})
CustomClass.args = {
    ...AlignLeft.args,
    well: '1',
    customClassName: 'hello',
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
