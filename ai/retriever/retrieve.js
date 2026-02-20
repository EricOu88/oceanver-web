/**
 * 检索器实现（JavaScript 版本）
 */

const { getVectorStore } = require('../index/vectorStore')
const { DEFAULT_RULES, extractProvider, normalizeProvider } = require('./rules')

const RetrievalDecision = {
  HIT: 'HIT', // 命中，有可用答案
  NO_HIT: 'NO_HIT', // 未命中，需要转人工
  CONFLICT: 'CONFLICT', // 冲突，多条答案不一致
}

async function retrieve(userQuestion, rules = DEFAULT_RULES, contextProvider = null) {
  const store = getVectorStore()
  await store.load()
  
  // 提取运营商并归一化
  const detectedProvider = extractProvider(userQuestion)
  const normalizedDetectedProvider = normalizeProvider(detectedProvider)
  
  let results = []
  let maxScore = 0
  let providerGateDroppedCount = 0
  
  // ============================================
  // 一、在检索结果上做 Provider Gate（必须）
  // ============================================
  
  if (normalizedDetectedProvider) {
    // ============================================
    // 智能 Provider Gate 策略（AI 最高级方法）
    // ============================================
    
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
    } else {
      // 策略 2: 按 provider 过滤无结果，做全库检索 + Provider Gate
      const allResults = await store.query(
        userQuestion,
        rules.topK * 3,
        undefined, // 不过滤 provider
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
        // 策略 3: 完全没有匹配 provider 的结果，转人工
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
    // 没有检测到 provider，直接全库检索（允许通用/多运营商对比回答）
    results = await store.query(
      userQuestion,
      rules.topK,
      undefined,
      null // 没有 detectedProvider
    )
    
    if (results.length > 0) {
      maxScore = results[0].score
    }
  }
  
  // ============================================
  // Provider Gate 最终检查（双保险）
  // ============================================
  // 注意：如果已经通过智能策略获取了匹配 provider 的结果，这里不需要再次过滤
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
        provider: normalizedDetectedProvider || undefined,
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
  // 智能阈值处理（AI 最高级方法）
  // ============================================
  let validHits
  
  if (normalizedDetectedProvider) {
    // 检测到 provider：优先使用匹配 provider 的结果，降低阈值要求
    // 只要 score > 0，就认为有效（因为用户明确问了该 provider）
    validHits = results.filter(r => r.score > 0)
    
    // 如果所有结果 score 都是 0，才考虑转人工
    if (validHits.length === 0 && results.length > 0) {
      const bestResult = results[0]
      const normalizedBestProvider = normalizeProvider(bestResult.doc.provider)
      
      if (normalizedBestProvider === normalizedDetectedProvider) {
        // Provider 匹配，即使 score 很低也返回
        validHits = [bestResult]
      }
    }
  } else {
    // 没有检测到 provider：使用标准阈值过滤
    validHits = results.filter(r => r.score >= rules.minScore)
    
    // 如果所有结果都低于阈值，但有结果（score > 0），也尝试返回最佳匹配
    if (validHits.length === 0 && results.length > 0) {
      const bestResult = results[0]
      if (bestResult.score > 0) {
        validHits = [bestResult]
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
        provider: normalizedDetectedProvider || undefined,
        detectedProvider: normalizedDetectedProvider,
        topHitProvider: results.length > 0 ? results[0].doc.provider : undefined,
        providerGateDroppedCount,
        topScore: maxScore,
        blockReason: normalizedDetectedProvider ? 'PROVIDER_MISMATCH' : 'LOW_SCORE',
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
  
  // 检查冲突
  if (validHits.length >= 2) {
    const topScore = validHits[0].score
    const secondScore = validHits[1].score
    const scoreDiff = topScore - secondScore
    
    if (scoreDiff < rules.conflictThreshold) {
      const topAnswer = validHits[0].doc.answer
      const secondAnswer = validHits[1].doc.answer
      
      // 1. 引入"当前上下文优先"逻辑
      if (contextProvider) {
        const normalizedContextProvider = normalizeProvider(contextProvider)
        const contextMatch = validHits.find(hit => {
          const normalizedHitProvider = normalizeProvider(hit.doc.provider)
          return normalizedHitProvider === normalizedContextProvider
        })
        
        if (contextMatch && (!normalizedDetectedProvider || normalizedContextProvider === normalizedDetectedProvider)) {
          return {
            hits: [contextMatch],
            decision: RetrievalDecision.HIT,
            debug: {
              scores: validHits.map(r => r.score),
              provider: normalizedDetectedProvider || normalizedContextProvider,
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
      
      // 2. 关闭低价值冲突拦截
      const normalizeAnswer = (text) => {
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
      
      const calculateAnswerSimilarity = (text1, text2) => {
        if (text1.length === 0 || text2.length === 0) return 0
        const words1 = new Set(text1.split(''))
        const words2 = new Set(text2.split(''))
        const intersection = new Set([...words1].filter(x => words2.has(x)))
        const union = new Set([...words1, ...words2])
        return union.size > 0 ? intersection.size / union.size : 0
      }
      
      const answerSimilarity = calculateAnswerSimilarity(normalizedTop, normalizedSecond)
      
      if (answerSimilarity >= 0.7) {
        return {
          hits: [validHits[0]],
          decision: RetrievalDecision.HIT,
          debug: {
            scores: validHits.map(r => r.score),
            provider: normalizedDetectedProvider || undefined,
            detectedProvider: normalizedDetectedProvider,
            topHitProvider: validHits[0].doc.provider,
            providerGateDroppedCount,
            topScore,
            secondScore,
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
      
      if (topAnswer !== secondAnswer) {
        return {
          hits: validHits,
          decision: RetrievalDecision.CONFLICT,
          debug: {
            scores: validHits.map(r => r.score),
            provider: normalizedDetectedProvider || undefined,
            detectedProvider: normalizedDetectedProvider,
            topHitProvider: validHits[0].doc.provider,
            providerGateDroppedCount,
            topScore,
            secondScore,
            blockReason: 'CONFLICT',
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
    return {
      hits: validHits,
      decision: RetrievalDecision.NO_HIT,
      debug: {
        scores: validHits.map(r => r.score),
        provider: normalizedDetectedProvider || undefined,
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

module.exports = {
  retrieve,
  RetrievalDecision,
}
