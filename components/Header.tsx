import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './header.module.scss'
import Image from 'next/image'
import { HeaderProps } from './types'
import cn from 'classnames'
import { domainImage } from '../functions'

function Hero(props: HeaderProps) {
    const { reverse = false, backgroundImageUrl = '', imageUrl = '', headline = '', modLayout = 'normal', altText = '' } = props

    const backgroundImage = domainImage(backgroundImageUrl)
    const mainImage = domainImage(imageUrl)

    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.reverse]: reverse,
                    [styles.altLayout]: modLayout === 'alt-layout',
                })}
            >
                <div className={styles.gutter}>
                    {backgroundImageUrl && (
                        <div className={styles.backgroundBlock}>
                            <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" />
                        </div>
                    )}
                </div>
                {imageUrl && (
                    <div className={styles.heroImage}>
                        <Image src={mainImage} layout="fill" objectFit="cover" alt={altText} priority />
                    </div>
                )}

                <div className={styles.headline}>
                    <div className={styles.backgroundBlock}>
                        {backgroundImageUrl && <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" />}
                        <h1 className={styles.text}>{headline}</h1>
                    </div>
                </div>
                <div className={cn(styles.gutter, styles.gutter_alt)}>
                    {backgroundImageUrl && (
                        <div className={styles.backgroundBlock}>
                            <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero
