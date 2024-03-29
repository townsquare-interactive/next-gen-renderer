import styles from './grid.module.scss'
import { GridProps, GridData } from '../../types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../../functions'
import Button from './ProtoButton'

const Grid = (props: GridProps) => {
    const { items, themeStyles } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                    <GridBlock {...item} key={index} themeStyles={themeStyles} />
                ))}
            </div>
        </div>
    )
}

const GridBlock = (props: GridData) => {
    const {
        headline = '',
        body = '',
        border = false,
        imageUrl,
        linkUrl,
        btnText = '',
        textSize = 'md',
        align = 'left',
        altText = '',
        themeStyles,
        btnType = 'normal',
    } = props

    const themeStylesObj = {
        /* color: `${themeStyles['textColor']}`, */
    }

    const borderStyles = {
        /* color: `${themeStyles['textColorAccent']}`, */
        backgroundColor: `${themeStyles['promoColor']}`,
    }

    const headingColor = {
        color: border ? `${themeStyles['textColorAccent']}` : `${themeStyles['headingColor']}`,
    }
    const textColor = {
        color: border ? `${themeStyles['textColorAccent']}` : `${themeStyles['textColor']}`,
    }

    return (
        <div
            className={cn(styles.block, {
                [styles.bordered]: border === true,
                [styles.imageArticle]: imageUrl,
                [styles.sm]: textSize === 'sm',
                [styles.md]: textSize === 'md',
                [styles.lg]: textSize === 'lg',
                [styles.center]: align === 'center',
                [styles.left]: align === 'left',
                [styles.right]: align === 'right',
            })}
            style={border ? borderStyles : themeStylesObj}
        >
            {imageUrl && (
                <div className={styles.imageTile}>
                    <Image src={domainImage(imageUrl)} layout="fill" alt={altText} objectFit="cover" objectPosition="top center" quality="50" />
                </div>
            )}

            <div className={styles.textBlock}>
                {headline && (
                    <h3 className={styles.title} style={headingColor}>
                        {headline}
                    </h3>
                )}

                <div className={styles.text} style={textColor}>
                    {Parser(body)}
                </div>

                {linkUrl && btnText && (
                    <div className={styles.cta_btn}>
                        <Button linkUrl="/" text="contact" themeStyles={themeStyles} btnType={border ? 'accent' : btnType} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Grid
