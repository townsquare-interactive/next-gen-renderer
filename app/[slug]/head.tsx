import PageHead from 'components/PageHead'
import { generateLayout, getPageData } from 'serverFunctions'

export default async function Head({ params }: { params: { slug: string } }) {
    const { CMSLayout } = await generateLayout()
    const { page } = await getPageData(params)

    const siteData = CMSLayout

    const cmsUrl = siteData.cmsUrl

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}
