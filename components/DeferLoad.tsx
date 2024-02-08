'use client'
import { useEffect, useState } from 'react'

const DeferLoad = ({ fonts, globalStyles }: { fonts?: string; globalStyles?: string }) => {
    const [isSSR, setIsSSR] = useState(true)

    //Setting state to false on load to defer loading of this component until after other content
    useEffect(() => {
        setIsSSR(false)
    }, [])
    return (
        <>
            {!isSSR && (fonts || globalStyles) && (
                <style>
                    {fonts} {globalStyles}
                </style>
            )}
        </>
    )
}

export default DeferLoad
