import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './hero.module.scss'
import Image from 'next/image'
import { HeroProps } from './types'
import cn from 'classnames'

function Hero(props: HeroProps) {
    return (
        <div className={styles.root}>
            <div
                className={cn({
                    [styles.wrapper]: true,
                    [styles.reverse]: props.reverse,
                })}
            >
                <div className={styles.gutter}>
                    {props.backgroundImage && (
                        <div className={styles.backgroundBlock}>
                            <Image src={props.backgroundImage} layout="fill" objectFit="cover" alt="" />
                        </div>
                    )}
                </div>
                {props.imageUrl && (
                    <div className={styles.heroImage}>
                        <Image src={props.imageUrl} layout="fill" objectFit="cover" alt="" />
                    </div>
                )}

                <div className={styles.headline}>
                    {props.backgroundImage && (
                        <div className={styles.backgroundBlock}>
                            <Image src={props.backgroundImage} layout="fill" objectFit="cover" alt="" />
                            <div className={styles.text}>{props.headline}</div>
                        </div>
                    )}
                </div>
                <div className={`${styles.gutter} ${styles.gutter_alt}`}>
                    {props.backgroundImage && (
                        <div className={styles.backgroundBlock}>
                            <Image src={props.backgroundImage} layout="fill" objectFit="cover" alt="" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero
