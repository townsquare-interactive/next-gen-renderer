import styles from './list.module.scss'
import { ListProps } from '../../types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../../functions'
import Button from './ProtoButton'

const List = (props: ListProps) => {
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
        btnType = 'normal',
        themeStyles,
    } = props

    const themeStylesObj = {
        backgroundColor: border ? `${themeStyles['accentBackgroundColor']}` : 'transparent',
        /* color: border ? `${themeStyles['textColorAccent']}` : `${themeStyles['textColor']}`, */
    }

    const headingColor = {
        color: border ? `${themeStyles['textColorAccent']}` : `${themeStyles['headingColor']}`,
    }
    const textColor = {
        color: border ? `${themeStyles['textColorAccent']}` : `${themeStyles['textColor']}`,
    }

    const gutterStyle = {
        backgroundColor: `${themeStyles['promoColor']}`,
    }

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
                [styles.block]: true,
            })}
        >
            <div
                className={cn(styles.wrapper, {
                    [styles.bordered]: border === true,
                    [styles.imageArticle]: imageUrl && modLayout != 'card',
                    [styles.reverse]: reverse,
                })}
                style={themeStylesObj}
            >
                {modLayout == 'card' && (
                    <div className={styles.title} style={headingColor}>
                        <div className={styles.textGutter}></div>
                        <div className={styles.insideTextGutter}></div>
                        <div className={styles.titleText}>
                            <h2 className={styles.text}>{headline || ''}</h2>
                        </div>
                        <div className={cn(styles.textGutter, styles.textGutter_2)}></div>
                    </div>
                )}

                <div className={styles.features}>
                    {modLayout === 'card' && (
                        <div className={styles.colorBlock}>
                            <div className={styles.colorFill} style={gutterStyle}></div>
                        </div>
                    )}

                    <div className={styles.imageBlock}>
                        <div className={styles.blockPicture}>
                            {imageUrl && (
                                <Image
                                    src={domainImage(imageUrl)}
                                    //height="450px"
                                    //width="600px"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    alt={altText}
                                    quality="50"
                                    sizes="(max-width: 1920px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
                                />
                            )}
                        </div>
                    </div>

                    {modLayout != 'card' ? (
                        <div className={styles.allText}>
                            <div className={styles.title} style={headingColor}>
                                <h3 className={styles.text}>{headline}</h3>
                            </div>
                            <div className={styles.textBlock}>
                                <div className={styles.text} style={textColor}>
                                    {Parser(body)}
                                </div>
                                {linkUrl && btnText && (
                                    /* <div className={styles.cta_btn}>
                                        <a href={linkUrl}>{btnText}</a>
                                    </div>  */
                                    <div className={styles.cta_btn}>
                                        <Button linkUrl="/" text="contact" themeStyles={themeStyles} btnType={border ? 'accent' : btnType} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.textBlock}>
                            <div className={styles.text}>{Parser(body)}</div>
                            {linkUrl && btnText && (
                                /*                                 <div className={styles.cta_btn}>
                                    <a href={linkUrl}>{btnText}</a>
                                </div> */
                                <div className={styles.cta_btn}>
                                    <Button linkUrl="/" text="contact" themeStyles={themeStyles} btnType={border ? 'accent' : btnType} />
                                </div>
                            )}
                        </div>
                    )}

                    {modLayout === 'card' && <div className={styles.colorBlock}></div>}
                </div>
            </div>
        </div>
    )
}

export default List
