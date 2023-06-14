/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
    serverActions: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ["ik.imagekit.io", "placehold.co"]
  }
}

module.exports = nextConfig
