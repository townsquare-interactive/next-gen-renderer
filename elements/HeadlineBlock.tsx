import { decideHeadTag } from 'functions'
import { HeadlineBlockProps, HeadingProps } from 'types'
import Parser from 'html-react-parser'
import styles from './headlineblock.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeadlineBlock = (props: HeadlineBlockProps) => {
    const { item, columns, well, isBeaconHero, modType, noDesc = false, useAccentColor } = props

    return (
        <header
            className={cn(
                styles['root'],
                styles[`${item.headSize}`],
                styles[`${modType}`],
                styles[`${item.align}`],
                styles[`col_${columns}`],
                'txt-color-hd',

                {
                    [styles.article]: modType?.includes('article'),
                    [styles.beacon]: modType === 'article',
                    [styles.testimonials]: modType === 'testimonials_1',
                    [styles['isIcon']]: item.imageIcon,
                    [styles.hasDsc]: !noDesc,
                    [styles.not_well]: !well,
                    [styles.well]: well,
                    [styles.hero]: item.isFeatured === 'active' || item.isFeatured === true,
                    [styles.yImg]: item.image,
                }
            )}
            style={
                modType === 'testimonials_1' && (item.isFeatured === 'active' || item.isFeatured === true) && well
                    ? { backgroundColor: 'var(--hero-btn-background)' }
                    : modType === 'testimonials_1' && well
                    ? { backgroundColor: '#fff' }
                    : {}
            }
        >
            {item.imageIcon && !modType?.includes('card') && !modType?.includes('article') && (
                <div className={cn(styles['icon-block'])}>
                    <svg height="100" width="100" className={styles.circle}>
                        <circle cx="50" cy="50" r="50" fill="#fff" />
                    </svg>

                    <div
                        className={cn(styles.icon, 'hd-icon')}
                        style={{ color: item.modColor1 ? item.modColor1 : item.image ? 'var(--accent-background)' : item.promoColor }}
                    >
                        <FontAwesomeIcon icon={[item.imageIcon.iconPrefix, item.imageIcon.iconModel]} />
                    </div>
                </div>
            )}
            <div className={styles.headings}>
                <>
                    {item.headline && (
                        <Heading
                            textType="hd"
                            text={item.headline}
                            columns={columns}
                            headerTag={item.headerTag}
                            well={well}
                            isBeaconHero={isBeaconHero}
                            modType={modType}
                            useAccentColor={useAccentColor}
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
                            useAccentColor={useAccentColor}
                        />
                    )}
                </>
            </div>
        </header>
    )
}

const Heading = (props: HeadingProps) => {
    const { textType, text, columns, headerTag, well, isBeaconHero, modType, useAccentColor } = props

    const HeadTag = decideHeadTag(columns, textType, headerTag)

    return (
        <HeadTag
            className={cn(styles[textType], textType, {
                ['txt-color-hd']:
                    !isBeaconHero &&
                    modType != 'photo_grid' &&
                    modType != 'banner' &&
                    (!useAccentColor || modType === 'testimonials_1') &&
                    modType != 'parallax' &&
                    modType != 'gallery' &&
                    modType != 'thumbnail' &&
                    textType === 'hd',
                ['txt-color-sh']:
                    !isBeaconHero &&
                    modType != 'photo_grid' &&
                    modType != 'banner' &&
                    (!useAccentColor || modType === 'testimonials_1') &&
                    modType != 'parallax' &&
                    modType != 'gallery' &&
                    modType != 'thumbnail' &&
                    textType === 'sh',
                ['testimonial-txt-color']: modType === 'testimonials_1' && well,

                ['txt-font']: textType === 'sh',
                ['hd-font']: textType === 'hd',
                ['feat-font']: textType === 'hd' && (modType === 'parallax' || modType === 'gallery'),
                ['caption-txt']:
                    isBeaconHero ||
                    modType === 'photo_grid' ||
                    modType === 'banner' ||
                    (useAccentColor && modType != 'testimonials_1') ||
                    modType === 'parallax' ||
                    modType === 'gallery' ||
                    modType === 'thumbnail',
            })}
        >
            {Parser(text)}
        </HeadTag>
    )
}
