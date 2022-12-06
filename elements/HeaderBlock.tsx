import { decideHeadTag } from 'functions'
import { HeaderBlockProps } from 'types'
import Parser from 'html-react-parser'
import styles from './headerblock.module.scss'
import cn from 'classnames'
import { Tangerine } from '@next/font/google'

export const HeaderBlock = (props: HeaderBlockProps) => {
    const { item, columns, well, isBeaconHero, modType } = props
    //Finding tag types for headline and subjeadline
    /*     const HeadTag = decideHeadTag(columns, 'hd', item.headerTag)
    const SubTag = decideHeadTag(columns, 'sh', item.headerTag) */

    return (
        <header
            className={cn(styles['hd-block'], styles[`${item.headSize}`], styles[`${modType}`], {
                [styles.article]: modType != 'photo_grid',
                [styles.beacon]: modType === 'article',
            })}
        >
            {item.headline && (
                /* <HeadTag
                    className={cn(styles['hd'], {
                        ['accent-txt']: well || isBeaconHero || modType === 'photo-grid',
                        ['txt-color-heading']: !well && !isBeaconHero && modType != 'photo-grid',
                    })}
                >
                    {Parser(item.headline)}
                </HeadTag> */
                <Heading
                    textType="hd"
                    text={item.headline}
                    columns={columns}
                    headerTag={item.headerTag}
                    well={well}
                    isBeaconHero={isBeaconHero}
                    modType={modType}
                />
            )}

            {item.subheader && (
                /*                 <SubTag
                    className={cn(styles['sh'], {
                        ['accent-txt']: well || isBeaconHero || modType === 'photo-grid',
                        ['txt-color-heading']: !well && !isBeaconHero && modType != 'photo-grid',
                    })}
                >
                    {Parser(item.subheader)}
                </SubTag> */
                <Heading
                    textType="sh"
                    text={item.subheader}
                    columns={columns}
                    headerTag={item.headerTag}
                    well={well}
                    isBeaconHero={isBeaconHero}
                    modType={modType}
                />
            )}
        </header>
    )
}

const Heading = (props: any) => {
    const { textType, text, columns, headerTag, well, isBeaconHero, modType } = props

    const HeadTag = decideHeadTag(columns, textType, headerTag)

    return (
        <HeadTag
            className={cn(styles[textType], {
                ['accent-txt']: well || isBeaconHero || modType === 'photo_grid',
                ['txt-color-heading']: !well && !isBeaconHero && modType != 'photo_grid',
            })}
        >
            {Parser(text)}
        </HeadTag>
    )
}
