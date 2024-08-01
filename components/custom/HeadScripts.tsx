import { useEffect } from 'react'

const HeadScripts = ({ code }: { code: string }) => {
    useEffect(() => {
        // Create a container to parse the HTML
        const container = document.createElement('div')
        container.innerHTML = code

        const head = document.head

        // Function to add script tags programmatically
        const addScript = (scriptElement: HTMLScriptElement) => {
            const script = document.createElement('script')
            if (scriptElement.src) {
                script.src = scriptElement.src
            } else {
                script.textContent = scriptElement.textContent
            }
            script.defer = true
            head.appendChild(script)
        }

        // Append parsed scripts
        const scripts = container.querySelectorAll<HTMLScriptElement>('script')
        scripts.forEach((script) => {
            addScript(script)
        })

        // Append styles
        const styles = container.querySelectorAll<HTMLStyleElement>('style')
        styles.forEach((style) => {
            head.appendChild(style)
        })

        // Append meta tags
        const metaTags = container.querySelectorAll<HTMLMetaElement>('meta')
        metaTags.forEach((meta) => {
            head.appendChild(meta)
        })

        // Append link tags
        const links = container.querySelectorAll<HTMLLinkElement>('link')
        links.forEach((link) => {
            head.appendChild(link)
        })

        // Clean up function to remove elements when component unmounts
        return () => {
            scripts.forEach((script) => {
                const scriptElements = head.querySelectorAll<HTMLScriptElement>('script')
                scriptElements.forEach((scriptEl) => {
                    if (scriptEl.src === script.src || scriptEl.textContent === script.textContent) {
                        head.removeChild(scriptEl)
                    }
                })
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
