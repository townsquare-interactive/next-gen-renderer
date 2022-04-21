import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './Header.module.scss'
import Image from 'next/image'

interface HeaderProps {
    headline: string
}

function Header(props: HeaderProps) {
    return (
        <div className={styles.root} style={{ backgroundImage: `url(${dl1})` }}>
            {/* <div className={styles.wrapper}>
                <div className={styles.headline}>{props.headline}</div> */}
            {/*                 <Image
                    //src="/images/pexels-pixabay-260922.jpg"
                    src={dl1}
                    width="400px"
                    height="300px"
                /> */}

            <div className={styles.wrapper} style={{ position: 'relative', width: '100%', height: '350px', maxWidth: '100%' }}>
                <div className={styles.headline}>{props.headline}</div>
                <Image
                    // Route of the image file
                    src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg"
                    // height={600}
                    //width={800}
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
