import React, { useRef, useEffect, ReactChild } from 'react'
import {
    jarallax,
    //jarallaxVideo
} from 'jarallax'
import 'jarallax/dist/jarallax.css'

// Optional video extension
//jarallaxVideo()

export default function Jarallax({ className = '', children, ...props }: { className?: string; children: ReactChild; speed: number }) {
    const $el = useRef(null)

    // Init Jarallax.
    useEffect(() => {
        const curr = $el.current
        if ($el.current) {
            jarallax($el.current, props)
        }

        // Destroy Jarallax.
        return function destroy() {
            if (curr) {
                jarallax(curr, 'destroy')
            }
        }
    })

    // Update options.
    useEffect(() => {
        if ($el.current) {
            jarallax($el.current, 'destroy')
            jarallax($el.current, props)
        }
    }, [props])

    return (
        <div ref={$el} className={`jarallax ${className}`}>
            {children}
        </div>
    )
}
