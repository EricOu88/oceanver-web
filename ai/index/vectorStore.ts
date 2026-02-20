/**
 * 向量存储实现
 * 
 * 当前使用简单的文本相似度匹配（基于词频的余弦相似度）
 * 后续可以替换为真正的 embedding 方案
 */

import type { QADocument, VectorDocument, SearchResult, VectorStore } from './types'
import * as fs from 'fs/promises'
import * as path from 'path'
import { normalizeProvider } from '../retriever/rules'

/**
 * 预处理查询：生成常见变体以提高召回率
 * 
 * 例如：
 * - "网速慢了" -> ["网速慢了", "网速慢"]
 * - "断网了" -> ["断网了", "断开"]
 * - "连不上WiFi" -> ["连不上WiFi", "无法连接WiFi"]
 */
export function preprocessQuery(query: string): string[] {
  const variants = [query]
  
  // 常见变体规则
  if (query.includes('慢了')) variants.push(query.replace(/慢了/g, '慢'))
  if (query.includes('断网')) variants.push(query.replace(/断网/g, '断开'))
  if (query.includes('连不上')) variants.push(query.replace(/连不上/g, '无法连接'))
  if (query.includes('涨价了')) variants.push(query.replace(/涨价了/g, '涨价'))
  if (query.includes('涨价')) variants.push(query.replace(/涨价/g, '费用增加'))
  if (query.includes('费用增加')) variants.push(query.replace(/费用增加/g, '涨价'))
  if (query.includes('网速慢')) variants.push(query.replace(/网速慢/g, '速度慢'))
  if (query.includes('速度慢')) variants.push(query.replace(/速度慢/g, '网速慢'))
  if (query.includes('无法连接')) variants.push(query.replace(/无法连接/g, '连不上'))
  if (query.includes('断开')) variants.push(query.replace(/断开/g, '断网'))
  
  return [...new Set(variants)] // 去重
}

// 简单的文本相似度计算（基于词频的余弦相似度）
function calculateSimilarity(text1: string, text2: string): number {
  const words1 = text1.toLowerCase().split(/\s+/).filter(w => w.length > 0)
  const words2 = text2.toLowerCase().split(/\s+/).filter(w => w.length > 0)
  
  const allWords = new Set([...words1, ...words2])
  const vector1: number[] = []
  const vector2: number[] = []
  
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
function calculateKeywordMatch(text1: string, text2: string): number {
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

export class SimpleVectorStore implements VectorStore {
  private documents: Map<string, VectorDocument> = new Map()
  private dataPath: string

  constructor(dataPath: string = path.join(process.cwd(), 'data', 'vector-store.json')) {
    this.dataPath = dataPath
  }

  async load(): Promise<void> {
    try {
      const data = await fs.readFile(this.dataPath, 'utf-8')
      const docs = JSON.parse(data) as VectorDocument[]
      this.documents.clear()
      for (const doc of docs) {
        this.documents.set(doc.id, doc)
      }
      console.log(`✅ Vector store loaded: ${this.documents.size} documents from ${this.dataPath}`)
    } catch (error) {
      // 文件不存在或读取失败，使用空存储
      console.warn(`⚠️ Vector store file not found or error loading: ${this.dataPath}`, error)
      this.documents.clear()
      // 不抛出错误，允许空存储继续运行（但会返回 NO_HIT）
    }
  }

  async save(): Promise<void> {
    const docs = Array.from(this.documents.values())
    await fs.mkdir(path.dirname(this.dataPath), { recursive: true })
    await fs.writeFile(this.dataPath, JSON.stringify(docs, null, 2), 'utf-8')
  }

  async upsert(docs: VectorDocument[]): Promise<void> {
    for (const doc of docs) {
      this.documents.set(doc.id, doc)
    }
    await this.save()
  }

  async query(
    text: string,
    topK: number,
    filters?: { provider?: string; category?: string },
    detectedProvider?: string | null // 检测到的 provider（用于降权）
  ): Promise<SearchResult[]> {
    const results: SearchResult[] = []
    
    // ============================================
    // 预处理查询：生成常见变体以提高召回率
    // ============================================
    const queryVariants = preprocessQuery(text)
    const normalizedQueries = queryVariants.map(q => q.toLowerCase().trim())

    // 提取核心关键词（动词和名词）
    const extractKeywords = (text: string): string[] => {
      // 常见业务关键词（核心动词和名词）
      const businessKeywords = [
        '营业执照', '商业', '住家', '合约', '解约', '转网', '价格', '费用', '账单',
        '安装', '速度', '流量', '覆盖', 'SSN', '押金', '材料', '证件', '优惠',
        'license', 'business', 'home', 'contract', 'price', 'fee', 'bill', 'install',
        'speed', 'coverage', 'deposit', 'discount', 'promotion'
      ]
      
      const words = text.toLowerCase().split(/[\s，。、]+/).filter(w => w.length > 0)
      const keywords: string[] = []
      
      // 提取业务关键词
      const normalizedText = text.toLowerCase()
      for (const keyword of businessKeywords) {
        if (normalizedText.includes(keyword.toLowerCase())) {
          keywords.push(keyword.toLowerCase())
        }
      }
      
      // 提取长度 >= 2 的实词
      for (const word of words) {
        if (word.length >= 2 && !['的', '了', '吗', '呢', '是', '有', '在', '和', '与', '或'].includes(word)) {
          keywords.push(word)
        }
      }
      
      return [...new Set(keywords)]
    }

    // 提取所有查询变体的关键词（合并）
    const allQueryKeywords = new Set<string>()
    for (const q of normalizedQueries) {
      const keywords = extractKeywords(q)
      keywords.forEach(k => allQueryKeywords.add(k))
    }
    const queryKeywords = Array.from(allQueryKeywords)

    for (const [id, vectorDoc] of this.documents.entries()) {
      const doc = vectorDoc.metadata

      // 应用过滤器（支持归一化匹配）
      if (filters?.provider) {
        const normalizedFilterProvider = normalizeProvider(filters.provider)
        const normalizedDocProvider = normalizeProvider(doc.provider)
        if (normalizedDocProvider !== normalizedFilterProvider) {
          continue
        }
      }
      if (filters?.category && doc.category !== filters.category) {
        continue
      }

      // 检查每个问题变体
      let bestScore = 0
      let matchedVariant: string | undefined

      // 对每个查询变体进行匹配
      for (const normalizedQuery of normalizedQueries) {
        for (const variant of doc.question_variants) {
          const normalizedVariant = variant.toLowerCase().trim()
          
          // 1. 精确匹配（最高优先级，score = 1.0）
          if (normalizedVariant === normalizedQuery) {
            bestScore = 1.0
            matchedVariant = variant
            break
          }
        
        // 2. 关键词精确匹配层（Hybrid Search）：如果查询包含 FAQ 标题的核心关键词，强制 score = 1.0
        const variantKeywords = extractKeywords(variant)
        const keywordMatchCount = queryKeywords.filter(k => 
          variantKeywords.some(vk => vk.includes(k) || k.includes(vk))
        ).length
        
        // 如果核心关键词匹配度 >= 50%，强制提升到 1.0
        if (queryKeywords.length > 0 && keywordMatchCount > 0) {
          const keywordMatchRatio = keywordMatchCount / Math.max(queryKeywords.length, variantKeywords.length)
          if (keywordMatchRatio >= 0.5) {
            bestScore = 1.0
            matchedVariant = variant
            break
          }
        }
        
        // 3. 部分匹配检查（如果查询包含变体的主要部分，或变体包含查询的主要部分）
        const queryWords = normalizedQuery.split(/\s+/).filter(w => w.length > 1)
        const variantWords = normalizedVariant.split(/\s+/).filter(w => w.length > 1)
        
        // 如果查询的所有关键词都在变体中，或变体的所有关键词都在查询中，给予高分
        const queryInVariant = queryWords.every(w => normalizedVariant.includes(w))
        const variantInQuery = variantWords.every(w => normalizedQuery.includes(w))
        
        if (queryInVariant || variantInQuery) {
          const partialScore = Math.min(
            queryWords.filter(w => normalizedVariant.includes(w)).length / Math.max(queryWords.length, 1),
            variantWords.filter(w => normalizedQuery.includes(w)).length / Math.max(variantWords.length, 1)
          )
          // 提高部分匹配的得分权重
          const boostedScore = Math.min(partialScore * 1.2, 0.95) // 最高到 0.95，留出空间给精确匹配
          if (boostedScore > bestScore) {
            bestScore = boostedScore
            matchedVariant = variant
          }
        }

        // 4. 计算相似度（向量相似度）
        const similarity = calculateSimilarity(normalizedQuery, normalizedVariant)
        const keywordMatch = calculateKeywordMatch(normalizedQuery, normalizedVariant)
        
        // 综合得分（相似度权重更高）
        const score = similarity * 0.7 + keywordMatch * 0.3

        if (score > bestScore) {
          bestScore = score
          matchedVariant = variant
        }
      }
      
      // 如果已经找到精确匹配（score = 1.0），可以提前退出查询变体循环
      if (bestScore >= 1.0) {
        break
      }
    }

    // 5. 也检查答案文本（较低权重）- 对所有查询变体进行检查
    for (const normalizedQuery of normalizedQueries) {
      const answerSimilarity = calculateSimilarity(normalizedQuery, doc.answer.toLowerCase()) * 0.3
      if (answerSimilarity > bestScore) {
        bestScore = Math.max(bestScore, answerSimilarity)
      }

      // 6. 关键词匹配加分：如果答案中包含查询的核心关键词，额外加分
      const queryKeywordsForAnswer = extractKeywords(normalizedQuery)
      const answerKeywords = extractKeywords(doc.answer)
      const answerKeywordMatch = queryKeywordsForAnswer.filter(k => 
        answerKeywords.some(ak => ak.includes(k) || k.includes(ak))
      ).length
      if (answerKeywordMatch > 0 && queryKeywordsForAnswer.length > 0) {
        const bonus = Math.min(answerKeywordMatch / queryKeywordsForAnswer.length * 0.2, 0.2) // 最多加 0.2 分
        bestScore = Math.min(bestScore + bonus, 1.0)
      }
    }

      // ============================================
      // 三、在 vectorStore.query 增加 ProviderMismatch 惩罚（双保险）
      // ============================================
      // 当 filters.provider 不存在但 userQuestion 里 detect 到 provider
      // 若 doc.provider 与 detectedProvider 不一致，大幅降权
      if (!filters?.provider && detectedProvider && bestScore > 0) {
        // 使用导入的 normalizeProvider 函数（统一使用，避免重复实现）
        const normalizedDetected = normalizeProvider(detectedProvider)
        const normalizedDocProvider = normalizeProvider(doc.provider)
        
        if (normalizedDocProvider !== normalizedDetected) {
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

  async getById(id: string): Promise<QADocument | null> {
    const vectorDoc = this.documents.get(id)
    return vectorDoc ? vectorDoc.metadata : null
  }

  async getAll(): Promise<QADocument[]> {
    return Array.from(this.documents.values()).map(doc => doc.metadata)
  }
}

// 单例实例
let storeInstance: SimpleVectorStore | null = null

export function getVectorStore(): SimpleVectorStore {
  if (!storeInstance) {
    storeInstance = new SimpleVectorStore()
  }
  return storeInstance
}
