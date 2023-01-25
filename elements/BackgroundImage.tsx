'use client'
import { domainImage } from '../functions'
import Image from 'next/image'

import { useState } from 'react'

export const BackgroundImage = (props: any) => {
    const { image, alt, priority, cmsUrl } = props
    const [hideImage, setHideImage] = useState(false)

    return (
        <Image
            src={domainImage(image, true, cmsUrl || '')}
            fill
            alt={alt || ''}
            quality="50"
            priority={priority}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            sizes="(max-width: 1920px) 100vw,
                    (max-width: 1200px) 50vw,
                    100vw"
            onError={() => {
                setHideImage(true)
            }}
        />
    )
}

export default BackgroundImage
