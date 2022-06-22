/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

/* module.exports = {
    //nextConfig,
    images: {
        domains: ['via.placeholder.com', 'unsplash.com', 'images.pexels.com'], look down
    },
} */
module.exports = {
    images: {
        domains: ['via.placeholder.com', 'unsplash.com', 'images.pexels.com', 'townsquareinteractive.s3.amazonaws.com', 'jedwards4044.github.io'],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },

    future: {
        webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
        // Looks like backward compatibility approach.
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
                ],
            },
        ]
    },
    /*  async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://townsquareinteractive.s3.amazonaws.com',
            },
        ]
    }, */
}
