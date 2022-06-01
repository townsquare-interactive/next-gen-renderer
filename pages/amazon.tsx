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
import Navbar from '../components/Navbar'
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
import Burger from '../components/Burger'
import Video from '../components/Video'
import { useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
    const resPage = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/page.json')
    const resGlobal = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/global.json')
    //const data = await res.json()
    const page = await resPage.json()
    const global = await resGlobal.json()
    console.log('Global only', global)

    return {
        props: { page, global },
        //props: { moduleData: responses[0] },
        //props: { data },
    }
}

const Amazon = (props: HomeProps) => {
    /* const [navCheck, setNav] = useState<boolean>(false) */
    const { page, global } = props

    console.log(global)
    //console.log('global', global)

    return (
        <div className={styles.root}>
            <Head>
                <title>Home Page</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>

            {/* //<Layout moduleData={moduleData}> */}
            <Layout moduleData={global}>
                <Header {...(page.headerData as HeaderProps)} />

                <List {...(page.listData as ListProps)} />

                <div
                    className={cn(styles.wrapper, {
                        [styles.layout1]: global.navData.navStyle === 'layout1',
                        [styles.layout2]: global.navData.navStyle === 'layout2',
                    })}
                >
                    <Header {...(page.headerData as HeaderProps)} />

                    <Label {...page.labelData} text="List Module: Article Layout" gap={false} />

                    <List {...page.listData} />

                    <List {...page.listData} reverse={true} border={false} headline="No border option" />

                    <Label {...page.labelData} text="List Module: Card layout" gap={false} />

                    <List {...page.listData} modLayout="card" border={false} />

                    <List {...page.listData} modLayout="card" border={false} />

                    <List {...page.listData} modLayout="card" border={false} />

                    <Label {...page.labelData} text="Images Module" gap={false} />

                    <Images {...(page.imagesData as ImagesProps)} />

                    <Images {...(page.imagesData as ImagesProps)} modLayout="3-1/3" />

                    {/* <Images {...imageData1} gap={false} />

                    <Images {...imageData1} modLayout="2-1/2" />

                    <Images {...imageData2} /> */}

                    <Label {...page.labelData} gap={false} />

                    <Text {...(page.textData as TextProps)} />

                    <Label {...page.labelData} text="Quotes" gap={false} border={false} />

                    <Carousel {...(page.carouselData as CarouselProps)} modLayout="text" />

                    <Carousel {...(page.carouselData as CarouselProps)} modLayout="images" />

                    <Carousel {...(page.carouselData as CarouselProps)} modLayout="images" slideCount={2} />

                    <Carousel {...(page.carouselData as CarouselProps)} modLayout="images" slideCount={1} />

                    <Video {...(page.videoData as VideoProps)} />

                    <Label {...page.labelData} text="Grid Module" gap={false} />

                    <Grid {...(page.gridData as GridProps)} />

                    <Label {...page.labelData} text="<a href='/module-descriptions'> Module Descriptions</a> " align="center" border={false} />
                </div>
            </Layout>
        </div>
    )
}

export default Amazon
