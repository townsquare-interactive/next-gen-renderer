import type { NextPage } from 'next'
import cn from 'classnames'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { HomeProps, PageListProps, Context } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import { getDomain, domainImage } from '../functions'
import { useRouter } from 'next/router'

//runs at build time just like static props

//const domain = encodeURI('localhost:3000')
/* const domain = encodeURI(process.env.NEXT_PUBLIC_BASE_URL + '')*/

export const getStaticProps = async (context: Context) => {
    //grabs 1 item each time
    const domain = getDomain()
    console.log('The URL of this page is: ' + domain)
    const resPage = await fetch(getDomain() + '/pages/home.json')
    const resGlobal = await fetch(getDomain() + '/global.json')

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
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>{page.seo?.title || 'title'}</title>
                {page.seo?.title && <meta property="og:title" content={page.seo.title} key="title" />}
                {page.seo?.description && <meta name="description" content={page.seo.description} />}
                {page.seo?.ogImage && (
                    <>
                        <meta property="og:image" content={domainImage(page.seo.ogImage)} />
                        <meta property="og:image:type" content="image/jpg" />
                        <meta property="og:image:width" content="1024" />
                        <meta property="og:image:height" content="1024" />
                    </>
                )}
                {globalData.seo?.favicon && <link rel="shortcut icon" href={domainImage(globalData.seo.favicon)} />}
            </Head>

            <Layout moduleData={globalData}>
                {/*   <style>{dynamicCss}</style> */}

                <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
            </Layout>
        </div>
    )
}

export default Home
