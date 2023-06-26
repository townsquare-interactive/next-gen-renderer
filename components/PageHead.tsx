import { domainImage } from 'functions'
import { PageHeadProps } from 'types'

export default function PageHead(props: PageHeadProps) {
    const { siteData, page, pageType } = props
    const cmsUrl = siteData.cmsUrl

    const pageTitle = pageType === 'index' ? siteData.seo?.global?.aiosp_home_title : page.seo?.title || page.data.slug
    const pageDesc = pageType === 'index' ? siteData.seo?.global?.aiosp_home_description : page.seo?.descr || ''

    return (
        <>
            <title>{pageTitle}</title>
            {page.seo?.title && <meta property="og:title" content={pageTitle} key="title" />}
            {pageDesc ? <meta name="description" content={pageDesc} /> : <meta name="description" content="description" />}
            {page.seo?.imageOverride ||
                (page.seo?.selectedImage && (
                    <>
                        <meta property="og:image" content={domainImage(page.seo.imageOverride || page.seo.selectedImage[0], true, cmsUrl)} />
                        <meta property="og:image:type" content="image/jpg" />
                        <meta property="og:image:width" content="1024" />
                        <meta property="og:image:height" content="1024" />
                    </>
                ))}
            {siteData.favicon && <link rel="shortcut icon" href={domainImage(siteData.favicon, false, siteData.s3Folder, 'favicon')} />}
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </>
    )
}
