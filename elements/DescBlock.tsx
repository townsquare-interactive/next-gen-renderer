'use client'
import styles from './descblock.module.scss'
import { DescBlockProps } from '../types'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { useState } from 'react'

const DescBlock = (props: DescBlockProps) => {
    const { descSize, desc, isBeaconHero = false, useAccentColor, well, contentSpacing, type } = props
    const [newDesc, setNewDesc] = useState('')

    return (
        <div
            className={cn(styles.root, styles[`${descSize}`], 'txt-font', 'desc', styles[`${type}`], styles[`${contentSpacing}`], {
                ['txt-color']: !isBeaconHero && !useAccentColor && type != 'carousel' && type != 'thumbnail',
                //['accent-txt']: well || isBeaconHero,
                ['caption-txt']: type === 'carousel' || type === 'thumbnail' || useAccentColor,
                [styles.well]: well === '1',
            })}
        >
            <p className={cn(styles['dsc'], 'dsc')}>{Parser(newDesc ? newDesc : desc)}</p>
            <input type="text" className="form-control" name="title" onChange={(e) => setNewDesc(e.target.value)} />
        </div>
    )
}

export default DescBlock
