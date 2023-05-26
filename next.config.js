/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'photobank.maximum.expert',
                port: '',
                pathname: '/photo/**',
            },
        ],
    },
}
