import styles from './card.module.scss'
import Image from 'next/image'

interface Card {
    imgSrc?: string
    children?: string
    title?: string
}

function Card(props: Card) {
    const { imgSrc, children, title } = props

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
                            {imgSrc && (
                                <Image
                                    src={imgSrc}
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
                        <div className={styles.text}>{children}</div>
                    </div>
                    <div className={styles.colorBlock}></div>
                </div>
            </div>
        </div>
    )
}

export default Card
