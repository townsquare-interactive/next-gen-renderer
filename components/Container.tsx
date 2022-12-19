'use client'
import styles from './container.module.scss'
import { ContainerProps, ModuleData } from '../types'
import ContainerLayout from './ContainerLayout'
import { Renderer } from './Renderer'
import { defineContainerVars } from '../functions'
import cn from 'classnames'
import { Fragment } from 'react'
import PageHead from './PageHead'

export const Container = (props: ContainerProps) => {
    const { page, siteData } = props
    //const router = useRouter()
    const { cmsUrl, themeStyles, columnStyles, colorStyles } = defineContainerVars(page, siteData)
    /* 
    if (router.isFallback) {
        return <div>Loading...</div>
    } */

    return (
        <>
            <PageHead page={page} siteData={siteData} />
            <ContainerLayout siteData={siteData} themeStyles={themeStyles}>
                <style>{colorStyles}</style>
                {page.data && (
                    <div className={cn(styles.root, 'content-background')}>
                        <div className={styles.featured}>
                            <Renderer config={page.data.modules[0]} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                        </div>

                        <div className={cn(styles.columns, styles[`${columnStyles}`])}>
                            {page.data.modules.map((data: ModuleData, idx: number) => (
                                <Fragment key={idx}>
                                    {data && idx != 0 ? (
                                        <div className={cn(styles['column' + (idx + 1)])}>
                                            <Renderer config={data} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </ContainerLayout>
        </>
    )
}
