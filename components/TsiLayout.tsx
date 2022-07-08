import { tsiLayoutProps } from '../components/types'
import styles from './TsiLayout.module.scss'
import cn from 'classnames'
import Lightbox from '../elements/Lightbox'
import { useState } from 'react'

export default function Layout(props: tsiLayoutProps) {
    const { children } = props
    /*     const [lightbox, setLightbox] = useState(false)
    const [currentImage, setCurrentImage] = useState() */

    function toggleLightbox() {
        setLightbox((lightbox) => !lightbox)
    }

    return (
        <div className={styles.container}>
            {children}
            {/* {lightbox && <Lightbox currentImage={currentImage} lightbox={lightbox} toggleLightbox={toggleLightbox} />} */}
        </div>
    )
}
