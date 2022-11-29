import PageHead from 'components/PageHead'
import { getLayout, getPageData, domainImage } from 'functions'

export default async function Head({ params }: { params: { slug: string } }) {
    const { CMSLayout } = await getLayout()
    const { page } = await getPageData(params)

    return (
        <>
            <PageHead page={page} CMSLayout={CMSLayout} />
        </>
    )
}
