import { ButtonProps } from '../types'
import cn from 'classnames'
import Link from 'next/link'
import styles from '../elements/button.module.scss'
import { useEffect, useState } from 'react'

function Button(props: ButtonProps) {
    const { text = '', linkUrl = '/', themeStyles, btnType = 'normal' } = props
    const themeStylesNormal = {
        color: `${themeStyles['textColor']}`,
    }

    const themeStylesAccent = {
        color: `${themeStyles['textColorAccent']}`,
    }

    const themeStylesAlt = {
        backgroundColor: `${themeStyles['mainColor']}`,
        color: `${themeStyles['textColorAccent']}`,
    }

    /*  const themeStylesAlt = `.btn{backgroundColor: ${themeStyles['mainColor']}} color: ${themeStyles['textColorAccent']}} .btn:hover{background-color:transparent; color:red;height:2px;}` */

    const themeStylesAlt2 = {
        color: `${themeStyles['mainColor']}`,
        border: `2px solid ${themeStyles['mainColor']}`,
    }

    const themeStylesAlt3 = {
        color: `${themeStyles['textColorAccent']}`,
        border: `2px solid ${themeStyles['textColorAccent']}`,
    }

    const [hasMounted, setHasMounted] = useState(false)
    const [usedStyle, setStyle] = useState(themeStylesNormal)
    useEffect(() => {
        setHasMounted(true)
        if (btnType === 'normal') {
            setStyle(themeStylesNormal)
        } else if (btnType === 'accent') {
            setStyle(themeStylesAccent)
        } else if (btnType === 'alt') {
            setStyle(themeStylesAlt)
        } else if (btnType === 'alt2') {
            setStyle(themeStylesAlt2)
        } else if (btnType === 'accent2') {
            setStyle(themeStylesAlt3)
        }
    }, [btnType])
    if (!hasMounted) {
        return null
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn('btnAfter', styles.btn, {
                        [styles.accentBtn]: btnType === 'accent',
                        [styles.altBtn]: btnType === 'alt' || btnType === 'alt2' || btnType === 'accent2',
                    })}
                >
                    {/* {btnType === 'alt' && <style>{altHover}</style> */}
                    {themeStyles ? (
                        <Link href={linkUrl}>
                            <a style={usedStyle} href={linkUrl}>
                                {text}
                            </a>
                        </Link>
                    ) : (
                        <Link href={linkUrl}>
                            <a href={linkUrl}>{text}</a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Button
