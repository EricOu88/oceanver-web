import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

  // 【规则 0.5】vercel.app 域名一律 410（但允许 SEO 基础文件）
  if (hostname.includes("vercel.app")) {
    return new Response("Gone", { status: 410 });
  }

  // 【规则 1】301：www.baymediastar.com -> baymediastar.com
  if (hostname === "www.baymediastar.com") {
    url.hostname = "baymediastar.com";
    return NextResponse.redirect(url, 301);
  }

  // 【规则 1.5】301：en.baymediastar.com -> baymediastar.com
  if (hostname === "en.baymediastar.com") {
    url.hostname = "baymediastar.com";
    return NextResponse.redirect(url, 301);
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

  // 【规则 6】根目录旧 WP slug：例如 /dish/ /wifi-price-raise/ -> 410
  // 允许存在的顶级路径（来自你 app 目录）
  const allowedTopLevel = new Set([
    "/",
    "/about",
    "/admin",
    "/api",
    "/bill-optimization",
    "/blog",
    "/cellphone",
    "/components",
    "/config",
    "/contact",
    "/data",
    "/en",
    "/footer",
    "/internet",
    "/internet-wifi",
    "/logo-tool",
    "/privacy-policy",
    "/security",
    "/why-us",
  ]);

  const top = pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  const isRootSlug =
    /^\/[^\/]+\/?$/.test(pathname) && top !== "/" && !allowedTopLevel.has(top);

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
  
  const deprecatedPaths = ["/digital-tv", "/solar-panel", "/h2o-cellphone-plan", "/en/internet/spectrum", "/att-how-to-check-online-bill", "/2024-new-internet-plan"];
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

  return NextResponse.next();
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
