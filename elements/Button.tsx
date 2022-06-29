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

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div
                    className={cn('btnAfter', styles.btn, {
                        [styles.accentBtn]: modLayout === 'accent',
                        [styles.altBtn]: modLayout === 'alt',
                    })}
                >
                    {/* <style>{findStyle()}</style> */}
                    {themeStyles ? (
                        <Link href={linkUrl}>
                            <a style={modLayout === 'normal' ? themeStylesNormal : modLayout === 'accent' ? themeStylesAccent : themeStylesAlt} href={linkUrl}>
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
