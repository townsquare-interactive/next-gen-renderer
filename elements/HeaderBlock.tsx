import { decideHeadTag } from 'functions'
import { HeaderBlockProps } from 'types'
import Parser from 'html-react-parser'
import styles from './headerblock.module.scss'
import cn from 'classnames'

export const HeaderBlock = (props: HeaderBlockProps) => {
    const { item, columns, well, isBeaconHero, modType } = props
    //Finding tag types for headline and subjeadline
    const HeadTag = decideHeadTag(columns, 'hd', item.headerTag)
    const SubTag = decideHeadTag(columns, 'sh', item.headerTag)

    return (
        <header
            className={cn(styles['hd-block'], styles[`${item.headSize}`], styles[`${modType}`], {
                // [styles.hero]: item.isFeatured === 'active',
                [styles.article]: modType != 'photo_grid',
                [styles.beacon]: modType === 'article',
            })}
        >
            {item.headline && (
                <HeadTag
                    className={cn(styles['hd'], {
                        ['accent-txt']: well || isBeaconHero || modType === 'photo-grid',
                        ['txt-color-heading']: !well && !isBeaconHero && modType != 'photo-grid',
                    })}
                >
                    {Parser(item.headline)}
                </HeadTag>
            )}

            {item.subheader && (
                <SubTag
                    className={cn(styles['sh'], {
                        ['accent-txt']: well || isBeaconHero || modType === 'photo-grid',
                        ['txt-color-heading']: !well && !isBeaconHero && modType != 'photo-grid',
                    })}
                >
                    {Parser(item.subheader)}
                </SubTag>
            )}
        </header>
    )
}
