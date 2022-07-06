import { ComponentStory, ComponentMeta } from '@storybook/react'
import Article from '../components/Article'

export default {
    title: 'CMS/Article',
    component: Article,
    argTypes: {
        imgSize: {
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
Default.args = {
    uid: '1',
    type: 'article',
    well: '',
    align: 'left',
    imgSize: 'square_4_3',
    title: '',
    export: 1,
    columns: 1,
    lightbox: '',
    blockSwitch1: 1,
    scale_to_fit: '',
    items: [
        {
            id: '6574f9b4_f1d5_4b10_feb6_928e62803df3',
            headline: 'Article Module',
            subheader: 'Subheader',
            image: '/football-2.jpg',
            captionOn: 0,
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
        },
    ],
}

export const Plain = Template.bind({})
Plain.args = {
    ...Default.args,
}
export const AlignLeft = Template.bind({})
AlignLeft.args = {
    ...Default.args,
    items: [
        {
            id: '6574f9b4_f1d5_4b10_feb6_928e62803df3',
            headline: 'Aligned Left',
            subheader: 'Subheader',
            image: '/football-2.jpg',
            captionOn: 0,
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
            align: 'left',
            isFeatured: '',
            isPlugin: '',
            headerTag: '',
            plugin: '',
            disabled: '',
        },
    ],
}
export const AlignRight = Template.bind({})
AlignRight.args = {
    ...Default.args,
    items: [
        {
            id: '6574f9b4_f1d5_4b10_feb6_928e62803df3',
            headline: 'Image square_1_1',
            subheader: 'Subheader',
            image: '/football-2.jpg',
            captionOn: 0,
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
            align: 'right',
            isFeatured: '',
            isPlugin: '',
            headerTag: '',
            plugin: '',
            disabled: '',
        },
    ],
}
export const ImageSquare = Template.bind({})
ImageSquare.args = {
    ...Default.args,
    imgSize: 'square_1_1',
}
export const ImageLandscape_4_3 = Template.bind({})
ImageLandscape_4_3.args = {
    ...Default.args,
    imgSize: 'landscape_4_3',
}

export const ImageLandscape_3_2 = Template.bind({})
ImageLandscape_3_2.args = {
    ...Default.args,
    imgSize: 'landscape_3_2',
}
export const ImagePortrait_3_4 = Template.bind({})
ImagePortrait_3_4.args = {
    ...Default.args,
    imgSize: 'portrait_3_4',
}
export const ImagePortrait_2_3 = Template.bind({})
ImagePortrait_2_3.args = {
    ...Default.args,
    imgSize: 'portrait_2_3',
}
export const ImageWideScreen_16_9 = Template.bind({})
ImageWideScreen_16_9.args = {
    ...Default.args,
    imgSize: 'widescreen_16_9',
}

export const ImageWideScreen_2_4_1 = Template.bind({})
ImageWideScreen_2_4_1.args = {
    ...Default.args,
    imgSize: 'widescreen_2_4_1',
}
export const ImageWideScreen_3_1 = Template.bind({})
ImageWideScreen_3_1.args = {
    ...Default.args,
    imgSize: 'widescreen_3_1',
}
