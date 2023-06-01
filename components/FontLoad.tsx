'use client'
import { useEffect, useState } from 'react'

const FontLoad = (props: any) => {
    const [isSSR, setIsSSR] = useState(true)

    //Setting state to false on load to avoid Hydration Error
    useEffect(() => {
        setIsSSR(false)
    }, [])
    return <>{!isSSR && <style>{props.fonts}</style>}</>
}

export default FontLoad
