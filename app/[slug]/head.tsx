import PageHead from 'components/PageHead'
import { generateLayout, getPageData, domainImage } from 'functions'

export default async function Head({ params }: { params: { slug: string } }) {
    const { CMSLayout } = await generateLayout()
    const { page } = await getPageData(params)

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}
