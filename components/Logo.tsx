import styles from './logo.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import Image from 'next/image'
import ImageSize from 'image-size'
import probe from 'probe-image-size'
import { useEffect, useState } from 'react'

/* const logo = '/images/company-logo.png'
const size = probe(logo)
console.log(size) */

/* var sizeOf = ImageSize
var dimensions = sizeOf(logo)
console.log(dimensions.width, dimensions.height) */

const Logo = (logo: any) => {
    //let img = '/images/company-logo.png'
    /*     let img = <Image src="/images/company-logo.png" />

    img.onload = function () {
        img.naturalWidth
    }
    img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif' */

    logo = '/images/company-logo.png'

    const [imageWidth, setWidth] = useState<number>()
    const [imageHeight, setHeight] = useState<number>()

    useEffect(() => {
        if (process.browser) {
            var img = document.createElement('img')

            img.src = '/images/company-logo.png'

            img.onload = function () {
                console.log(img.width + ' x ' + img.height)
                setWidth(img.width)
                setHeight(img.height)
            }
        }
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Image src="/images/company-logo.png" layout="fill" alt="logo" className={styles.image} />
                </div>
            </div>
        </div>
    )
}

export default Logo
