import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './hero.module.scss'
import Image from 'next/image'
import { HeaderProps } from './types'

function Hero(props: HeaderProps) {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Image
                    src="/images/honeycomb-34984.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    //objectPosition="bottom center"
                />

                <div className={styles.gutter}></div>
                <div className={styles.heroImage}>
                    <Image
                        src={props.imageUrl}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                        //objectPosition="bottom center"
                    />
                </div>

                <div className={styles.headline}>{props.headline}</div>
                <div className={`${styles.gutter} ${styles.gutter_alt}`}></div>
            </div>
        </div>
    )
}

export default Hero
