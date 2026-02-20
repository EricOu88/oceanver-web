/**
 * 检索器规则和阈值配置
 */

export interface RetrievalRules {
  // 最小相似度阈值（低于此值视为未命中）
  minScore: number
  
  // 最大返回结果数
  topK: number
  
  // 冲突检测阈值（如果最高分和第二高分差距小于此值，视为冲突）
  conflictThreshold: number
  
  // 是否启用精确匹配优先
  exactMatchFirst: boolean
}

export const DEFAULT_RULES: RetrievalRules = {
  minScore: 0.25, // 25% 相似度阈值（降低阈值以提高召回率，允许更多结果通过）
  topK: 5, // 返回前5个结果（从3增加到5以提高召回率）
  conflictThreshold: 0.1, // 如果最高分和第二高分差距小于 10%，视为冲突
  exactMatchFirst: true,
}

// 运营商关键词映射（支持中英文、大小写、空格归一化）
export const PROVIDER_KEYWORDS: Record<string, string[]> = {
  xfinity: ['xfinity', 'comcast', 'xfinity business', 'comcast business', 'xfinity商业', 'comcast商业'],
  spectrum: ['spectrum', 'charter', 'spectrum business', 'charter business', 'spectrum商业', 'charter商业'],
  att: ['att', 'at&t', 'at and t', 'at&t fiber', 'att fiber', 'at&t商业', 'att商业'],
  tmobile: ['tmobile', 't-mobile', 't mobile'],
  verizon: ['verizon'],
  frontier: ['frontier'],
  ultra: ['ultra'],
  genmobile: ['genmobile', 'gen mobile'],
  mint: ['mint', 'mint mobile'],
}

// 归一化文本（去除空格、统一大小写）
function normalizeText(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '').trim()
}

// 归一化 Provider 名称（comcast/xfinity business -> xfinity）
export function normalizeProvider(provider: string | null): string | null {
  if (!provider) return null
  
  const normalized = normalizeText(provider)
  
  // 映射别名到标准名称
  if (normalized.includes('comcast') || normalized.includes('xfinity')) {
    return 'xfinity'
  }
  if (normalized.includes('charter') || normalized.includes('spectrum')) {
    return 'spectrum'
  }
  if (normalized.includes('at&t') || normalized.includes('atandt') || normalized === 'att') {
    return 'att'
  }
  if (normalized.includes('t-mobile') || normalized.includes('tmobile')) {
    return 'tmobile'
  }
  
  // 直接匹配标准名称
  for (const [standardProvider] of Object.entries(PROVIDER_KEYWORDS)) {
    if (normalized === standardProvider || normalized.includes(standardProvider)) {
      return standardProvider
    }
  }
  
  return normalized
}

// 提取用户问题中的运营商（支持归一化匹配）
export function extractProvider(userQuestion: string): string | null {
  const normalized = normalizeText(userQuestion)
  
  for (const [provider, keywords] of Object.entries(PROVIDER_KEYWORDS)) {
    for (const keyword of keywords) {
      const normalizedKeyword = normalizeText(keyword)
      if (normalized.includes(normalizedKeyword)) {
        return provider
      }
    }
  }
  
  return null
}
