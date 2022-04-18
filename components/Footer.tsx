import styles from './footer.module.scss'
import Link from 'next/dist/client/link'
import Script from 'next/script'

const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>Welcome to the footer</h1>
                </div>
                <div className={styles.text}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className={styles.features}>
                    <Link href="/">
                        <a>
                            <i className="fa-brands fa-facebook"></i> Facebook
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="fa-brands fa-instagram"></i> Instagram
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="fa-brands fa-google"></i> GMB
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <i className="fa-brands fa-twitter"></i> Twitter
                        </a>
                    </Link>
                </div>
                {/*                 <Link href="/first-post">
                    <a>First Post</a>
                </Link> */}
            </div>
            {<Script src="https://kit.fontawesome.com/711388ec06.js" strategy="lazyOnload" onLoad={() => console.log(`Fontawesome Loaded Correctly`)} />}
        </div>
    )
}

export default Footer
