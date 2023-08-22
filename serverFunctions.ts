//'use server'
//import { revalidatePath, revalidateTag } from 'next/cache'
const bucketUrl = process.env.BUCKET_URL || 'https://townsquareinteractive.s3.amazonaws.com'
import { getDomain, findHomePageSlug } from 'functions'

export async function generateLayout() {
    const resLayout = await fetch(getDomain(true) + '/layout.json', {
        next: { revalidate: 5 },
    })

    const CMSLayout = await resLayout.json()

    return { CMSLayout }
}

export async function getPageData(params: { slug: string }) {
    let pageSlug
    if (!params) {
        const resPageList = await fetch(getDomain(true) + '/pages/page-list.json', {
            next: { revalidate: 10 },
            //next: { tags: ['pageData'] },
        })
        const pageList = await resPageList.json()

        pageSlug = findHomePageSlug(pageList)
    } else {
        pageSlug = params.slug
    }

    const resPage = await fetch(getDomain(true) + '/pages/' + pageSlug + '.json', { cache: 'no-store' })
    //revalidateTag('pageData')
    let page = await resPage.json()

    return { page }
}

export async function getHomePage() {
    let pageSlug

    const resPageList = await fetch(getDomain(true) + '/pages/page-list.json', {
        next: { revalidate: 10 },
    })
    const pageList = await resPageList.json()

    pageSlug = findHomePageSlug(pageList)

    const resPage = await fetch(getDomain(true) + '/pages/' + pageSlug + '.json', { cache: 'no-store' })
    let page = await resPage.json()

    return { page }
}
