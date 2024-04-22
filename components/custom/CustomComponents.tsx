import { Fragment } from 'react'
import { FloatingReviewButtons } from './FloatingReviewButtons'
import dynamic from 'next/dynamic'
import { FacebookWidget, FloatingReviewButtonsProps } from 'types'
const FacebookFeed = dynamic(() => import('./FacebookFeed'), {
    ssr: false,
})
const Webchat = dynamic(() => import('./Webchat'), {
    ssr: false,
})
const ScheduleEngine = dynamic(() => import('./ScheduleEngine'), {
    ssr: false,
})

const keysToComponentMap: any = {
    FloatingReviewButtons,
    FacebookFeed,
    Webchat,
    ScheduleEngine,
}

const mapPropsToConfig = (config: [FloatingReviewButtonsProps | FacebookWidget]) => {
    const configWithProps: any = []

    config.forEach((item: FloatingReviewButtonsProps | FacebookWidget) => {
        if (item.type) {
            const { type, ...props } = item

            configWithProps.push({
                ...props,
                type: type,
            })
        }
    })

    return configWithProps
}

export const CustomComponents = ({ config }: { config: [FloatingReviewButtonsProps | FacebookWidget] }) => {
    if (!config) {
        throw new Error('You are calling Renderer with no config.')
    }

    const configWithProps = mapPropsToConfig(config)

    return (
        <>
            {configWithProps.map((item: any, idx: number) => {
                const { type, ...props } = item
                const Comp = keysToComponentMap[type]

                if (Comp) {
                    return (
                        <Fragment key={idx}>
                            <Comp {...props} />
                        </Fragment>
                    )
                }
            })}
        </>
    )
}
