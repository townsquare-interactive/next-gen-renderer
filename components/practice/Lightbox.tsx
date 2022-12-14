import Image from 'next/image'
import cn from 'classnames'
import styles from './Lightbox.module.scss'

const Lightbox = (props: any) => {
    const { item, lightbox, toggleSwitch, clickedImage } = props

    return (
        <div
            className={cn(styles.lightboxOverlay, {
                [styles.active]: lightbox === true,
            })}
        >
            <div className={styles.lightbox} onClick={toggleSwitch}>
                <div className={styles['lb-container']}>
                    <div className={styles['lb-image']}>
                        <Image
                            className={cn(styles['item_image'], 'item_image', 'beacon-lazy-load')}
                            src={clickedImage}
                            layout="fill"
                            alt={item.img_alt_tag || ''}
                            objectFit="cover"
                            objectPosition="top"
                        />
                    </div>

                    <div className={styles['lb-dataContainer']}>
                        <div className={styles['lb-data']}>
                            <div className={styles['lb-details']}>
                                <span className={styles['lb-caption']}>lightbox</span>

                                <span className={styles['lb-number']}></span>
                            </div>
                            <div className={styles['lb-closeContainer']}>
                                <a className={styles['lb-close']}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lightbox
