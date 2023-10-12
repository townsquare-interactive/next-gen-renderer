'use client'
import styles from './modal.module.scss'
import cn from 'classnames'
import NavClose from 'elements/NavClose'
import { ContactModalProps, ModalContent } from '../types'
import DescBlock from 'elements/DescBlock'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import { Fragment, useEffect, useState } from 'react'
import { ImageBlock } from 'elements/ImageBlock'

const Modal = ({ siteData, items, openEveryVisit = true }: ContactModalProps) => {
    const [showSiteModal, setSiteModal] = useState<boolean>(openEveryVisit)

    //stop modal from appearing on refresh is openEveryVisit is false
    useEffect(() => {
        const flag = localStorage.getItem('modal-flag')
        if (!flag) {
            setSiteModal(true)
            localStorage.setItem('modal-flag', '1')
        }
    }, [showSiteModal])

    function setContactModal() {
        setSiteModal(false)
    }

    const modalItems = siteData?.modalData?.items ? siteData?.modalData.items : items ? items : []

    return (
        <div
            className={cn(styles.root, styles['site-modal'], {
                [styles.box]: true,
                [styles.show]: showSiteModal,
            })}
        >
            <div className={styles.wrapper}>
                <NavClose setContactModal={setContactModal} type="contact" />
                {/*  <div className={styles.title}>Stuff</div> */}

                {modalItems && (
                    <>
                        {modalItems.map((item, index) => (
                            <Fragment key={index}>
                                {item.disabled != true && (
                                    <div className={cn(styles.item, styles[`${item.align}`])}>
                                        <ModalContent headline={item.headline} subheader={item.subheader} desc={item.desc} image={item.image} item={item} />
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

const ModalContent = ({ headline, desc, subheader, image, item }: ModalContent) => {
    return (
        <>
            {(headline || subheader) && <HeadlineBlock item={item} well={''} columns={1} modType={'modal'} />}
            {image && <ImageBlock item={item} imgsize={item.imageSize} well={''} columns={1} />}
            {desc && (
                <div className={cn(styles['txt-block'])}>
                    <DescBlock desc={desc} descSize={'md'} type={'modal'} />
                </div>
            )}
        </>
    )
}

export default Modal
