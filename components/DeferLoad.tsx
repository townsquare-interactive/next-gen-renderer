'use client'
import { useEffect, useState } from 'react'

const DeferLoad = (props: any) => {
    const [isSSR, setIsSSR] = useState(true)

    //Setting state to false on load to avoid Hydration Error
    useEffect(() => {
        setIsSSR(false)
    }, [])
    return (
        <>
            {!isSSR && (
                <style>
                    {props.fonts} {props.siteData?.allStyles ? props.siteData?.allStyles : ''}
                </style>
            )}
        </>
    )
}

export default DeferLoad
