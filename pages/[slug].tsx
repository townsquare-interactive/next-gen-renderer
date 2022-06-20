import type { NextPage } from 'next'
import cn from 'classnames'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { HomeProps, PageListProps, Context } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import { useRouter } from 'next/router'
import { domainImage, getDomain } from '../functions'
/* import NextCors from 'nextjs-cors' */

//runs at build time just like static props
export const getStaticPaths = async () => {
    const res = await fetch(getDomain() + '/pages/page-list.json')
    const data = await res.json()

    const paths = data.pages.map((page: PageListProps) => {
        return {
            params: { slug: page.slug.toString() },
        }
    })

    return {
        paths,
        //fallback: 'blocking',
        fallback: true,
    }
}

export const getStaticProps = async (context: Context) => {
    const slug = context.params.slug

    const resPage = await fetch(getDomain() + '/pages/' + slug + '.json')
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

const Slug = (props: HomeProps) => {
    const { page, globalData } = props
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
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
                <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
            </Layout>
        </div>
    )
}

export default Slug
