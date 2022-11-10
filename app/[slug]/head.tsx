import { getLayout, getPageData, domainImage } from 'functions'

export default async function Head({ params }: { params: { slug: string } }) {
    const { CMSLayout } = await getLayout()
    const { page } = await getPageData(params)

    const cmsUrl = CMSLayout.cmsUrl

    console.log(params)

    return (
        <>
            <title>{page.seo?.title || 'title'}</title>
            {page.seo?.title && <meta property="og:title" content={page.seo.title} key="title" />}
            {page.seo?.descr ? <meta name="description" content={page.seo.descr} /> : <meta name="description" content="description" />}
            {page.seo?.imageOverride ||
                (page.seo?.selectedImage && (
                    <>
                        <meta property="og:image" content={domainImage(page.seo.imageOverride || page.seo.selectedImage[0], true, cmsUrl)} />
                        <meta property="og:image:type" content="image/jpg" />
                        <meta property="og:image:width" content="1024" />
                        <meta property="og:image:height" content="1024" />
                        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                    </>
                ))}
            {CMSLayout.favicon && <link rel="shortcut icon" href={domainImage(CMSLayout.favicon, true, cmsUrl)} />}
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </>
    )
}
