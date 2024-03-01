'use client'
import Parser from 'html-react-parser'
import Script from 'next/script'
import { Fragment, useEffect, useState } from 'react'

interface ScriptObject {
    src: string
    nonce: string
    crossOrigin: any
}

interface NoSrcObject {
    id: number
    script: string
}

const ReturnNextScript = ({ code }: { code: string }) => {
    const [srcScripts, setSrcScripts] = useState<ScriptObject[]>([])
    const [noSrcScripts, setNoSrc] = useState<NoSrcObject[]>([])
    const [divTags, setDivTags] = useState<string[]>([])
    const [initialTags, setInitialTags] = useState<boolean>(false)

    useEffect(() => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(code, 'text/html')
        const scriptTags = doc.querySelectorAll('script')
        const linkTags = doc.querySelectorAll('link[rel="stylesheet"]')
        const divTags = doc.querySelectorAll('div')

        function observeLCP(callback: any) {
            // Create a PerformanceObserver to observe LCP entries
            const observer = new PerformanceObserver((list) => {
                // Iterate through the entries
                list.getEntries().forEach((entry) => {
                    // Check if the entry is for Largest Contentful Paint
                    if (entry.entryType === 'largest-contentful-paint') {
                        // Call the callback function with the LCP entry
                        callback(entry)
                    }
                })
            })

            // Observe LCP entries
            observer.observe({ type: 'largest-contentful-paint', buffered: true })
        }

        // Function to execute your script after LCP
        function runScriptAfterLCP() {
            fullScriptCode()
        }

        function fullScriptCode() {
            //load initial src scripts
            const loadScripts = async () => {
                const ourScripts: ScriptObject[] = []
                // Load each script sequentially
                for (let i = 0; i < scriptTags.length; i++) {
                    const script = scriptTags[i]
                    if (script.src) {
                        try {
                            const scriptElement = document.createElement('script')
                            scriptElement.src = script.src
                            scriptElement.async = true
                            scriptElement.defer = true
                            //scriptElement.type = 'text/partytown'
                            await new Promise((resolve, reject) => {
                                scriptElement.onload = resolve
                                scriptElement.onerror = reject
                                document.body.appendChild(scriptElement)
                            })

                            /* const scriptObj = {
                      src: script.src,
                      nonce: script.nonce || '',
                      crossOrigin: script.crossOrigin || '',
                  }
                  ourScripts.push(scriptObj) */
                        } catch (error) {
                            console.error('Error fetching script:', error)
                        }
                    }
                }
                setSrcScripts(ourScripts)
            }

            // Load scripts without src attributes after srcs are already added
            loadScripts().then(() => {
                const noSrcs: NoSrcObject[] = []
                let nonSrcCount = 1
                scriptTags.forEach(async (script) => {
                    if (script.textContent && !script.src) {
                        try {
                            //eval(script.textContent)
                            if (!script.textContent?.includes('jQuery')) {
                                noSrcs.push({ id: nonSrcCount, script: script.textContent })
                                nonSrcCount += 1
                            }
                        } catch (error) {
                            console.error('Error fetching non src:', error)
                        }
                    }
                })
                setInitialTags(true)
                setNoSrc(noSrcs)
            })

            //create an array of div tags so they can be added below
            const allDivs: string[] = []
            divTags.forEach(async (divTag) => {
                allDivs.push(divTag.outerHTML)
            })
            setDivTags(allDivs)
        }

        // Call observeLCP function with a callback to runScriptAfterLCP
        //observeLCP(runScriptAfterLCP)
        fullScriptCode()

        //noSrcScripts
        console.log('norm scripts', srcScripts)
    }, [code])

    return (
        <>
            {/* {srcScripts.length > 0 &&
                srcScripts.map((script: ScriptObject, idx: number) => (
                    <Script src={script.src} key={idx} async defer crossOrigin={script.crossOrigin} nonce={script.nonce} strategy="lazyOnload"></Script>
                ))} */}
            {divTags.map((tag: string, idx: number) => (
                <Fragment key={idx}>{Parser(tag)}</Fragment>
            ))}

            {initialTags &&
                noSrcScripts.map((script: any, idx: number) => (
                    <Script key={idx} id={`${script.id}`} async={true} defer={true} strategy="lazyOnload">
                        {script.script}
                    </Script>
                ))}
        </>
    )
}
export default ReturnNextScript
