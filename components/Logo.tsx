'use client'
import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import { LogoProps, Media } from '../types'
import { useState } from 'react'
import cn from 'classnames'

const Logo = (props: LogoProps) => {
    const { logoUrl = '', link = '/' } = props
    const [logoHeight, setHeight] = useState(100)
    const [logoWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: any) => {
        setWidth(loadedMedia.currentTarget.naturalWidth)
        setHeight(loadedMedia.currentTarget.naturalHeight)
    }

    return (
        <div
            className={cn(styles.root, {
                [styles.landing]: props.isLanding,
            })}
        >
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href={link}>
                        <Image src={logoUrl} alt="logo" onLoad={calcImageSize} width={logoWidth} height={logoHeight} quality="50" priority />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo
