import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  experimental: {
    serverActions: {}, // required object
  },

  serverExternalPackages: ['sharp', '@prisma/client', 'bcryptjs', 'jose'],

  images: {
    unoptimized: true, // required if you want static export, but SSR is fine
  },

  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 'auto',
          openAnalyzer: true,
        })
      );
    }

    // Split vendor and common chunks
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](?!(@prisma|bcryptjs|jose))/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
    };

    return config;
  },

  poweredByHeader: false,
  compress: true,

  generateBuildId: async () => `geetcare-${Date.now()}`,
};

export default nextConfig;
