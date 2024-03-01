'use client'
import Parser from 'html-react-parser'
import Script from 'next/script'
import { Fragment, useEffect, useState } from 'react'

interface ScriptObject {
    src: string
    nonce: string
    crossOrigin: any
}

const ReturnNextScript = ({ code }: { code: string }) => {
    const [allScripts, setScripts] = useState<ScriptObject[]>([])
    const [noSrcScripts, setNoSrc] = useState<{ id: number; script: string }[]>([])
    const [divTags, setDivTags] = useState<string[]>([])
    const [initialTags, setInitialTags] = useState<boolean>(false)

    useEffect(() => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(code, 'text/html')
        const scriptTags = doc.querySelectorAll('script')
        const linkTags = doc.querySelectorAll('link[rel="stylesheet"]')
        const divTags = doc.querySelectorAll('div')

        //older working but not synched up to have other code come later it seems
        const fetchScripts = async () => {
            const ourScripts: ScriptObject[] = []
            const noSrcs: any[] = []
            let nonSrcCount = 1
            scriptTags.forEach(async (script) => {
                if (script.src) {
                    try {
                        /*                         const response = await fetch('/api/proxy', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ url: script.src }), // Ensure script.src is the correct URL
                        })

                        if (!response.ok) {
                            throw new Error('Failed to fetch script')
                        } */

                        const scriptElement = document.createElement('script')
                        scriptElement.src = script.src

                        /*                         if (scriptElement.src.includes('webchat')) {
                            scriptElement.addEventListener('load', () => {
                                // Call WebChat.loadChat() after the script is loaded
                                WebChat.loadChat({
                                    apiKey: 'mf2k0sam3vr14qfd2x3dk7po8ob0141b',
                                    initialMessage: 'Thank you for choosing Guaranteed Service. How can I help you today?',
                                    initialResponses: [],
                                    logoUrl: 'https://guaranteedservice.com/files/2023/03/guaranteedservice.png',
                                    title: 'Welcome',
                                    primaryAccentColor: '#002353',
                                    primaryAccentTextColor: '#FFFFFF',
                                    backgroundColor: '#FFFFFF',
                                    agentBubbleBackgroundColor: '#002353',
                                    agentBubbleTextColor: '#FFFFFF',
                                    bubbleBackgroundColor: '#F1F1F1',
                                    bubbleTextColor: '#000000',
                                    sendButtonBackgroundColor: '#002353',
                                    sendButtonTextColor: '#FFFFFF',
                                    suggestedResponseColor: '#002353',
                                    autoOpen: true,
                                    autoOpenMobile: false,
                                    position: 'right',
                                    buttonBackgroundColor: '#FC080A',
                                    buttonText: 'Chat with Us',
                                    buttonTextColor: '#FFFFFF',
                                    autoOpenDelay: 3,
                                })
                            })
                        } */

                        //const scriptContent = await response.text()
                        //scriptElement.textContent = scriptContent
                        document.body.appendChild(scriptElement)
                    } catch (error) {
                        console.error('Error fetching script:', error)
                    }

                    const scriptObj = {
                        src: script.src,
                        nonce: script.nonce || '',
                        crossOrigin: script.crossOrigin || '',
                    }
                    //console.log("src", script);
                    ourScripts.push(scriptObj)
                } else {
                    console.log('no src', script)
                    if (!script.textContent?.includes('jQuery')) {
                        noSrcs.push({ id: nonSrcCount, script: script.textContent })
                        /* const newScriptEl = document.createElement('script')
                    newScriptEl.textContent = script.textContent
                    document.body.appendChild(newScriptEl) */
                        nonSrcCount += 1
                    }
                }
            })
            setScripts(ourScripts)
            setNoSrc(noSrcs)
        }

        const loadScripts = async () => {
            // Load each script sequentially
            // for (const script of scriptTags) {
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
                    } catch (error) {
                        console.error('Error fetching script:', error)
                    }
                }
            }
        }

        // Load scripts without src attributes after srcs are already added
        loadScripts().then(() => {
            const noSrcs: { id: number; script: string }[] = []
            let nonSrcCount = 1
            scriptTags.forEach(async (script) => {
                if (script.textContent && !script.src) {
                    try {
                        //eval(script.textContent)
                        console.log('no src', script)
                        if (!script.textContent?.includes('jQuery')) {
                            console.log('adding')
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

        //fetchScripts()

        /* function executeInlineScripts() {
            const inlineScripts = doc.querySelectorAll('script:not([src])')
            inlineScripts.forEach((script) => {
                const scriptContent = script.innerHTML.trim()
                const scriptIdentifier = `script-${Buffer.from(scriptContent, 'base64').toString('base64')}` // Unique identifier for the script

                // Check if script has been executed before
                if (!document.querySelector(`script[data-script="${scriptIdentifier}"]`)) {
                    eval(scriptContent) // Execute inline script
                    const scriptTag = document.createElement('script')
                    scriptTag.setAttribute('data-script', scriptIdentifier)
                    document.body.appendChild(scriptTag)
                }
            })
        } */

        // If jQuery is not available, wait for it to be loaded
        /*     if (code.includes('jQuery')) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://code.jquery.com/jquery-3.6.0.min.js"; // Update the jQuery URL if needed
      scriptElement.onload = executeInlineScripts;
      document.body.appendChild(scriptElement);
    } */

        //noSrcScripts
        console.log(' 0 scripts', noSrcScripts)
    }, [code])

    return (
        <>
            {/*        {allScripts.map((script: ScriptObject, idx: number) => (
        <Script src={script.src} key={idx} async defer crossOrigin={script.crossOrigin} nonce={script.nonce} strategy="lazyOnload"></Script>
      ))}  */}

            {divTags.map((tag: string, idx: number) => (
                <Fragment key={idx}>{Parser(tag)}</Fragment>
            ))}

            {initialTags &&
                noSrcScripts.map((script: any, idx: number) => (
                    <Script key={idx} id={`${script.id}`}>
                        {script.script}
                    </Script>
                ))}
            {/*         <Script id="base">
        {`<script src="https://webchat.scheduleengine.net/webchat-v1.js"></script>`}
        </Script> */}
            {/* <script
                language="javascript"
                src="//code.metalocator.com/index.php?option=com_locator&view=directory&layout=_javascript&framed=1&format=raw&tmpl=component&no_html=1&Itemid=15649"
                async
                defer
            ></script> */}

            {/*  <script src="https://webchat.scheduleengine.net/webchat-v1.js" async defer></script> */}
        </>
    )
}
export default ReturnNextScript

{
    /* <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0" nonce="VPqyleuZ"></script> */
}
