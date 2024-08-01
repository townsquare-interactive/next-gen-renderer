import { useEffect } from 'react'

interface HeadScriptsProps {
    code: string // Raw HTML containing scripts, styles, meta tags, etc.
}

const HeadScripts = ({ code }: HeadScriptsProps) => {
    useEffect(() => {
        // Create a container to parse the HTML
        const container = document.createElement('div')
        container.innerHTML = code

        // Append parsed scripts and other elements to the head
        const head = document.head

        const scripts = container.querySelectorAll('script')
        scripts.forEach((script) => {
            head.appendChild(script)
        })

        const styles = container.querySelectorAll('style')
        styles.forEach((style) => {
            head.appendChild(style)
        })

        const metaTags = container.querySelectorAll('meta')
        metaTags.forEach((meta) => {
            head.appendChild(meta)
        })

        const links = container.querySelectorAll('link')
        links.forEach((link) => {
            head.appendChild(link)
        })

        // Clean up function to remove elements when component unmounts
        return () => {
            scripts.forEach((script) => {
                head.removeChild(script)
            })
            styles.forEach((style) => {
                head.removeChild(style)
            })
            metaTags.forEach((meta) => {
                head.removeChild(meta)
            })
            links.forEach((link) => {
                head.removeChild(link)
            })
        }
    }, [code])

    return null
}

export default HeadScripts
