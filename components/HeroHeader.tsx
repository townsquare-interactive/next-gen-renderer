import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './heroHeader.module.scss'
import Image from 'next/image'
import { HeroHeader } from './types'

function Header(props: HeroHeader) {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {props.headline && <div className={styles.headline}>{props.headline}</div>}
                <Image
                    src={props.imageUrl}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    //objectPosition="bottom center"
                />
            </div>
        </div>
    )
}

export default Header
