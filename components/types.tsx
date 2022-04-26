/* Componenets */

export interface HeaderProps {
    headline?: string
    imageUrl: string
}

export interface HeroProps {
    headline?: string
    imageUrl: string
    backgroundImage?: string
    reverse?: boolean
}

export interface ArticleProps {
    title: string
    body: string
    border?: boolean
    imageUrl?: string
    linkUrl?: string
    btnText?: string
}

export interface LabelProps {
    text: string
    border?: boolean
}

export interface imageTile {
    imageUrl: string
    linkUrl?: string
    title: string
}

export interface PhotoTiles3Props {
    tileData: imageTile[]
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
