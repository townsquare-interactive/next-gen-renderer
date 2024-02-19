import { Fragment } from "react"
import { FloatingReviewButtons } from "./FloatingReviewButtons"


const keysToComponentMap: any = {
    FloatingReviewButtons
}

const mapPropsToConfig = (config: any[]) => {
    const configWithProps: any = []

    config.forEach((item: any) => {
        if (item.type) {
            const { type, ...props } = item

            configWithProps.push({
                ...props,
                type: type
            })
        }
    })

    return configWithProps
}

export const CustomComponents = ({ config}: any) => {
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
  
            <Comp {...props}/>

    </Fragment>
                    )
                }
            })}
        </>
    )
}



/* export const CustomComponents = ({customComponents}:any) => {
    return(
        <>
{customComponents?.map((comp: any, idx: number) => {
    console.log('comp', comp.type)
    return (
    <Fragment key={idx}>
        {comp.type==='socialBtns' ? (
            <SocialButtons btns={comp.btns}/>
        ) : (
            <></>
        )}
    </Fragment>
)})}
</>
)

        } */