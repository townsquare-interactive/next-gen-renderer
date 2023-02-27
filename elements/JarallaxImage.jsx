'use client'
import Image from 'next/image'
import { domainImage } from 'functions'
import dynamic from 'next/dynamic'

export default function JarallaxImage({ className = '', ...props }) {
    return (
        <>
            {/*  <img className={`jarallax-img ${props.className}`} {...props} /> */}
            <Image
                src={domainImage(props.src, true, props.cmsUrl || '')}
                fill
                quality="80"
                //style={{ objectFit: 'cover', objectPosition: 'top' }}
                sizes="100vw"
                // width={imageWidth}
                //height={imageHeight}
                //width={2000}
                //height={830}
                alt=""
                className={'jarallax-img'}
            />
        </>
    )
}
