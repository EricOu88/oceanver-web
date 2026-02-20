import { NextResponse } from 'next/server';

/**
 * IndexNow API - 用于推送页面 URL 到搜索引擎
 * 
 * ⚠️ 重要说明：
 * - 此 API 仅用于推送真实页面 URL（如：https://baymediastar.com/internet/spectrum）
 * - 禁止推送 sitemap.xml、sitemap-index.xml 等 sitemap 文件链接
 * - sitemap.xml 应通过搜索引擎的网站地图提交功能提交，而不是通过 IndexNow API
 * 
 * 正确的 sitemap 提交方式：
 * - Google Search Console: 提交 https://baymediastar.com/sitemap.xml
 * - Bing Webmaster Tools: 提交 https://baymediastar.com/sitemap.xml
 * 
 * IndexNow 的正确用途：
 * - 推送新发布的页面 URL
 * - 推送更新后的页面 URL
 * - 不用于推送 sitemap 文件本身
 */

// sitemap 相关路径模式（禁止通过 IndexNow 推送）
const SITEMAP_PATTERNS = [
  /\/sitemap\.xml$/i,
  /\/sitemap-index\.xml$/i,
  /\/sitemap[-\d]*\.xml$/i,
  /\/sitemaps?/i,
];

/**
 * 检查 URL 是否为 sitemap 文件
 */
function isSitemapUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return SITEMAP_PATTERNS.some((pattern) => pattern.test(urlObj.pathname));
  } catch {
    return false;
  }
}

/**
 * 验证 URL 是否为有效的页面 URL
 */
function isValidPageUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    // 必须是本站域名
    if (!urlObj.hostname.includes('baymediastar.com')) {
      return false;
    }
    // 不能是 sitemap 文件
    if (isSitemapUrl(url)) {
      return false;
    }
    // 不能是 API 路由
    if (urlObj.pathname.startsWith('/api/')) {
      return false;
    }
    // 不能是静态资源
    if (urlObj.pathname.match(/\.(xml|txt|json|ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/i)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const urls: string[] = body.urls || [];

    if (!urls.length) {
      return NextResponse.json(
        { success: false, message: 'No URLs provided' },
        { status: 400 }
      );
    }

    // 验证所有 URL：禁止 sitemap 文件
    const invalidUrls: string[] = [];
    const sitemapUrls: string[] = [];
    const validUrls: string[] = [];

    for (const url of urls) {
      if (isSitemapUrl(url)) {
        sitemapUrls.push(url);
      } else if (!isValidPageUrl(url)) {
        invalidUrls.push(url);
      } else {
        validUrls.push(url);
      }
    }

    // 如果包含 sitemap 链接，返回明确的错误信息
    if (sitemapUrls.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Sitemap files cannot be submitted via IndexNow API',
          error: 'Sitemap files (sitemap.xml, sitemap-index.xml, etc.) should be submitted through search engine webmaster tools, not via IndexNow API.',
          rejectedUrls: sitemapUrls,
          correctSitemapUrl: 'https://baymediastar.com/sitemap.xml',
          instructions: 'Please submit sitemap.xml through Google Search Console or Bing Webmaster Tools instead.',
        },
        { status: 400 }
      );
    }

    // 如果有其他无效 URL，也返回错误
    if (invalidUrls.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid URLs detected',
          error: 'Some URLs are invalid (API routes, static files, or external domains)',
          rejectedUrls: invalidUrls,
        },
        { status: 400 }
      );
    }

    // 如果没有有效 URL，返回错误
    if (validUrls.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'No valid page URLs to submit',
          error: 'All provided URLs were rejected. Only valid page URLs from baymediastar.com are allowed.',
        },
        { status: 400 }
      );
    }

    const key = 'c3c7223a322c0a173c021c238f04b6256af99424356a003c15f86330bfd41987';

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'baymediastar.com',
        key,
        keyLocation: `https://baymediastar.com/${key}.txt`,
        urlList: validUrls,
      }),
    });

    const result = await res.text();

    return NextResponse.json({
      success: true,
      pushed: validUrls,
      rejected: sitemapUrls.length > 0 || invalidUrls.length > 0 ? [...sitemapUrls, ...invalidUrls] : undefined,
      result,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
