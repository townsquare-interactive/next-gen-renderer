/* Components */

import { ReactNode } from 'react'

export interface HeaderProps {
    headline?: string
    imageUrl?: string
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

export interface TileImage {
    itemNumber: ImageItem
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    isMainImage: boolean
}

export interface SlideData {
    imageUrl?: string
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

export interface FooterData {
    socialData: SocialData[]
    addressData: AddressData
    siteName: string
    phoneNumber: string
}

export interface FooterProps {
    footerData: FooterData
    navData: NavProps
    logoUrl?: string
}

export interface VideoProps {
    videoUrl: string
    modLayout: 'ext' | 'local'
}

export interface HomeProps {
    moduleData: ModuleData
    global: ModuleData
    page: ModuleData
    mods: any
}

export interface LayoutProps {
    //children: React.PropsWithChildren<{}>,
    children: ReactNode
    moduleData: ModuleData
}

export interface PagesData {
    text: string
    linkUrl: string
}

export interface PagesProps {
    text: string
    linkUrl: string
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
    navSwitch: () => void
    navCheck: boolean
    navStyle?: string
    logoUrl?: string
    navData: NavProps
}

export interface NavBarProps {
    navCheck: boolean
    navData: NavProps
    navStyle?: string
}

export interface ModuleData {
    logoUrl?: string
    imagesData?: ImagesProps
    listData?: ListProps
    headerData?: HeaderProps
    labelData?: LabelProps
    textData?: TextData
    carouselData?: CarouselProps
    footerData?: FooterData
    navData: NavProps
    videoData?: VideoProps
    gridData?: GridProps
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
