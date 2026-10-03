/**
 * SEO 工具函数库
 * 用于统一处理 canonical、FAQ Schema、内链等 SEO 增强
 */

const DOMAIN = 'https://oceanver.com'

/**
 * 规范化 Canonical URL
 * - 统一使用小写
 * - 移除 /zh 前缀
 * - 移除查询参数
 * - 统一域名格式
 */
export function getCanonicalUrl(path: string): string {
  // 移除查询参数
  const pathWithoutQuery = path.split('?')[0]
  
  // 转换为小写
  let normalizedPath = pathWithoutQuery.toLowerCase()
  
  // 移除 /zh 前缀
  if (normalizedPath.startsWith('/zh')) {
    normalizedPath = normalizedPath.replace(/^\/zh/, '') || '/'
  }
  
  // 确保以 / 开头
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = `/${normalizedPath}`
  }
  
  // 移除尾部斜杠（首页除外）
  if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1)
  }
  
  return `${DOMAIN}${normalizedPath}`
}

/**
 * 生成 FAQ Schema（JSON-LD）
 * @param questions FAQ 问题数组
 */
export function generateFAQSchema(questions: Array<{ question: string; answer: string }>) {
  if (!questions || questions.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * 检查页面是否应该被索引
 * @param path 页面路径
 * @param hasContent 页面是否有实质内容
 */
export function shouldIndex(path: string, hasContent: boolean = true): boolean {
  // 自动 noindex 的路径模式
  const noindexPatterns = [
    /^\/search/i,
    /^\/test/i,
    /^\/admin/i,
    /^\/api\//i,
    /\/page\/\d+$/i, // 分页页（如果无内容）
  ]

  // 检查是否匹配 noindex 模式
  for (const pattern of noindexPatterns) {
    if (pattern.test(path)) {
      return false
    }
  }

  // 如果页面无实质内容，不索引
  if (!hasContent) {
    return false
  }

  return true
}

/**
 * 生成 Geo 信号关键词（用于内容增强，不堆砌）
 */
export function getGeoKeywords(): string[] {
  return [
    'Fremont',
    'San Jose',
    'Milpitas',
    'Cupertino',
    '湾区',
    'Bay Area',
    'California',
    '加州',
  ]
}

/**
 * 生成用户群体关键词（用于内容增强）
 */
export function getUserGroupKeywords(): string[] {
  return [
    '中文用户',
    '新移民',
    '留学生',
    '无 SSN',
    '华人',
    '湾区华人',
  ]
}

/**
 * 生成内链配置
 * @param pageType 页面类型
 * @param faqCategory FAQ 类别（仅当 pageType 为 'faq' 时使用）
 */
export function getInternalLinks(
  pageType: 'internet' | 'cellphone' | 'blog' | 'faq' | 'provider',
  faqCategory?: 'internet' | 'cellphone'
) {
  const baseLinks = [
    {
      text: '联系我们',
      href: '/contact',
      description: '需要中文协助？联系我们',
    },
  ]

  switch (pageType) {
    case 'internet':
      return [
        ...baseLinks,
        {
          text: '宽带常见问题',
          href: '/internet/faq',
          description: '查看宽带常见问题解答',
        },
        {
          text: '宽带问题诊断',
          href: '/internet/diagnosis',
          description: '诊断你的宽带问题',
        },
      ]
    
    case 'cellphone':
      return [
        ...baseLinks,
        {
          text: '手机套餐常见问题',
          href: '/cellphone/faq',
          description: '查看手机套餐常见问题',
        },
        {
          text: '手机套餐对比',
          href: '/cellphone/providers',
          description: '对比各大运营商套餐',
        },
      ]
    
    case 'blog':
      return [
        ...baseLinks,
        {
          text: '宽带服务',
          href: '/internet',
          description: '了解宽带服务',
        },
        {
          text: '手机套餐',
          href: '/cellphone',
          description: '了解手机套餐',
        },
      ]
    
    case 'faq':
      return [
        ...baseLinks,
        {
          text: '返回服务主页',
          href: faqCategory === 'internet' ? '/internet' : '/cellphone',
          description: '返回服务主页',
        },
      ]
    
    case 'provider':
      return [
        ...baseLinks,
        {
          text: '查看 FAQ',
          href: '', // 由调用方填充
          description: '查看常见问题',
        },
      ]
    
    default:
      return baseLinks
  }
}
