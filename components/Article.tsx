import styles from './article.module.scss'
import { postData } from '../components/types'
import Image from 'next/image'
import cn from 'classnames'

/* interface postData {
    title: string
    body: string
} */

const Article = (props: postData) => {
    const { title, body, border = true, imageUrl, linkUrl, btnText } = props
    return (
        <div className={styles.root}>
            <div
                className={cn({
                    [styles.wrapper]: true,
                    [styles.bordered]: border,
                    [styles.imageArticle]: imageUrl,
                })}
            >
                {imageUrl && (
                    <div className={styles.imageBlock}>
                        <Image
                            src={imageUrl}
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
                        <div className={styles.text}>{title}</div>
                    </div>
                    <div className={styles.textBlock}>
                        <div className={styles.text}>{body}</div>
                    </div>
                    {linkUrl && (
                        <div className={styles.cta_btn}>
                            <a href={linkUrl}>{btnText}</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Article
