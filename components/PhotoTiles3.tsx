import styles from './photoTiles3.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { secondsToMilliseconds } from 'date-fns'

/* interface PhotoTiles {
    imageUrls: string[]
    linkUrl: string[]
    titles: string[]
} */

interface imageData {
    imageUrl: string
    linkUrl?: string
    title: string
}

interface PhotoTiles {
    tileData: imageData[]
}

const PhotoTiles3 = ({ tileData }: PhotoTiles) => {
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
                    <div className={styles.tileBlock}>
                        <div className={`${styles.tileImage} ${styles.mainImage}`}>
                            {tileData[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[0].linkUrl}>
                                        <a>
                                            <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].title} />
                                            <div className={styles.text}>{tileData[0].title}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].title} />
                                    <div className={styles.text}>{tileData[0].title}</div>
                                </div>
                            )}
                        </div>
                        <div className={`${styles.tileImage} ${styles.sideImage}`}>
                            {tileData[1].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[1].linkUrl}>
                                        <a>
                                            <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].title} />
                                            <div className={styles.text}>{tileData[1].title}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].title} />
                                    <div className={styles.text}>{tileData[1].title}</div>
                                </div>
                            )}
                        </div>
                        <div className={`${styles.tileImage} ${styles.sideImage}`}>
                            {tileData[2].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[2].linkUrl}>
                                        <a>
                                            <Image src={tileData[2].imageUrl} layout="fill" objectFit="cover" alt={tileData[2].title} />
                                            <div className={styles.text}>{tileData[2].title}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[2].imageUrl} layout="fill" objectFit="cover" alt={tileData[2].title} />
                                    <div className={styles.text}>{tileData[2].title}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/*---------------------------------------Part 2 -----------------*/}
                {tileData.length == 2 && (
                    <div className={styles.tileBlock}>
                        <div className={`${styles.tileImage} ${styles.mainImage}`}>
                            {tileData[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[0].linkUrl}>
                                        <a>
                                            <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].title} />
                                            <div className={styles.text}>{tileData[0].title}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].title} />
                                    <div className={styles.text}>{tileData[0].title}</div>
                                </div>
                            )}
                        </div>
                        <div className={`${styles.tileImage} ${styles.sideImage2}`}>
                            {tileData[1].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[1].linkUrl}>
                                        <a>
                                            <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].title} />
                                            <div className={styles.text}>{tileData[1].title}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[1].imageUrl} layout="fill" objectFit="cover" alt={tileData[1].title} />
                                    <div className={styles.text}>{tileData[1].title}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/*--------------------------------------One image passed ----------------------*/}
                {/*---------------------------------------Part 2 -----------------*/}
                {tileData.length == 1 && (
                    <div className={styles.tileBlock}>
                        <div className={`${styles.tileImage} ${styles.mainImage1}`}>
                            {tileData[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={tileData[0].linkUrl}>
                                        <a>
                                            <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].title} />
                                            <div className={styles.text}>{tileData[0].title}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={tileData[0].imageUrl} layout="fill" objectFit="cover" alt={tileData[0].title} />
                                    <div className={styles.text}>{tileData[0].title}</div>
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
