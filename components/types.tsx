/* Components */

import { ReactNode } from 'react'

export interface HeaderProps {
    headline?: string
    imageUrl?: string
    altText?: string
    backgroundImageUrl?: string
    reverse?: boolean
    modLayout: 'normal' | 'alt-layout'
    themeStyles: ThemeStyles
}

export interface LogoProps {
    logoUrl?: string
}

export interface ListProps {
    headline?: string
    body?: string
    border?: boolean
    imageUrl?: string
    altText?: string
    linkUrl?: string
    btnText?: string
    modLayout?: 'card' | 'article'
    textSize?: 'sm' | 'md' | 'lg'
    reverse?: boolean
    align?: 'left' | 'right' | 'center'
    themeStyles: ThemeStyles
}

export interface GridData {
    headline?: string
    body?: string
    border?: boolean
    imageUrl?: string
    altText?: string
    linkUrl?: string
    btnText?: string
    textSize?: 'sm' | 'md' | 'lg'
    align?: 'left' | 'right' | 'center'
}

export interface GridProps {
    items: GridData[]
    themeStyles: ThemeStyles
}

export interface LabelProps {
    text?: string
    border?: boolean
    gap?: boolean
    align?: 'left' | 'right' | 'center'
    textSize?: 'sm' | 'md' | 'lg'
    themeStyles: ThemeStyles
}

export interface TextData {
    border?: boolean
    gap?: boolean
    align?: 'left' | 'right' | 'center'
    textSize?: 'sm' | 'md' | 'lg'
    text: string
}

export interface TextProps {
    border?: boolean
    gap?: boolean
    align?: 'left' | 'right' | 'center'
    textSize?: 'sm' | 'md' | 'lg'
    text?: string
    themeStyles: ThemeStyles
}

export interface ImageItem {
    imageUrl: string
    altText?: string
    linkText?: string
    linkUrl?: string
    headline?: string
    body?: string
}

export interface ImagesProps {
    items: ImageItem[]
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    gap?: boolean
}

export interface TileImageProps {
    itemNumber: ImageItem
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    isMainImage: boolean
    hero?: boolean
}

export interface SlideData {
    imageUrl?: string
    altText?: string
    text?: string
    byline?: string
}

export interface CarouselProps {
    modLayout: 'images' | 'text'
    slideCount: 1 | 2 | 3
    autoPlay?: boolean
    items: SlideData[]
    themeStyles: ThemeStyles
}

export interface SocialData {
    linkUrl: string
}

export interface AddressData {
    street: string
    cityState: string
    zip: string
}

export interface FooterProps {
    socialData: SocialData[]
    addressData: AddressData
    siteName: string
    phoneNumber: string
    pages: PagesProps[]
    logoUrl?: string
    borderNum?: number
    themeStyles: ThemeStyles
}

export interface VideoProps {
    videoUrl: string
    modLayout: 'ext' | 'local'
}

export interface HomeProps {
    moduleData: ModuleData
    globalData: ModuleData
    page: ModuleData
}

export interface LayoutProps {
    children: ReactNode
    moduleData: any
}

export interface Params {
    slug: 'string'
}

export interface Context {
    params: Params
}

export interface PageListProps {
    name: string
    slug: string
    id: string
}

export interface PagesData {
    text: string
    linkUrl: string
}

export interface PagesProps {
    name: string
    slug: string
    id: string
}

export interface NavProps {
    pages: PagesProps[]
    modLayout?: 'header' | 'footer'
    navStyle?: 'layout1' | 'layout2'
    borderNum?: number
    navImage?: string
    themeStyles: ThemeStyles
}

export interface BurgerProps {
    navSwitch: () => void
    navCheck: boolean
    themeStyles: ThemeStyles
}

export interface NavigationProps {
    navSwitch?: () => void
    navCheck: boolean
    pages: PagesProps[]
    modLayout?: 'header' | 'footer'
    navStyle?: 'layout1' | 'layout2'
    borderNum?: number
    navImage?: string
    altText?: string
    logoUrl?: string
    themeStyles: ThemeStyles
}
export interface NavModule {
    componentType: string
    attributes: NavigationProps
}
export interface FooterModule {
    componentType: string
    attributes: FooterProps
}

export interface NavBarProps {
    navCheck: boolean
    pages: PagesProps[]
    modLayout?: 'header' | 'footer'
    navStyle?: 'layout1' | 'layout2'
    borderNum?: number
    navImage?: string
    altText?: string
    themeStyles: ThemeStyles
}

export interface SeoData {
    title: string
    description: string
    favicon: string
    ogImage: string
}

export interface ThemeStyles {
    mainColor: string
    textColor: string
    headingColor: string
    textColorAccent: string
    linkColor: string
    accentBackgroundColor: string
    accentColor2: string
    altColor: string
    headerBackground: string
    footerBackground: string
    navBackground: string
}

export interface ModuleData {
    logoUrl?: string
    /*imagesData?: ImagesProps
    listData?: ListProps
    headerData?: HeaderProps
    labelData?: LabelProps
    textData?: TextData
    carouselData?: CarouselProps
    footerData?: FooterProps
    navData: NavProps
    videoData?: VideoProps
    gridData?: GridProps */
    modules?: ImagesProps | ListProps | HeaderProps | LabelProps | TextData | CarouselProps | FooterProps | NavProps | VideoProps | GridProps
    name?: string
    seo?: SeoData
    themeStyles?: ThemeStyles
}
