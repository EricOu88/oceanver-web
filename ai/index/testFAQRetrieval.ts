/**
 * FAQ 检索测试脚本
 * 
 * 测试新添加的FAQ条目和检索逻辑改进
 */

import { retrieve } from '../retriever/retrieve'
import { DEFAULT_RULES } from '../retriever/rules'

async function testFAQRetrieval() {
  console.log('='.repeat(60))
  console.log('FAQ 检索测试 - 验证新添加的常见问题')
  console.log('='.repeat(60))
  
  const testCases = [
    {
      name: '测试 1: xfinity 账单涨价',
      question: 'xfinity 账单涨价',
      expectedProvider: 'xfinity',
      expectedCategory: 'billing',
      minScore: 0.25,
    },
    {
      name: '测试 2: 网速为什么慢了',
      question: '网速为什么慢了',
      expectedProvider: null, // 通用问题
      minScore: 0.25,
    },
    {
      name: '测试 3: xfinity 网速慢',
      question: 'xfinity 网速慢',
      expectedProvider: 'xfinity',
      expectedCategory: 'after-sales',
      minScore: 0.25,
    },
    {
      name: '测试 4: 为什么断网了',
      question: '为什么断网了',
      expectedProvider: null,
      minScore: 0.25,
    },
    {
      name: '测试 5: xfinity 断网',
      question: 'xfinity 断网',
      expectedProvider: 'xfinity',
      expectedCategory: 'after-sales',
      minScore: 0.25,
    },
    {
      name: '测试 6: 连不上WiFi',
      question: '连不上WiFi',
      expectedProvider: null,
      minScore: 0.25,
    },
    {
      name: '测试 7: xfinity WiFi连不上',
      question: 'xfinity WiFi连不上',
      expectedProvider: 'xfinity',
      expectedCategory: 'equipment',
      minScore: 0.25,
    },
    {
      name: '测试 8: 网速慢了（测试查询变体）',
      question: '网速慢了',
      expectedProvider: null,
      minScore: 0.25,
    },
    {
      name: '测试 9: 断网了怎么办（测试查询变体）',
      question: '断网了怎么办',
      expectedProvider: null,
      minScore: 0.25,
    },
  ]
  
  for (const testCase of testCases) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(testCase.name)
    console.log(`问题: "${testCase.question}"`)
    console.log('-'.repeat(60))
    
    try {
      const result = await retrieve(testCase.question, DEFAULT_RULES, null)
      
      console.log(`决策: ${result.decision}`)
      console.log(`命中数: ${result.hits.length}`)
      console.log(`最高分: ${result.debug.topScore?.toFixed(3) || 'N/A'}`)
      console.log(`检测到的Provider: ${result.debug.detectedProvider || 'N/A'}`)
      console.log(`Top Hit Provider: ${result.debug.topHitProvider || 'N/A'}`)
      console.log(`Block Reason: ${result.debug.blockReason || 'null'}`)
      
      if (result.hits.length > 0) {
        const topHit = result.hits[0]
        console.log(`\n✅ Top Hit:`)
        console.log(`  ID: ${topHit.doc.id}`)
        console.log(`  Provider: ${topHit.doc.provider}`)
        console.log(`  Category: ${topHit.doc.category}`)
        console.log(`  Score: ${topHit.score.toFixed(3)}`)
        console.log(`  Question: ${topHit.matchedVariant || topHit.doc.question_variants[0]}`)
        console.log(`  Answer: ${topHit.doc.answer.substring(0, 100)}...`)
        
        // 验证 Provider 匹配
        if (testCase.expectedProvider) {
          const normalizedExpected = testCase.expectedProvider.toLowerCase()
          const normalizedActual = topHit.doc.provider.toLowerCase()
          if (normalizedActual.includes(normalizedExpected) || normalizedExpected.includes(normalizedActual)) {
            console.log(`  ✅ Provider 匹配正确`)
          } else {
            console.log(`  ⚠️ Provider 不匹配: 期望包含 "${testCase.expectedProvider}", 实际 "${topHit.doc.provider}"`)
          }
        }
        
        // 验证 Score
        if (topHit.score >= testCase.minScore) {
          console.log(`  ✅ Score >= ${testCase.minScore}`)
        } else {
          console.log(`  ⚠️ Score ${topHit.score.toFixed(3)} < ${testCase.minScore}`)
        }
      } else {
        console.log(`\n❌ 未命中任何结果`)
        if (result.debug.topK && result.debug.topK.length > 0) {
          console.log(`\nTop K 结果（但被过滤）:`)
          result.debug.topK.slice(0, 3).forEach((hit: any, idx: number) => {
            console.log(`  ${idx + 1}. [${hit.provider}] ${hit.question} (得分: ${hit.score.toFixed(3)})`)
          })
        }
      }
      
      // 显示所有 TopK 结果
      if (result.debug.topK && result.debug.topK.length > 0) {
        console.log(`\nTop K 结果:`)
        result.debug.topK.slice(0, 5).forEach((hit: any, idx: number) => {
          console.log(`  ${idx + 1}. [${hit.provider}] ${hit.question} (得分: ${hit.score.toFixed(3)})`)
        })
      }
      
    } catch (error) {
      console.error(`❌ 测试失败:`, error)
    }
  }
  
  console.log(`\n${'='.repeat(60)}`)
  console.log('测试完成')
  console.log('='.repeat(60))
}

// 如果直接运行此脚本
if (require.main === module) {
  testFAQRetrieval().catch(console.error)
}

export { testFAQRetrieval }
