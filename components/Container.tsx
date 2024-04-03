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
library.add(fas, fab, far)
import { redirect } from 'next/navigation'
import { CustomComponents } from './custom/CustomComponents'
import dynamic from 'next/dynamic'
//dynamic import with ssr false allows it load after initial render
const DeferLoad = dynamic(() => import('./DeferLoad'), {
    ssr: false,
})

const useCustomComponents = false

export interface ModalDef {
    autoOpen: boolean
    flagName: string
    openEveryTime: boolean
}

//create array of modals so we can allow multiple to be used at once for page modals
const useModals = (modals: ModalDef[]) => {
    const init = Array(modals.length).fill(false)
    const [showSiteModals, showModals] = useState<boolean[]>(init)

    useEffect(() => {
        const showModalFlags = modals.map(({ flagName, autoOpen, openEveryTime }) => {
            if (!openEveryTime) {
                const alreadyOpened = localStorage.getItem(flagName)
                if (!alreadyOpened) {
                    localStorage.setItem(flagName, '1')
                    return autoOpen
                }
                return false
            } else {
                return true
            }
        })
        showModals(showModalFlags)
    }, [])

    return showSiteModals.map((isShowing, index) => {
        const toggleModal = () => {
            const flags = showSiteModals.map((flag, i) => {
                if (i === index) {
                    return !isShowing
                }
                return flag
            })
            showModals(flags)
        }

        return {
            isShowing,
            toggleModal,
        }
    })
}

//set states for single site modal
const useModal = (autoOpen: boolean, flagName: string, openEveryTime: boolean) => {
    const [showSiteModal, showModal] = useState<boolean>(autoOpen)

    //hide modal after seeing it the first time
    useEffect(() => {
        if (!openEveryTime) {
            const flag = localStorage.getItem(flagName)
            if (!flag) {
                showModal(true)
                localStorage.setItem(flagName, '1')
            }
        } else {
            showModal(true)
        }
    }, [])

    function setModalVisibility() {
        showModal(!showSiteModal)
    }

    return {
        isShowing: showSiteModal,
        toggleModal: setModalVisibility,
    }
}

export const Container = (props: ContainerProps) => {
    const { page, siteData } = props
    const { cmsUrl, themeStyles, columnStyles } = defineContainerVars(page, siteData)
    const siteModalVars = [useModal(siteData.modalData?.autoOpen || false, 'site', false)]

    if (siteData.published === false) {
        console.log('unpublished site')
        redirect(siteData.redirectUrl || 'https://townsquareinteractive.com/')
    }

    const modalArgs: ModalDef[] = (page.data.pageModals || []).map((m, n) => {
        return {
            autoOpen: m.autoOpen || false,
            flagName: `page${n}`,
            //openEveryTime: m.openEveryTime || false,
            openEveryTime: false,
        }
    })
    const pageModalVars = useModals(modalArgs)

    //add fb feed component
    /*     if (siteData.customComponents && siteData.customComponents?.filter((e: any) => e.type === 'FacebookFeed').length < 1) {
        siteData.customComponents?.push({ src: 'https://www.facebook.com/facebook', type: 'FacebookFeed' })
        console.log(siteData.customComponents)
    } */

    return (
        <>
            {page && (
                <>
                    <PageHead page={page} siteData={siteData} pageType={page.data.slug === 'home' ? 'index' : 'slug'} />
                    <ContainerLayout
                        siteData={siteData}
                        themeStyles={themeStyles}
                        cName={page.data.slug}
                        cmsUrl={cmsUrl}
                        pageModalVars={siteModalVars}
                        pageScripts={page.data.scripts || ''}
                    >
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
                    </ContainerLayout>

                    {siteData.customComponents && useCustomComponents && <CustomComponents config={siteData.customComponents} />}

                    {siteData.styles?.global && <style>{siteData.styles.global}</style>}

                    {/*                     {siteData.vcita?.businessId && <Engage {...siteData.vcita} />} */}

                    <DeferLoad
                        fonts={siteData.fontImport}
                        globalStyles={siteData.styles ? siteData.styles : siteData.allStyles}
                        isLanding={siteData.siteType === 'landing' ? true : false}
                    />
                </>
            )}
        </>
    )
}
