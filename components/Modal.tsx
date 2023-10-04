'use client'
import styles from './modal.module.scss'
import cn from 'classnames'
import NavClose from 'elements/NavClose'
import { ContactModalProps } from '../types'
import DescBlock from 'elements/DescBlock'
import { HeadlineBlock } from 'elements/HeadlineBlock'

const Modal = ({ siteData, setContactModal, showContactModal }: ContactModalProps) => {
    return (
        <div
            className={cn(styles.root, styles['site-modal'], {
                [styles.box]: true,
                [styles.show]: showContactModal,
            })}
        >
            <div className={styles.wrapper}>
                <NavClose setContactModal={setContactModal} type="contact" />

                {siteData.modalData?.headline && <HeadlineBlock item={siteData.modalData} well={''} columns={1} modType={'modal'} />}

                {siteData.modalData?.text && (
                    <div className={cn(styles['txt-block'])}>
                        <DescBlock desc={siteData.modalData?.text} descSize={'md'} type={'modal'} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal
