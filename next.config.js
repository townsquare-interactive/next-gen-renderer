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
    future: {
        webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
        // Looks like backward compatibility approach.
    },
    images: {
        domains: ['via.placeholder.com', 'unsplash.com', 'images.pexels.com', 'townsquareinteractivetest.s3.amazonaws.com'],
    },
}
