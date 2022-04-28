import styles from './article.module.scss'
import { ArticleProps } from '../components/types'
import Image from 'next/image'
import cn from 'classnames'

const Article = (props: ArticleProps) => {
    const { title, body, border = true, imageUrl, linkUrl, btnText, modLayout = 'article' } = props
    {
        console.log('article type', modLayout)
    }
    return (
        <div
            className={cn(styles.root, {
                [styles.articleLayout]: modLayout === 'article',
                //[styles.cardLayout]: modLayout === 'card',
                [styles.cardLayout]: modLayout === 'card',
            })}
        >
            {/* {modLayout != 'card' && (
                <div
                    className={cn({
                        [styles.wrapper]: true,
                        [styles.bordered]: border,
                        [styles.imageArticle]: imageUrl,
                    })}
                >
                    {imageUrl && (
                        <div className={styles.imageBlock}>
                            <div className={styles.blockPicture}>
                                <Image src={imageUrl} layout="fill" objectFit="cover" alt="" />
                            </div>
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
            )} */}

            {/*card */}
            <div
                className={cn({
                    [styles.wrapper]: true,
                    [styles.bordered]: border && modLayout != 'card',
                    [styles.imageArticle]: imageUrl && modLayout != 'card',
                })}
            >
                {/*change title div layout on card*/}
                {modLayout == 'card' && (
                    <div className={styles.title}>
                        <div className={styles.textGutter}></div>
                        <div className={styles.insideTextGutter}></div>
                        <div className={styles.titleText}>
                            <div className={styles.text}>{title}</div>
                        </div>
                        <div className={` ${styles.textGutter} ${styles.textGutter_2}`}></div>
                    </div>
                )}

                <div className={styles.features}>
                    {modLayout == 'card' && (
                        <div className={styles.colorBlock}>
                            <div className={styles.colorFill}></div>
                        </div>
                    )}

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

                    {modLayout != 'card' ? (
                        <div className={styles.allText}>
                            <div className={styles.title}>
                                <div className={styles.text}>{title}</div>
                            </div>
                            <div className={styles.textBlock}>
                                <div className={styles.text}>{body}</div>
                                {linkUrl && (
                                    <div className={styles.cta_btn}>
                                        <a href={linkUrl}>{btnText}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.textBlock}>
                            <div className={styles.text}>{body}</div>
                            {linkUrl && (
                                <div className={styles.cta_btn}>
                                    <a href={linkUrl}>{btnText}</a>
                                </div>
                            )}
                        </div>
                    )}

                    {modLayout == 'card' && <div className={styles.colorBlock}></div>}
                </div>
            </div>
        </div>
    )
}

export default Article
