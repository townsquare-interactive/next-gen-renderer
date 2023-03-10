import styles from './parallaxcss.module.scss'

export default function ParallaxCss() {
    return (
        <div className={styles.wrappy}>
            <div className={styles.heady}>
                <img
                    src="http://clttestsiteforjoshedwards.production.townsquareinteractive.com/files/2022/08/EiffelWater1.jpg?w=1080&h=810"
                    className={styles.background}
                />
                {/*  <img src="imgs/Trees.png" className="foreground" /> */}
                <h1 className={styles.title}>Welcome!</h1>
            </div>
        </div>
    )
}
