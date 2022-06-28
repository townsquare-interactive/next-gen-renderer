import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import Image from 'next/image'
import ImageSize from 'image-size'
import { LogoProps, Media } from './types'
import { ReactNode, useState } from 'react'
/* import probe from 'probe-image-size' */

const Logo = (props: LogoProps) => {
    const { logoUrl = '' } = props
    const [logoHeight, setHeight] = useState(100)
    const [logoWidth, setWidth] = useState(300)

    const calcAspectRatio = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            {/*  <Image src={logoUrl} layout="fill" alt="logo" className={styles.image} objectFit="contain" objectPosition="left" /> */}
                            {/*                             <Image src={logoUrl} width="522" height="156px" alt="logo" className={styles.image} objectFit="contain" objectPosition="left" /> */}
                            {/*                             <Image src={logoUrl} width={logoWidth} height={logoHeight} alt="logo" className={styles.image} /> */}
                            <Image src={logoUrl} alt="logo" onLoadingComplete={calcAspectRatio} width={logoWidth} height={logoHeight} layout="responsive" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo
