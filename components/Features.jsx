import styles from './features.module.scss'
import Card from './Card'

//import menu from './menu.json';
import menuData from './menu.json'
//import * as data from './menu.json'
const menu = menuData.menu
/* console.log(menu[0])
console.log('title: ', menu[0].title) */

function Features() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {/* <Card image={pic3}>the text {<b>something bold</b>}goes here</Card> */}

                {menu.map((item, index) => {
                    //return <Card text={item.text} image={item.imgSrc} title={item.title} />
                    return (
                        <Card imgSrc={item.imgSrc} title={item.title} key={index}>
                            {item.text}
                            {/*<b>{item.text}</b>*/}
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Features
