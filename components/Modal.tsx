'use client'
import styles from './modal.module.scss'
import cn from 'classnames'
import WindowCloser from 'elements/WindowCloser'
import { ContactModalProps, ModalContent } from '../types'
import DescBlock from 'elements/DescBlock'
import { HeadlineBlock } from 'elements/HeadlineBlock'
import { Fragment, useEffect, useState } from 'react'
import { ImageBlock } from 'elements/ImageBlock'

//hook to trigger modal
const useModal = (openEveryVisit: boolean) => {
    const [showSiteModal, showModal] = useState<boolean>(openEveryVisit)

    //hide modal after seeing it the first time
    useEffect(() => {
        const flag = localStorage.getItem('modal-flag')
        if (!flag) {
            showModal(true)
            localStorage.setItem('modal-flag', '1')
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

const Modal = ({ siteData, items, openEveryVisit = true }: ContactModalProps) => {
    const { isShowing, close } = useModal(openEveryVisit)

    let modalItems
    if (siteData?.modalData?.items) {
        modalItems = siteData?.modalData.items
    } else if (items) {
        modalItems = items
    }

    return (
        <div
            className={cn(styles.root, styles['site-modal'], {
                [styles.box]: true,
                [styles.show]: isShowing,
            })}
        >
            <div className={styles.wrapper}>
                <WindowCloser closerFunction={close} type="contact" />
                {/*  <div className={styles.title}>Stuff</div> */}

                {modalItems && (
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
