import styles from './photoTiles3.module.scss'
import Image from 'next/image'

const PhotoTiles3 = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={`${styles.tileImage} ${styles.mainImage}`}>
                    {' '}
                    <Image src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" layout="fill" objectFit="cover" />
                </div>
                <div className={`${styles.tileImage} ${styles.thirdImage}`}>
                    {' '}
                    <Image src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" layout="fill" objectFit="cover" />
                </div>
                <div className={`${styles.tileImage} ${styles.thirdImage}`}>
                    {' '}
                    <Image src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg" layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>
    )
}

export default PhotoTiles3
