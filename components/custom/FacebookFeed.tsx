import Script from 'next/script'

const FacebookLiveFeed = (props: { src: string }) => {
    return (
        <>
            <div
                className="fb-page"
                data-href={props.src}
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
            >
                <blockquote cite={props.src} className="fb-xfbml-parse-ignore">
                    <a href={props.src}>Facebook</a>
                </blockquote>
            </div>
            <Script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0" strategy="lazyOnload" defer async />
        </>
    )
}

export default FacebookLiveFeed
