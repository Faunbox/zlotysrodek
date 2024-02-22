/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/mdam2iznmp2s/**',
      },
    ],
  },};

module.exports = nextConfig;
