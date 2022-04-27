import styles from './photoTiles3.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { PhotoTiles3Props } from './types'

const PhotoTiles3 = ({ tileData, layout = 'v1', gap = false }: PhotoTiles3Props) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {/*              <div
                    className={cn({
                        [styles.tileImage]: true,
                        [styles.mainImage]: true,
                        [styles.linked]: tileData[0].linkUrl,
                    })}
                > */}
                {tileData.length == 3 && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                        })}
                    >
                        <div
                            className={cn(styles.tileImage, {
                                [styles.mainImage]: layout === 'v1',
                                [styles.mainImage_2]: layout === 'v2',
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
                {tileData.length == 2 && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                        })}
                    >
                        <div className={cn(styles.tileImage, styles.mainImage)}>
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
                        <div className={cn(styles.tileImage, styles.sideImage2)}>
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
                {tileData.length == 1 && (
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
                    </div>
                )}
            </div>
        </div>
    )
}

export default PhotoTiles3
