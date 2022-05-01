import styles from './features.module.scss'
import Card from './Card'
import Article from './List'
import menuData from './menu.json'
const menu = menuData.menu

function Features() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {menu.map((item, index) => {
                    return <Article imageUrl={item.imgSrc} title={item.title} key={index} body={item.text} modLayout="card" border={false} />
                })}
            </div>
        </div>
    )
}

export default Features
