import { ButtonProps } from '../components/types'
import cn from 'classnames'
import Link from 'next/link'
import styles from '../elements/button.module.scss'
import { useEffect } from 'react'

function Button(props: ButtonProps) {
    const { text = '', linkUrl = '/', themeStyles, modLayout = 'normal' } = props
    /* let afterColor */

    // Similar to componentDidMount and componentDidUpdate:

    const themeStylesNormal = {
        color: `${themeStyles['textColor']}`,
    }
    const afterColorNormal = `.btnAfter a:after{color:${themeStyles['linkColor']}}`

    const themeStylesAccent = {
        color: `${themeStyles['textColorAccent']}`,
    }

    const afterColorAccent = `.btn:after{color:${themeStyles['textColorAccent']}}`
    /* const afterColorAccent = `.btnAfter a:after{color:red']}}` */

    const themeStylesAlt = {
        backgroundColor: `${themeStyles['mainColor']}`,
        color: `${themeStyles['textColorAccent']}`,
    }
    const afterColorAlt = `.btnAfter a:after{color:${themeStyles['textColorAccent']}}`

    const themeStylesAlt2 = {
        color: `${themeStyles['mainColor']}`,
        border: `2px solid ${themeStyles['mainColor']}`,
    }

    const themeStylesAlt3 = {
        color: `${themeStyles['textColorAccent']}`,
        border: `2px solid ${themeStyles['textColorAccent']}`,
    }

    /* function findStyle() {
        if (modLayout === 'normal') {
            console.log('aftercoloralt')
            return afterColorNormal
        } else if (modLayout === 'accent') {
            return afterColorAccent
        } else if (modLayout === 'alt') {
            console.log('aftercoloralt')
            return afterColorAlt
        }
    } */
    function findStyle() {
        if (modLayout === 'normal') {
            return themeStylesNormal
        } else if (modLayout === 'accent') {
            return themeStylesAccent
        } else if (modLayout === 'alt') {
            return themeStylesAlt
        } else if (modLayout === 'alt2') {
            return themeStylesAlt2
        } else if (modLayout === 'accent2') {
            return themeStylesAlt3
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn('btnAfter', styles.btn, {
                        [styles.accentBtn]: modLayout === 'accent',
                        [styles.altBtn]: modLayout === 'alt' || modLayout === 'alt2' || modLayout === 'accent2',
                    })}
                >
                    {/* <style>{findStyle()}</style> */}
                    {themeStyles ? (
                        <Link href={linkUrl}>
                            <a
                                /* style={modLayout === 'normal' ? themeStylesNormal : modLayout === 'accent' ? themeStylesAccent : themeStylesAlt} */ style={findStyle()}
                                href={linkUrl}
                            >
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
