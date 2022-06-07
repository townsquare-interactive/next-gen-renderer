import type { NextPage } from 'next'
import cn from 'classnames'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Script from 'next/script'
import { HomeProps, PageListProps, Context } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import { domain as getDomain } from '../functions'

//runs at build time just like static props

//const domain = encodeURI('localhost:3000')
/* const domain = encodeURI(process.env.NEXT_PUBLIC_BASE_URL + '')*/

export const getStaticProps = async (context: Context) => {
    //grabs 1 item each time
    const domain = getDomain()
    console.log('The URL of this page is: ' + domain)
    const resPage = await fetch('https://townsquareinteractive.s3.amazonaws.com/' + domain + '/pages/home.json')
    const resGlobal = await fetch('https://townsquareinteractive.s3.amazonaws.com/' + domain + '/global.json')

    const page = await resPage.json()
    const globalData = await resGlobal.json()

    return {
        props: { page, globalData },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Home = (props: HomeProps) => {
    const { page, globalData } = props

    console.log(process.env.NEXT_PUBLIC_BASE_URL)

    return (
        <div>
            <Head>
                <title>{page.name}</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Layout moduleData={globalData}>
                <Renderer config={page.modules} />
            </Layout>
        </div>
    )
}

export default Home
