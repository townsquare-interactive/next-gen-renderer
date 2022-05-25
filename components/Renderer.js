import React, { Fragment } from 'react'
import Images from './Images'
import Text from './Text'
import Label from './Label'
import List from './List'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Navigation from '../components/Navigation'
import Grid from '../components/Grid'
import Footer from './Footer'

const keysToComponentMap = {
    text: Text,
    images: Images,
    label: Label,
    list: List,
    images: Images,
    grid: Grid,
    header: Header,
    navbar: Navbar,
    footer: Footer,
}

const mapPropsToConfig = (config) => {
    const configWithProps = []

    config.forEach((item) => {
        if (item.component) {
            const { component, ...props } = item

            configWithProps.push({
                ...props,
                Component: component,
            })
        }
    })

    return configWithProps
}

export const Renderer = ({ config }) => {
    if (!config) {
        throw new Error('You are calling Renderer with no config.')
    }

    const configWithProps = mapPropsToConfig(config)
    console.log('configprops', configWithProps)

    const renderComponents = (items) => {
        return items.map((item) => {
            const { Component, ...props } = item
            //Changes json string to comonent value
            const Comp = keysToComponentMap[Component]
            console.log(Comp)
            return (
                <Fragment key={props.component}>
                    <Comp {...props} />
                </Fragment>
            )
        })
    }

    return renderComponents(configWithProps)
}
