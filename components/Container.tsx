import styles from './container.module.scss'
import { HomeProps, Module } from '../types'
import ContainerLayout from './ContainerLayout'
import { Renderer } from './Renderer'
import { createInlineStyles } from '../functions'
import cn from 'classnames'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import PageHead from './PageHead'

export const Container = (props: HomeProps) => {
    const { page, siteData } = props
    const router = useRouter()
    const cmsUrl = siteData.cmsUrl
    const themeStyles = siteData.cmsColors
    const columnStyles = page.data.columnStyles
    const colorStyles = createInlineStyles(themeStyles)

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <PageHead page={page} siteData={siteData} />
            <ContainerLayout siteData={siteData} themeStyles={themeStyles}>
                <style>{colorStyles}</style>
                {page.data && (
                    <div className={styles.root} style={{ backgroundColor: themeStyles.bckdContent }}>
                        <div className={styles.featured}>
                            <Renderer config={page.data.modules[0]} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                        </div>

                        <div className={cn(styles.columns, styles[`${columnStyles}`])}>
                            {page.data.modules.map((data: Module, idx: number) => (
                                <Fragment key={idx}>
                                    {data && idx != 0 ? (
                                        <div className={cn(styles['column' + (idx + 1)], {})}>
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
