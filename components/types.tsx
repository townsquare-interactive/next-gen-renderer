/* Components */

import { ReactNode } from 'react'

export interface HeaderProps {
    headline?: string
    imageUrl?: string
    altText?: string
    backgroundImageUrl?: string
    reverse?: boolean
    modLayout: 'normal' | 'alt-layout'
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
}

export interface LabelProps {
    text?: string
    border?: boolean
    gap?: boolean
    align?: 'left' | 'right' | 'center'
    textSize?: 'sm' | 'md' | 'lg'
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
}

export interface ImageItem {
    imageUrl: string
    altText?: string
    linkText?: string
    linkUrl?: string
    headline?: string
    body?: string
}

/* export enum ModLayout {
    ThreeAndOneThird = '3-1/3',
    ThreeAndTwoThirds = '3-2/3',
} */
export interface ImagesProps {
    items: ImageItem[]
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    gap?: boolean
}

export interface TileImageProps {
    itemNumber: ImageItem
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    isMainImage: boolean
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
}

export interface VideoProps {
    videoUrl: string
    modLayout: 'ext' | 'local'
}

export interface HomeProps {
    moduleData: ModuleData
    globalData: ModuleData
    page: ModuleData
    //mods: any
    //pageList?: any
}

export interface LayoutProps {
    //children: React.PropsWithChildren<{}>,
    children: ReactNode
    moduleData: any
    //pageList?: PagesProps
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
}

export interface BurgerProps {
    navSwitch: () => void
    navCheck: boolean
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
}

export interface SeoData {
    title: string
    description: string
    favicon: string
    ogImage: string
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
}

/*-----------------------------End of Components-------------*/

export interface imageData {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export interface images {
    images: imageData[]
    posts: imageData[]
}

export interface imageUse {
    images: imageData[]
}

export interface HeroHeader {
    headline?: string
    imageUrl: string
}

export interface CardProps {
    imageUrl?: string
    title?: string
    body?: string
}

export interface photoProps {
    url: string
}

export interface postData {
    userId?: number
    id?: number
    title: string
    body: string
    border?: boolean
    imageUrl?: string
    linkUrl?: string
    btnText?: string
}

export interface postComment {
    body: string
    email: string
    id: number
    name: string
    postId: number
}

export interface comments {
    comments: postComment[]
    id: number
}

export interface posts {
    data: postData[]
    posts: postData[]
    //posts:postData,
}

export interface blogData {
    id: number
    title: string
    date: string
    body: string
}

export interface blog {
    allPostsData: blogData[]
}
