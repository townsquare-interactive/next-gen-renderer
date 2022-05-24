import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import Image from 'next/image'
import ImageSize from 'image-size'
import probe from 'probe-image-size'
import { useEffect, useState } from 'react'
import { LogoProps } from './types'

/* const logo = '/images/company-logo.png'
const size = probe(logo)
console.log(size) */

/* var sizeOf = ImageSize
var dimensions = sizeOf(logo)
console.log(dimensions.width, dimensions.height) */

const Logo = (props: LogoProps) => {
    const { logoUrl = '' } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            {/*  <Image src={logoUrl} layout="fill" alt="logo" className={styles.image} /> */}
                            <Image src={logoUrl} width="722" height="156px" alt="logo" className={styles.image} objectFit="contain" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Logo
