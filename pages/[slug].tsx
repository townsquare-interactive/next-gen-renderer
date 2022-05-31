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
export const getStaticPaths = async () => {
    const res = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/pages/page-list.json')
    const data = await res.json()
    console.log('pages data', data)

    const paths = data.pages.map((page: PageListProps) => {
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

export const getStaticProps = async (context: Context) => {
    const slug = context.params.slug
    //grabs 1 item each time
    const resPage = await fetch('https://townsquareinteractivetest.s3.amazonaws.com/pages/' + slug + '.json')
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

const Slug = (props: HomeProps) => {
    /* const [navCheck, setNav] = useState<boolean>(false) */
    const { page, global } = props

    //console.log(global)
    //console.log('global', global)

    return (
        <div>
            <Layout moduleData={global}>
                <Renderer config={page.modules} />
            </Layout>
        </div>
    )
}

export default Slug
