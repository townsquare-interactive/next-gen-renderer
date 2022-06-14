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
    env: {
        //BASE_URL: process.env.BASE_URL,
        //BASE_URL: 'somedomain.com',
    },
    future: {
        webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
        // Looks like backward compatibility approach.
    },
    images: {
        domains: ['via.placeholder.com', 'unsplash.com', 'images.pexels.com', 'townsquareinteractive.s3.amazonaws.com', 'jedwards4044.github.io'],
    },
}
