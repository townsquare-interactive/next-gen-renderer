import styles from './photoTiles3.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const PhotoTiles3 = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={`${styles.tileImage} ${styles.mainImage}`}>
                    <Link href="/blog">
                        <a>
                            <Image src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" layout="fill" objectFit="cover" />
                            <div className={styles.text}>Blog</div>
                        </a>
                    </Link>
                </div>
                <div className={`${styles.tileImage} ${styles.thirdImage}`}>
                    <Link href="/gallery">
                        <a>
                            <Image src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" layout="fill" objectFit="cover" />
                            <div className={styles.text}>Gallery</div>
                        </a>
                    </Link>
                </div>
                <div className={`${styles.tileImage} ${styles.thirdImage}`}>
                    <Link href="/menu">
                        <a>
                            <Image src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" layout="fill" objectFit="cover" />
                            <div className={styles.text}>Menu</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PhotoTiles3
