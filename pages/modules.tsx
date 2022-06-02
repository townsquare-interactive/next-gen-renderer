import type { NextPage } from 'next'
import { createElement } from 'react'
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
import { Renderer } from '../components/Renderer'

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
import global from '../components/global.json'

import Video from '../components/Video'
import { useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { moduleData: data, globalData: global },
    }
}

const Modules = ({ moduleData, globalData }: HomeProps) => {
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
                <title>Home Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>

            <Layout moduleData={globalData}>
                <div
                    className={cn(styles.wrapper, {
                        [styles.layout1]: moduleData.navData.navStyle === 'layout1',
                        [styles.layout2]: moduleData.navData.navStyle === 'layout2',
                    })}
                >
                    <Header {...(moduleData.headerData as HeaderProps)} />

                    <Label {...moduleData.labelData} text="List Module: Article Layout" gap={false} />

                    <List {...moduleData.listData} />

                    <List {...moduleData.listData} reverse={true} border={false} headline="No border option" />

                    <Label {...moduleData.labelData} text="List Module: Card layout" gap={false} />

                    <List {...moduleData.listData} modLayout="card" border={false} />

                    <List {...moduleData.listData} modLayout="card" border={false} reverse={true} />

                    <List {...moduleData.listData} modLayout="card" border={false} />

                    <Label {...moduleData.labelData} text="Images Module" gap={false} />

                    <Images {...(moduleData.imagesData as ImagesProps)} />

                    <Images {...(moduleData.imagesData as ImagesProps)} modLayout="3-1/3" />

                    <Images {...imageData1} gap={false} />

                    <Images {...imageData1} modLayout="2-1/2" />

                    <Images {...imageData2} />

                    <Label {...moduleData.labelData} gap={false} />

                    <Text {...(moduleData.textData as TextProps)} />

                    <Label {...moduleData.labelData} text="Quotes" gap={false} border={false} />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="text" />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="images" />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="images" slideCount={2} />

                    <Carousel {...(moduleData.carouselData as CarouselProps)} modLayout="images" slideCount={1} />

                    <Video {...(moduleData.videoData as VideoProps)} />

                    <Label {...moduleData.labelData} text="Grid Module" gap={false} />

                    <Grid {...(moduleData.gridData as GridProps)} />

                    <Label {...moduleData.labelData} text="<a href='/module-descriptions'> Module Descriptions</a> " align="center" border={false} />
                </div>
            </Layout>
        </div>
    )
}

export default Modules
