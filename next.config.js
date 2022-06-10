/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

/* module.exports = {
    //nextConfig,
    images: {
        domains: ['via.placeholder.com', 'unsplash.com', 'images.pexels.com'],
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
        domains: [
            'via.placeholder.com',
            'unsplash.com',
            'images.pexels.com',
            'townsquareinteractivetest.s3.amazonaws.com',
            'townsquareinteractive.s3.amazonaws.com',
            'townsquareinteractive2.s3.amazonaws.com',
        ],
    },
}
