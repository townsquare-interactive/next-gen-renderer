import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './header.module.scss'
import Image from 'next/image'
import { HeaderProps } from './types'
import cn from 'classnames'

function Hero(props: HeaderProps) {
    const { reverse = false, backgroundImage, imageUrl, headline = '' } = props
    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.reverse]: reverse,
                })}
            >
                <div className={styles.gutter}>
                    {backgroundImage && (
                        <div className={styles.backgroundBlock}>
                            <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" />
                        </div>
                    )}
                </div>
                {imageUrl && (
                    <div className={styles.heroImage}>
                        <Image src={imageUrl} layout="fill" objectFit="cover" alt="" />
                    </div>
                )}

                <div className={styles.headline}>
                    <div className={styles.backgroundBlock}>
                        {backgroundImage && <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" />}
                        <div className={styles.text}>{headline}</div>
                    </div>
                </div>
                <div className={cn(styles.gutter, styles.gutter_alt)}>
                    {backgroundImage && (
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
