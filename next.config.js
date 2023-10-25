/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
