/* Componenets */

export interface HeroHeader {
    headline?: string
    imageUrl: string
}

export interface HeaderProps {
    headline?: string
    imageUrl?: string
    backgroundImageUrl?: string
    reverse?: boolean
}

export interface CardProps {
    imageUrl?: string
    title?: string
    body?: string
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

export interface LabelProps {
    text: string
    border?: boolean
    gap?: boolean
    align?: 'left' | 'right' | 'center'
    textSize?: 'sm' | 'md' | 'lg'
}

export interface TextProps {
    text: string
    border?: boolean
    gap?: boolean
    align?: 'left' | 'right' | 'center'
    textSize?: 'sm' | 'md' | 'lg'
}

/* export interface imageTile {
    imageUrl: string
    linkText?: string
    linkUrl?: string
    headline?: string
}

export interface ImagesProps {
    tileData: imageTile[]
    // modLayout?: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full'
    modLayout?: string
    gap?: boolean
} */

export interface imageTile {
    imageUrl: string
    linkText?: string
    linkUrl?: string
    headline?: string
}

/* export enum ModLayout {
    ThreeAndOneThird = '3-1/3',
    ThreeAndTwoThirds = '3-2/3',
} */
export interface ImagesProps {
    items: imageTile[]
    modLayout?: '3-1/3' | '3-2/3' | '2-2/3' | '2-1/2' | '1-full' | '1-hero'
    //modLayout?:string
    // modLayout?: ModLayout
    gap?: boolean
}

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
