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
import { domainImage, domain } from '../functions'

//const domain = encodeURI('localhost:3000')
//const domainFirst = process.env.NEXT_PUBLIC_BASE_URL
//const domain = encodeURI(domainFirst + ':3000')

/* const domain = encodeURI(process.env.NEXT_PUBLIC_BASE_URL + '')
console.log(process.env.NEXT_PUBLIC_BASE_URL) */

//const domain = domainFirst

//const domainFirst = process.env.NEXT_PUBLIC_HOST1

//console.log(`('first grab', ${process.env.NEXT_PUBLIC_HOST1}`)
//console.log('d2', domain2)
//console.log(process.env['HOST'])
//console.log(`${process.env.DB_HOST}`)

//console.log('The URL of this page isss: ' + global.location.hostname)

/* if (typeof window !== 'undefined') {
    const domain = window.location.hostname
} */

//runs at build time just like static props

export const getStaticPaths = async () => {
    const res = await fetch('https://townsquareinteractive.s3.amazonaws.com/' + domain() + '/pages/page-list.json')
    const data = await res.json()

    const paths = data.pages.map((page: PageListProps) => {
        return {
            params: { slug: page.slug.toString() },
        }
    })

    return {
        //props: { posts: data },
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context: Context) => {
    const slug = context.params.slug

    const resPage = await fetch('https://townsquareinteractive.s3.amazonaws.com/' + domain() + '/pages/' + slug + '.json')
    const resGlobal = await fetch('https://townsquareinteractive.s3.amazonaws.com/' + domain() + '/global.json')

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

    return (
        <div>
            <Head>
                <title>{page.name}</title>
            </Head>
            <Layout moduleData={globalData}>
                <Renderer config={page.modules} />
            </Layout>
        </div>
    )
}

export default Slug
