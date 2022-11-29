import { domainImage, ConditionalWrapper } from 'functions'
import Head from 'next/head'
import { ReactChild } from 'react'
import { PageHeadProps } from 'types'

export default function PageHead(props: PageHeadProps) {
    const { CMSLayout, page, pageType = 'slug' } = props
    const cmsUrl = CMSLayout.cmsUrl

    return (
        <>
            <ConditionalWrapper
                condition={pageType === 'index' ? true : false}
                trueOutput={(children: ReactChild) => <Head>{children}</Head>}
                falseOutput={(children: ReactChild) => <>{children}</>}
            >
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
                                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                            </>
                        ))}
                    {CMSLayout.favicon && <link rel="shortcut icon" href={domainImage(CMSLayout.favicon, true, cmsUrl)} />}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                </>
            </ConditionalWrapper>
        </>
    )
}
