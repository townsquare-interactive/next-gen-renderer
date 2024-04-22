/* import Script from 'next/script'
import { useEffect, useState } from 'react'
import Parser from 'html-react-parser'
declare var ScheduleEngine: any

//'cl8d8jgjd00pv09pcdsyo89bc'
//https://support.scheduleengine.com/support/solutions/articles/72000538875-scheduler-installation-guide
const ScheduleEngineScript = ({ apiKey }: { apiKey: string }) => {
    const [webChatLoaded, setWebChatLoaded] = useState(false)


    useEffect(() => {
        const script2 = document.createElement('script')
        script2.src = 'https://embed.scheduleengine.net/schedule-engine-v3.js'
        script2.setAttribute('data-api-key', apiKey)
        script2.setAttribute('data-defer', 'true')
        script2.id = 'se-widget-embed'
        script2.async = true
        document.body.appendChild(script2)

        script2.onload = () => {
            setWebChatLoaded(true)
        }

        return () => {
            // Cleanup function to remove the script from the DOM
            document.body.removeChild(script2)
        }
    }, [])

    useEffect(() => {
        if (webChatLoaded) {
            openChat()
            //ScheduleEngine.show()
        }
    }, [webChatLoaded])

    const openChat = () => {
        if (typeof ScheduleEngine !== 'undefined') {
            ScheduleEngine.show()
        }
    }

    const handleScheduleButtonClick = () => {
        //if (typeof ScheduleEngine !== 'undefined') {
        if (webChatLoaded && typeof ScheduleEngine !== 'undefined') {
            ScheduleEngine.show()
            const iframeContainer = document.getElementById('se-widget-iframe-container')
            if (iframeContainer) {
                iframeContainer.style.visibility = 'visible'
                iframeContainer.style.inset = '0'
            }
        }
    }


    return (
        <>
            <div>
                <button className="se-widget-button" type="button" onClick={handleScheduleButtonClick}>
                    <span className="material-symbols-outlined">calendar_clock</span>Schedule Now!
                </button>
            </div> 

        </>
    )
}

export default ScheduleEngineScript
 */
// Import Head from 'next/head' at the top of your file

import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

export default function ScheduleEngine2({ apiKey }: { apiKey: string }) {
    useEffect(() => {
        // Load Schedule Engine script
        /* const script = document.createElement('script')
        script.src = 'https://embed.scheduleengine.net/schedule-engine-v3.js'
        script.defer = true
        script.setAttribute('data-api-key', apiKey)
        script.id = 'se-widget-embed'
        script.async = true
        document.body.appendChild(script)

        // Clean up the script on component unmount
        return () => {
            document.body.removeChild(script)
        } */
    }, [])
    /* 
    const bookNow = () => {
        // Call the function provided by Schedule Engine when the button is clicked
        if (window.ScheduleEngine && window.ScheduleEngine.show) {
            window.ScheduleEngine.show()

            const iframeContainer = document.getElementById('se-widget-iframe-container')
            if (iframeContainer) {
                iframeContainer.style.visibility = 'visible'
                iframeContainer.style.inset = '0'
            }
        }
    } */

    return (
        <>
            <Script
                data-api-key={apiKey}
                defer={true}
                id="se-widget-embed"
                src="https://embed.scheduleengine.net/schedule-engine-v3.js"
                strategy="lazyOnload"
            />

            {/*             <button className="se-widget-button" type="button" onClick={bookNow}>
                Book Now!
            </button> */}
        </>
    )
}
