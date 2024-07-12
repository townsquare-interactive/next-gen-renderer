import { domainImage } from 'functions'
import { PageHeadProps } from 'types'
import ReturnNextScript from './custom/ReturnNextScript'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export default function PageHead(props: PageHeadProps) {
    const { siteData, page, pageType } = props
    const cmsUrl = siteData.cmsUrl

    let pageTitle = pageType === 'index' ? siteData.seo?.global?.aiosp_home_title : page.seo?.title || page.data.slug
    let pageDesc = pageType === 'index' ? siteData.seo?.global?.aiosp_home_description : page.seo?.descr || ''

    if (process.env.NEXT_PUBLIC_CMS_CLIENT === 'strapi') {
        pageTitle = page.seo?.title || page.data.slug
        pageDesc = page.seo?.descr || ''
    }

    return (
        <>
            <title>{pageTitle}</title>
            {page.seo?.title && <meta property="og:title" content={pageTitle} key="title" />}
            {pageDesc ? <meta name="description" content={pageDesc} /> : <meta name="description" content="description" />}
            <meta name="robots" content="noindex"></meta>
            <meta name="google-site-verification" content="S7-oAcXinNESq171RoKBw7Er3q9LWIpgPiDvG_CwpcU" />
            {page.seo?.imageOverride ||
                (page.seo?.selectedImage && (
                    <>
                        <meta property="og:image" content={domainImage(page.seo.imageOverride || page.seo.selectedImage[0], true, cmsUrl)} />
                        <meta property="og:image:type" content="image/jpg" />
                        <meta property="og:image:width" content="1024" />
                        <meta property="og:image:height" content="1024" />
                    </>
                ))}
            {siteData.favicon && <link rel="shortcut icon" href={encodeURI(siteData.favicon)} />}
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            {siteData.analytics?.gaId && <GoogleAnalytics gaId={siteData.analytics.gaId} />}
            {siteData.analytics?.gtmId && <GoogleTagManager gtmId={siteData.analytics.gtmId} />}
            {siteData.scripts?.header && <ReturnNextScript code={siteData.scripts?.header} />}
        </>
    )
}
