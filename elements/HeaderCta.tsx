'use client'
import styles from './headercta.module.scss'
import { HeaderCTAProps } from '../types'
import cn from 'classnames'
import { ConditionalWrapper } from '../functions'
import { ReactChild } from 'react'
import Link from 'next/link'

const HeaderCTA = (props: HeaderCTAProps) => {
    const { cta, btnCount } = props

    const sharedClasses = [cta.type === 'banner' ? 'cta-banner' : btnCount ? `cta-${btnCount}` : '']

    return (
        <div
            className={cn('accent-txt', styles['cta-btn'], {
                [styles['btn']]: cta.type === 'button',
                [styles['banner']]: cta.type === 'banner',
                [styles['has-link']]: cta.link,
            })}
        >
            <ConditionalWrapper
                condition={cta.link ? true : false}
                trueOutput={(children: ReactChild) => (
                    <Link href={cta.link || ''} className={cn(sharedClasses, 'cta')} style={cta.bgColor ? { backgroundColor: cta.bgColor } : {}}>
                        {children}
                    </Link>
                )}
                falseOutput={(children: ReactChild) => <span className={cn(sharedClasses)}>{children}</span>}
            >
                {cta.text}
            </ConditionalWrapper>
        </div>
    )
}

export default HeaderCTA
