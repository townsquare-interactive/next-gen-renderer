'use client'
import styles from './descblock.module.scss'
import { DescBlockProps } from '../types'
import cn from 'classnames'
import Parser from 'html-react-parser'

const DescBlock = (props: DescBlockProps) => {
    const { descSize, desc, isBeaconHero = false, useAccentColor, well, contentSpacing, type } = props

    return (
        <div
            className={cn(styles.root, styles[`${descSize}`], 'txt-font', 'desc', styles[`${type}`], styles[`${contentSpacing}`], {
                ['txt-color']: !isBeaconHero && !useAccentColor && type != 'carousel' && type != 'thumbnail',
                ['caption-txt']: type === 'carousel' || type === 'thumbnail' || useAccentColor,
                [styles.well]: well === '1',
            })}
        >
            <div className={cn(styles['dsc'], 'dsc')}>{Parser(desc)}</div>
        </div>
    )
}

export default DescBlock
