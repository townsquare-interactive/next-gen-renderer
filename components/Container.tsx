'use client'
import styles from './container.module.scss'
import { ContainerProps, ModuleData } from '../types'
import ContainerLayout from './ContainerLayout'
import { ModuleRenderer } from './ModuleRenderer'
import { defineContainerVars, getHomePage2 } from '../functions'
import cn from 'classnames'
import { Fragment, useEffect, useState } from 'react'
import PageHead from './PageHead'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')
import FontLoad from './FontLoad'
import { useRouter } from 'next/router'
import useSWR from 'swr'

library.add(fas, fab, far)

//const fetcher = (url) => fetch(url).then((res) => res.json())

export const Container = (props: ContainerProps) => {
    const { page, siteData } = props
    const { cmsUrl, themeStyles, columnStyles } = defineContainerVars(page, siteData)
    //const [isLoaded, hasLoaded] = useState(false)

    console.log(page.data)

    /* const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const theUrl = `https://townsquareinteractive.s3.amazonaws.com/wanderlustadventures/pages/${page.data.slug}.json` */

    /*     const fetcher = getHomePage2

    const { data, error, isValidating } = useSWR(mounted ? theUrl : '', fetcher, { refreshInterval: 10, revalidateOnMount: true, revalidateIfStale: true }) */

    //console.log(data?.page?.data ? data.page.data : 'not here')

    //let trueData = data ? data.page : page
    //let trueData = page

    /*     if (isValidating) {
        page = page
    } else if (data) {
        page = data.page
    }
 */
    /*     if (error) return <div>failed to load</div>
    if (isValidating) return <div>loading...</div> */
    return (
        <>
            {page && (
                <>
                    <PageHead page={page} siteData={siteData} pageType={page.data.slug === 'home' ? 'index' : 'slug'} />
                    <ContainerLayout siteData={siteData} themeStyles={themeStyles} cName={page.data.slug}>
                        {/*  {page.data.anchorTags && page.data.anchorTags?.length != 0 && <Anchors anchorTags={trueData.data.anchorTags} />}
                         */}
                        {page.data && (
                            <div className={cn(styles.root, 'container')}>
                                <div className={styles.featured}>
                                    <ModuleRenderer config={page.data.modules[0]} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                                </div>
                                {page.data.modules[1].length != 0 && (
                                    <div className={styles['column-blocks']}>
                                        <div className={cn(styles.columns, styles[`${columnStyles}`], 'columns')}>
                                            {page.data.modules.map((data: ModuleData[], idx: number) => (
                                                <Fragment key={idx}>
                                                    {data.length != 0 && idx != 0 ? (
                                                        <div className={cn(styles['column' + (idx + 1)], styles.column)}>
                                                            <ModuleRenderer config={data} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                                                        </div>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </Fragment>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </ContainerLayout>
                    <FontLoad fonts={siteData.fontImport} />
                </>
            )}
        </>
    )
}
