import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { HomeProps, Context } from '../../types'
import Layout from '../../components/Layout'
import { Renderer } from '../../components/Renderer'
/* import { useRouter } from 'next/router' */
import { getDomain, decideColumns, setColors, domainImage, findHomePageSlug } from '../../functions'
import cn from 'classnames'
import { Fragment, use } from 'react'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'

//runs at build time just like static props
/* export const getStaticProps = async (context: Context) => {
    const resLayout = await fetch(getDomain(true) + '/layout.json')
    const CMSLayout = await resLayout.json()

    const resCmsGlobal = await fetch(getDomain(true) + '/siteData.json')
    let cmsGlobal = await resCmsGlobal.json()
    //let cmsGlobalDesign = cmsGlobal.design

    const resPageList = await fetch(getDomain(true) + '/pages/page-list.json')
    const pageList = await resPageList.json()

    const homePageSlug = findHomePageSlug(pageList)

    //const resPage = await fetch(getDomain(true) + '/pages/' + 'home' + '.json')
    const resPage = await fetch(getDomain(true) + '/pages/' + homePageSlug + '.json')
    let page = await resPage.json()

    return {
        props: { page, CMSLayout, cmsGlobal, pageList },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
} */

//No longer need getStaticProps, can now use an async function,

const NewPage = () => {
    async function getData() {
        const resCmsGlobal = await fetch(getDomain(true) + '/layout.json', {
            next: { revalidate: 5 },
        })
        let cmsGlobal = await resCmsGlobal.json()

        return cmsGlobal
    }
    //Server Components can get data using React use instead of async await
    const data = use(getData())

    return (
        <div style={{ padding: '20px' }}>
            <h1>List of Page Names</h1>

            {data.cmsNav.map((page: any, idx: number) => (
                <div key={idx}>{page.title}</div>
            ))}
        </div>
    )
}

export default NewPage
