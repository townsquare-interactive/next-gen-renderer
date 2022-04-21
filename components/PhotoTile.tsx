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
                        height={300}
                        width={300}
                        /*                        layout="fill"
                        objectPosition="bottom center"
                        object-fit="cover" */
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default PhotoTile
