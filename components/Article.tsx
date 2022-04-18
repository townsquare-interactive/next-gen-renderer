import styles from './article.module.scss'
import { postData } from '../components/types'
import Image from 'next/image'
import cn from 'classnames'

/* interface postData {
    title: string
    body: string
} */

const Article = (props: postData) => {
    return (
        <div className={styles.root}>
            <div
                className={cn({
                    [styles.wrapper]: true,
                    [styles.bordered]: props.border,
                    [styles.imageArticle]: props.imageUrl,
                })}
            >
                {props.imageUrl && (
                    <div className={styles.imageBlock}>
                        <Image
                            src={props.imageUrl}
                            /* height={600} // Desired size with correct aspect ratio
                    width={800} // Desired size with correct aspect ratio */
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </div>
                )}
                <div className={styles.allText}>
                    <div className={styles.title}>
                        <div className={styles.text}>{props.title}</div>
                    </div>
                    <div className={styles.textBlock}>
                        <div className={styles.text}>{props.body}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
