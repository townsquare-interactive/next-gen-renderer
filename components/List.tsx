import styles from './list.module.scss'
import { ListProps } from './types'
import Image from 'next/image'
import cn from 'classnames'
import { reverse } from 'dns'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'

const Article = (props: ListProps) => {
    const {
        headline = '',
        body = '',
        border = false,
        imageUrl,
        linkUrl,
        btnText = '',
        modLayout = 'article',
        textSize = 'md',
        reverse = false,
        align = 'left',
        altText = '',
    } = props

    return (
        <div
            className={cn(styles.root, {
                [styles.articleLayout]: modLayout === 'article',
                [styles.cardLayout]: modLayout === 'card',
                [styles.sm]: textSize === 'sm',
                [styles.md]: textSize === 'md',
                [styles.lg]: textSize === 'lg',
                [styles.center]: align === 'center',
                [styles.left]: align === 'left',
                [styles.right]: align === 'right',
            })}
        >
            <div
                className={cn(styles.wrapper, {
                    [styles.bordered]: border === true,
                    [styles.imageArticle]: imageUrl && modLayout != 'card',
                    [styles.reverse]: reverse,
                })}
            >
                {/*change title div layout on card*/}
                <div
                    className={cn({
                        [styles.cardBlock]: modLayout === 'card',
                    })}
                >
                    {modLayout == 'card' && (
                        <div className={styles.title}>
                            <div className={styles.textGutter}></div>
                            <div className={styles.insideTextGutter}></div>
                            <div className={styles.titleText}>
                                <h3 className={styles.text}>{headline || ''}</h3>
                            </div>
                            <div className={cn(styles.textGutter, styles.textGutter_2)}></div>
                        </div>
                    )}

                    <div className={styles.features}>
                        {modLayout === 'card' && (
                            <div className={styles.colorBlock}>
                                <div className={styles.colorFill}></div>
                            </div>
                        )}

                        <div className={styles.imageBlock}>
                            <div className={styles.blockPicture}>
                                {imageUrl && (
                                    <Image src={domainImage(imageUrl)} height="450px" width="600px" layout="responsive" objectFit="cover" alt={altText} />
                                )}
                            </div>
                        </div>

                        {modLayout != 'card' ? (
                            <div className={styles.allText}>
                                <div className={styles.title}>
                                    <h3 className={styles.text}>{headline}</h3>
                                </div>
                                <div className={styles.textBlock}>
                                    <p className={styles.text}>{Parser(body)}</p>
                                    {linkUrl && btnText && (
                                        <div className={styles.cta_btn}>
                                            <a href={linkUrl}>{btnText}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.textBlock}>
                                <p className={styles.text}>{Parser(body)}</p>
                                {linkUrl && btnText && (
                                    <div className={styles.cta_btn}>
                                        <a href={linkUrl}>{btnText}</a>
                                    </div>
                                )}
                            </div>
                        )}

                        {modLayout === 'card' && <div className={styles.colorBlock}></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
