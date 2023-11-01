'use client'
import { LayoutProps } from '../types'
import styles from './containerlayout.module.scss'
import cn from 'classnames'
import ContainerHeader from './ContainerHeader'
import ContainerFooter from './ContainerFooter'
import { useState } from 'react'
import SlidingHeader from 'elements/SlidingHeader'
import ContactModal from './ContactModal'
import Modal from './Modal'

export default function Layout(props: LayoutProps) {
    const { children, siteData, themeStyles, cName, cmsUrl, pageModalVars } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [showContactModal, setContactModal] = useState<boolean>(false)
    const twoPhones = true

    function navSwitch() {
        setNav(!navCheck)
    }

    function triggerContactModal() {
        setContactModal(!showContactModal)
    }

    return (
        <>
            <div className={cn(styles.root, `page-${cName}`)}>
                <SlidingHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} siteData={siteData} />
                {twoPhones && <ContactModal siteData={siteData} showContactModal={showContactModal} setContactModal={triggerContactModal} />}

                <ContainerHeader siteData={siteData} navSwitch={navSwitch} setContactModal={triggerContactModal} cmsUrl={cmsUrl} />

                <main className={'content-background'}>{children}</main>

                {siteData.modalData && <Modal siteData={siteData} modalType="global" pageModalVars={pageModalVars} themeStyles={themeStyles} />}

                <ContainerFooter siteData={siteData} navSwitch={navSwitch} cmsUrl={cmsUrl} />
            </div>
        </>
    )
}
