import type { NextPage } from 'next'
import cn from 'classnames'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { HomeProps, PageListProps, Context } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import page from '../cms.json'
import { getDomain } from '../functions'

export const getStaticProps = async (context: Context) => {
    const resGlobal = await fetch(getDomain() + '/global.json')

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
    //const { page, globalData } = props
    const { page, globalData } = props

    return (
        <div>
            <Layout moduleData={globalData}>
                <Renderer config={page.modules} themeStyles={globalData.themeStyles} />
            </Layout>
        </div>
    )
}

export default Slug
