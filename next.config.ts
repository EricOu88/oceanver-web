import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 允许的开发环境来源（消除跨域警告）
  allowedDevOrigins: ['http://172.17.219.254:3000'],

  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // 压缩配置
  compress: true,

  // 实验性功能：优化包大小
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async rewrites() {
    return [
      {
        source: '/og-cover.jpg',
        destination: '/api/og',
      },
    ]
  },

  async redirects() {
    return [
      // GSC 2026-10-23: legacy FAQ URLs with closely matching existing answers.
      {
        source: '/internet/spectrum/faq/spectrum-bill-increase',
        destination: '/internet/spectrum/faq',
        permanent: true,
      },
      {
        source: '/internet/spectrum/faq/spectrum-installation',
        destination: '/internet/spectrum/faq',
        permanent: true,
      },
      {
        source: '/internet/spectrum/faq/spectrum-speed',
        destination: '/internet/spectrum/faq',
        permanent: true,
      },
      {
        source: '/internet/frontier/faq/frontier-frequent-disconnections',
        destination: '/internet/frontier/faq',
        permanent: true,
      },
      {
        source: '/internet-wifi/frontier/faq/frontier-contract-early-termination',
        destination: '/internet/frontier/faq',
        permanent: true,
      },
      {
        source: '/internet/att/fiber/faq/att-fiber-coverage-areas',
        destination: '/internet/att/fiber/faq',
        permanent: true,
      },

      // ============ 历史套餐页 301 重定向（修复 GSC 404）============
      {
        source: '/t-mobile-wireless-family-plan',
        destination: '/cellphone/tmobile',
        permanent: true,
      },
      {
        source: '/t-mobile-wireless-family-plan/:path*',
        destination: '/cellphone/tmobile',
        permanent: true,
      },
      {
        source: '/att-cellphone-plans',
        destination: '/cellphone/att',
        permanent: true,
      },
      {
        source: '/att-cellphone-plans/:path*',
        destination: '/cellphone/att',
        permanent: true,
      },
      {
        source: '/ultra-cellphone-plan',
        destination: '/cellphone/ultra',
        permanent: true,
      },
      {
        source: '/ultra-cellphone-plan/:path*',
        destination: '/cellphone/ultra',
        permanent: true,
      },
      {
        source: '/spectrum-internet-plan',
        destination: '/internet/spectrum',
        permanent: true,
      },
      {
        source: '/spectrum-internet-plan/:path*',
        destination: '/internet/spectrum',
        permanent: true,
      },

      // ============ 功能性页面兜底处理 ============
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/questions-and-help',
        destination: '/internet/faq',
        permanent: true,
      },
      {
        source: '/questions-and-help/:path*',
        destination: '/internet/faq',
        permanent: true,
      },
      {
        source: '/california-lifeline-telephone-service',
        destination: 'https://baymediastar.com/cellphone/lifeline',
        permanent: true,
      },
      {
        source: '/california-lifeline-telephone-service/:path*',
        destination: 'https://baymediastar.com/cellphone/lifeline',
        permanent: true,
      },

      // ============ 已有重定向（保留）============
      {
        source: '/internet/att-fiber/faq',
        destination: '/internet/att/fiber/faq',
        permanent: true,
      },
    ]
  },

  // HTTP 响应头：缓存策略
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
