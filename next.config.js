/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  experimental: {
    runtime: 'experimental-edge',
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
