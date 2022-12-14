import styles from './header.module.scss'
import Image from 'next/image'
import { HeaderProps } from '../../types'
import cn from 'classnames'
import { domainImage } from '../../functions'

function Hero(props: HeaderProps) {
    const { reverse = false, backgroundImageUrl = '', imageUrl = '', headline = '', modLayout = 'normal', altText = '', themeStyles } = props

    const themeStylesObj = {
        backgroundColor: `${themeStyles['promoColor']}`,
        color: `${themeStyles['textColorAccent']}`,
    }

    const gutterAlt = {
        backgroundColor: `${themeStyles['accentColor2']}`,
    }

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
                <div className={styles.gutter} style={themeStylesObj}>
                    {backgroundImageUrl && (
                        <div className={styles.backgroundBlock}>
                            <Image
                                src={backgroundImage}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt=""
                                quality="30"
                                sizes="(max-width: 1920px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
                            />
                        </div>
                    )}
                </div>
                {imageUrl && (
                    <div className={styles.heroImage}>
                        <Image
                            src={mainImage}
                            fill
                            style={{ objectFit: 'cover' }}
                            alt={altText}
                            priority
                            quality="50"
                            sizes="(max-width: 1920px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
                        />
                    </div>
                )}

                <div className={styles.headline}>
                    <div className={styles.backgroundBlock} style={themeStylesObj}>
                        {backgroundImageUrl && (
                            <Image
                                src={backgroundImage}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt=""
                                quality="30"
                                sizes="(max-width: 1920px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
                            />
                        )}
                        <h1 className={styles.text}>{headline}</h1>
                    </div>
                </div>
                <div className={cn(styles.gutter, styles.gutter_alt)} style={gutterAlt}>
                    {backgroundImageUrl && (
                        <div className={styles.backgroundBlock}>
                            <Image
                                src={backgroundImage}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt=""
                                quality="30"
                                sizes="(max-width: 1920px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero
