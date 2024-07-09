import Parser from 'html-react-parser'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { Fragment, useEffect, useState } from 'react'

const NoSrcScripts = dynamic(() => import('./NoSrcScripts'), { ssr: false })

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

const ReturnNextScript = ({ code }: { code: string }) => {
    const [srcScripts, setSrcScripts] = useState<ScriptObject[]>([])
    const [noSrcScripts, setNoSrc] = useState<NoSrcObject[]>([])
    const [divTags, setDivTags] = useState<string[]>([])
    const [scriptsReady, setScriptsReady] = useState<boolean>(false)

    const delayScriptsAttempt = false

    const parser = new DOMParser()
    const doc = parser.parseFromString(code, 'text/html')
    const scriptTags = doc.querySelectorAll('script')
    const divTagList = doc.querySelectorAll('div')

    const observeLCP = (callback: (metric: string) => void) => {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                    callback('lcp')
                }
            })
        })
        observer.observe({ type: 'largest-contentful-paint', buffered: true })
    }

    const observeTBT = (callback: (metric: string, value: number) => void) => {
        let totalBlockingTime = 0
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'longtask') {
                    totalBlockingTime += entry.duration
                }
            })
        })
        observer.observe({ type: 'longtask', buffered: true })
        setTimeout(() => {
            callback('tbt', totalBlockingTime)
        }, 1000)
    }

    const handleObservations = (metric: string, value?: number) => {
        if (typeof window !== 'undefined') {
            const customWindow = window as CustomWindow
            if (metric === 'lcp') {
                customWindow.lcpMeasured = true
            } else if (metric === 'tbt') {
                customWindow.tbtMeasured = true
                customWindow.totalBlockingTime = value!
            }
            if (customWindow.lcpMeasured && customWindow.tbtMeasured) {
                fullScriptCode()
            }
        }
    }

    const fullScriptCode = () => {
        const loadScripts = async () => {
            const srcScriptList: ScriptObject[] = []
            for (let i = 0; i < scriptTags.length; i++) {
                const script = scriptTags[i]
                if (script.src) {
                    const scriptObj = {
                        src: script.src,
                        nonce: script.nonce || '',
                        crossOrigin: script.crossOrigin || 'anonymous',
                        dataApiKey: script.getAttribute('data-api-key') || '',
                        id: script.id || '',
                    }
                    srcScriptList.push(scriptObj)
                }
            }
            setSrcScripts(srcScriptList)
        }

        loadScripts().then(() => {
            const noSrcList: NoSrcObject[] = []
            let nonSrcCount = 1
            scriptTags.forEach((script) => {
                if (script.textContent && !script.src) {
                    if (!script.textContent?.includes('jQuery') && !script.textContent?.includes('$(document)')) {
                        noSrcList.push({ id: nonSrcCount, script: script.textContent })
                        nonSrcCount += 1
                    }
                }
            })
            setScriptsReady(true)
            setNoSrc(noSrcList)
        })

        const allDivs: string[] = []
        divTagList.forEach((divTag) => {
            allDivs.push(divTag.outerHTML)
        })
        setDivTags(allDivs)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (delayScriptsAttempt) {
                observeLCP(handleObservations)
                observeTBT(handleObservations)
            } else {
                fullScriptCode()
            }
        }
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
