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
import { useRouter } from 'next/router'
import { domainImage, getDomain } from '../functions'

/* export default async function handler(req, res) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  
    try {
      await res.unstable_revalidate('/path-to-revalidate')
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  } */

//elitesports.com/live
//elitesports.com/preview

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
        //props: { posts: data },
        paths,
        fallback: 'blocking',
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

    /* console.log('vercel url', process.env.NEXT_PUBLIC_VERCEL_URL) */

    /*  const { asPath } = useRouter()
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

    const URL = `${origin}`
    console.log(URL) */

    /* const [navCheck, setNav] = useState<boolean>(false) */

    /* const { asPath } = useRouter()
    const origin = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : ''

    const URL = `${origin}`
    console.log('url', URL) */

    //console.log(global)
    //console.log('global', global)
    /*     let fav
    page.seo.ogImage ?  fav = domainImage(page.seo.ogImage  : fav= '') */

    return (
        <div>
            {page.seo && (
                <Head>
                    <title>{page.seo.title || 'title'}</title>
                    <meta property="og:title" content={page.seo.title || 'title'} key="title" />
                    <meta name="description" content={page.seo.description || 'description'} />
                    <meta property="og:image" content={domainImage(page.seo.ogImage) || ''} />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:image:width" content="1024" />
                    <meta property="og:image:height" content="1024" />
                    <link rel="shortcut icon" href={domainImage(page.seo.favicon || '') || ''} />
                </Head>
            )}

            <Layout moduleData={globalData}>
                <Renderer config={page.modules} />
            </Layout>
        </div>
    )
}

export default Slug
