import { PageListProps } from '../../types'
import { getDomain, getPageData, getLayout } from '../../functions'
import { use } from 'react'
import { Container } from 'components/Container'

export async function generateStaticParams() {
    const res = await fetch(getDomain(true) + '/pages/page-list.json', {
        next: { revalidate: 10 },
    })
    const data = await res.json()

    return data.pages.map((page: PageListProps) => ({
        slug: page.slug.toString(),
    }))
}

const Page = ({ params }: { params: { slug: string } }) => {
    const { CMSLayout } = use(getLayout())
    const { page } = use(getPageData(params))

    return (
        <>
            <Container page={page} CMSLayout={CMSLayout} />
        </>
    )
}

export default Page
