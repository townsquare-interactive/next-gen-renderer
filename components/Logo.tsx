import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import Image from 'next/image'
import ImageSize from 'image-size'
import { LogoProps } from './types'
import { useState, useEffect } from 'react'
//import { useEffect, useState } from 'react'

//import probe from 'probe-image-size'

/* const logo = '/images/company-logo.png'
const size = probe(logo)
console.log(size) */

/* var sizeOf = ImageSize
var dimensions = sizeOf(logo)
console.log(dimensions.width, dimensions.height) */

const Logo = (props: LogoProps) => {
    const { logoUrl = '' } = props
    const [logoHeight, setHeight] = useState('300')
    const [logoWidth, setWidth] = useState('400')
    const probe = require('probe-image-size')

    useEffect(() => {
        let printAddress = async () => {
            const a = await probe(logoUrl)
            setHeight(a.height)
            setWidth(a.width)
        }
        printAddress()
    }, [logoUrl, probe])

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
