import styles from './images.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { ImagesProps, TileImageProps } from '../../types'
import { domainImage } from '../../functions'
import Button from './Button'

const Images = ({ items, modLayout = '3-2/3', gap = false, themeStyles }: ImagesProps) => {
    if (items.length === 3) {
        return <Images3 items={items} gap={gap} modLayout={modLayout} themeStyles={themeStyles} />
    } else if (items.length === 2) {
        return <Images2 items={items} gap={gap} modLayout={modLayout} themeStyles={themeStyles} />
    } else if (items.length === 1) {
        return <Images1 items={items} gap={gap} modLayout={modLayout} themeStyles={themeStyles} />
    } else {
        return <ImagesPlus items={items} gap={gap} modLayout="4-plus" themeStyles={themeStyles} />
    }
}

const Images3 = ({ items, modLayout = '3-2/3', gap = false, themeStyles }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    <TileImage itemNumber={items[0]} modLayout={modLayout} isMainImage={true} themeStyles={themeStyles} />

                    <TileImage itemNumber={items[1]} modLayout={modLayout} isMainImage={false} themeStyles={themeStyles} />

                    <TileImage itemNumber={items[2]} modLayout={modLayout} isMainImage={false} themeStyles={themeStyles} />
                </div>
            </div>
        </div>
    )
}

const Images2 = ({ items, modLayout = '2-2/3', gap = false, themeStyles }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                        [styles.tileBlock_2_half]: modLayout === '2-1/2',
                    })}
                >
                    <TileImage itemNumber={items[0]} modLayout={modLayout} isMainImage={true} themeStyles={themeStyles} />

                    <TileImage itemNumber={items[1]} modLayout={modLayout} isMainImage={false} themeStyles={themeStyles} />
                </div>
            </div>
        </div>
    )
}

const Images1 = ({ items, modLayout = '1-full', gap = false, themeStyles }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    <TileImage itemNumber={items[0]} modLayout={modLayout} isMainImage={true} hero={true} themeStyles={themeStyles} />
                </div>
            </div>
        </div>
    )
}

const ImagesPlus = ({ items, modLayout = '4-plus', gap = false, themeStyles }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    {items.map((item, index) => (
                        <TileImage itemNumber={item} modLayout={modLayout} isMainImage={false} key={index} themeStyles={themeStyles} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const TileImage = ({ itemNumber, modLayout, isMainImage = false, hero = false, themeStyles }: TileImageProps) => {
    return (
        <div
            className={cn(styles.tileImage, {
                [styles.mainImage]: isMainImage === true && (modLayout === '3-2/3' || modLayout === '2-2/3'),
                [styles.mainImage2]: isMainImage === true && (modLayout === '3-1/3' || modLayout === '2-1/2'),
                [styles.mainImage1]: isMainImage === true && (modLayout === '1-full' || modLayout === '1-hero'),
                [styles.heroImage]: isMainImage === true && modLayout === '1-hero',
                [styles.sideImage]: isMainImage === false,
                [styles.sideImage2_third]: isMainImage === false && modLayout === '2-2/3',
                [styles.sideImage2_half]: isMainImage === false && modLayout === '2-1/2',
                [styles.sideImage4_plus]: modLayout === '4-plus',
                [styles.hasBody]: itemNumber.body,
            })}
        >
            {itemNumber.linkUrl ? (
                <div className={cn(styles.linkBlock, styles.linked)}>
                    <Image
                        src={domainImage(itemNumber.imageUrl)}
                        fill
                        alt={itemNumber.altText || ''}
                        quality="40"
                        priority={hero ? true : false}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1920px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
                    />

                    <Link href={itemNumber.linkUrl} className={styles.link}>
                        {itemNumber.headline ? (
                            <div className={styles.headline}>
                                <h2>{itemNumber.headline || ''}</h2>
                            </div>
                        ) : (
                            /* itemNumber.linkText && <div className={styles.text}>{itemNumber.linkText}</div> */
                            itemNumber.linkText && (
                                <div className={styles.text}>
                                    <Button linkUrl="/" text={itemNumber.linkText} btnType="accent" themeStyles={themeStyles} />
                                </div>
                            )
                        )}
                        {itemNumber.body && (
                            <div className={styles.description}>
                                <p>{itemNumber.body}</p>
                            </div>
                        )}
                    </Link>
                </div>
            ) : (
                <div className={styles.linkBlock}>
                    <Image
                        src={domainImage(itemNumber.imageUrl)}
                        fill
                        alt={itemNumber.altText || ''}
                        quality="40"
                        priority={hero ? true : false}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1920px) 100vw,
                        (max-width: 1200px) 50vw,
                        100vw"
                    />

                    {itemNumber.headline ? (
                        <div className={styles.headline}>
                            <h2>{itemNumber.headline || ''}</h2>
                        </div>
                    ) : (
                        itemNumber.linkText && <div className={styles.text}>{itemNumber.linkText}</div>
                    )}
                    {itemNumber.body && (
                        <div className={styles.description}>
                            <p>{itemNumber.body}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Images
