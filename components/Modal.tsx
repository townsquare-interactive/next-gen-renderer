'use client'
import styles from './modal.module.scss'
import cn from 'classnames'
import WindowCloser from 'elements/WindowCloser'
import { ArticleItems, SiteModalProps, modalItem } from '../types'
import { Fragment } from 'react'
import ContactFormRoutes from './ContactFormRoutes'
import Article from 'components/Article'
import Map from './Map'

const Modal = (props: SiteModalProps) => {
    const {
        siteData,
        items,
        modalType = 'page',
        title,
        pageModalVars,
        modalNum = 0,
        imgsize = 'landscape_16_9',
        align = 'center',
        themeStyles,
        uid = 'site_modal',
    } = props

    //current modals can be global from siteData or inside of page modules
    let modalItems: modalItem[] | ArticleItems[] = []
    if (siteData?.modalData?.items && modalType != 'page') {
        modalItems = siteData?.modalData.items
    } else if (items) {
        modalItems = items
    }

    return (
        <div
            className={cn(styles.root, styles['site-modal'], 'modal', styles.box, `id_${uid}`, {
                [styles.show]: pageModalVars && pageModalVars[modalNum].isShowing,
                //[id]: id && modalType === 'page',
            })}
        >
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.title, {
                        [styles['no-text']]: !title,
                    })}
                >
                    {title}
                </div>
                {pageModalVars && <WindowCloser closerFunction={pageModalVars[modalNum].toggleModal} type="contact" />}
                <div className={styles['modal-body']}>
                    {modalItems.length != 0 && (
                        <>
                            {/* {item.disabled != true && (
                                        <div className={cn(styles.item, styles[`${item.align}`])}>
                                            <ModalContent
                                                headline={item.headline}
                                                subheader={item.subheader}
                                                desc={item.desc || ''}
                                                image={item.image}
                                                item={item}
                                            /> 
                                         
                                        </div>
                                    )} */}
                            <Article
                                items={modalItems}
                                type={'modal'}
                                well=""
                                imgsize={imgsize}
                                align={align}
                                modType="Article"
                                columns={1}
                                themeStyles={themeStyles}
                                modId={'modalArticle'}
                            />
                            {modalItems.map((item, index) => (
                                <Fragment key={index}>
                                    {((siteData?.modalData?.contactFormData && modalType != 'page') || (item.contactFormData && modalType === 'page')) && (
                                        <ContactFormRoutes
                                            items={modalItems}
                                            contactFormData={item.contactFormData ? item.contactFormData : siteData?.modalData?.contactFormData}
                                            modType="modal"
                                            siteData={siteData}
                                        />
                                    )}

                                    {item.plugin === '[map]' && <Map siteData={siteData} mapTitle="" />}
                                </Fragment>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

/* const ModalContent = ({ headline, desc, subheader, image, item }: ModalContentProps) => {
    return (
        <>
            {(headline || subheader) && <HeadlineBlock item={item} modType={'modal'} />}
            {image && <ImageBlock item={item} imgsize={item.imageSize} />}
            {desc && <DescBlock desc={desc} descSize={'md'} type={'modal'} />}
            {item.visibleButton && <ButtonWrap well={0} type={'article_1'} columns={1} {...item} />}

        </>
    )
} */

export default Modal
