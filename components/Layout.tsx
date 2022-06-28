import { LayoutProps, NavModule, FooterModule } from '../components/types'
import styles from './layout.module.scss'
import cn from 'classnames'
import { Renderer } from '../components/Renderer'

export default function Layout(props: LayoutProps) {
    const { children, moduleData } = props
    //Placing nav data na footer data into two different arrays
    const navigationModule = moduleData.modules.filter((module: NavModule) => module.componentType === 'navigation')
    const footerModule = moduleData.modules.filter((module: FooterModule) => module.componentType === 'footer')

    return (
        <div
            className={cn(styles.root, {
                [styles.layout1]: moduleData.modules[0].attributes.navStyle === 'layout1',
            })}
        >
            <header>
                <Renderer config={navigationModule} themeStyles={moduleData.themeStyles} />{' '}
            </header>
            <main>{children}</main>
            <footer>
                <Renderer config={footerModule} themeStyles={moduleData.themeStyles} />
            </footer>
        </div>
    )
}
