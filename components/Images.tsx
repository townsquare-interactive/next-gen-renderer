import styles from './images.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { ImagesProps } from './types'

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

const Images3_23 = ({ items, modLayout = '3-2/3', gap = false }: ImagesProps) => {
    return (
        <div className={styles.wrapper}>
            {items.length === 3 && (modLayout === '3-2/3' || '3-1/3') && (
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    <div
                        className={cn(styles.tileImage, {
                            [styles.mainImage]: modLayout === '3-2/3',
                            [styles.mainImage_one]: modLayout === '3-1/3',
                        })}
                    >
                        {items[0].linkUrl ? (
                            <div className={`${styles.linked}`}>
                                <Link href={items[0].linkUrl}>
                                    <a>
                                        <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                        <div className={styles.text}>{items[0].linkText || 'My Default Link Text'}</div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                <div className={styles.text}>{items[0].linkText}</div>
                            </div>
                        )}
                    </div>

                    <div className={cn(styles.tileImage, styles.sideImage)}>
                        {items[1].linkUrl ? (
                            <div className={`${styles.linked}`}>
                                <Link href={items[1].linkUrl}>
                                    <a>
                                        <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                                        <div className={styles.text}>{items[1].linkText}</div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                                <div className={styles.text}>{items[1].linkText}</div>
                            </div>
                        )}
                    </div>
                    <div className={cn(styles.tileImage, styles.sideImage)}>
                        {items[2].linkUrl ? (
                            <div className={`${styles.linked}`}>
                                <Link href={items[2].linkUrl}>
                                    <a>
                                        <Image src={items[2].imageUrl} layout="fill" objectFit="cover" alt={items[2].linkText} />
                                        <div className={styles.text}>{items[2].linkText}</div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Image src={items[2].imageUrl} layout="fill" objectFit="cover" alt={items[2].linkText} />
                                <div className={styles.text}>{items[2].linkText}</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

const Images2_23 = ({ items, modLayout = '2-2/3', gap = false }: ImagesProps) => {
    return (
        <div className={styles.wrapper}>
            <div
                className={cn(styles.tileBlock, {
                    [styles.gap]: gap,
                    [styles.tileBlock_2_half]: modLayout === '2-1/2',
                })}
            >
                <div
                    className={cn(styles.tileImage, {
                        [styles.mainImage]: modLayout === '2-2/3',
                        [styles.mainImage_one]: modLayout === '2-1/2',
                    })}
                >
                    {items[0].linkUrl ? (
                        <div className={`${styles.linked}`}>
                            <Link href={items[0].linkUrl}>
                                <a>
                                    <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                    <div className={styles.text}>{items[0].linkText}</div>
                                </a>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                            <div className={styles.text}>{items[0].linkText}</div>
                        </div>
                    )}
                </div>
                <div
                    className={cn(styles.tileImage, {
                        [styles.sideImage2_third]: modLayout === '2-2/3',
                        [styles.sideImage2_half]: modLayout === '2-1/2',
                    })}
                >
                    {items[1].linkUrl ? (
                        <div className={`${styles.linked}`}>
                            <Link href={items[1].linkUrl}>
                                <a>
                                    <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                                    <div className={styles.text}>{items[1].linkText}</div>
                                </a>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                            <div className={styles.text}>{items[1].linkText}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const Images1_full = ({ items, modLayout = '1-full', gap = false }: ImagesProps) => {
    return (
        <div className={styles.wrapper}>
            {items.length === 1 && (modLayout === '1-full' || '1-hero') && (
                <div
                    className={cn(styles.tileBlock, {
                        [styles.gap]: gap,
                    })}
                >
                    <div
                        className={cn(styles.tileImage, styles.mainImage1, {
                            [styles.heroImage]: modLayout === '1-hero',
                        })}
                    >
                        {items[0].linkUrl ? (
                            <div className={`${styles.linked}`}>
                                <Link href={items[0].linkUrl}>
                                    <a>
                                        <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                        {items[0].linkText && <div className={styles.text}>{items[0].linkText}</div>}
                                        <div className={styles.headline}>
                                            <h3>{items[0].headline}</h3>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                <div className={styles.headline}>
                                    <h3>{items[0].headline}</h3>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

const Images = ({ items, modLayout = '3-2/3', gap = false }: ImagesProps) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {items.length === 3 && (modLayout === '3-2/3' || '3-1/3') && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                        })}
                    >
                        <div
                            className={cn(styles.tileImage, {
                                [styles.mainImage]: modLayout === '3-2/3',
                                [styles.mainImage_one]: modLayout === '3-1/3',
                            })}
                        >
                            {items[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={items[0].linkUrl}>
                                        <a>
                                            <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                            <div className={styles.text}>{items[0].linkText || 'My Default Link Text'}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                    <div className={styles.text}>{items[0].linkText}</div>
                                </div>
                            )}
                        </div>

                        <div className={cn(styles.tileImage, styles.sideImage)}>
                            {items[1].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={items[1].linkUrl}>
                                        <a>
                                            <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                                            <div className={styles.text}>{items[1].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                                    <div className={styles.text}>{items[1].linkText}</div>
                                </div>
                            )}
                        </div>
                        <div className={cn(styles.tileImage, styles.sideImage)}>
                            {items[2].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={items[2].linkUrl}>
                                        <a>
                                            <Image src={items[2].imageUrl} layout="fill" objectFit="cover" alt={items[2].linkText} />
                                            <div className={styles.text}>{items[2].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={items[2].imageUrl} layout="fill" objectFit="cover" alt={items[2].linkText} />
                                    <div className={styles.text}>{items[2].linkText}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/*---------------------------------------Two Images Passed ----------------------------------------------------------------*/}
                {/* {items.length == 2 && ( */}
                {items.length === 2 && (modLayout === '2-2/3' || '2-1/2') && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                            [styles.tileBlock_2_half]: modLayout === '2-1/2',
                        })}
                    >
                        <div
                            className={cn(styles.tileImage, {
                                [styles.mainImage]: modLayout === '2-2/3',
                                [styles.mainImage_one]: modLayout === '2-1/2',
                            })}
                        >
                            {items[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={items[0].linkUrl}>
                                        <a>
                                            <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                            <div className={styles.text}>{items[0].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                    <div className={styles.text}>{items[0].linkText}</div>
                                </div>
                            )}
                        </div>
                        <div
                            className={cn(styles.tileImage, {
                                [styles.sideImage2_third]: modLayout === '2-2/3',
                                [styles.sideImage2_half]: modLayout === '2-1/2',
                            })}
                        >
                            {items[1].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={items[1].linkUrl}>
                                        <a>
                                            <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                                            <div className={styles.text}>{items[1].linkText}</div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={items[1].imageUrl} layout="fill" objectFit="cover" alt={items[1].linkText} />
                                    <div className={styles.text}>{items[1].linkText}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/*--------------------------------------One image passed -------------------------*/}
                {items.length === 1 && (modLayout === '1-full' || '1-hero') && (
                    <div
                        className={cn(styles.tileBlock, {
                            [styles.gap]: gap,
                        })}
                    >
                        <div
                            className={cn(styles.tileImage, styles.mainImage1, {
                                [styles.heroImage]: modLayout === '1-hero',
                            })}
                        >
                            {items[0].linkUrl ? (
                                <div className={`${styles.linked}`}>
                                    <Link href={items[0].linkUrl}>
                                        <a>
                                            <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                            {items[0].linkText && <div className={styles.text}>{items[0].linkText}</div>}
                                            <div className={styles.headline}>
                                                <h3>{items[0].headline}</h3>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <Image src={items[0].imageUrl} layout="fill" objectFit="cover" alt={items[0].linkText} />
                                    <div className={styles.headline}>
                                        <h3>{items[0].headline}</h3>
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

export default Images
