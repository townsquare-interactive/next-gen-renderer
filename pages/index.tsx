import type { NextPage } from 'next'
import cn from 'classnames'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import { HomeProps, PageListProps, Context } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import data from '../components/moduleData'
import { useState } from 'react'
import { Renderer } from '../components/Renderer'

//runs at build time just like static props

export const getStaticProps = async (context: Context) => {
    //grabs 1 item each time
    const resPage = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/pages/home.json')
    const resGlobal = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/global.json')

    const page = await resPage.json()
    const global = await resGlobal.json()

    return {
        props: { page, global },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Home = (props: HomeProps) => {
    const { page, global } = props

    return (
        <div>
            <Layout moduleData={global}>
                <Renderer config={page.modules} />
            </Layout>
        </div>
    )
}

export default Home
