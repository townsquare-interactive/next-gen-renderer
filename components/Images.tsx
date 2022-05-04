import styles from './images.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { ImagesProps, TileImage } from './types'

//const Images3_23 = ({ image1, image2, image3}) => {

// {
//     const item0: imageTile = items[0]
//     const { src, alt, title = '', link } = item0
// }

//if (modLayout === '3-2/3') {
//    return <Images3_23 items={items} />
//} else if (modLayout === '2-2/2') {
//    return <Images22 items={items} />
//}

//    return <Images3_23 items={items} />

const Images = ({ items, modLayout = '3-2/3', gap = false }: ImagesProps) => {
    if (items.length === 3) {
        return <Images3 items={items} gap={gap} modLayout={modLayout} />
    } else if (items.length === 2) {
        return <Images2 items={items} gap={gap} modLayout={modLayout} />
    } else if (items.length === 1) {
        return <Images1 items={items} gap={gap} modLayout={modLayout} />
    } else {
        return <ImagesPlus items={items} gap={gap} modLayout="4-plus" />
    }
}

const Images3 = ({ items, modLayout = '3-2/3', gap = false }: ImagesProps) => {
    /*console.log(items.length)
    let compList: any = []
    function callTiles(items: any) {
        for (let x = 0; (x = items.length); x++) {
            let mainImage

            if ((x = 0)) {
                mainImage = true
            } else {
                mainImage = false
            }

            compList.push(<TileImage itemNumber={items[x]} modLayout={modLayout} items={items} isMainImage={mainImage} />)
        }
    } 
    callTiles(items)*/
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    <TileImage itemNumber={items[0]} modLayout={modLayout} isMainImage={true} />

                    <TileImage itemNumber={items[1]} modLayout={modLayout} isMainImage={false} />

                    <TileImage itemNumber={items[2]} modLayout={modLayout} isMainImage={false} />
                </div>
            </div>
        </div>
    )
}

const Images2 = ({ items, modLayout = '2-2/3', gap = false }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                        [styles.tileBlock_2_half]: modLayout === '2-1/2',
                    })}
                >
                    <TileImage itemNumber={items[0]} modLayout={modLayout} isMainImage={true} />

                    <TileImage itemNumber={items[1]} modLayout={modLayout} isMainImage={false} />
                </div>
            </div>
        </div>
    )
}

const Images1 = ({ items, modLayout = '1-full', gap = false }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    <TileImage itemNumber={items[0]} modLayout={modLayout} isMainImage={true} />
                </div>
            </div>
        </div>
    )
}

const ImagesPlus = ({ items, modLayout = '4-plus', gap = false }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    {items.map((item, index) => (
                        <TileImage itemNumber={item} modLayout={modLayout} isMainImage={false} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const TileImage = ({ itemNumber, modLayout, isMainImage = false }: TileImage) => {
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
            })}
        >
            {itemNumber.linkUrl ? (
                <div className={cn(styles.linkBlock, styles.linked)}>
                    <Image src={itemNumber.imageUrl} layout="fill" objectFit="cover" alt={itemNumber.linkText} />
                    <Link href={itemNumber.linkUrl}>
                        <a className={styles.link}>
                            {itemNumber.linkText && <div className={styles.text}>{itemNumber.linkText}</div>}
                            <div className={styles.headline}>
                                <h3>{itemNumber.headline || ''}</h3>
                            </div>
                        </a>
                    </Link>
                </div>
            ) : (
                <div className={styles.linkBlock}>
                    <Image src={itemNumber.imageUrl} layout="fill" objectFit="cover" alt={itemNumber.linkText} />
                    {itemNumber.linkText && <div className={styles.text}>{itemNumber.linkText}</div>}
                    <div className={styles.headline}>
                        <h3>{itemNumber.headline || ''}</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Images
