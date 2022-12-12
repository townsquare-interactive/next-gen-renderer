'use client'
import Images from './practice/Images'
import Text from './practice/Text'
import Label from './practice/Label'
import List from './practice/List'
import Header from './practice/Header'
import Navigation from './practice/Navigation'
import Grid from './practice/Grid'
import Footer from './practice/Footer'
import Carousel from './practice/Carousel'
import Video from './practice/Video'
import Article from './practice/Article'
import CharlotteArticle from './practice/CharlotteArticle'
import MyArticle from './MyArticle'
import { PhotoGrid } from './PhotoGrid'
import { capitalize } from '../functions'
import { GlobalModule, ModuleProps, RendererProps } from 'types'

const keysToComponentMap: any = {
    Text,
    Label,
    List,
    Images,
    Grid,
    Header,
    Footer,
    Carousel,
    Video,
    Navigation,
    Article,
    CharlotteArticle,
    MyArticle,
    PhotoGrid,
}

const mapPropsToConfig = (config: ModuleProps[]) => {
    const configWithProps: any = []

    config.forEach((item: any) => {
        if (item.componentType) {
            const { componentType, ...props } = item

            configWithProps.push({
                ...props,
                component: capitalize(componentType),
            })
        }
    })

    return configWithProps
}

export const Renderer = ({ config, themeStyles, cmsUrl = '' }: RendererProps) => {
    if (!config) {
        throw new Error('You are calling Renderer with no config.')
    }

    const configWithProps = mapPropsToConfig(config)

    return (
        <>
            {configWithProps.map((item: GlobalModule, index: number) => {
                const { component, ...props } = item
                //Changes json string to component value
                const Comp = keysToComponentMap[component]
                if (Comp) {
                    return <Comp {...props.attributes} key={index} themeStyles={themeStyles} cmsUrl={cmsUrl} />
                }
            })}
        </>
    )
}
