import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './hero.module.scss'
import Image from 'next/image'
import { Hero } from './types'

function Hero(props: Hero) {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
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
