import Script from 'next/script'

export default function ScheduleEngine({ apiKey }: { apiKey: string }) {
    return (
        <>
            {apiKey && (
                <Script
                    data-api-key={apiKey}
                    defer={true}
                    id="se-widget-embed"
                    src="https://embed.scheduleengine.net/schedule-engine-v3.js"
                    strategy="lazyOnload"
                />
            )}
        </>
    )
}
