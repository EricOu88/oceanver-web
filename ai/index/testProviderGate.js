/**
 * 测试 Provider Gate 功能
 * 验证验收用例 8-11
 */

const { getVectorStore } = require('./vectorStore')
const { retrieve } = require('../retriever/retrieve.js')

async function testProviderGate() {
  console.log('='.repeat(60))
  console.log('Provider Gate 测试')
  console.log('='.repeat(60))
  
  // 加载向量存储
  const store = getVectorStore()
  await store.load()
  console.log('\n✅ 向量存储已加载')
  
  const testCases = [
    {
      name: '用例 8: xfinity 商业需要营业执照吗？',
      question: 'xfinity 商业需要营业执照吗',
      expected: {
        decision: 'HIT',
        topHitProvider: 'xfinity',
        answerShouldNotContain: ['AT&T', 'att', 'Spectrum', 'spectrum', 'T-Mobile'],
      },
    },
    {
      name: '用例 9: comcast business 需要营业执照吗？',
      question: 'comcast business 需要营业执照吗',
      expected: {
        decision: 'HIT',
        detectedProvider: 'xfinity', // comcast 应归一到 xfinity
        topHitProvider: 'xfinity',
        answerShouldNotContain: ['AT&T', 'att', 'Spectrum', 'spectrum'],
      },
    },
    {
      name: '用例 10: xfinity 怎么涨价？',
      question: 'xfinity 怎么涨价',
      expected: {
        decision: 'HIT', // 如果有 xfinity 内容
        topHitProvider: 'xfinity',
        answerShouldNotContain: ['AT&T', 'att', 'Spectrum', 'spectrum'],
      },
    },
    {
      name: '用例 11: 宽带涨价怎么办？（无 provider）',
      question: '宽带涨价怎么办',
      expected: {
        decision: 'HIT', // 允许全库命中通用/多运营商对比回答
        // 可以提及多个运营商
      },
    },
  ]
  
  for (const testCase of testCases) {
    console.log(`\n${'='.repeat(60)}`)
    console.log(`测试: ${testCase.name}`)
    console.log(`问题: "${testCase.question}"`)
    console.log('='.repeat(60))
    
    const result = await retrieve(testCase.question)
    
    console.log(`\n检索结果:`)
    console.log(`  决策: ${result.decision}`)
    console.log(`  检测到的 Provider: ${result.debug.detectedProvider || 'N/A'}`)
    console.log(`  Top Hit Provider: ${result.debug.topHitProvider || 'N/A'}`)
    console.log(`  Provider Gate 丢弃数量: ${result.debug.providerGateDroppedCount || 0}`)
    console.log(`  最高分: ${result.debug.topScore?.toFixed(3) || 'N/A'}`)
    console.log(`  Block Reason: ${result.debug.blockReason || 'null'}`)
    
    if (result.hits.length > 0) {
      const topHit = result.hits[0]
      console.log(`\n✅ 成功命中:`)
      console.log(`  条目ID: ${topHit.doc.id}`)
      console.log(`  匹配得分: ${topHit.score.toFixed(3)}`)
      console.log(`  运营商: ${topHit.doc.provider}`)
      console.log(`  答案预览: ${topHit.doc.answer.substring(0, 100)}...`)
      
      // 验证用例期望
      if (testCase.expected.decision) {
        if (result.decision === testCase.expected.decision) {
          console.log(`  ✅ 决策匹配: ${result.decision}`)
        } else {
          console.log(`  ❌ 决策不匹配: 期望 ${testCase.expected.decision}, 实际 ${result.decision}`)
        }
      }
      
      if (testCase.expected.topHitProvider) {
        const normalizedTopHit = topHit.doc.provider.toLowerCase()
        const normalizedExpected = testCase.expected.topHitProvider.toLowerCase()
        if (normalizedTopHit === normalizedExpected || 
            (normalizedTopHit.includes('xfinity') && normalizedExpected.includes('xfinity')) ||
            (normalizedTopHit.includes('comcast') && normalizedExpected.includes('xfinity'))) {
          console.log(`  ✅ Provider 匹配: ${topHit.doc.provider}`)
        } else {
          console.log(`  ❌ Provider 不匹配: 期望 ${testCase.expected.topHitProvider}, 实际 ${topHit.doc.provider}`)
        }
      }
      
      if (testCase.expected.detectedProvider) {
        const normalizedDetected = result.debug.detectedProvider?.toLowerCase() || ''
        const normalizedExpected = testCase.expected.detectedProvider.toLowerCase()
        if (normalizedDetected === normalizedExpected ||
            (normalizedDetected.includes('xfinity') && normalizedExpected.includes('xfinity'))) {
          console.log(`  ✅ 检测到的 Provider 匹配: ${result.debug.detectedProvider}`)
        } else {
          console.log(`  ⚠️  检测到的 Provider: ${result.debug.detectedProvider}, 期望: ${testCase.expected.detectedProvider}`)
        }
      }
      
      if (testCase.expected.answerShouldNotContain) {
        const answerLower = topHit.doc.answer.toLowerCase()
        const violations = testCase.expected.answerShouldNotContain.filter(keyword => 
          answerLower.includes(keyword.toLowerCase())
        )
        if (violations.length === 0) {
          console.log(`  ✅ 答案不包含其他运营商关键词`)
        } else {
          console.log(`  ❌ 答案包含不应出现的关键词: ${violations.join(', ')}`)
        }
      }
    } else {
      console.log(`\n❌ 未命中任何条目`)
      if (testCase.expected.decision === 'HIT') {
        console.log(`  ⚠️  期望命中，但未命中（可能需要添加该 provider 的内容）`)
      }
    }
    
    // 显示 Top K 结果
    if (result.debug.topK && result.debug.topK.length > 0) {
      console.log(`\nTop ${result.debug.topK.length} 结果:`)
      result.debug.topK.forEach((item, idx) => {
        console.log(`  ${idx + 1}. [${item.provider}] ${item.question} (得分: ${item.score.toFixed(3)})`)
      })
    }
  }
  
  console.log('\n' + '='.repeat(60))
  console.log('测试完成')
  console.log('='.repeat(60))
}

// 运行测试
if (require.main === module) {
  testProviderGate().catch(error => {
    console.error('测试失败:', error)
    process.exit(1)
  })
}

module.exports = { testProviderGate }
