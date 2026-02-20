import type { MetadataRoute } from 'next';
import { SITEMAP_ALLOWLIST } from './sitemap-allowlist';
import { getAllPostSlugs } from '@/lib/blog';
import { spectrumFAQIndex } from './internet/spectrum/faq/faq-index';
import { frontierFAQIndex } from './internet/frontier/faq/faq-index';
import { attFiberFAQIndex } from './internet/att/fiber/faq/faq-index';
import { xfinityFAQIndex } from './internet/xfinity/faq/faq-index';

// 强制使用 HTTPS 和非 www 主域名（统一 SEO 权重）
const DOMAIN = 'https://baymediastar.com';

/**
 * 生成统一的 sitemap.xml
 * 
 * 特性：
 * - 所有 URL 强制使用 https://baymediastar.com
 * - 合并静态页面、动态博客文章和独立 FAQ 页面到一个文件
 * - 排除 noindex 页面和无效路径
 * - Next.js 默认不会分块（除非超过 50,000 个 URL）
 */
// 过滤函数：排除 favicon、feed、参数型 URL、/zh/* 路径
function shouldInclude(path: string): boolean {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  // 排除 favicon
  if (normalizedPath.includes('favicon') || normalizedPath.endsWith('.ico')) {
    return false;
  }
  // 排除 feed/rss
  if (normalizedPath.includes('feed') || normalizedPath.includes('rss') || normalizedPath.endsWith('.xml')) {
    return false;
  }
  // 排除参数型 URL（包含 ? 的）
  if (normalizedPath.includes('?')) {
    return false;
  }
  // 排除 /zh/* 路径（历史路径，已统一为默认中文）
  if (normalizedPath.startsWith('/zh')) {
    return false;
  }
  // 黑名单：排除已知的失效路径
  const blacklist = [
    '/h2o-cellphone-plan',
    '/en/internet/spectrum',
    '/att-how-to-check-online-bill',
    '/2024-new-internet-plan',
  ];
  if (blacklist.some(blackPath => normalizedPath === blackPath || normalizedPath.startsWith(blackPath + '/'))) {
    return false;
  }
  return true;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 静态页面列表（来自 allowlist，已过滤）
  const staticUrls: MetadataRoute.Sitemap = SITEMAP_ALLOWLIST
    .filter(shouldInclude)
    .map((path) => {
      // 确保路径以 / 开头
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      
      return {
        url: `${DOMAIN}${normalizedPath}`,
        lastModified: now,
        changeFrequency: normalizedPath === '/' ? 'daily' : 'weekly',
        priority: normalizedPath === '/' ? 1.0 : 0.8,
      };
    });

  // 动态博客文章（自动从 /content/blog 目录读取）
  const blogSlugs = getAllPostSlugs();
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${DOMAIN}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Spectrum 独立 FAQ 页面（用于 SEO 排名）
  const spectrumFAQUrls: MetadataRoute.Sitemap = spectrumFAQIndex.map((item) => ({
    url: `${DOMAIN}/internet-wifi/spectrum/faq/${item.slug}`,
    lastModified: new Date(item.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Frontier 独立 FAQ 页面（用于 SEO 排名）
  const frontierFAQUrls: MetadataRoute.Sitemap = frontierFAQIndex.map((item) => ({
    url: `${DOMAIN}/internet-wifi/frontier/faq/${item.slug}`,
    lastModified: new Date(item.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // AT&T Fiber 独立 FAQ 页面（用于 SEO 排名）
  const attFiberFAQUrls: MetadataRoute.Sitemap = attFiberFAQIndex.map((item) => ({
    url: `${DOMAIN}/internet/att/fiber/faq/${item.slug}`,
    lastModified: new Date(item.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Xfinity 独立 FAQ 页面（用于 SEO 排名）
  const xfinityFAQUrls: MetadataRoute.Sitemap = xfinityFAQIndex.map((item) => ({
    url: `${DOMAIN}/internet/xfinity/faq/${item.slug}`,
    lastModified: new Date(item.lastModified),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 合并所有页面到一个统一的 sitemap
  // 只保留：服务页、FAQ、博客正文页、城市页
  // Next.js 会自动生成 /sitemap.xml（不会分块，除非超过 50,000 个 URL）
  return [
    ...staticUrls,
    ...blogUrls, // 博客正文页
    ...spectrumFAQUrls, // FAQ 页面
    ...frontierFAQUrls, // FAQ 页面
    ...attFiberFAQUrls, // FAQ 页面
    ...xfinityFAQUrls, // FAQ 页面
  ].filter((item) => {
    // 最终过滤：确保没有遗漏的 favicon、feed、参数型 URL
    return shouldInclude(item.url.replace(DOMAIN, ''));
  });
}
