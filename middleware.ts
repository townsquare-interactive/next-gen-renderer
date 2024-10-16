import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files inside /public (e.g. /favicon.ico)
         */
        '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
        //'/((?!api|_next/static|_next/image|favicon.ico).*)'
    ],
}

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl

    const freeDomainPostfix = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'vercel.app'

    // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
    let hostname = req.headers.get('host')!.replace('.localhost:3000', `.${freeDomainPostfix}`)

    // Get the pathname of the request (e.g. /, /about, /blog/first-post)
    const path = url.pathname

    // Special case for townsquareignite.com and www.townsquareignite.com
    if (hostname === 'www.townsquareignite.com') {
        if (!path.startsWith('/landing/')) {
            return NextResponse.redirect(`https://townsquareignite.com${path}`)
        }
    }

    // rewrites for app pages
    if (hostname == `app.${freeDomainPostfix}`) {
        const session = await getToken({ req })
        if (!session && path !== '/login') {
            return NextResponse.redirect(new URL('/login', req.url))
        } else if (session && path == '/login') {
            return NextResponse.redirect(new URL('/', req.url))
        }
        return NextResponse.rewrite(new URL(`/app${path === '/' ? '' : path}`, req.url))
    }

    // special case for `vercel.pub` domain
    if (hostname === 'vercel.pub') {
        return NextResponse.redirect('https://vercel.com/blog/platforms-starter-kit')
    }

    // rewrite root application to `/home` folder
    if (hostname === 'localhost:3000' || hostname === freeDomainPostfix) {
        return NextResponse.rewrite(new URL(`/home${path}`, req.url))
    }

    // rewrite everything else to `/[domain]/[path] dynamic route
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url))
}
