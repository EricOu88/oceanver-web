import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isPhase2IndexingEnabled,
  isPhase2IndexPath,
} from "@/lib/indexing-policy";

/**
 * Next.js 16 Proxy Mode
 *
 * 功能：
 * 1. www → non-www 301 重定向（统一 SEO 权重）
 * 2. en 子域 → 主域 301 重定向（清理旧 WP 英文子域）
 * 3. 强制所有 URL 使用小写路径（301 重定向）
 * 4. 统一中文路径策略：/zh/* 路径重定向到不带 /zh 的路径（301 重定向）
 * 5. 旧 WordPress 垃圾 URL：返回 410 Gone（tag/feed/embed/wp- 等）
 * 6. 根目录旧 WP slug（不属于现有顶级目录）：返回 410 Gone
 * 7. 指定历史遗留页面下线：返回 410 Gone
 */

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const hostname = request.headers.get("host") || "";

  // 【规则 0】永远放行 robots.txt 和 sitemap.xml
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return NextResponse.next();
  }

  // Retire the former English site without redirecting it to Chinese pages.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return new NextResponse("Gone", {
      status: 410,
      statusText: "Gone",
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    });
  }

  // Reject the known legacy WordPress query URL without affecting normal queries.
  const legacyQuery = url.search.replace(/%2f/gi, "/");
  if (pathname === "/" && /^\?syjc(?:\/79\.html)?=?$/.test(legacyQuery)) {
    return new NextResponse("Gone", {
      status: 410,
      statusText: "Gone",
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    });
  }

  // 【规则 0.5】vercel.app 域名一律 410（但允许 SEO 基础文件）
  if (hostname.includes("vercel.app")) {
    return new Response("Gone", { status: 410 });
  }

  // 【规则 2】强制所有 URL 使用小写路径（保留查询参数）
  const lowerPathname = pathname.toLowerCase();
  if (pathname !== lowerPathname) {
    url.pathname = lowerPathname;
    return NextResponse.redirect(url, 301);
  }

  // 【规则 3】/zh/* -> 去掉 /zh（保留查询参数）
  if (pathname.startsWith("/zh/")) {
    const newPathname = pathname.replace(/^\/zh/, "");
    url.pathname = newPathname || "/";
    return NextResponse.redirect(url, 301);
  }

  // /zh -> /
  if (pathname === "/zh") {
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  // 【规则 5】旧 WordPress 垃圾前缀：直接 410
  const gonePrefixes = ["/tag/", "/feed/", "/embed/", "/wp-"];
  if (gonePrefixes.some((p) => pathname.startsWith(p))) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    });
  }

  // 【规则 6】已知根目录旧 WP slug：例如 /dish/ /wifi-price-raise/ -> 410
  const top = pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  const legacyRootSlugs = new Set([
    "/dish",
    "/wifi-price-raise",
    "/internet-plan",
    "/phone-plan",
  ]);
  const isRootSlug =
    /^\/[^\/]+\/?$/.test(pathname) && legacyRootSlugs.has(top);

  if (isRootSlug) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    });
  }

  // 【规则 7】指定历史遗留页面下线：410 Gone
  // 排除 robots.txt 和 sitemap.xml
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return NextResponse.next();
  }
  
  const deprecatedPaths = ["/digital-tv", "/solar-panel", "/h2o-cellphone-plan", "/att-how-to-check-online-bill", "/2024-new-internet-plan"];
  const isDeprecatedPath = deprecatedPaths.some(
    (deprecated) => pathname === deprecated || pathname.startsWith(`${deprecated}/`)
  );

  if (isDeprecatedPath) {
    return new NextResponse(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  const response = NextResponse.next();

  // Oceanver 分阶段索引保险丝：
  // Phase 1：所有普通页面继续 noindex / nofollow。
  // Phase 2：只有第一批 allowlist 页面允许索引，其余页面继续 noindex，但允许爬虫沿内链发现已开放节点。
  if (!isPhase2IndexingEnabled()) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  } else if (!isPhase2IndexPath(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

// 匹配所有路径，除了静态文件和 API 路由
export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了：
     * - api (API routes)
     * - _next/static (静态文件)
     * - _next/image (图片优化文件)
     * - favicon.ico (favicon 文件)
     * - robots.txt (robots 文件)
     * - 静态资源文件扩展名
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)",
  ],
};
