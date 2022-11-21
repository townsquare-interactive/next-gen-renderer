import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { HomeProps } from '../types'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import { useRouter } from 'next/router'
import { getDomain, decideColumns, setColors, domainImage, findHomePageSlug, createInlineStyles } from '../functions'
import cn from 'classnames'
import { Fragment } from 'react'

//runs at build time just like static props
export const getStaticProps = async () => {
    const resLayout = await fetch(getDomain(true) + '/layout.json')
    const CMSLayout = await resLayout.json()

    const resPageList = await fetch(getDomain(true) + '/pages/page-list.json')
    const pageList = await resPageList.json()

    const homePageSlug = findHomePageSlug(pageList)

    const resPage = await fetch(getDomain(true) + '/pages/' + homePageSlug + '.json')
    let page = await resPage.json()

    return {
        props: { page, CMSLayout },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Home = (props: HomeProps) => {
    let { page, CMSLayout } = props
    const router = useRouter()

    const cmsTheme = CMSLayout.theme || 'charlotte'

    const themeStyles = setColors(CMSLayout.cmsColors, cmsTheme)

    const columnStyles = page ? decideColumns(page.data) : 'wide-column'

    const colorStyles = createInlineStyles(themeStyles)

    const cmsUrl = 'clttestsiteforjoshedwards.production.townsquareinteractive.com'

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
                {page.seo?.descr ? <meta name="description" content={page.seo.descr} /> : <meta name="description" content="description" />}
                {page.seo?.imageOverride ||
                    (page.seo?.selectedImage && (
                        <>
                            <meta property="og:image" content={domainImage(page.seo.imageOverride || page.seo.selectedImage[0], true, cmsUrl)} />
                            <meta property="og:image:type" content="image/jpg" />
                            <meta property="og:image:width" content="1024" />
                            <meta property="og:image:height" content="1024" />
                        </>
                    ))}
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                {CMSLayout.favicon && <link rel="shortcut icon" href={domainImage(CMSLayout.favicon, true, cmsUrl)} />}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <Layout CMSLayout={CMSLayout} themeStyles={themeStyles}>
                <style>{colorStyles}</style>
                {page.data && (
                    <div className={styles.root}>
                        <div className={styles.featured}>
                            <Renderer
                                config={page.data.modules[0]}
                                themeStyles={themeStyles}
                                width={page.data.sections[0] ? page.data.sections[0].wide : ''}
                                cmsUrl={cmsUrl}
                            />
                        </div>

                        <div
                            className={cn(styles.columns, {
                                [styles['wide-column']]: columnStyles === 'wide-column',
                                [styles['half-columns']]: columnStyles === 'half-columns',
                                [styles['third-columns']]: columnStyles === 'third-columns',
                                [styles['fourth-columns']]: columnStyles === 'fourth-columns',
                                [styles['two-third_one-third']]: columnStyles === 'two-third_one-third',
                                [styles['one-third_two-third']]: columnStyles === 'one-third_two-third',
                                [styles['one-fourth_three-fourth']]: columnStyles === 'one-fourth_three-fourth',
                                [styles['three-fourth_one-fourth']]: columnStyles === 'three-fourth_one-fourth',
                                [styles['half_one-fourth_one-fourth']]: columnStyles === 'half_one-fourth_one-fourth',
                                [styles['one-fourth_one-fourth_half']]: columnStyles === 'one-fourth_one-fourth_half',
                                [styles['one-fourth_half_one-fourth']]: columnStyles === 'one-fourth_half_one-fourth',
                            })}
                        >
                            {page.data.modules.map((data: any, idx: number) => (
                                <Fragment key={idx}>
                                    {data && idx != 0 ? (
                                        <div
                                            className={cn(styles['column' + (idx + 1)], {
                                                [styles[`column ${idx + 1}`]]: idx != 0,
                                                [styles.thirdColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '316',
                                                [styles.halfColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '484',
                                                [styles.twoThirdColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '652',
                                                [styles.threeFourthColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '736',
                                                [styles.oneFourthColumn]: page.data.sections[idx] && page.data.sections[idx].wide == '232',
                                            })}
                                        >
                                            <Renderer
                                                config={data}
                                                themeStyles={themeStyles}
                                                width={page.data.sections[idx] ? page.data.sections[idx].wide : ''}
                                                cmsUrl={cmsUrl}
                                            />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </Layout>
        </div>
    )
}

export default Home
