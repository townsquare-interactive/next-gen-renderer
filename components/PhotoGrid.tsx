'use client'
import styles from './photogrid.module.scss'
import { ArticleProps, PhotoItemProps } from '../types'
import { Button } from '../elements/MyButton'
import Parser from 'html-react-parser'
import cn from 'classnames'
import { MyImage } from '../elements/MyImage'

export const PhotoGrid = (props: ArticleProps) => {
    const { width = '1060', columns = 1, type, well, imgsize, modId, title, items, themeStyles, cmsUrl, disabled } = props

    return (
        <div
            className={cn(styles['root'], styles['tsflex'], styles['root-container'], styles[`col_${columns}`], styles['grid'], {
                [styles.well]: well == '1',
                [styles.not_well]: !well,
                [styles[`cst_${props.class}`]]: props.class,
                [styles['full-width']]: width === '938' || width === '1060' || width === '988' || !width,
                [styles['med-width']]: width === '736' || width === '652',
            })}
            id={`id_${modId}`}
        >
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                    <PhotoItem
                        item={item}
                        well={well}
                        modId={modId}
                        themeStyles={themeStyles}
                        key={index}
                        imgsize={imgsize}
                        type={type}
                        columns={columns}
                        itemIndex={index}
                        cmsUrl={cmsUrl}
                        items={items}
                    />
                ))}
            </div>
        </div>
    )
}

const PhotoItem = (props: PhotoItemProps) => {
    const { item, itemIndex, well, themeStyles, type, cmsUrl, imgsize, columns, modId, items } = props
    const linkAndBtn =
        (item.actionlbl && item.pagelink) || (item.actionlbl && item.weblink) || (item.actionlbl2 && item.pagelink2) || (item.actionlbl2 && item.weblink2)

    function isLink() {
        if (item.pagelink || item.pagelink2 || item.weblink || item.weblink2 || item.headline) {
            return true
        } else {
            return false
        }
    }

    /*     const noConstraintsCol3 = items[itemIndex - 1]?.isFeatured === 'active' || items[itemIndex - 1]?.isFeatured === 'active' */

    return (
        <article
            className={cn(
                styles['item'],
                styles[`${item.align}`],
                {
                    [styles.hero]: item.isFeatured === 'active',
                    [styles.nHero]: !item.isFeatured,
                    [styles.yDsc]: item.desc,
                    [styles.nDsc]: !item.desc,
                    [styles.nImg]: !item.image,
                    [styles.yImg]: item.image,
                    // [styles.yHds]: item.headline || item.subheader,
                    // [styles.nHds]: !item.headline || !item.subheader,
                    //[styles.mod_left]: item.align === 'left' && (type === 'article_3' || type === 'article'),
                    // [styles.mod_right]: item.align === 'right' && (type === 'article_3' || type === 'article'),
                    // [styles.mod_center]: item.align === 'center' && (type === 'article_3' || type === 'article'),
                    // [styles.yLk]: (item.pagelink || item.weblink || item.pagelink2 || item.weblink2) && !twoButtons,
                    // [styles.yLks]: twoButtons,
                },
                `item_${itemIndex + 1}`,
                styles[`item_${itemIndex + 1}`]
            )}
            lang="en"
            //style={well == '1' ? borderBackground : noBackground}
        >
            {item.image && <MyImage item={item} well={well} imgsize={imgsize} cmsUrl={cmsUrl} />}
            {isLink() && (
                <figcaption className={cn(styles.caption)} style={{ background: themeStyles.captionBackground }}>
                    <div>
                        {item.headline && <h3 className={cn(styles['hd'], ['caption-txt'])}>{Parser(item.headline)}</h3>}
                        {linkAndBtn && (
                            <Button
                                pagelink={item.pagelink}
                                actionlbl={item.actionlbl}
                                newwindow={item.newwindow}
                                newwindow2={item.newwindow2}
                                actionlbl2={item.actionlbl2}
                                pagelink2={item.pagelink2}
                                weblink2={item.weblink2}
                                weblink={item.weblink}
                                icon={item.icon}
                                icon2={item.icon2}
                                btnType={item.btnType}
                                btnType2={item.btnType2}
                                themeStyles={themeStyles}
                                btnSize={item.btnSize}
                                btnSize2={item.btnSize2}
                                well={well}
                                modId={modId}
                                type={type}
                                align={item.align}
                                columns={columns}
                            />
                        )}
                    </div>
                </figcaption>
            )}
        </article>
    )
}
