'use client'
import { capitalize } from 'functions'
import styles from './floatingreviewbuttons.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReviewButtonProps, FloatingReviewButtonsProps } from 'types'


export const FloatingReviewButtons = (props: FloatingReviewButtonsProps) => {
    const { btns } = props

    return (

<div className={cn(styles['root'],styles['social_items'], 'social-review-btns')}>
    {btns.map((btn:ReviewButtonProps, idx:number) => (
        <a
            target="blank"
            aria-label={btn.content}
            href={btn.link} key={idx}
        >
            <div className={cn(styles['social_button'], styles[`${btn.type}_button`], `${btn.type}_button`)}>
                <div className={styles["floating_icon"]}>
                    <i className={cn(styles.fab,styles[`fa-${btn.type}-f`])}><FontAwesomeIcon icon={['fab', btn.type === 'facebook' ? 'facebook' : 'google']} /></i>
                </div>
                <span>{`Review Us On ${capitalize(btn.type)}!`}</span>
            </div>
        </a>
    ))}

</div>




    )

    
}
