import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { HomeProps, PageListProps, Context } from '../components/types'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { Renderer } from '../components/Renderer'
import { useRouter } from 'next/router'
import { domainImage, getDomain } from '../functions'
import cn from 'classnames'
import { Fragment } from 'react'

/* import NextCors from 'nextjs-cors' */

//runs at build time just like static props
export const getStaticPaths = async () => {
    const res = await fetch(getDomain(true) + '/pages/page-list.json')
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

    const resGlobal = await fetch(getDomain() + '/global.json')
    const globalData = await resGlobal.json()

    const resCmsGlobal = await fetch(getDomain(true) + '/siteData.json')
    let cmsGlobal = await resCmsGlobal.json()
    let cmsGlobalDesign = cmsGlobal.design

    const resPage = await fetch(getDomain(true) + '/pages/' + slug + '.json')
    let page = await resPage.json()
    page = page.backup.data || ''

    return {
        props: { page, globalData, cmsGlobalDesign },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

const Slug = (props: HomeProps) => {
    const { page, globalData, cmsGlobalDesign } = props
    const router = useRouter()

    /*     const cmsColors = {
        headlines: cmsGlobalDesign.colors.color_2.value,
        subheadlines: cmsGlobalDesign.colors.color_3.value,
        heroBckg: cmsGlobalDesign.colors.color_26.value,
        accentTxt: '#fff',
        borderColor: cmsGlobalDesign.colors.color_22.value,
        btnBckg: cmsGlobalDesign.colors.color_8.value,
    } */

    if (cmsGlobalDesign) {
        globalData.themeStyles = {
            mainColor: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_8.value : '',
            textColor: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_4.value : '',
            headingColor: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_2.value : '',
            textColorAccent: '#fff',
            linkColor: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_5.value : '',
            accentBackgroundColor: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_8.value : '',
            accentColor2: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_32.value : '',
            altColor: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_31.value : '',
            headerBackground: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_23.value : '',
            footerBackground: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_27.value : '',
            navBackground: cmsGlobalDesign.colors ? cmsGlobalDesign.colors.color_23.value : '',
        }
    }

    let columnStyles
    let colorStyles

    if (page) {
        if (page.sections[1].wide == '938') {
            columnStyles = 'wide-column'
        } else if (page.sections[1].wide == '484' && page.sections[2].wide == '484') {
            columnStyles = 'half-columns'
        } else if (page.sections[1].wide == '316' && page.sections[2].wide == '316' && page.sections[3].wide == '316') {
            columnStyles = 'third-columns'
        } else if (page.sections[1].wide == '232' && page.sections[2].wide == '232' && page.sections[3].wide == '232' && page.sections[4].wide == '232') {
            columnStyles = 'fourth-columns'
        } else if (page.sections[1].wide == '652' && page.sections[2].wide == '316') {
            columnStyles = 'two-third_one-third'
        } else if (page.sections[1].wide == '316' && page.sections[2].wide == '652') {
            columnStyles = 'one-third_two-third'
        } else if (page.sections[1].wide == '232' && page.sections[2].wide == '736') {
            columnStyles = 'one-fourth_three-fourth'
        } else if (page.sections[1].wide == '736' && page.sections[2].wide == '232') {
            columnStyles = 'three-fourth_one-fourth'
        } else if (page.sections[1].wide == '484' && page.sections[2].wide == '232' && page.sections[3].wide == '232') {
            columnStyles = 'half_one-fourth_one-fourth'
        } else if (page.sections[1].wide == '232' && page.sections[2].wide == '232' && page.sections[3].wide == '484') {
            columnStyles = 'one-fourth_one-fourth_half'
        } else if (page.sections[1].wide == '232' && page.sections[2].wide == '484' && page.sections[3].wide == '232') {
            columnStyles = 'one-fourth_half_one-fourth'
        }

        //Global styles

        /*         if (globalData && globalData.themeStyles) {
            const textColors = `.accent-txt{color:${globalData.themeStyles['textColorAccent']}} .txt-color{color:${globalData.themeStyles['textColor']}} .txt-color-heading{color:${globalData.themeStyles['headingColor']}}`

            const btnStyles = `.btn_1{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${themeStyles.mainColor}} .btn_1:hover{color: ${props.globalData.themeStyles['mainColor']}; background-color: ${props.globalData.themeStyles['textColorAccent']}} .btn_2{color: ${props.globalData.themeStyles['altColor']}; border-color: ${props.globalData.themeStyles['altColor']}} .btn_2:hover{color: ${props.globalData.themeStyles['textColorAccent']}; background-color: ${props.globalData.themeStyles['altColor']}}`

            colorStyles = textColors + btnStyles
        } */

        if (cmsGlobalDesign && globalData.themeStyles) {
            const textColors = `.accent-txt{color:${globalData.themeStyles['textColorAccent']}} .txt-color{color:${globalData.themeStyles['textColor']}} .txt-color-heading{color:${globalData.themeStyles['headingColor']}}`

            const btnStyles = `.btn_1{color: ${globalData.themeStyles['textColorAccent']}; background-color: ${globalData.themeStyles.mainColor}} .btn_1:hover{color: ${globalData.themeStyles['mainColor']}; background-color: ${globalData.themeStyles['textColorAccent']}} .btn_2{color: ${globalData.themeStyles['altColor']}; border-color: ${globalData.themeStyles['altColor']}} .btn_2:hover{color: ${globalData.themeStyles['textColorAccent']}; background-color: ${globalData.themeStyles['altColor']}}`

            colorStyles = textColors + btnStyles
        }
    }

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        /*  <div>
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
        </div> */
        /*    <div>sdf</div> */
        <Layout moduleData={globalData}>
            {page && (
                <div className={styles.root}>
                    <style>{colorStyles}</style>
                    <div className={styles.featured}>
                        <Renderer config={page.modules[0]} themeStyles={globalData.themeStyles} width={page.sections[0] ? page.sections[0].wide : ''} />
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
                        {page.modules.map((data, idx) => (
                            <Fragment key={idx}>
                                {data && idx != 0 ? (
                                    <div
                                        className={cn(styles['column' + (idx + 1)], {
                                            [styles.featured]: idx === 0,
                                            [styles[`column ${idx + 1}`]]: idx != 0,
                                            [styles.thirdColumn]: page.sections[idx] && page.sections[idx].wide == '316',
                                            [styles.halfColumn]: page.sections[idx] && page.sections[idx].wide == '484',
                                            [styles.twoThirdColumn]: page.sections[idx] && page.sections[idx].wide == '652',
                                            [styles.threeFourthColumn]: page.sections[idx] && page.sections[idx].wide == '736',
                                            [styles.oneFourthColumn]: page.sections[idx] && page.sections[idx].wide == '232',
                                        })}
                                    >
                                        <Renderer
                                            config={data}
                                            themeStyles={globalData.themeStyles}
                                            width={page.sections[idx] ? page.sections[idx].wide : ''}
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
    )
}

export default Slug
