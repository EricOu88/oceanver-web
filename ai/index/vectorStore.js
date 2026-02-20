/**
 * 向量存储实现（JavaScript 版本）
 */

const fs = require('fs').promises
const path = require('path')

// 简单的文本相似度计算（基于词频的余弦相似度）
function calculateSimilarity(text1, text2) {
  const words1 = text1.toLowerCase().split(/\s+/).filter(w => w.length > 0)
  const words2 = text2.toLowerCase().split(/\s+/).filter(w => w.length > 0)
  
  const allWords = new Set([...words1, ...words2])
  const vector1 = []
  const vector2 = []
  
  for (const word of allWords) {
    vector1.push(words1.filter(w => w === word).length)
    vector2.push(words2.filter(w => w === word).length)
  }
  
  // 计算余弦相似度
  let dotProduct = 0
  let magnitude1 = 0
  let magnitude2 = 0
  
  for (let i = 0; i < vector1.length; i++) {
    dotProduct += vector1[i] * vector2[i]
    magnitude1 += vector1[i] * vector1[i]
    magnitude2 += vector2[i] * vector2[i]
  }
  
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0
  }
  
  return dotProduct / (Math.sqrt(magnitude1) * Math.sqrt(magnitude2))
}

// 简单的文本匹配（检查是否包含关键词）
function calculateKeywordMatch(text1, text2) {
  const words1 = new Set(text1.toLowerCase().split(/\s+/).filter(w => w.length > 1))
  const words2 = new Set(text2.toLowerCase().split(/\s+/).filter(w => w.length > 1))
  
  let matches = 0
  for (const word of words1) {
    if (words2.has(word)) {
      matches++
    }
  }
  
  const totalWords = Math.max(words1.size, words2.size)
  return totalWords > 0 ? matches / totalWords : 0
}

class SimpleVectorStore {
  constructor(dataPath = path.join(process.cwd(), 'data', 'vector-store.json')) {
    this.documents = new Map()
    this.dataPath = dataPath
  }

  async load() {
    try {
      const data = await fs.readFile(this.dataPath, 'utf-8')
      const docs = JSON.parse(data)
      this.documents.clear()
      for (const doc of docs) {
        this.documents.set(doc.id, doc)
      }
    } catch (error) {
      // 文件不存在，使用空存储
      this.documents.clear()
    }
  }

  async save() {
    const docs = Array.from(this.documents.values())
    await fs.mkdir(path.dirname(this.dataPath), { recursive: true })
    await fs.writeFile(this.dataPath, JSON.stringify(docs, null, 2), 'utf-8')
  }

  async upsert(docs) {
    for (const doc of docs) {
      this.documents.set(doc.id, doc)
    }
    await this.save()
  }

  async query(text, topK, filters, detectedProvider = null) {
    const results = []
    const normalizedQuery = text.toLowerCase().trim()

    for (const [id, vectorDoc] of this.documents.entries()) {
      const doc = vectorDoc.metadata

      // 应用过滤器（支持归一化匹配）
      if (filters?.provider) {
        const normalizeProviderSimple = (p) => {
          if (!p) return null
          const normalized = p.toLowerCase().replace(/\s+/g, '')
          if (normalized.includes('comcast') || normalized.includes('xfinity')) return 'xfinity'
          if (normalized.includes('charter') || normalized.includes('spectrum')) return 'spectrum'
          if (normalized.includes('at&t') || normalized === 'att') return 'att'
          if (normalized.includes('t-mobile') || normalized.includes('tmobile')) return 'tmobile'
          return normalized
        }
        
        const normalizedFilterProvider = normalizeProviderSimple(filters.provider)
        const normalizedDocProvider = normalizeProviderSimple(doc.provider)
        if (normalizedDocProvider !== normalizedFilterProvider) {
          continue
        }
      }
      if (filters?.category && doc.category !== filters.category) {
        continue
      }

      // 检查每个问题变体
      let bestScore = 0
      let matchedVariant

      for (const variant of doc.question_variants) {
        const normalizedVariant = variant.toLowerCase().trim()
        
        // 精确匹配（最高优先级）
        if (normalizedVariant === normalizedQuery) {
          bestScore = 1.0
          matchedVariant = variant
          break
        }
        
        // 部分匹配检查
        const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1)
        const variantWords = normalizedVariant.split(/\s+/).filter(w => w.length > 1)
        
        const queryInVariant = queryWords.every(w => normalizedVariant.includes(w))
        const variantInQuery = variantWords.every(w => normalizedQuery.includes(w))
        
        if (queryInVariant || variantInQuery) {
          const partialScore = Math.min(
            queryWords.filter(w => normalizedVariant.includes(w)).length / Math.max(queryWords.length, 1),
            variantWords.filter(w => normalizedQuery.includes(w)).length / Math.max(variantWords.length, 1)
          )
          if (partialScore > bestScore) {
            bestScore = Math.max(bestScore, partialScore * 0.9)
            matchedVariant = variant
          }
        }

        // 计算相似度
        const similarity = calculateSimilarity(normalizedQuery, normalizedVariant)
        const keywordMatch = calculateKeywordMatch(normalizedQuery, normalizedVariant)
        
        // 综合得分
        const score = similarity * 0.7 + keywordMatch * 0.3

        if (score > bestScore) {
          bestScore = score
          matchedVariant = variant
        }
      }

      // 也检查答案文本（较低权重）
      const answerSimilarity = calculateSimilarity(normalizedQuery, doc.answer.toLowerCase()) * 0.3
      if (answerSimilarity > bestScore) {
        bestScore = Math.max(bestScore, answerSimilarity)
      }

      // ============================================
      // 三、在 vectorStore.query 增加 ProviderMismatch 惩罚（双保险）
      // ============================================
      // 当 filters.provider 不存在但 userQuestion 里 detect 到 provider
      // 若 doc.provider 与 detectedProvider 不一致，大幅降权
      if (!filters?.provider && detectedProvider && bestScore > 0) {
        const normalizeProviderSimple = (p) => {
          if (!p) return null
          const normalized = p.toLowerCase().replace(/\s+/g, '')
          if (normalized.includes('comcast') || normalized.includes('xfinity')) return 'xfinity'
          if (normalized.includes('charter') || normalized.includes('spectrum')) return 'spectrum'
          if (normalized.includes('at&t') || normalized === 'att') return 'att'
          if (normalized.includes('t-mobile') || normalized.includes('tmobile')) return 'tmobile'
          return normalized
        }
        
        const normalizedDetected = normalizeProviderSimple(detectedProvider)
        const normalizedDocProvider = normalizeProviderSimple(doc.provider)
        
        if (normalizedDetected && normalizedDocProvider && normalizedDocProvider !== normalizedDetected) {
          // Provider 不一致，大幅降权（score *= 0.2）
          bestScore = bestScore * 0.2
        }
      }
      
      if (bestScore > 0) {
        results.push({
          doc,
          score: bestScore,
          matchedVariant,
        })
      }
    }

    // 按得分排序并返回 topK
    results.sort((a, b) => b.score - a.score)
    return results.slice(0, topK)
  }

  async getById(id) {
    const vectorDoc = this.documents.get(id)
    return vectorDoc ? vectorDoc.metadata : null
  }

  async getAll() {
    return Array.from(this.documents.values()).map(doc => doc.metadata)
  }
}

// 单例实例
let storeInstance = null

function getVectorStore() {
  if (!storeInstance) {
    storeInstance = new SimpleVectorStore()
  }
  return storeInstance
}

module.exports = { getVectorStore, SimpleVectorStore }
