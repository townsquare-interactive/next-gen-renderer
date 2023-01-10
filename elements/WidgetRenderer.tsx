'use client'
import TextWidget from '../elements/TextWidget'
import SocialLinks from '../elements/SocialLinks'
import Nav from '../elements/Nav'
import { WidgetRendererProps } from 'types'

const keysToWidgetMap: any = {
    TextWidget,
    SocialLinks,
    Nav,
}

export const WidgetRenderer = ({ item, siteData, navSwitch }: WidgetRendererProps) => {
    if (!item) {
        throw new Error('You are calling Renderer with no item.')
    }

    const modProps = { navType: 'footer-nav', cmsNav: siteData.cmsNav, navSwitch: navSwitch, modType: 'widget', siteData: siteData }

    let footerComp = 'text'
    if (item.component === 'text' || item.component === 'enhancedtext') {
        footerComp = 'TextWidget'
    } else if (item.component === 'social_media') {
        footerComp = 'SocialLinks'
    } else if (item.component === 'nav_menu') {
        footerComp = 'Nav'
    }

    const Comp = keysToWidgetMap[footerComp]

    return <>{Comp && <Comp text={item.text} title={item.title} filter={item.filter} {...modProps} />}</>
}
