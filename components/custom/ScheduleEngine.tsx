import Script from 'next/script'
import { useEffect, useState } from 'react'
import Parser from 'html-react-parser'
declare var ScheduleEngine: any

//'cl8d8jgjd00pv09pcdsyo89bc'
//https://support.scheduleengine.com/support/solutions/articles/72000538875-scheduler-installation-guide
const ScheduleEngineScript = ({ apiKey }: { apiKey: string }) => {
    const [webChatLoaded, setWebChatLoaded] = useState(false)

    /*     <script  data-api-key="cl8d8jgjd00pv09pcdsyo89bc"  data-defer="true"  id="se-widget-embed"  src="https://embed.scheduleengine.net/schedule-engine-v3.js"></script> */

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

    /*     const me = `<script>window.handleSelectChange = function (event) {        if (event.currentTarget.value === 'book-now') {ScheduleEngine.show();}};    </script> <body>    ...    <select onchange="window.handleSelectChange(event)">      <!-- Other options -->      <option class="se-widget-button" value="book-now">Book Now</option>    </select>    ...    <script      data-api-key="cl8d8jgjd00pv09pcdsyo89bc"      id="se-widget-embed"      src="https://embed.scheduleengine.net/schedule-engine-v3.js"    ></script>` */
    return (
        <>
            <div>
                <button className="se-widget-button" type="button" onClick={handleScheduleButtonClick}>
                    <span className="material-symbols-outlined">calendar_clock</span>Schedule Now!
                </button>
                {/*  {Parser(me)} */}
            </div>
            {/*  <iframe
                className="se-widget-iframe"
                id="se-widget-iframe"
                src="https://guaranteedserv.widget.scheduleengine.net?api_key=cl8d8jgjd00pv09pcdsyo89bc&defer=true&client_url=https//guaranteedservice.com/heating-service-repair-ad&client_referrer="
            ></iframe> */}
        </>
    )
}

export default ScheduleEngineScript
