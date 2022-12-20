import { decideHeadTag } from 'functions'
import { HeadlineBlockProps } from 'types'
import Parser from 'html-react-parser'
import styles from './headlineblock.module.scss'
import cn from 'classnames'

export const HeadlineBlock = (props: HeadlineBlockProps) => {
    const { item, columns, well, isBeaconHero, modType } = props

    return (
        <header
            className={cn(styles['hd-block'], styles[`${item.headSize}`], styles[`${modType}`], styles[`${item.headSize}`], {
                [styles.article]: modType != 'photo_grid',
                [styles.beacon]: modType === 'article',
            })}
        >
            {item.headline && (
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
