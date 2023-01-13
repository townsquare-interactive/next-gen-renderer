import { decideHeadTag } from 'functions'
import { HeadlineBlockProps } from 'types'
import Parser from 'html-react-parser'
import styles from './headlineblock.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeadlineBlock = (props: HeadlineBlockProps) => {
    const { item, columns, well, isBeaconHero, modType } = props

    return (
        <header
            className={cn(styles['hd-block'], styles[`${item.headSize}`], styles[`${modType}`], styles[`${item.headSize}`], styles[`${item.align}`], {
                [styles.article]: modType?.includes('article'),
                [styles.beacon]: modType === 'article',
            })}
        >
            {item.imageIcon && (
                <div className={cn(styles['icon-block'])}>
                    <svg height="100" width="100" className={styles.circle}>
                        <circle cx="50" cy="50" r="50" fill="#fff" />
                    </svg>

                    <div className={styles.icon} style={{ color: item.promoColor }}>
                        <FontAwesomeIcon icon={[item.imageIcon.iconPrefix, item.imageIcon.iconModel]} />
                    </div>
                </div>
            )}
            <div className={styles.headings}>
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
            </div>
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
                ['txt-color-hd']: !well && !isBeaconHero && modType != 'photo_grid',
            })}
        >
            {Parser(text)}
        </HeadTag>
    )
}
