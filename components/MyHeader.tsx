import styles from './myheader.module.scss'
import { ArticleProps, Media, TheListItemImageProps, BtnProps, ItemWrapProps, ModuleItemProps, Pagelist } from './types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage, ConditionalWrapper } from '../functions'
import { ReactChild, useState, Fragment } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const MyHeader = (props: Pagelist) => {
    const { pages } = props

    console.log(pages)

    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                {/* <div className={styles.logo}>
                    <Image
                        src={domainImage('/files/2022/07/jremodeling-logo.png', true, props.cmsUrl || '')}
                        onLoadingComplete={calcImageSize}
                        width={imageWidth}
                        height={imageHeight}
                        layout="responsive"
                        alt="logo"
                        objectPosition="top"
                    /> 
                </div>*/}
                <div className={styles['logo-block']}>
                    <Logo
                        logoUrl={domainImage('/files/2022/07/jremodeling-logo.png', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')}
                    />
                    {/* <Logo
                        logoUrl={domainImage('/files/2022/07/jremodeling-logo.png', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')}
                    />
                    <Logo
                        logoUrl={domainImage('/files/2022/07/jremodeling-logo.png', true, 'clttestsiteforjoshedwards.production.townsquareinteractive.com')}
                    /> */}
                </div>
                <div className={styles.access}>
                    <ul className={styles.menu}>
                        {pages.map((item, index: number) => (
                            <Link href={item.url} key={index}>
                                <li>
                                    <a className="navLink">{item.name}</a>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles['social-bar']}></div>
        </header>
    )
}

export default MyHeader
