import type { NextPage } from 'next'
import cn from 'classnames'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import List from '../components/List'
import Header from '../components/Header'
import Images from '../components/Images'
import Label from '../components/Label'
import Card from '../components/Card'
import Text from '../components/Text'

import Navigation from '../components/Navigation'
import Grid from '../components/Grid'

import {
    ImagesProps,
    ListProps,
    HomeProps,
    ModuleData,
    TextProps,
    HeaderProps,
    CarouselProps,
    FooterProps,
    PagesProps,
    VideoProps,
    NavProps,
    GridProps,
} from '../components/types'
import { GetStaticProps } from 'next'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import data from '../components/moduleData'
import globalD from '../global.json'
import Video from '../components/Video'
import { useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { moduleData: data, globalData: globalD },
    }
}

const ModuleDescriptions = ({ moduleData, globalData }: HomeProps) => {
    const [navCheck, setNav] = useState<boolean>(false)

    const imageData1: ImagesProps = {
        gap: true,
        modLayout: '2-2/3',
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                linkText: 'Menu',
                linkUrl: '/menu',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
                linkText: 'Images',
                linkUrl: '/images',
            },
        ],
    }
    const imageData2: ImagesProps = {
        modLayout: '1-hero',
        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                //linkText: 'Menu',
                linkUrl: '/menu',
                headline: 'Now Hero',
            },
        ],
    }

    return (
        <div className={styles.root}>
            <Head>
                <title>Module Descriptions</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>

            <Layout moduleData={global}>
                <div
                    className={cn(styles.wrapper, {
                        [styles.layout1]: moduleData.navData.navStyle === 'layout1',
                        [styles.layout2]: moduleData.navData.navStyle === 'layout2',
                    })}
                >
                    <Label {...moduleData.labelData} text="Header Module" gap={true} />

                    <Header {...(moduleData.headerData as HeaderProps)} />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="The Header module is a banner that can have a large image, title, a background texture image, and multiple colors. All of these elements are optional. <ul>
                        <li>Two variations of mobile design (normal, alt-layout)</li>
                        <li>Background texture image is available, non texture image most likely will look unpleasant if uploaded in that spot</li>
                        <li>If title,image,backgroundImage are not passed, two colored banner is presented</li>
                        </ul>
                        "
                    />

                    <Header {...(moduleData.headerData as HeaderProps)} reverse={true} modLayout="alt-layout" />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<b>Alternate Version</b><br> Able to be in reversed order (title before image, alt color before main color)
"
                    />

                    <Label {...moduleData.labelData} text="Label Module" gap={false} />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="The Label Module is a headline with larger bolded text<br><br><b>Options</b><ul>
                        <li>Text size: sm, md, lg text</li>
                        <li>Align: left, right, center</li>
                        <li>Border or no border</li>
                        <li>Gap spacing or no gap spacing</li>
                        </ul>
                        "
                    />

                    <Label {...moduleData.labelData} text="Label: With gap, no border" gap={true} border={false} />

                    <Label {...moduleData.labelData} text="List Module" />

                    <List {...moduleData.listData} />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<ul>
                        <li>Module to show Headline, text, image, button (optional)</li>
                        <li>If any element is not passed then it does not appear on page</li>
                        <li>Link url must be passed for button to appear</li>
                        <li>Varations on list visually presented below</li>  
                        </ul><b>Options</b> 
                        <ul>
                        <li>Text size: sm, md, lg text</li>
                        <li>Align: left, right, center</li>
                        <li>Border or no border (adds background color and spacing)</li>
                        <li>Layout: Card or Article</li>
                        <li>Reverse: Reverses image/text to be on opposite sides</li>
                        </ul><br><b>Layouts </b><br><u>Article Layout:</u> Shows larger image and text alongside each other (shown above)<br><u>Card Layout:</u> Narrower banner version, with color on sides<br>
                        Option for reversing each item to be on different sides back to back



"
                    />

                    <List {...moduleData.listData} reverse={true} border={false} headline="No border option" />

                    <Label {...moduleData.labelData} text="List Module: Card layout" align="center" gap={true} />

                    <List {...moduleData.listData} modLayout="card" border={false} />

                    <List {...moduleData.listData} modLayout="card" border={false} reverse={true} headline="Reversed option" />

                    <List {...moduleData.listData} modLayout="card" border={false} />

                    <Label {...moduleData.labelData} text="Images Module" gap={false} />

                    <Images {...(moduleData.imagesData as ImagesProps)} />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<ul>
                        <li>Portrays images in multiple grid formats</li>
                        <li>Image can contain buttons, headlines, and descriptions</li>
                        <li>Aspect ratio of images 4/3</li>
                        <li>Description can be provided and slides up on top of the image on hover.</li>
                        <li>If a linkUrl is provided, images are black and white until hovered on</li>
                        </ul>
                        "
                    />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<b>Options</b><br><ul>
                        <li>Gap: Can have spacing gap or no spacing gap between photos</li>
                        <li>Layout: Various layout options for different number of images included</li>
                        <li>If headline is provided it can be used instead of link text </li>
                        </ul>
                        "
                    />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<b>Layouts</b> (Visual examples below)<br><ul>
                        <li>3-1/3	: Three images, each one takes up one third of element</li>
                        <li>3-2/3: Three images, first image takes up two thirds of element</li>
                        <li>2-1/2: Two images, each one takes up half of element</li>
                        <li>2-2/3: Two images, first image takes up two thirds of element.</li>
                        <li>1-full: One image that takes up full element</li>
                        <li>1-hero: One image that takes up full element but aspect ratio of image is 16/9</li>
                        <li>Four or more images: Images are displayed in rows of 3</li>
                        </ul>
                        "
                    />

                    <Images {...(moduleData.imagesData as ImagesProps)} modLayout="3-1/3" />

                    <Images {...imageData1} gap={false} />

                    <Images {...imageData1} modLayout="2-1/2" />

                    <Images {...imageData2} />

                    <Label {...moduleData.labelData} text="Text Module (Used below as description" gap={false} />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<ul>
                        <li>This is the text module</li>
                        <li>Text block on page</li>
                        <li>Text data is parsed for HTML content allowing you to use tags</li>
                        </ul><br><b>Options </b><br><ul>
                        <li>Text size: sm, md, lg text</li>
                        <li>Align: left, right, center</li>
                        <li>Border or no border</li>
                        <li>Gap spacing or no gap spacing</li>
                        </ul>
                        "
                    />

                    <Text {...(moduleData.textData as TextProps)} align="center" textSize="lg" />

                    <Text {...(moduleData.textData as TextProps)} align="right" border={true} />

                    <Label {...moduleData.labelData} text="Carousel Module" gap={false} border={false} />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="text" />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="Utilizes Slick JS to create a sliding carousel of different elements <br><br><b>Text Layout</b><ul>
                        <li>Shows text description as well as larger byline bolded underneath</li>
                        <li>Next button now appears to change between slides</li>
                        <li>Only one slide at a time available</li>
                        </ul>
                        "
                    />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<b>Images Layout</b><ul>
                        <li>Shows an image per slide</li>
                        <li>Slidecount: Able to show up to 1, 2, or 3 slides at a time (if there are at least = image count to slides shown count)</li>
                        <li>Arrows appear with site color on side</li>
                        <li>Arrows appear over images on mobile</li>
                        <li>Visual examples below</li>
                    </ul>
"
                    />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="images" />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="images" slideCount={2} />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="images" slideCount={1} />

                    <Label {...moduleData.labelData} text="Video Module" gap={false} />

                    <Video {...(moduleData.videoData as VideoProps)} />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<ul>
                        <li>Utilizes React-Player to show video from local file or external site</li>
                        <li> Options for ext video (youtube or vimeo), or local video file</li>
                       <li> External Videos: Automatically loads video template image as placeholder, full video then loads on click. </li>

                    </ul>"
                    />

                    <Label {...moduleData.labelData} text="Grid Module" gap={false} />

                    <Grid {...(moduleData.gridData as GridProps)} />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="Row of three blocks with options for images, text, headline, button <br><br> <b>Layout Options</b> <ul>
                        <li>Text size: sm, md, lg text</li>
                        <li>Align: left, right, center</li>
                        <li>Border (true or false): shows background color and spacing around content.</li>
                    </ul>"
                    />

                    <Label {...moduleData.labelData} text="Footer Module" />

                    <Text
                        {...(moduleData.textData as TextProps)}
                        text="<ul>
                        <li>Three rows of content, gradient background </li>
                        <li>Content: Company logo, social links, phone number, website information,address info</li>
                        <li>Calls Nav component to show nav links</li>
                    </ul>"
                    />
                </div>
            </Layout>
        </div>
    )
}

export default ModuleDescriptions
