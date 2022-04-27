import styles from './card.module.scss'
import Image from 'next/image'
import { CardProps } from './types'

function Card(props: CardProps) {
    const { imageUrl, body, title } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <div className={styles.textGutter}></div>
                    <div className={styles.insideTextGutter}></div>
                    <div className={styles.titleText}>
                        <div className={styles.text}>{title}</div>
                    </div>
                    <div className={` ${styles.textGutter} ${styles.textGutter_2}`}></div>
                </div>
                <div className={styles.features}>
                    {/*                     <div className={styles.title}>
                        <div className={styles.titleText}>{title}</div>
                    </div> */}
                    <div className={styles.colorBlock}>
                        <div className={styles.colorFill}></div>
                    </div>
                    <div className={styles.imageBlock}>
                        <div className={styles.blockPicture}>
                            {imageUrl && (
                                <Image
                                    src={imageUrl}
                                    //layout="fill"
                                    height="300px"
                                    width="400px"
                                    layout="responsive"
                                    alt={title}
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles.textBlock}>
                        <div className={styles.text}>{body}</div>
                    </div>
                    <div className={styles.colorBlock}></div>
                </div>
            </div>
        </div>
    )
}

export default Card
