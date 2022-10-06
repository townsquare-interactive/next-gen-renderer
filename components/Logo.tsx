import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import { LogoProps, Media } from './types'
import { useState } from 'react'

const Logo = (props: LogoProps) => {
    const { logoUrl = '' } = props
    const [logoHeight, setHeight] = useState(100)
    const [logoWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <Image
                                src={logoUrl}
                                alt="logo"
                                onLoadingComplete={calcImageSize}
                                width={logoWidth}
                                height={logoHeight}
                                //layout="responsive"
                                quality="50"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo
