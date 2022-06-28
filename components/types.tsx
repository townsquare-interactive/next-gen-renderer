/* Components */

import { ReactNode } from 'react'

export interface HeaderProps {
    /**Headline content to appear */
    headline?: string
    /**Main image file url*/
    imageUrl?: string
    /**Alt text for  image*/
    altText?: string
    /**Background image file url*/
    backgroundImageUrl?: string
    /**Reverse layout of header items*/
    reverse?: boolean
    /**Style layout change on mobile*/
    modLayout: 'normal' | 'alt-layout'
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface LogoProps {
    logoUrl?: string
}

export interface ListProps {
    /**Headline to appear at top*/
    headline?: string
    /**Body text content*/
    body?: string
    /**Background border around conent and image*/
    border?: boolean
    /**Optional image to go with content*/
    imageUrl?: string
    /**Text for image alt property*/
    altText?: string
    /**URL to link to from optional button*/
    linkUrl?: string
    /**Text label for button*/
    btnText?: string
    /**Style layout of component*/
    modLayout?: 'card' | 'article'
    /**Size of text*/
    textSize?: 'sm' | 'md' | 'lg'
    /**Reverse order so image and text are swapped */
    reverse?: boolean
    /**Text align style*/
    align?: 'left' | 'right' | 'center'
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface GridData {
    /**Headline content to appear at top*/
    headline?: string
    /**Body text content*/
    body?: string
    /**Background border around conent and image*/
    border?: boolean
    /**Optional image to go with content*/
    imageUrl?: string
    /**Text for image alt property*/
    altText?: string
    /**URL to link to from optional button*/
    linkUrl?: string
    /**Text for optional button*/
    btnText?: string
    /**Size of text*/
    textSize?: 'sm' | 'md' | 'lg'
    /**Text align style*/
    align?: 'left' | 'right' | 'center'
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface GridProps {
    /**Props for each item*/
    items: GridData[]
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface LabelProps {
    /**Text content*/
    text?: string
    /**Bottom border under text*/
    border?: boolean
    /**Spacing around text*/
    gap?: boolean
    /**Text align style*/
    align?: 'left' | 'right' | 'center'
    /**Size of text*/
    textSize?: 'sm' | 'md' | 'lg'
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface TextData {
    /**Bottom border under text*/
    border?: boolean
    /**Spacing around text*/
    gap?: boolean
    /**Text align style*/
    align?: 'left' | 'right' | 'center'
    /**Size of text*/
    textSize?: 'sm' | 'md' | 'lg'
    text: string
}

export interface TextProps {
    /**Bottom border under text*/
    border?: boolean
    /**Spacing around text*/
    gap?: boolean
    /**Text align style*/
    align?: 'left' | 'right' | 'center'
    /**Size of text*/
    textSize?: 'sm' | 'md' | 'lg'
    /**Text content*/
    text: string
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface ImageItem {
    /**Image file URL*/
    imageUrl: string
    /**Text for image alt property*/
    altText?: string
    /**Text that describes link location*/
    linkText?: string
    /**Optional link URL for image*/
    linkUrl?: string
    /**Headline content to appear */
    headline?: string
    /**Slide up text content*/
    body?: string
}

export interface ImagesProps {
    items: ImageItem[]
    /**Style layout of component*/
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    /**Space around each image*/
    gap?: boolean
}

export interface TileImageProps {
    itemNumber: ImageItem
    /**Style layout of component*/
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    /**Determines which image is the main one for sizing*/
    isMainImage: boolean
    /**Determines if item is a hero image*/
    hero?: boolean
}

export interface SlideData {
    /**Image url */
    imageUrl?: string
    /**Text for image alt property*/
    altText?: string
    /**Body text*/
    text?: string
    /**Bolded line under body text*/
    byline?: string
}

export interface CarouselProps {
    /**Style layout of component*/
    modLayout: 'images' | 'text'
    /**Determines how many slides to show at once*/
    slideCount: 1 | 2 | 3
    /**Slides csn automatically scroll or not move until button is pressed*/
    autoPlay?: boolean
    /**Object with data for each item in carousel*/
    items: SlideData[]
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface SocialData {
    /**Link for each social item*/
    linkUrl: string
}

export interface AddressData {
    street: string
    cityState: string
    zip: string
}

export interface FooterProps {
    /**Data for links to social platforms*/
    socialData: SocialData[]
    addressData: AddressData
    siteName: string
    phoneNumber: string
    pages: PagesProps[]
    /**Image URL for logo*/
    logoUrl?: string
    /**Determines which item to place bottom border under in Nav*/
    borderNum?: number
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface VideoProps {
    /**Video URL for logo*/
    videoUrl: string
    /**Style layout of component*/
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
export interface Media {
    naturalHeight: number
    naturalWidth: number
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
    /**Layout changes based on where Nav is being called*/
    modLayout?: 'header' | 'footer'
    /**Mobile style layout of component*/
    navStyle?: 'layout1' | 'layout2'
    /**Determines which item to place bottom border under in Nav*/
    borderNum?: number
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface BurgerProps {
    /**Function that changes toggle on navbar being shown*/
    navSwitch: () => void
    /**Boolean that determines if navbar being shown or hidden*/
    navCheck: boolean
    /**Global site styles*/
    themeStyles: ThemeStyles
}

export interface NavigationProps {
    navSwitch?: () => void
    /**Boolean that determines if navbar being shown or hidden*/
    navCheck: boolean
    pages: PagesProps[]
    /**Layout changes based on where Nav is being called*/
    modLayout?: 'header' | 'footer'
    /**Mobile style layout of component*/
    navStyle?: 'layout1' | 'layout2'
    /**Determines which item to place bottom border under in Nav*/
    borderNum?: number
    /**Image that appears in navbar dropdown*/
    navImage?: string
    /**alt text for nav image*/
    altText?: string
    /**Image url for logo*/
    logoUrl?: string
    /**Global site styles*/
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
    /**Boolean that determines if navbar being shown or hidden*/
    navCheck: boolean
    /**Nav pages*/
    pages: PagesProps[]
    /**Layout changes based on where Nav is being called*/
    modLayout?: 'header' | 'footer'
    /**Mobile style layout of component*/
    navStyle?: 'layout1' | 'layout2'
    /**Determines which item to place bottom border under in Nav*/
    borderNum?: number
    /**Image that appears in navbar dropdown*/
    navImage?: string
    /**alt text for nav image*/
    altText?: string
    /**Global site styles*/
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
