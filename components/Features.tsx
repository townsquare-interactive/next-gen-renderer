import styles from './features.module.scss'
import Card from './Card'
import menuData from './menu.json'
const menu = menuData.menu

function Features() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {menu.map((item, index) => {
                    return (
                        <Card imgSrc={item.imgSrc} title={item.title} key={index}>
                            {item.text}
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Features
