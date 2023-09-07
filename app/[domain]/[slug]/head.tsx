import PageHead from 'components/PageHead'
import { generateLayout, getAnyPageData, getPageData } from 'functions'

export default async function Head({ params }: { params: { slug: string; domain: string } }) {
    const { CMSLayout } = await generateLayout()
    const { page } = await getPageData(params)

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}
