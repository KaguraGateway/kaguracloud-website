/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
