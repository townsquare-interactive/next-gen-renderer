/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    images: {
        /*         domains: ['via.placeholder.com', 'unsplash.com', 'images.pexels.com', 'townsquareinteractive.s3.amazonaws.com', 'jedwards4044.github.io', 'unpkg.com'], */
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**.production.townsquareinteractive.com',
            },
            {
                protocol: 'http',
                hostname: '**.townsquareinteractive.com',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },

    experimental: {
        //appDir: true,
        //serverActions: true,
        nextScriptWorkers: true,
    },

    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        }

        return config
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "script-src 'self' 'sha256-+k+U1HKjyVLWWT+aR4rGHdJJs1SqatL7WFqMOnwAeg4=' https://guaranteedserv.widget.scheduleengine.net wss://api.scheduleengine.net",
                    },
                ],
            },
        ]
    },
})
