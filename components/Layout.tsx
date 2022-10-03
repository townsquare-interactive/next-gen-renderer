import { LayoutProps, GlobalModule } from '../components/types'
import styles from './layout.module.scss'
import cn from 'classnames'
import { Renderer } from '../components/Renderer'
import MyHeader from './MyHeader'

export default function Layout(props: LayoutProps) {
    const { children, CMSLayout, themeStyles } = props
    //Placing nav data na footer data into two different arrays
    const navigationModule = CMSLayout.modules.filter((module: GlobalModule) => module.componentType === 'navigation')
    const footerModule = CMSLayout.modules.filter((module: GlobalModule) => module.componentType === 'footer')

    return (
        <div
            className={cn(styles.root, {
                [styles.layout1]: navigationModule[0].attributes.navStyle === 'layout1',
            })}
        >
            <MyHeader pages={navigationModule[0].attributes.pages} CMSLayout={CMSLayout} />
            {/*             <header>
                <Renderer config={navigationModule} themeStyles={themeStyles} />
            </header> */}
            <main>{children}</main>
            <footer>
                <Renderer config={footerModule} themeStyles={themeStyles} />
            </footer>
        </div>
    )
}
