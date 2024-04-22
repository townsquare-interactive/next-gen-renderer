import PageHead from 'components/PageHead'
import { generateLayout, getAnyPageData } from 'functions'
import Script from 'next/script'

export default async function Head({ params }: { params: { slug: string; domain: string } }) {
    const { CMSLayout } = await generateLayout(params)
    const { page } = await getAnyPageData(params)

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}
