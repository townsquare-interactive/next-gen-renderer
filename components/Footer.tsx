import styles from './footer.module.scss'
import Link from 'next/dist/client/link'
import Script from 'next/script'
import cn from 'classnames'
import Image from 'next/image'

const Footer = () => {
    const navData = [
        {
            text: 'Home',
            linkUrl: '/',
        },
        {
            text: 'Menu',
            linkUrl: '/menu',
        },
        {
            text: 'Images',
            linkUrl: '/images',
        },
        {
            text: 'Blog',
            linkUrl: '/blog',
        },
        {
            text: 'Contact',
            linkUrl: '/',
        },
        {
            text: 'About Us',
            linkUrl: '/',
        },
        {
            text: 'Our Sponsors',
            linkUrl: '/',
        },
    ]

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {/*                 <div className={styles.title}>
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
                </div> */}

                <div className={cn(styles.block, styles.logoInfo)}>
                    <div className={styles.logo}>
                        <Image
                            // Route of the image filepublic\images\company-logo.png
                            src="/images/company-logo.png"
                            height={156}
                            width={722}
                            alt=""
                        />
                    </div>
                    <div className={styles.social}>
                        <Link href="/">
                            <a>
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <i className="fa-brands fa-google"></i>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </Link>
                    </div>{' '}
                    <div className={styles.phone}>922-444-2849</div>
                    <div className={styles.siteInfo}>
                        <p>Travel365</p>
                        <p>&copy; All rights reserved</p>
                    </div>
                </div>
                <div className={cn(styles.block, styles.navInfo)}>
                    <ul>
                        {navData.map((item, index) => (
                            <li key={index}>
                                <Link href={item.linkUrl}>
                                    <a>{item.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Images</li>
                        <li>other</li>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Images</li>
                        <li>other</li>
                    </ul> */}
                </div>
                <div className={cn(styles.block, styles.addInfo)}>
                    <p>444 happy road</p>
                    <p>Townsville, Georgia</p>
                    <p>47384</p>
                </div>
            </div>
            {<Script src="https://kit.fontawesome.com/711388ec06.js" strategy="lazyOnload" onLoad={() => console.log(`Fontawesome Loaded Correctly`)} />}
        </div>
    )
}

export default Footer
