'use client'
import styles from './container.module.scss'
import { ContainerProps, ModuleData } from '../types'
import ContainerLayout from './ContainerLayout'
import { ModuleRenderer } from './ModuleRenderer'
import { defineContainerVars } from '../functions'
import cn from 'classnames'
import { Fragment, useEffect, useState } from 'react'
import PageHead from './PageHead'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
const { library } = require('@fortawesome/fontawesome-svg-core')
import FontLoad from './FontLoad'
library.add(fas, fab, far)

const useModal = (openEveryVisit: boolean, flagName: string) => {
    const [showSiteModal, showModal] = useState<boolean>(openEveryVisit)

    //hide modal after seeing it the first time
    useEffect(() => {
        const flag = localStorage.getItem(flagName)
        if (!flag) {
            showModal(true)
            localStorage.setItem(flagName, '1')
        }
    }, [])

    function setModalVisibility() {
        showModal(!showSiteModal)
        console.log('switching modal', showSiteModal)
    }

    return {
        isShowing: showSiteModal,
        close: setModalVisibility,
    }
}

export const Container = (props: ContainerProps) => {
    const { page, siteData } = props
    const { cmsUrl, themeStyles, columnStyles } = defineContainerVars(page, siteData)

    console.log(!page.data ? page : 'there is a page here')
    const openEveryVisit = true

    const siteModalVars = [useModal(openEveryVisit, 'site')]
    let pageModalVars: any = []
    if (page.data.pageModalTitles?.length > 0) {
        for (let n = 0; n < page.data.pageModalTitles.length; n++) {
            pageModalVars[n] = useModal(openEveryVisit, `page${n}`)
        }
    }

    console.log('site vars', siteModalVars)

    return (
        <>
            {page && (
                <>
                    <PageHead page={page} siteData={siteData} pageType={page.data.slug === 'home' ? 'index' : 'slug'} />
                    <ContainerLayout siteData={siteData} themeStyles={themeStyles} cName={page.data.slug} cmsUrl={cmsUrl} pageModalVars={siteModalVars}>
                        {/*  {page.data.anchorTags && page.data.anchorTags?.length != 0 && <Anchors anchorTags={page.data.anchorTags} />}
                         */}
                        {page.data && (
                            <div className={cn(styles.root, 'container')}>
                                <div className={styles.featured}>
                                    <ModuleRenderer
                                        config={page.data.modules[0]}
                                        themeStyles={themeStyles}
                                        cmsUrl={cmsUrl}
                                        siteData={siteData}
                                        pageModalVars={pageModalVars}
                                    />
                                </div>
                                {page.data.modules[1].length != 0 && (
                                    <div className={styles['column-blocks']}>
                                        <div className={cn(styles.columns, styles[`${columnStyles}`], 'columns')}>
                                            {page.data.modules.map((data: ModuleData[], idx: number) => (
                                                <Fragment key={idx}>
                                                    {data.length != 0 && idx != 0 ? (
                                                        <div className={cn(styles['column' + (idx + 1)], styles.column)}>
                                                            <ModuleRenderer
                                                                config={data}
                                                                themeStyles={themeStyles}
                                                                cmsUrl={cmsUrl}
                                                                siteData={siteData}
                                                                pageModalVars={pageModalVars}
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
                            </div>
                        )}
                        <button onClick={pageModalVars.close}>This is a test btn</button>
                        {/* {modalStyles && <style>{modalStyles}</style>} */}
                    </ContainerLayout>
                    <FontLoad fonts={siteData.fontImport} />
                </>
            )}
        </>
    )
}
