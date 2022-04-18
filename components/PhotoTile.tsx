import styles from './photoTile.module.scss'
import Image from 'next/image'
import { photoProps } from './types'

/* interface photoProps {
    url: string
} */

const PhotoTile = (props: photoProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <Image
                        // Route of the image file
                        src={props.url}
                        height={300} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default PhotoTile
