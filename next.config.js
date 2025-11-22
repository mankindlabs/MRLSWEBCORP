/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath when using custom domain
  // basePath: '/mankind-research-labs',
};

module.exports = nextConfig;
