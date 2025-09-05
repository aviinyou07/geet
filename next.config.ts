import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // Performance Optimizations
  experimental: {
    serverActions: {}, // must be an object
  },

  // External packages for server components
  serverExternalPackages: ['sharp', '@prisma/client', 'bcryptjs', 'jose'],

  // Image Optimization - Static export configuration
  images: {
    unoptimized: true, // Required for static export
  },

  // Bundle Optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
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

  // Security & Performance Headers
  poweredByHeader: false,
  compress: true,

  // Output optimization
  outputFileTracingRoot: path.resolve(__dirname, '../../'),

  // Generate build ID for better caching
  generateBuildId: async () => {
    return `geetcare-${Date.now()}`;
  },
};

export default nextConfig;
