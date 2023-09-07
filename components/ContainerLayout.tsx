'use client'
import { LayoutProps } from '../types'
import styles from './containerlayout.module.scss'
import cn from 'classnames'
import ContainerHeader from './ContainerHeader'
import ContainerFooter from './ContainerFooter'
import { useState } from 'react'
import SlidingHeader from 'elements/SlidingHeader'
import ContactModal from './ContactModal'

export default function Layout(props: LayoutProps) {
    const { children, siteData, themeStyles, cName, cmsUrl } = props
    const [navCheck, setNav] = useState<boolean>(false)
    const [showContactModal, setModal] = useState<boolean>(false)

    const twoPhones = true

    function navSwitch() {
        setNav(!navCheck)
    }

    function setContactModal() {
        setModal(!showContactModal)
    }

    return (
        <>
            <div className={cn(styles.root, `page-${cName}`)}>
                <SlidingHeader navSwitch={navSwitch} navCheck={navCheck} themeStyles={themeStyles} siteData={siteData} />
                {twoPhones && <ContactModal siteData={siteData} showContactModal={showContactModal} setContactModal={setContactModal} />}
                <ContainerHeader siteData={siteData} navSwitch={navSwitch} setContactModal={setContactModal} cmsUrl={cmsUrl} />

                <main className={'content-background'}>{children}</main>

                <ContainerFooter siteData={siteData} navSwitch={navSwitch} cmsUrl={cmsUrl} />
            </div>
        </>
    )
}
