'use client'
import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import { LogoProps } from '../types'
import { ReactChild, useState } from 'react'
import cn from 'classnames'
import { ConditionalWrapper } from 'functions'

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
                    <ConditionalWrapper
                        condition={link ? true : false}
                        trueOutput={(children: ReactChild) => <Link href={link}>{children}</Link>}
                        falseOutput={(children: ReactChild) => <>{children}</>}
                    >
                        <Image src={logoUrl} alt="logo" onLoad={calcImageSize} width={logoWidth} height={logoHeight} quality="50" priority />
                    </ConditionalWrapper>
                </div>
            </div>
        </div>
    )
}

export default Logo
