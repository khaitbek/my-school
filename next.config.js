/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
    serverActions: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
