/**
 * 检索器规则和阈值配置（JavaScript 版本）
 */

const DEFAULT_RULES = {
  minScore: 0.1, // 10% 相似度阈值（大幅降低以提高召回率）
  topK: 5,
  conflictThreshold: 0.1, // 如果最高分和第二高分差距小于 10%，视为冲突
  exactMatchFirst: true,
}

// 运营商关键词映射（支持中英文、大小写、空格归一化）
const PROVIDER_KEYWORDS = {
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
function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, '').trim()
}

// 归一化 Provider 名称（comcast/xfinity business -> xfinity）
function normalizeProvider(provider) {
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
function extractProvider(userQuestion) {
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

module.exports = {
  DEFAULT_RULES,
  PROVIDER_KEYWORDS,
  extractProvider,
  normalizeProvider,
  normalizeText,
}
