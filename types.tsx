/* Components */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ReactChild, ReactElement, ReactNode } from 'react'

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
    BckdHeaderSocial: string
    subHeadingColor: string
    NavText: string
    linkHover?: string
    bckdContent?: string
    footerText: string
}

export interface HomeProps {
    CMSLayout: GlobalData
    page: CMSPage
}

//temp maybe not needed
/* export interface CMSGlobal {
    vars: any
    forms2: any
    design: any
    logos: any
    pages: any
    forms: any
    navigation: any
    seo: any
    images: any
    config: any
    blogging: any
    composites: any
}
 */
export interface LayoutProps {
    children: ReactNode
    CMSLayout: GlobalData
    themeStyles: ThemeStyles
    page: CMSPage
}

export interface GlobalData {
    logoUrl?: string
    navStyle?: 'layout1' | 'layout2'
    //themeStyles: ThemeStyles
    layout?: number
    modules: GlobalModule[]
    seo?: SeoData
    url?: string
    email?: string
    social: SocialItem[]
    siteName?: string
    phoneNumber?: String
    themeStyles: ThemeStyles
    contact: { email: any; phone: any; hours?: any; address?: any }
    cmsNav?: [NavItem]
    logos?: Logo
    mobileLogos?: Logo
    footerLogos?: Logo
    composites?: { footer?: CompositeData; right_rail?: CompositeData }
    theme?: string
    cmsColors?: any
    favicon?: string
    cmsUrl?: string
}

export interface Logo {
    show: number
    type: string
    markup: string
    hasLinks: boolean
    alignment: string
    image_src: string
    image_link: string
}

interface CompositeData {
    type: string
    layout: null | string
    columns: number
    sections: null | string
    modules: { items: [CompositeItem]; type: string }
}

export interface CompositeItem {
    filter: boolean
    title: string
    component: string
    text: string
}

export interface NavItem {
    ID: number
    menu_list_id: number
    title: string
    post_type: string
    nav_menu_item: string
    type: null
    menu_item_parent: number
    object_id: number
    object: string
    target: string | null
    classes: string | null
    menu_order: number
    mi_url: string | null
    url: string
    submenu: [NavItem]
}

export interface NavListItemProps {
    navType: string | undefined
    item: NavItem
    arrow?: boolean
}

export interface ContactLinkProps {
    cname: string
    link: string
    icon: IconProp
    content: string
}

export interface NavToggleProps {
    navSwitch?: () => void
    themeStyles: ThemeStyles
    modType?: 'header' | 'footer'
}

export interface CMSGlobalDesign {
    colors: CMSColors
}

export interface Color {
    value: string
    key: string
    label: string
    type: string
}

export interface CMSColors {
    color_1: Color
    color_2: Color
    color_3: Color
    color_3a: Color
    color_4: Color
    color_5: Color
    color_6: Color
    color_7: Color
    color_8: Color
    color_9: Color
    color_10: Color
    color_11: Color
    color_12: Color
    color_13: Color
    color_14: Color
    color_15: Color
    color_16: Color
    color_17: Color
    color_18: Color
    color_19: Color
    color_20: Color
    color_21: Color
    color_22: Color
    color_23: Color
    color_24: Color
    color_25: Color
    color_26: Color
    color_27: Color
    color_28: Color
    color_29: Color
    color_30: Color
    color_31: Color
    color_32: Color
    color_33: Color
    color_34: Color
    color_35: Color
    color_36: Color
}

export interface CMSPage {
    seo?: SeoData
    attrs?: {}
    data: CMSPageData
}

export interface Module {
    [key: string]: ModuleData
}

export interface CMSPageData {
    attributes: NavigationProps | FooterProps
    modules: Module[]
    type?: string
    layout?: number
    columns?: number | string
    JS?: string | null
    head_script: string | null
    hideTitle: number
    sections: [{ wide: string }, { wide: string }, { wide: string }, { wide: string }, { wide: string }]
}

export interface GlobalModule {
    componentType: string
    /* attributes: NavigationProps | FooterProps */
    attributes: LayoutComponentAttributes
}

export interface LayoutComponentAttributes {
    /**Data for links to social platforms*/
    socialData?: SocialData[]
    addressData?: AddressData
    siteName?: string
    phoneNumber?: string

    navSwitch?: () => void
    /**Boolean that determines if navbar being shown or hidden*/
    navCheck?: boolean
    pages?: PagesProps[]
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
}

export interface ModuleData {
    logoUrl?: string
    /* modules?: ImagesProps | ListProps | HeaderProps | LabelProps | TextData | CarouselProps | FooterProps | NavProps | VideoProps | GridProps*/
    modules: Module[]
    navStyle?: 'layout1' | 'layout2'
    name?: string
    seo?: SeoData
    themeStyles: ThemeStyles
    type?: string
    layout?: number
    columns?: number | string
    JS?: string | null
    head_script: string | null
    hideTitle: number
    sections: [{ wide: string }, { wide: string }, { wide: string }, { wide: string }, { wide: string }]
}

export interface PageProps {
    logoUrl?: string
    modules: Module[]
    name?: string
    seo?: SeoData
    themeStyles?: ThemeStyles
    type?: string
    layout?: number
    columns?: number | string
    JS?: string | null
    head_script: string | null
    hideTitle: number
    sections: [{ wide: string }, { wide: string }, { wide: string }, { wide: string }, { wide: string }]
}

/*-----------------------------TSI Modules ----------------------------------*/
export interface ArticleItems {
    id: string
    headline: string
    subheader: string
    image: string
    captionOn?: 0 | 1
    icon: string
    icon2: string
    icon3: string
    bkgrd_color: string
    btnType: string
    btnType2: string
    btnSize: string
    btnSize2: string
    desc: string
    pagelink: string
    weblink: string
    actionlbl: string
    newwindow: number | null | string
    pagelink2: string
    weblink2: string
    actionlbl2: string
    newwindow2: number | null | string
    align: string
    isFeatured: string
    isPlugin: string
    headerTag: string
    plugin: string
    disabled: string
    img_alt_tag?: string
    caption_tag?: string
    headSize?: string
    descSize?: string
    cmsUrl?: string
}

export interface ArticleProps {
    uid: string
    modId: string
    /* type: string */
    type: string
    /**Border background on items*/
    well: string | number
    align?: string
    items: ArticleItems[]
    imgsize: string
    /**Custom class addition*/
    class: string
    /**Title text to go above module*/
    title: string
    hideTitle?: number
    export: number
    columns: number | string
    lightbox: string
    blockSwitch1: number
    scale_to_fit: string
    /**Global styles for site*/
    themeStyles: ThemeStyles
    /**Check to see if element is hidden */
    width?: string
    disabled?: string
    cmsUrl?: string
}

export interface Colors {
    color?: string
    backgroundColor?: string
}
export interface btnColors {
    color?: string
    borderColor?: string
}

export interface TheListItemActionProps {
    pagelink?: string
    pagelink2?: string
    weblink?: string
    weblink2?: string
    actionlbl: string
    actionlbl2?: string
    newwindow: number | null | string
    newwindow2?: number | null | string
    btn2Styles?: btnColors
    icon?: string
    icon2?: string
    btnType?: string
    btnType2?: string
    themeStyles: ThemeStyles
    btnSize: string
    btnSize2: string
    well?: string | number
}

export interface TheListItemProps {
    item: ArticleItems
    well: string | number
    themeStyles: ThemeStyles
    textColorHeading: { color: string }
    imgsize: string
    type: string
    columns: number | string
    index: number
}

export interface TsiWrp {
    calcImageSize: (loadedMedia: Media) => void
    imageWidth: number
    imageHeight: number
    textColorAccent: Colors
    textColor: Colors
    imgsize: string
    well: string | number
    item: ArticleItems
    textColorHeading: { color: string }
    themeStyles: ThemeStyles
    imageNoSizings: any
}

export interface ItemWrapProps {
    imgsize: string
    well: string | number
    item: ArticleItems
    themeStyles: ThemeStyles
    isFeatured?: string
    type: string
    columns: number | string
    modId: string
    cmsUrl?: string
    align: string
}

export interface HeaderBlockProps {
    item: ArticleItems
    columns: number | string
    well: string | number
    isBeaconHero: boolean
}

export interface ModuleItemProps {
    item: ArticleItems
    well: string | number
    itemIndex: number
    themeStyles: ThemeStyles
    imgsize: string
    type: string
    columns: number | string
    modId: string
    cmsUrl?: string
}

export interface MyHeaderProps {
    pages?: PagesProps[]
    CMSLayout: GlobalData
    themeStyles: ThemeStyles
    // navCheck: boolean
    navSwitch: () => void
    setHeight: (height: any) => void
}

export interface SocialItem {
    enabled: number
    format: string
    id: number
    input: any
    label: string
    name: string
    url: string
    value: string
}

export interface MyFooterProps {
    pages?: PagesProps[]
    CMSLayout: GlobalData
    themeStyles: ThemeStyles
    //navCheck: boolean
    navSwitch: () => void
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

/*----------------------------TSI Elements--------------------------------------*/

export interface AltHeaderProps {
    navSwitch?: () => void
    /**Boolean that determines if navbar being shown or hidden*/
    navCheck?: boolean
    // pages?: PagesProps[]
    /**Image url for logo*/
    logoUrl?: string
    themeStyles: ThemeStyles
    CMSLayout: GlobalData
}

export interface MyImagesProps {
    item: ArticleItems
    calcImageSize?: (loadedMedia: Media) => void
    imageWidth?: number
    imageHeight?: number
    imgsize: string
    well: string | number
    cmsUrl?: string
}

export interface MyNavProps {
    navType?: string
    cmsNav: any
    currentPage?: string
}

export interface LogoProps {
    logoUrl?: string
    link?: string
}

export interface SocialBarProps {
    CMSLayout: GlobalData
    themeStyles: ThemeStyles
    modType?: string
}

export interface ConditionalWrapperProps {
    condition: boolean
    children: ReactChild
    falseOutput: (children: ReactChild) => ReactElement
    trueOutput: (children: ReactChild) => ReactElement
}

export interface BtnProps {
    pagelink?: string
    pagelink2?: string
    weblink?: string
    weblink2?: string
    actionlbl: string
    actionlbl2?: string
    newwindow: number | null | string
    newwindow2?: number | null | string
    btn2Styles?: btnColors
    icon?: string
    icon2?: string
    btnType?: string
    btnType2?: string
    themeStyles: ThemeStyles
    btnSize: string
    btnSize2: string
    well?: string | number
    modId: string
    type: string
    align: string
    columns: number | string
}

/*------------------------------Non CMS types-------------------------*/

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
    /**Type of button style used */
    btnType?: 'normal' | 'accent' | 'alt' | 'alt2' | 'accent2'
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
    /**Type of button style used */
    btnType?: 'normal' | 'accent' | 'alt' | 'alt2' | 'accent2'
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
    themeStyles: ThemeStyles
}

export interface TileImageProps {
    itemNumber: ImageItem
    /**Style layout of component*/
    modLayout: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero' | '4-plus'
    /**Determines which image is the main one for sizing*/
    isMainImage: boolean
    /**Determines if item is a hero image*/
    hero?: boolean
    themeStyles: ThemeStyles
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

export interface Pagelist {
    pages?: PagesProps[]
    navType?: string
    cmsNav?: any
    themeStyles?: ThemeStyles
}

export interface FooterProps {
    /**Data for links to social platforms*/
    socialData: SocialData[]
    addressData: AddressData
    siteName: string
    phoneNumber: string
    pages?: PagesProps[]
    /**Image URL for logo*/
    logoUrl?: string
    /**Determines which item to place bottom border under in Nav*/
    borderNum?: number
    /**Global site styles*/
    themeStyles: ThemeStyles
    navStyle?: string
}

export interface VideoProps {
    /**Video URL for logo*/
    videoUrl: string
    /**Style layout of component*/
    modLayout: 'ext' | 'local'
}

export interface tsiLayoutProps {
    children: ReactNode
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
    url: string
    page_type: string
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
    navCheck?: boolean
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
    themeStyles: ThemeStyles
    CMSLayout: GlobalData
}

export interface SeoData {
    title?: string
    description?: string
    favicon?: string
    ogImage?: string
    descr?: string
    imageOverride?: any
    selectedImage?: string
}

export interface TheListItemImageProps {
    item: ArticleItems
    calcImageSize?: (loadedMedia: Media) => void
    imageWidth?: number
    imageHeight?: number
    textColorAccent: Colors
    textColor: Colors
    imgsize: string
    well: string | number
    cmsUrl?: string
    imageNoSizings: any
}

/*----------------------------Elements--------------------------------------*/

export interface ButtonProps {
    linkUrl: string
    text: string
    themeStyles: ThemeStyles
    btnType?: 'normal' | 'accent' | 'alt' | 'alt2' | 'accent2'
}
