import styles from './carouselarrow.module.scss'
import cn from 'classnames'
import { MouseEventHandler } from 'react'

const Arrow = (props: { type: string; onClick?: MouseEventHandler<HTMLAnchorElement>; useThumbnail?: boolean }) => {
    const { type, onClick, useThumbnail = false } = props
    return (
        <a
            onClick={onClick}
            className={cn(styles['slick-arrow'], 'slick-arrow', {
                [styles['slick-next']]: type === 'next',
                [styles['slick-prev']]: type === 'prev',
                [styles['thumbnail']]: useThumbnail,
                [styles['no-thumb']]: !useThumbnail,
            })}
        ></a>
    )
}

export default Arrow
