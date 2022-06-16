/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoders, webpack }) => {
    config.experiments.asyncWebAssembly = true;
    return config;
  },
};

module.exports = nextConfig;
