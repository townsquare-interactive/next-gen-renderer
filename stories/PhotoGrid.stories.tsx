import { StoryFn, Meta } from '@storybook/react'
import { PhotoGrid } from '../components/PhotoGrid'
import { ArticleItems } from '../types'
import { themeStyles, buttonList1, buttonList2, buttonListJust2, imageSizes, img1, img2 } from 'storydefaults'

export default {
    title: 'new-render/PhotoGrid',
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
} as Meta<typeof PhotoGrid>

const Template: StoryFn<typeof PhotoGrid> = (args) => (
    <>
        {colorStyles && <style>{colorStyles}</style>}
        <PhotoGrid {...args} />
    </>
)

const Default = Template.bind({})
const item1: ArticleItems = {
    id: '6f308c26_64c1_4a1d_af75_bb3f9f3dd9dc',
    headline: 'Photo Grid',
    subheader: 'SUb',
    image: img1,
    nextImageSizes: imageSizes.normal,
    icon: '',
    icon2: '',
    icon3: '',
    bkgrd_color: '',
    btnType: '',
    btnType2: '',
    btnSize: '',
    btnSize2: '',
    desc: '',
    pagelink: '/other/',
    weblink: '',
    actionlbl: 'Btn1',
    newwindow: '',
    pagelink2: '/newpage/',
    weblink2: '',
    actionlbl2: 'Btn2',
    newwindow2: '',
    align: 'center',
    isFeatured: '',
    isPlugin: '',
    headerTag: '',
    plugin: '',
    disabled: '',
    imageSize: {
        width: 1500,
        height: 844,
        size: '173.49 kB',
    },
    pagelinkId: '',
    pagelink2Id: '',
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

    btnCount: 2,
    isWrapLink: false,
    visibleButton: true,
    isBeaconHero: false,
    imagePriority: false,
    itemCount: 1,
    imageType: 'crop',
}

const item2 = item1
const item3 = item1

Default.args = {
    modId: '1',
    type: 'photo_grid',
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
    cmsUrl: 'clttestsiteforjoshedwards.production.townsquareinteractive.com',
}

let colorStyles: string
if (Default.args?.themeStyles) {
    const textColors = `.accent-txt{color:${Default.args.themeStyles['textColorAccent']}} .txt-color{color:${Default.args.themeStyles['textColor']}} .txt-color-hd{color:${Default.args.themeStyles['headingColor']}}`

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
            btnCount: 2,
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

export const RoundedBorder = Template.bind({})
RoundedBorder.args = {
    ...MultipleBorder.args,
    columns: 1,
    items: [
        {
            ...item1,
            useAccentColor: true,
            borderType: 'round',
        },
    ],
}
