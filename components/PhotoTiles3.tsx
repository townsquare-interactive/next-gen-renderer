import styles from './photoTiles3.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { PhotoTiles3Props } from './types'

const PhotoTiles3 = ({ tileData, layout = '3-2/3', gap = false }: PhotoTiles3Props) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {tileData.length === 3 && (layout === '3-2/3' || '3-1/3') && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                        })}
                    >
                        <div
                            className={cn(styles.tileImage, {
                                [styles.mainImage]: layout === '3-2/3',
                                [styles.mainImage_one]: layout === '3-1/3',
                            })}
                        >
                            {/* <div className={`${styles.tileImage} ${styles.mainImage}`}> */}
                            {tileData[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[0].linkUrl}>
                                        <a>
                                            <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].linkText} />
                                            <div className={styles.text}>{tileData[0].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].linkText} />
                                    <div className={styles.text}>{tileData[0].linkText}</div>
                                </div>
                            )}
                        </div>

                        <div className={cn(styles.tileImage, styles.sideImage)}>
                            {tileData[1].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[1].linkUrl}>
                                        <a>
                                            <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].linkText} />
                                            <div className={styles.text}>{tileData[1].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].linkText} />
                                    <div className={styles.text}>{tileData[1].linkText}</div>
                                </div>
                            )}
                        </div>
                        <div className={cn(styles.tileImage, styles.sideImage)}>
                            {tileData[2].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[2].linkUrl}>
                                        <a>
                                            <Image src={tileData[2].imageUrl} layout="fill" objectFit="cover" alt={tileData[2].linkText} />
                                            <div className={styles.text}>{tileData[2].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[2].imageUrl} layout="fill" objectFit="cover" alt={tileData[2].linkText} />
                                    <div className={styles.text}>{tileData[2].linkText}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/*---------------------------------------Two Images Passed ----------------------------------------------------------------*/}
                {/* {tileData.length == 2 && ( */}
                {tileData.length === 2 && (layout === '2-2/3' || '2-1/2') && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                            [styles.tileBloxk_2_half]: layout === '2-1/2',
                        })}
                    >
                        <div
                            className={cn(styles.tileImage, {
                                [styles.mainImage]: layout === '2-2/3',
                                [styles.mainImage_one]: layout === '2-1/2',
                            })}
                        >
                            {tileData[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[0].linkUrl}>
                                        <a>
                                            <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].linkText} />
                                            <div className={styles.text}>{tileData[0].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].linkText} />
                                    <div className={styles.text}>{tileData[0].linkText}</div>
                                </div>
                            )}
                        </div>
                        <div
                            className={cn(styles.tileImage, {
                                [styles.sideImage2_third]: layout === '2-2/3',
                                [styles.sideImage2_half]: layout === '2-1/2',
                            })}
                        >
                            {tileData[1].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[1].linkUrl}>
                                        <a>
                                            <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].linkText} />
                                            <div className={styles.text}>{tileData[1].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].linkText} />
                                    <div className={styles.text}>{tileData[1].linkText}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/*--------------------------------------One image passed ------------------------------------------*/}
                {tileData.length === 1 && layout === '1-full' && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                        })}
                    >
                        <div className={cn(styles.tileImage, styles.mainImage1)}>
                            {tileData[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[0].linkUrl}>
                                        <a>
                                            <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].linkText} />
                                            {tileData[0].linkText && <div className={styles.text}>{tileData[0].linkText}</div>}
                                            <div className={styles.headline}>
                                                <h3>{tileData[0].headline}</h3>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].linkText} />
                                    <div className={styles.headline}>
                                        <h3>{tileData[0].headline}</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PhotoTiles3
