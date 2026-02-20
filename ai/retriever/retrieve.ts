/**
 * 检索器实现
 * 
 * 输入用户问题，返回检索结果和决策
 */

import { getVectorStore } from '../index/vectorStore'
import { DEFAULT_RULES, extractProvider, normalizeProvider, type RetrievalRules } from './rules'
import type { SearchResult } from '../index/types'
import type { BlockReason } from '../answer/guardrails'

export enum RetrievalDecision {
  HIT = 'HIT', // 命中，有可用答案
  NO_HIT = 'NO_HIT', // 未命中，需要转人工
  CONFLICT = 'CONFLICT', // 冲突，多条答案不一致
  MULTI_HIT = 'MULTI_HIT', // 多运营商命中，需要聚合答案
  BLOCKED = 'BLOCKED', // 被拦截，需要转人工
}

export interface RetrievalResult {
  hits: SearchResult[]
  decision: RetrievalDecision
  debug: {
    scores: number[]
    provider?: string
    detectedProvider?: string | null
    topHitProvider?: string | null
    providerGateDroppedCount?: number
    topScore?: number
    secondScore?: number
    blockReason?: BlockReason | null
    topK?: Array<{
      id: string
      score: number
      question: string
      provider: string
      source_url?: string
    }>
  }
}

export async function retrieve(
  userQuestion: string,
  rules: RetrievalRules = DEFAULT_RULES,
  contextProvider?: string | null // 当前页面上下文 provider
): Promise<RetrievalResult> {
  const store = getVectorStore()
  
  try {
    await store.load()
  } catch (error) {
    console.error('Vector store load error:', error)
    // 如果向量存储加载失败，返回 NO_HIT
    return {
      hits: [],
      decision: RetrievalDecision.NO_HIT,
      debug: {
        scores: [],
        detectedProvider: null,
        topHitProvider: undefined,
        providerGateDroppedCount: 0,
        topScore: 0,
        blockReason: 'NO_HIT',
        topK: [],
      },
    }
  }
  
  // 提取运营商并归一化（类似 searchFaq 的 extractBrandFromQuery）
  const detectedProvider = extractProvider(userQuestion)
  const normalizedDetectedProvider = normalizeProvider(detectedProvider)
  
  // 确保 topK=5（降低阈值，提高召回率）
  const searchTopK = 5
  
  let results: SearchResult[] = []
  let maxScore = 0
  let providerGateDroppedCount = 0
  
  // ============================================
  // 一、在检索结果上做 Provider Gate（必须）
  // ============================================
  
  if (normalizedDetectedProvider) {
    // ============================================
    // 智能 Provider Gate 策略（AI 最高级方法）
    // ============================================
    // 1. 优先：按 provider 精确过滤
    // 2. 如果精确过滤有结果（即使 score 很低），优先使用
    // 3. 如果精确过滤无结果，做全库检索 + Provider Gate
    // 4. 如果全库检索 + Gate 有结果，使用（即使 score 很低）
    // 5. 只有在完全没有匹配 provider 的结果时，才转人工
    
    const providerResults = await store.query(
      userQuestion,
      rules.topK * 3, // 多取一些，确保覆盖
      { provider: normalizedDetectedProvider },
      normalizedDetectedProvider
    )
    
    // 策略 1: 如果按 provider 过滤有结果，优先使用（即使 score 很低）
    if (providerResults.length > 0) {
      results = providerResults
      maxScore = providerResults[0].score
      // 即使 score 很低，也使用这些结果（因为用户明确问了该 provider）
    } else {
      // 策略 2: 按 provider 过滤无结果，做全库检索 + Provider Gate
      const allResults = await store.query(
        userQuestion,
        searchTopK, // topK=5
        undefined, // 不过滤 provider（全库检索）
        normalizedDetectedProvider // 传入 detectedProvider 用于降权
      )
      
      // Provider Gate：只保留 provider 一致的结果
      const normalizedDetected = normalizedDetectedProvider
      const gatedResults = allResults.filter(result => {
        const normalizedResultProvider = normalizeProvider(result.doc.provider)
        const matches = normalizedResultProvider === normalizedDetected
        
        if (!matches) {
          providerGateDroppedCount++
        }
        
        return matches
      })
      
      if (gatedResults.length > 0) {
        // 有匹配的结果，使用 gated 结果（即使 score 很低）
        results = gatedResults
        maxScore = gatedResults[0].score
      } else {
        // 策略 3: 完全没有匹配 provider 的结果，检查是否有任何结果
        // 如果全库检索有结果但都不匹配 provider，说明确实没有该 provider 的内容
        // 此时应该转人工，而不是用其他运营商凑答案
        return {
          hits: [],
          decision: RetrievalDecision.NO_HIT,
          debug: {
            scores: allResults.map(r => r.score),
            provider: normalizedDetectedProvider,
            detectedProvider: normalizedDetectedProvider,
            topHitProvider: allResults.length > 0 ? allResults[0].doc.provider : undefined,
            providerGateDroppedCount: allResults.length,
            topScore: allResults.length > 0 ? allResults[0].score : 0,
            blockReason: 'PROVIDER_MISMATCH',
            topK: allResults.slice(0, rules.topK).map(r => ({
              id: r.doc.id,
              score: r.score,
              question: r.matchedVariant || r.doc.question_variants[0] || '',
              provider: r.doc.provider,
              source_url: r.doc.source_url,
            })),
          },
        }
      }
    }
  } else {
    // ============================================
    // 首页场景：多运营商答案聚合模式
    // ============================================
    // 当没有检测到 provider 且没有 contextProvider 时（首页场景），
    // 获取所有 score > 0.9 的结果，支持多运营商聚合
    
    const isHomePage = !contextProvider // 首页判断：没有 contextProvider
    
    if (isHomePage) {
      // 首页场景：获取更多结果，用于多运营商聚合
      results = await store.query(
        userQuestion,
        rules.topK * 5, // 获取更多结果，确保覆盖所有运营商
        undefined
      )
      
      // 过滤：只保留 score > 0.9 的高质量结果
      results = results.filter(r => r.score > 0.9)
      
      if (results.length > 0) {
        maxScore = results[0].score
        
        // 检查是否有多个不同 Provider 的结果
        const uniqueProviders = new Set(
          results.map(r => normalizeProvider(r.doc.provider))
        )
        
        // 如果有多个不同 Provider，标记为 MULTI_HIT（后续会聚合答案）
        if (uniqueProviders.size > 1) {
          // 直接返回所有结果，decision 会在后面设置为 MULTI_HIT
          // 这里先继续执行后续逻辑
        }
      }
    } else {
      // 非首页场景：保持原有逻辑
      results = await store.query(
        userQuestion,
        searchTopK, // topK=5（降低阈值，提高召回率）
        undefined // 不应用品牌过滤
      )
      
      if (results.length > 0) {
        maxScore = results[0].score
      }
    }
  }
  
  // ============================================
  // Provider Gate 最终检查（双保险）
  // ============================================
  // 注意：如果已经通过智能策略获取了匹配 provider 的结果，这里不需要再次过滤
  // 但如果 results 中混入了其他 provider（理论上不应该），这里做最终检查
  if (normalizedDetectedProvider && results.length > 0) {
    const normalizedDetected = normalizedDetectedProvider
    const beforeFilterCount = results.length
    
    // 最终检查：确保所有结果都是匹配的 provider
    const filteredResults = results.filter(result => {
      const normalizedResultProvider = normalizeProvider(result.doc.provider)
      return normalizedResultProvider === normalizedDetected
    })
    
    // 如果过滤后结果减少，说明有混入其他 provider（不应该发生，但做保险）
    if (filteredResults.length < results.length) {
      providerGateDroppedCount += results.length - filteredResults.length
      results = filteredResults
      
      // 如果过滤后没有结果，转人工
      if (results.length === 0) {
        return {
          hits: [],
          decision: RetrievalDecision.NO_HIT,
          debug: {
            scores: [],
            provider: normalizedDetectedProvider,
            detectedProvider: normalizedDetectedProvider,
            topHitProvider: undefined,
            providerGateDroppedCount,
            topScore: maxScore,
            blockReason: 'PROVIDER_MISMATCH',
            topK: [],
          },
        }
      }
      
      // 更新 maxScore
      maxScore = results[0].score
    }
  }
  
  // 如果没有结果，直接返回 NO_HIT
  if (results.length === 0) {
    return {
      hits: [],
      decision: RetrievalDecision.NO_HIT,
      debug: {
        scores: [],
        provider: normalizedDetectedProvider ?? undefined,
        detectedProvider: normalizedDetectedProvider,
        topHitProvider: undefined,
        providerGateDroppedCount,
        topScore: 0,
        blockReason: normalizedDetectedProvider ? 'PROVIDER_MISMATCH' : 'NO_HIT',
        topK: [],
      },
    }
  }
  
  // ============================================
  // 品牌优先级识别：如果问题中包含具体品牌，自动过滤
  // ============================================
  // 增强检测：检查问题中是否包含品牌名称（即使 extractProvider 没检测到）
  const questionLower = userQuestion.toLowerCase()
  const brandKeywords: Record<string, string[]> = {
    'xfinity': ['xfinity', 'comcast'],
    'att': ['att', 'at&t', 'at and t'],
    'spectrum': ['spectrum', 'charter'],
    'verizon': ['verizon'],
    'tmobile': ['tmobile', 't-mobile', 't mobile'],
  }
  
  let explicitBrand: string | null = null
  for (const [brand, keywords] of Object.entries(brandKeywords)) {
    if (keywords.some(kw => questionLower.includes(kw))) {
      explicitBrand = brand
      break
    }
  }
  
  // 如果检测到明确品牌，过滤结果
  if (explicitBrand && !normalizedDetectedProvider) {
    const normalizedBrand = normalizeProvider(explicitBrand)
    const beforeFilterCount = results.length
    results = results.filter(result => {
      const normalizedResultProvider = normalizeProvider(result.doc.provider)
      return normalizedResultProvider === normalizedBrand
    })
    providerGateDroppedCount += beforeFilterCount - results.length
    
    if (results.length > 0) {
      maxScore = results[0].score
    }
  }
  
  // 过滤低于阈值的结果，但如果有任何结果（score > 0），即使低于阈值也尝试返回最佳匹配
  // 首页场景：使用 score > 0.9 的阈值（已在上面过滤）
  // 非首页场景：使用 rules.minScore
  const isHomePage = !contextProvider && !normalizedDetectedProvider
  const validHits = isHomePage 
    ? results.filter(r => r.score > 0.9) // 首页：只保留高质量结果
    : results.filter(r => r.score >= rules.minScore) // 非首页：使用原有阈值
  
  // ============================================
  // 降低阈值，提高召回率策略
  // ============================================
  // 策略：如果 validHits 为空，尝试找到第一个 score > 0.25 的结果
  // 如果连 0.25 都没有，返回最佳匹配（即使 score 很低）
  if (validHits.length === 0 && results.length > 0) {
    // 尝试找到第一个 score > 0.25 的结果
    const bestMatch = results.find(m => m.score > 0.25)
    
    if (bestMatch) {
      // 找到 score > 0.25 的结果，使用它
      return {
        hits: [bestMatch],
        decision: RetrievalDecision.HIT,
        debug: {
          scores: results.map(r => r.score),
          provider: normalizedDetectedProvider ?? undefined,
          detectedProvider: normalizedDetectedProvider,
          topHitProvider: bestMatch.doc.provider,
          providerGateDroppedCount,
          topScore: bestMatch.score,
          secondScore: results.length >= 2 ? results[1].score : undefined,
          topK: results.slice(0, rules.topK).map(r => ({
            id: r.doc.id,
            score: r.score,
            question: r.matchedVariant || r.doc.question_variants[0] || '',
            provider: r.doc.provider,
            source_url: r.doc.source_url,
          })),
        },
      }
    }
    
    // 如果没有 score > 0.25 的结果，返回最佳匹配（即使 score 很低）
    const bestResult = results[0]
    if (bestResult.score > 0) {
      return {
        hits: [bestResult],
        decision: RetrievalDecision.HIT, // 改为 HIT，因为确实有匹配结果
        debug: {
          scores: results.map(r => r.score),
          provider: normalizedDetectedProvider ?? undefined,
          detectedProvider: normalizedDetectedProvider,
          topHitProvider: bestResult.doc.provider,
          providerGateDroppedCount,
          topScore: bestResult.score,
          secondScore: results.length >= 2 ? results[1].score : undefined,
          topK: results.slice(0, rules.topK).map(r => ({
            id: r.doc.id,
            score: r.score,
            question: r.matchedVariant || r.doc.question_variants[0] || '',
            provider: r.doc.provider,
            source_url: r.doc.source_url,
          })),
        },
      }
    }
  }
  
  // 如果完全没有结果，才返回 NO_HIT
  if (validHits.length === 0) {
    return {
      hits: [],
      decision: RetrievalDecision.NO_HIT,
      debug: {
        scores: results.map(r => r.score),
        provider: normalizedDetectedProvider ?? undefined,
        detectedProvider: normalizedDetectedProvider,
        topHitProvider: results.length > 0 ? results[0].doc.provider : undefined,
        providerGateDroppedCount,
        topScore: maxScore,
        topK: results.slice(0, rules.topK).map(r => ({
          id: r.doc.id,
          score: r.score,
          question: r.matchedVariant || r.doc.question_variants[0] || '',
          provider: r.doc.provider,
          source_url: r.doc.source_url,
        })),
      },
    }
  }
  
  // ============================================
  // 多运营商聚合检测（首页场景）
  // ============================================
  if (validHits.length >= 2 && isHomePage) {
    // 检查是否有多个不同 Provider 的结果
    const uniqueProviders = new Set(
      validHits.map(r => normalizeProvider(r.doc.provider))
    )
    
    // 如果有多个不同 Provider，返回 MULTI_HIT（用于后续聚合）
    if (uniqueProviders.size > 1) {
      return {
        hits: validHits, // 返回所有不同 Provider 的结果
        decision: RetrievalDecision.MULTI_HIT,
        debug: {
          scores: validHits.map(r => r.score),
          provider: undefined, // 首页场景，没有单一 provider
          detectedProvider: null,
          topHitProvider: validHits[0].doc.provider,
          providerGateDroppedCount,
          topScore: validHits[0].score,
          secondScore: validHits.length >= 2 ? validHits[1].score : undefined,
          blockReason: null,
          topK: validHits.map(r => ({
            id: r.doc.id,
            score: r.score,
            question: r.matchedVariant || r.doc.question_variants[0] || '',
            provider: r.doc.provider,
            source_url: r.doc.source_url,
          })),
        },
      }
    }
  }
  
  // ============================================
  // 冲突检测（非首页场景，或单 Provider 场景）
  // ============================================
  if (validHits.length >= 2 && !isHomePage) {
    const topScore = validHits[0].score
    const secondScore = validHits[1].score
    const scoreDiff = topScore - secondScore
    
    // 如果最高分和第二高分差距小于阈值，检查答案是否一致
    if (scoreDiff < rules.conflictThreshold) {
      const topAnswer = validHits[0].doc.answer
      const secondAnswer = validHits[1].doc.answer
      
      // 1. 引入"当前上下文优先"逻辑：如果提供了 contextProvider，优先选择匹配的运营商
      // 但必须确保与 detectedProvider 一致（如果存在）
      if (contextProvider) {
        const normalizedContextProvider = normalizeProvider(contextProvider)
        // 收敛 provider 为 string | undefined（绝不返回 null）
        const debugProvider: string | undefined =
          normalizedDetectedProvider ?? normalizedContextProvider ?? undefined
        
        const contextMatch = validHits.find(hit => {
          const normalizedHitProvider = normalizeProvider(hit.doc.provider)
          return normalizedHitProvider === normalizedContextProvider
        })
        
        // 如果 detectedProvider 存在，必须确保 contextProvider 与之一致
        if (contextMatch && (!normalizedDetectedProvider || normalizedContextProvider === normalizedDetectedProvider)) {
          // 找到匹配当前页面的结果，直接返回，消除冲突
          return {
            hits: [contextMatch],
            decision: RetrievalDecision.HIT,
            debug: {
              scores: validHits.map(r => r.score),
              provider: debugProvider,
              detectedProvider: normalizedDetectedProvider,
              topHitProvider: contextMatch.doc.provider,
              providerGateDroppedCount,
              topScore: contextMatch.score,
              secondScore: validHits.length >= 2 ? validHits[1].score : undefined,
              blockReason: null,
              topK: results.slice(0, rules.topK).map(r => ({
                id: r.doc.id,
                score: r.score,
                question: r.matchedVariant || r.doc.question_variants[0] || '',
                provider: r.doc.provider,
                source_url: r.doc.source_url,
              })),
            },
          }
        }
      }
      
      // 2. 关闭低价值冲突拦截：检查答案内容是否基本一致
      const normalizeAnswer = (text: string): string => {
        // 移除标点、空格、运营商名称，只保留核心内容
        return text
          .toLowerCase()
          .replace(/[，。、！？；：\s]/g, '')
          .replace(/(att|at&t|xfinity|comcast|spectrum|charter|verizon|tmobile)/gi, '')
          .replace(/商业宽带/g, '')
          .replace(/营业执照/g, 'license')
          .replace(/商业注册证明/g, 'license')
          .trim()
      }
      
      const normalizedTop = normalizeAnswer(topAnswer)
      const normalizedSecond = normalizeAnswer(secondAnswer)
      
      // 计算答案相似度（简单的字符重叠度）
      const calculateAnswerSimilarity = (text1: string, text2: string): number => {
        if (text1.length === 0 || text2.length === 0) return 0
        
        const words1 = new Set(text1.split(''))
        const words2 = new Set(text2.split(''))
        const intersection = new Set([...words1].filter(x => words2.has(x)))
        const union = new Set([...words1, ...words2])
        
        return union.size > 0 ? intersection.size / union.size : 0
      }
      
      const answerSimilarity = calculateAnswerSimilarity(normalizedTop, normalizedSecond)
      
      // 如果答案相似度 >= 70%，视为答案基本一致，取消 CONFLICT
      if (answerSimilarity >= 0.7) {
        // 返回最高分的结果，视为单次有效命中
        return {
          hits: [validHits[0]],
          decision: RetrievalDecision.HIT,
          debug: {
            scores: validHits.map(r => r.score),
            provider: normalizedDetectedProvider ?? undefined,
            detectedProvider: normalizedDetectedProvider,
            topHitProvider: validHits[0].doc.provider,
            providerGateDroppedCount,
            topScore,
            secondScore,
            topK: results.slice(0, rules.topK).map(r => ({
              id: r.doc.id,
              score: r.score,
              question: r.matchedVariant || r.doc.question_variants[0] || '',
              provider: r.doc.provider,
              source_url: r.doc.source_url,
            })),
          },
        }
      }
      
      // 答案不一致，且没有上下文匹配
      // 注意：移除多个 1.0 分导致的 CONFLICT，改为返回最高分结果
      // 如果最高分是 1.0，直接返回，不再报 CONFLICT
      if (topScore >= 0.99) {
        // 多个 1.0 分：返回最高分结果，不再报 CONFLICT
        return {
          hits: [validHits[0]],
          decision: RetrievalDecision.HIT,
          debug: {
            scores: validHits.map(r => r.score),
            provider: normalizedDetectedProvider ?? undefined,
            detectedProvider: normalizedDetectedProvider,
            topHitProvider: validHits[0].doc.provider,
            providerGateDroppedCount,
            topScore,
            secondScore,
            topK: results.slice(0, rules.topK).map(r => ({
              id: r.doc.id,
              score: r.score,
              question: r.matchedVariant || r.doc.question_variants[0] || '',
              provider: r.doc.provider,
              source_url: r.doc.source_url,
            })),
          },
        }
      }
      
      // 其他情况：返回 CONFLICT（保留向后兼容）
      return {
        hits: validHits,
        decision: RetrievalDecision.CONFLICT,
        debug: {
          scores: validHits.map(r => r.score),
          provider: normalizedDetectedProvider ?? undefined,
          detectedProvider: normalizedDetectedProvider,
          topHitProvider: validHits[0].doc.provider,
          providerGateDroppedCount,
          topScore,
          secondScore,
          topK: results.slice(0, rules.topK).map(r => ({
            id: r.doc.id,
            score: r.score,
            question: r.matchedVariant || r.doc.question_variants[0] || '',
            provider: r.doc.provider,
            source_url: r.doc.source_url,
          })),
        },
      }
    }
  }
  
  // 检查是否命中 blocked 内容
  const topHit = validHits[0]
  
  // 最终 Provider Gate 检查（四重保险）
  if (normalizedDetectedProvider) {
    const normalizedTopHitProvider = normalizeProvider(topHit.doc.provider)
    if (normalizedTopHitProvider !== normalizedDetectedProvider) {
      return {
        hits: [],
        decision: RetrievalDecision.NO_HIT,
        debug: {
          scores: validHits.map(r => r.score),
          provider: normalizedDetectedProvider,
          detectedProvider: normalizedDetectedProvider,
          topHitProvider: topHit.doc.provider,
          providerGateDroppedCount: providerGateDroppedCount + validHits.length,
          topScore: topHit.score,
          secondScore: validHits.length >= 2 ? validHits[1].score : undefined,
          blockReason: 'PROVIDER_MISMATCH',
          topK: results.slice(0, rules.topK).map(r => ({
            id: r.doc.id,
            score: r.score,
            question: r.matchedVariant || r.doc.question_variants[0] || '',
            provider: r.doc.provider,
            source_url: r.doc.source_url,
          })),
        },
      }
    }
  }
  
  if (topHit.doc.scope === 'blocked') {
    // 即使命中，如果是 blocked，也应该转人工
    return {
      hits: validHits,
      decision: RetrievalDecision.NO_HIT,
      debug: {
        scores: validHits.map(r => r.score),
        provider: normalizedDetectedProvider ?? undefined,
        detectedProvider: normalizedDetectedProvider,
        topHitProvider: topHit.doc.provider,
        providerGateDroppedCount,
        topScore: topHit.score,
        secondScore: validHits.length >= 2 ? validHits[1].score : undefined,
        blockReason: 'BLOCKED',
        topK: results.slice(0, rules.topK).map(r => ({
          id: r.doc.id,
          score: r.score,
          question: r.matchedVariant || r.doc.question_variants[0] || '',
          provider: r.doc.provider,
          source_url: r.doc.source_url,
        })),
      },
    }
  }
  
  // 正常命中
  return {
    hits: validHits,
    decision: RetrievalDecision.HIT,
    debug: {
      scores: validHits.map(r => r.score),
      provider: normalizedDetectedProvider || undefined,
      detectedProvider: normalizedDetectedProvider,
      topHitProvider: topHit.doc.provider,
      providerGateDroppedCount,
      topScore: topHit.score,
      secondScore: validHits.length >= 2 ? validHits[1].score : undefined,
      blockReason: null,
      topK: results.slice(0, rules.topK).map(r => ({
        id: r.doc.id,
        score: r.score,
        question: r.matchedVariant || r.doc.question_variants[0] || '',
        provider: r.doc.provider,
        source_url: r.doc.source_url,
      })),
    },
  }
}
