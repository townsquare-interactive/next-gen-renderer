import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './heroBanner.module.scss'
import Image from 'next/image'

interface HeaderProps {
    headline: string
}

function Header(props: HeaderProps) {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.headline}>{props.headline}</div>
                <Image
                    src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg"
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
