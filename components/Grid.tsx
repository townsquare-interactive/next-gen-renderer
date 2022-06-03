import styles from './grid.module.scss'
import { GridProps, GridData } from './types'
import Image from 'next/image'
import cn from 'classnames'
import { reverse } from 'dns'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'

const Grid = (props: GridProps) => {
    const { items } = props

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                    <GridBlock {...item} key={index} />
                ))}
            </div>
        </div>
    )
}

const GridBlock = (props: GridData) => {
    const { headline = '', body = '', border = false, imageUrl, linkUrl, btnText = '', textSize = 'md', align = 'left', altText = '' } = props

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
        >
            {imageUrl && (
                <div className={styles.imageTile}>
                    <Image src={domainImage(imageUrl)} layout="fill" alt={altText} objectFit="cover" objectPosition="top center" />
                </div>
            )}

            <div className={styles.textBlock}>
                {headline && <h3 className={styles.title}>{headline}</h3>}

                <p className={styles.text}>{Parser(body)}</p>

                {linkUrl && btnText && (
                    <div className={styles.cta_btn}>
                        <a href={linkUrl}>{btnText}</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Grid
