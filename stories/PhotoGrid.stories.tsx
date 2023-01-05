import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PhotoGrid } from '../components/PhotoGrid'
import { themeStyles } from 'storydefaults'
import { ArticleItems } from '../types'

export default {
    title: 'new/PhotoGrid',
    component: PhotoGrid,
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

        items: {
            align: {
                options: ['left', 'right', 'center'],
                control: { type: 'radio' },
            },
        },
    },
} as ComponentMeta<typeof PhotoGrid>

const Template: ComponentStory<typeof PhotoGrid> = (args) => (
    <>
        {colorStyles && <style>{colorStyles}</style>}
        <PhotoGrid {...args} />
    </>
)

const Default = Template.bind({})
const item1: ArticleItems = {
    id: '90ef65f9_4954_42b0_d634_aa27fde549e1',
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
    desc: '',
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
    isPlugin: '',
    pagelink: '/article/',
    weblink2: '',
    actionlbl: 'Contact Us',
    headerTag: '',
    newwindow: '',
    pagelink2: '',
    subheader: 'sub',
    actionlbl2: '',
    isFeatured: '',
    newwindow2: '',
    bkgrd_color: '',
    headline: 'Headline',
    hasGridCaption: true,
    visibleButton: true,
}

const item2 = item1
const item3 = item1

Default.args = {
    modId: '1',
    type: 'banner_1',
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

let colorStyles: string
if (Default.args?.themeStyles) {
    const textColors = `.accent-txt{color:${Default.args.themeStyles['textColorAccent']}} .txt-color{color:${Default.args.themeStyles['textColor']}} .txt-color-heading{color:${Default.args.themeStyles['headingColor']}}`

    const btnStyles = `.btn_1{color: ${Default.args.themeStyles['textColorAccent']}; background-color: ${Default.args.themeStyles['promoColor']}} .btn_1:hover{color: ${Default.args.themeStyles['promoColor']}; background-color: ${Default.args.themeStyles['textColorAccent']}} .btn_2{color: ${Default.args.themeStyles['promoColor']}; border-color: ${Default.args.themeStyles['promoColor']}} .btn_2:hover{color: ${Default.args.themeStyles['textColorAccent']}; background-color: ${Default.args.themeStyles['promoColor']}}`

    colorStyles = textColors + btnStyles
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
            pagelink: '/home',
            icon: 'faArchway',
            btnType: 'btn_1',
            btnSize: 'md',
            buttonList: [
                {
                    name: 'btn1',
                    link: '/',
                    window: '',
                    icon: { iconPrefix: 'fas', iconModel: 'rocket' },
                    label: 'Contact Us Today',
                    active: true,
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
            weblink: 'https://www.facebook.com/',
            pagelink: '',
            actionlbl2: 'Contact 2',
            weblink2: 'https://www.google.com/',
            pagelink2: '',
            align: 'center',
            icon: 'faArchway',
            icon2: 'faAnchor',
            btnType: 'btn_1',
            btnType2: 'btn_2',
            btnSize: 'md',
            btnSize2: 'md',
            newwindow: 1,
            newwindow2: 1,
            buttonList: [
                {
                    name: 'btn1',
                    link: '/',
                    window: '',
                    icon: { iconPrefix: 'fas', iconModel: 'rocket' },
                    label: 'Contact Us Today',
                    active: true,
                    linkType: 'local',
                },
                {
                    name: 'btn2',
                    link: '/columns/',
                    icon: { iconPrefix: 'fab', iconModel: 'facebook-square' },
                    label: 'button 2',
                    active: true,
                    linkType: 'local',
                    btnType: 'btn_2',
                },
            ],
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
            weblink2: '/home',
            align: 'center',
            icon2: 'faAnchor',
            btnType2: 'btn_2',
            btnSize2: 'md',
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
                    active: true,
                    linkType: 'local',
                    btnType: 'btn_2',
                },
            ],
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
            weblink: 'https://www.facebook.com/',
            align: 'left',
            newwindow: 1,
            isWrapLink: true,
            pagelink: '/',
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
            actionlbl2: 'Contact Us',
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
            actionlbl2: 'Contact Us',
            pagelink: '/',
            // actionlbl2: 'Contact 2',
            //pagelink2: '/',
            align: 'center',
            icon: 'faAnchor',
            btnType: 'btn_2',
        },
        {
            ...item1,

            actionlbl2: 'Contact Us',
            pagelink2: '/',
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

export const MBBv3 = Template.bind({})
MBBv3.args = {
    ...MultipleBorderButtons.args,
    type: 'article_3',
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

export const Hidden = Template.bind({})
Hidden.args = {
    ...Plain.args,
    items: [{ ...item1, disabled: 'disabled' }],
}
