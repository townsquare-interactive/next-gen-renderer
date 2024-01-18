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
import DeferLoad from './DeferLoad'
library.add(fas, fab, far)
import { redirect } from 'next/navigation'

export interface ModalDef {
    autoOpen: boolean
    flagName: string
    openEveryTime: boolean
}

//create array of modals so we can allow multiple to be used at once
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

/* const CreateModalList = (autoOpen: boolean, flag: string, pageModalVars: PageModalVars[]) => {
    pageModalVars.push(useModal(autoOpen || false, flag))
} */

export const Container = (props: ContainerProps) => {
    const { page, siteData } = props
    const { cmsUrl, themeStyles, columnStyles } = defineContainerVars(page, siteData)
    const siteModalVars = [useModal(siteData.modalData?.autoOpen || false, 'site', false)]

    if (siteData.published === false) {
        console.log('unpublish time')
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
                    </ContainerLayout>
                    <DeferLoad fonts={siteData.fontImport} siteData={siteData} />
                </>
            )}
        </>
    )
}
