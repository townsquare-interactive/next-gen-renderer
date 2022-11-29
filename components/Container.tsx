import styles from '../styles/Home.module.scss'
import { HomeProps, ModuleProps } from '../types'
import Layout from './Layout'
import { Renderer } from './Renderer'
import { createInlineStyles } from '../functions'
import cn from 'classnames'
import { Fragment } from 'react'

//HomeProps
export const Container = (props: any) => {
    const { page, CMSLayout } = props

    const cmsTheme = CMSLayout.theme || 'beacon-theme_charlotte'

    const cmsUrl = CMSLayout.cmsUrl

    const themeStyles = CMSLayout.cmsColors

    const columnStyles = page.data.columnStyles

    const colorStyles = createInlineStyles(themeStyles)

    return (
        <>
            <Layout CMSLayout={CMSLayout} themeStyles={themeStyles}>
                <style>{colorStyles}</style>
                {page.data && (
                    <div className={styles.root} style={{ backgroundColor: themeStyles.bckdContent }}>
                        <div className={styles.featured}>
                            <Renderer
                                config={page.data.modules[0]}
                                themeStyles={themeStyles}
                                width={page.data.sections[0] ? page.data.sections[0].wide : ''}
                                cmsUrl={cmsUrl}
                            />
                        </div>

                        <div className={cn(styles.columns, styles[`${columnStyles}`])}>
                            {page.data.modules.map((data: [ModuleProps], idx: number) => (
                                <Fragment key={idx}>
                                    {data && idx != 0 ? (
                                        <div className={cn(styles['column' + (idx + 1)], {})}>
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
        </>
    )
}
