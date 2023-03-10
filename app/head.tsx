import PageHead from 'components/PageHead'
import { generateLayout, getHomePage } from 'functions'

export default async function Head() {
    const { CMSLayout } = await generateLayout()
    const { page } = await getHomePage()

    const cmsUrl = process.env.CMS_URL || 'clttestsiteforjoshedwards'
    const s3ColorStyles = process.env.BUCKET_URL + '/' + cmsUrl + '/' + 'global.css'

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}
