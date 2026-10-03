/**
 * Hreflang 工具函数
 * 用于统一生成多语言页面的 hreflang 配置
 */

const BASE_URL = 'https://baymediastar.com'
const CANONICAL_BASE_URL = 'https://oceanver.com'

function getCanonicalUrl(path: string): string {
  const normalizedPath = path.replace(/^\/+|\/+$/g, '')
  return normalizedPath ? `${CANONICAL_BASE_URL}/${normalizedPath}` : `${CANONICAL_BASE_URL}/`
}

/**
 * 根据当前路径生成对应的中英文 URL
 * @param path 当前页面路径（不含域名，如 '/internet' 或 '/cellphone/att'）
 * @returns 包含中文和英文 URL 的对象
 */
export function getHreflangUrls(path: string): { zh: string; en: string } {
  // 移除前导和尾随斜杠
  const normalizedPath = path.replace(/^\/|\/$/g, '')
  
  // 如果路径已经是 /en 开头，说明是英文页面
  if (normalizedPath.startsWith('en/')) {
    const enPath = normalizedPath
    const zhPath = normalizedPath.replace(/^en\//, '')
    return {
      zh: zhPath ? `${BASE_URL}/${zhPath}` : BASE_URL,
      en: `${BASE_URL}/${enPath}`,
    }
  }
  
  // 中文页面
  return {
    zh: normalizedPath ? `${BASE_URL}/${normalizedPath}` : BASE_URL,
    en: `${BASE_URL}/en/${normalizedPath}`,
  }
}

/**
 * 生成 Next.js Metadata alternates.languages 配置
 * @param path 当前页面路径
 * @param canonicalUrl 可选的 canonical URL（如果不提供，将自动生成）
 * @returns Next.js Metadata alternates 配置
 */
export function getHreflangAlternates(
  path: string,
  canonicalUrl?: string
): {
  canonical: string
  languages: {
    'zh-CN': string
    'en-US': string
  }
} {
  const urls = getHreflangUrls(path)
  const canonical = canonicalUrl || getCanonicalUrl(path)
  
  return {
    canonical,
    languages: {
      'zh-CN': urls.zh,
      'en-US': urls.en,
    },
  }
}

/**
 * 检查英文版本页面是否存在
 * 用于决定是否在 hreflang 中包含英文链接
 * 
 * 注意：这是一个辅助函数，实际使用时需要根据项目结构调整
 * 如果某个页面没有英文版本，应该只包含中文的 hreflang
 */
export function hasEnglishVersion(path: string): boolean {
  // 定义有英文版本的页面路径
  const englishPages = [
    '', // 首页
    'about',
    'cellphone',
    'internet',
    'security',
    'blog',
  ]
  
  const normalizedPath = path.replace(/^\/|\/$/g, '')
  
  // 检查是否是主要页面（有英文版本）
  if (!normalizedPath) return true // 首页
  
  // 检查是否是主要页面的子路径
  return englishPages.some(page => {
    if (!page) return normalizedPath === ''
    return normalizedPath === page || normalizedPath.startsWith(`${page}/`)
  })
}

/**
 * 智能生成 hreflang alternates
 * 如果页面没有英文版本，只返回中文 canonical
 * @param path 当前页面路径
 * @param canonicalUrl 可选的 canonical URL
 */
export function getSmartHreflangAlternates(
  path: string,
  canonicalUrl?: string
): {
  canonical: string
  languages?: {
    'zh-CN': string
    'en-US': string
  }
} {
  const urls = getHreflangUrls(path)
  const canonical = canonicalUrl || getCanonicalUrl(path)
  
  // 如果页面没有英文版本，只返回 canonical
  if (!hasEnglishVersion(path)) {
    return { canonical }
  }
  
  return {
    canonical,
    languages: {
      'zh-CN': urls.zh,
      'en-US': urls.en,
    },
  }
}
