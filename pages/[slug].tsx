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
    FooterData,
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
import { Renderer } from '../components/Renderer'

//runs at build time just like static props
export const getStaticPaths = async () => {
    const res = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/pages/page-list.json')
    const data = await res.json()
    console.log('pages data', data)

    const paths = data.pages.map((page: any) => {
        return {
            params: { slug: page.slug.toString() },
        }
    })
    /*     const paths = [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }, { params: { id: '4' } }] */

    console.log('paths', paths)
    return {
        //props: { posts: data },
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: any) => {
    const slug = context.params.slug
    //grabs 1 item each time
    const resPage = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/pages/' + slug + '.json')
    const resGlobal = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/global.json')

    //const resPageList = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/pages/page-list.json')

    const page = await resPage.json()
    const global = await resGlobal.json()
    //const pageList = await resPageList.json()

    return {
        props: { page, global },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Amazon = (props: HomeProps) => {
    /* const [navCheck, setNav] = useState<boolean>(false) */
    const { page, global } = props

    //console.log(global)
    //console.log('global', global)

    return (
        <div>
            <Layout moduleData={global as ModuleData}>
                <Renderer config={page.modules} />
            </Layout>
        </div>
    )
}

export default Amazon
