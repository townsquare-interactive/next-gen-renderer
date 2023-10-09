import { StoryFn, Meta } from '@storybook/react'
import Article from '../components/Article'
import { ArticleItems } from '../types'
import { themeStyles, createStoryStyles, imageSizes } from 'storydefaults'

export default {
    title: 'Intro',
    component: Article,
} as Meta<typeof Article>

const Template: StoryFn<typeof Article> = (args) => (
    <>
        {colorStyles && <style>{colorStyles}</style>}
        <Article {...args} />
    </>
)

const Default = Template.bind({})
const item1: ArticleItems = {
    id: '1edcc99c_9904_445b_dbac_9029c0d9e456',
    nextImageSizes: imageSizes.normal,
    desc: 'Take a look below at the current modules that have been recreated for the new render. There are variations for each module and controls you can use to manipulate the props.',
    icon: '',
    align: 'center',
    icon2: '',
    icon3: '',
    image: '',
    plugin: '',
    btnSize: '',
    btnType: '',
    weblink: '',
    btnSize2: '',
    btnType2: '',
    disabled: '',
    headline: 'Welcome To Storybook',
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
    btnCount: 1,
    isWrapLink: false,
    visibleButton: false,
    isBeaconHero: false,
    imagePriority: false,
    itemCount: 1,
    imageType: 'crop',
}

Default.args = {
    modId: '1',
    type: 'article_1',
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
}

let colorStyles: string
if (Default.args?.themeStyles) {
    colorStyles = createStoryStyles(Default.args.themeStyles)
}

export const Welcome = {
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
