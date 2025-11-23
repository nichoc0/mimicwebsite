import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
};

export default nextConfig;
