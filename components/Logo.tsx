import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import Image from 'next/image'
import ImageSize from 'image-size'
import { LogoProps } from './types'
import { useState, useEffect } from 'react'

const Logo = (props: LogoProps) => {
    const { logoUrl = '' } = props
    const [logoHeight, setHeight] = useState('300')
    const [logoWidth, setWidth] = useState('400')

    useEffect(() => {
        //Using probe to determine logo width and height in useEffect
        const probe = require('probe-image-size')
        let printAddress = async () => {
            const a = await probe(logoUrl)
            setHeight(a.height)
            setWidth(a.width)
        }
        printAddress()
    }, [logoUrl])

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            {/*  <Image src={logoUrl} layout="fill" alt="logo" className={styles.image} objectFit="contain" objectPosition="left" /> */}
                            {/*                             <Image src={logoUrl} width="522" height="156px" alt="logo" className={styles.image} objectFit="contain" objectPosition="left" /> */}
                            <Image src={logoUrl} width={logoWidth} height={logoHeight} alt="logo" className={styles.image} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo
