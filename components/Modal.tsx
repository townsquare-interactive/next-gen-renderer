'use client'
import styles from './modal.module.scss'
import cn from 'classnames'
import WindowCloser from 'elements/WindowCloser'
import { ArticleItems, ModalContentProps, SiteModalProps, modalItem } from '../types'
import DescBlock from 'elements/DescBlock'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import { Fragment, useEffect, useState } from 'react'
import { ImageBlock } from 'elements/ImageBlock'
import ContactFormRoutes from './ContactFormRoutes'

//hook to trigger modal
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

    function setContactModal() {
        showModal(false)
    }

    return {
        isShowing: showSiteModal,
        close: setContactModal,
    }
}

const Modal = ({ siteData, items, openEveryVisit = true, modalType = 'page', title, pageModalVars, modalNum = 0 }: SiteModalProps) => {
    const flag = modalType === 'page' ? 'page-modal' : 'global-modal'

    //const { isShowing, close } = useModal(openEveryVisit, flag)

    //current modals can be global from siteData or inside of page modules
    let modalItems: modalItem[] | ArticleItems[] = []
    if (siteData?.modalData?.items && modalType != 'page') {
        modalItems = siteData?.modalData.items
    } else if (items) {
        modalItems = items
    }

    const id = 'page-mod'

    return (
        <div
            className={cn(styles.root, styles['site-modal'], 'modal', {
                [styles.box]: true,
                [styles.show]: pageModalVars && pageModalVars[modalNum].isShowing,
                [id]: id && modalType === 'page',
            })}
        >
            {/*  <style>{id ? `.${id}{visibility:hidden}` : ''}</style> */}
            <div className={styles.wrapper}>
                {items && <div className={styles.title}>{title}</div>}
                {pageModalVars && <WindowCloser closerFunction={pageModalVars[modalNum].close} type="contact" />}
                <div className={styles['modal-body']}>
                    {modalItems.length != 0 && (
                        <>
                            {modalItems.map((item, index) => (
                                <Fragment key={index}>
                                    {item.disabled != true && (
                                        <div className={cn(styles.item, styles[`${item.align}`])}>
                                            <ModalContent
                                                headline={item.headline}
                                                subheader={item.subheader}
                                                desc={item.desc || ''}
                                                image={item.image}
                                                item={item}
                                            />
                                        </div>
                                    )}
                                    {siteData?.modalData?.contactFormData && modalType != 'page' && (
                                        <ContactFormRoutes
                                            items={modalItems}
                                            contactFormData={siteData?.modalData?.contactFormData}
                                            modType="modal"
                                            siteData={siteData}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

const ModalContent = ({ headline, desc, subheader, image, item }: ModalContentProps) => {
    return (
        <>
            {(headline || subheader) && <HeadlineBlock item={item} well={''} columns={1} modType={'modal'} />}
            {image && <ImageBlock item={item} imgsize={item.imageSize} well={''} columns={1} />}
            {desc && <DescBlock desc={desc} descSize={'md'} type={'modal'} />}
        </>
    )
}

export default Modal
