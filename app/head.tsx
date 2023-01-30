import PageHead from 'components/PageHead'
import { generateLayout, getHomePage } from 'functions'

export default async function Head({ params }: { params: { slug: string } }) {
    const { CMSLayout } = await generateLayout()
    const { page } = await getHomePage()

    return (
        <>
            <PageHead page={page} siteData={CMSLayout} pageType={'slug'} />
        </>
    )
}
