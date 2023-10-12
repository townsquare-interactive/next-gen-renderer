'use client'
import { LayoutProps } from '../types'
import styles from './containerlayout.module.scss'
import cn from 'classnames'
import ContainerHeader from './ContainerHeader'
import ContainerFooter from './ContainerFooter'
import { useEffect, useState } from 'react'
import SlidingHeader from 'elements/SlidingHeader'
import ContactModal from './ContactModal'
import Modal from './Modal'

export default function Layout(props: LayoutProps) {
    const { children, siteData, themeStyles, cName, cmsUrl } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [showContactModal, setContactModal] = useState<boolean>(false)
    const [showSiteModal, setSiteModal] = useState<boolean>(true)
    const twoPhones = true

    //modal only shows up on first visit
    useEffect(() => {
        const flag = localStorage.getItem('flag')
        if (!flag) {
            setSiteModal(true)
            localStorage.setItem('flag', '1')
        }
    }, [])

    function navSwitch() {
        setNav(!navCheck)
    }

    function triggerContactModal() {
        setContactModal(!showContactModal)
    }

    //siteData.modalData
    function triggerSiteModal() {
        //const flag = localStorage.getItem('flag')
        /*         if (flag != '1') {
            localStorage.setItem('flag', '1')
            //setSiteModal(!showSiteModal)
            setSiteModal(true)
        } else {
            setSiteModal(false)
        } */
        setSiteModal(false)
    }

    return (
        <>
            <div className={cn(styles.root, `page-${cName}`)}>
                <SlidingHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} siteData={siteData} />
                {twoPhones && <ContactModal siteData={siteData} showContactModal={showContactModal} setContactModal={triggerContactModal} />}

                {siteData.modalData && <Modal siteData={siteData} showContactModal={showSiteModal} setContactModal={triggerSiteModal} />}
                <ContainerHeader siteData={siteData} navSwitch={navSwitch} setContactModal={triggerContactModal} cmsUrl={cmsUrl} />

                <main className={'content-background'}>{children}</main>

                <ContainerFooter siteData={siteData} navSwitch={navSwitch} cmsUrl={cmsUrl} />
            </div>
        </>
    )
}
