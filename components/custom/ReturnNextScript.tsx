'use client'
import Parser from 'html-react-parser'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Fragment, useEffect, useState } from 'react'
const NoSrcScripts = dynamic(() => import('./NoSrcScripts'), {
    ssr: false,
})

interface ScriptObject {
    src: string
    nonce: string
    crossOrigin: any
    dataApiKey?: string
    id?: string
}

interface NoSrcObject {
    id: number
    script: string
}
interface CustomWindow extends Window {
    lcpMeasured?: boolean
    tbtMeasured?: boolean
    totalBlockingTime?: number
}

// Cast window to CustomWindow to access custom properties
const customWindow = window as CustomWindow

const ReturnNextScript = ({ code }: { code: string }) => {
    const [srcScripts, setSrcScripts] = useState<ScriptObject[]>([])
    const [noSrcScripts, setNoSrc] = useState<NoSrcObject[]>([])
    const [divTags, setDivTags] = useState<string[]>([])
    const [scriptsReady, setScriptsReady] = useState<boolean>(false)

    useEffect(() => {
        function observeLCP(callback: (metric: string) => void) {
            // Create a PerformanceObserver to observe LCP entries
            const observer = new PerformanceObserver((list) => {
                // Iterate through the entries
                list.getEntries().forEach((entry) => {
                    // Check if the entry is for Largest Contentful Paint
                    if (entry.entryType === 'largest-contentful-paint') {
                        // Call the callback function with the LCP entry
                        callback('lcp')
                    }
                })
            })

            // Observe LCP entries
            observer.observe({ type: 'largest-contentful-paint', buffered: true })
        }

        function observeTBT(callback: (metric: string, value: number) => void) {
            let totalBlockingTime = 0

            // Create a PerformanceObserver to observe Long Task entries
            const observer = new PerformanceObserver((list) => {
                // Iterate through the entries
                list.getEntries().forEach((entry) => {
                    // Check if the entry is for Long Task
                    if (entry.entryType === 'longtask') {
                        // Add the duration of the Long Task to Total Blocking Time
                        totalBlockingTime += entry.duration
                    }
                })
            })

            // Observe Long Task entries
            observer.observe({ type: 'longtask', buffered: true })

            // Execute callback function after a short delay (adjust as needed)
            setTimeout(() => {
                // Call the callback function with the Total Blocking Time
                callback('tbt', totalBlockingTime)
            }, 1000) // Delay execution for 1 second to ensure TBT calculation
        }

        function handleObservations(metric: string, value?: number) {
            if (metric === 'lcp') {
                // Set flag for LCP measurement
                customWindow.lcpMeasured = true
                console.log('lcp window measured')
            } else if (metric === 'tbt') {
                console.log('tbt window measured')
                // Set flag for TBT measurement
                customWindow.tbtMeasured = true
                // Store TBT value
                customWindow.totalBlockingTime = value!
            }

            // Check if both LCP and TBT have been measured
            if (customWindow.lcpMeasured && customWindow.tbtMeasured) {
                console.log('window measured')
                // Run script after both metrics have been measured
                fullScriptCode()
            }
        }

        const parser = new DOMParser()
        const doc = parser.parseFromString(code, 'text/html')
        const scriptTags = doc.querySelectorAll('script')
        const linkTags = doc.querySelectorAll('link[rel="stylesheet"]')
        const divTags = doc.querySelectorAll('div')

        function fullScriptCode() {
            //load initial src scripts
            const loadScripts = async () => {
                const srcScriptList: ScriptObject[] = []
                // Load each script sequentially
                for (let i = 0; i < scriptTags.length; i++) {
                    const script = scriptTags[i]
                    if (script.src) {
                        try {
                            /*  const scriptElement = document.createElement('script')
                            scriptElement.src = script.src
                            scriptElement.async = true
                            scriptElement.defer = true
                            //scriptElement.type = 'text/partytown'
                            await new Promise((resolve, reject) => {
                                scriptElement.onload = resolve
                                scriptElement.onerror = reject
                                document.body.appendChild(scriptElement)
                            }) */

                            const scriptObj = {
                                src: script.src,
                                nonce: script.nonce || '',
                                crossOrigin: script.crossOrigin || 'anonymous',
                                dataApiKey: script.getAttribute('data-api-key') || '',
                                id: script.id || '',
                            }
                            srcScriptList.push(scriptObj)
                        } catch (error) {
                            console.error('Error fetching script:', error)
                        }
                    }
                }
                setSrcScripts(srcScriptList)
            }

            // Load scripts without src attributes after srcs are already added
            loadScripts().then(() => {
                const noSrcList: NoSrcObject[] = []
                let nonSrcCount = 1
                scriptTags.forEach(async (script) => {
                    if (script.textContent && !script.src) {
                        try {
                            //eval(script.textContent)
                            if (!script.textContent?.includes('jQuery') && !script.textContent?.includes('$(document)')) {
                                noSrcList.push({ id: nonSrcCount, script: script.textContent })
                                nonSrcCount += 1
                            }
                        } catch (error) {
                            console.error('Error fetching non src:', error)
                        }
                    }
                })
                setScriptsReady(true)
                setNoSrc(noSrcList)
            })

            //create an array of div tags so they can be added below
            const allDivs: string[] = []
            divTags.forEach(async (divTag) => {
                allDivs.push(divTag.outerHTML)
            })
            setDivTags(allDivs)
        }

        observeLCP(handleObservations)
        observeTBT(handleObservations)
        //fullScriptCode()
    }, [code])

    return (
        <>
            {srcScripts.length > 0 &&
                srcScripts.map((script: ScriptObject, idx: number) => (
                    <Script src={script.src} key={idx} strategy="lazyOnload" data-api-key={script.dataApiKey || ''} id={script.id}></Script>
                ))}
            {divTags.map((tag: string, idx: number) => (
                <Fragment key={idx}>{Parser(tag)}</Fragment>
            ))}

            {scriptsReady && <NoSrcScripts noSrcScripts={noSrcScripts} />}
        </>
    )
}
export default ReturnNextScript
