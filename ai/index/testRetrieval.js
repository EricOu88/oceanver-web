/**
 * 测试检索功能：验证"商业宽带需要营业执照吗"的检索结果
 */

const { getVectorStore } = require('./vectorStore')
const { retrieve } = require('../retriever/retrieve.js')

async function testRetrieval() {
  console.log('='.repeat(60))
  console.log('检索测试：商业宽带需要营业执照吗')
  console.log('='.repeat(60))
  
  // 加载向量存储
  const store = getVectorStore()
  await store.load()
  console.log('\n✅ 向量存储已加载')
  
  // 测试问题
  const testQuestion = '商业宽带需要营业执照吗'
  console.log(`\n测试问题: "${testQuestion}"`)
  
  // 执行检索
  const result = await retrieve(testQuestion)
  
  console.log('\n检索结果:')
  console.log(`  决策: ${result.decision}`)
  console.log(`  最高分: ${result.debug.topScore?.toFixed(3) || 'N/A'}`)
  console.log(`  第二高分: ${result.debug.secondScore?.toFixed(3) || 'N/A'}`)
  console.log(`  命中数量: ${result.hits.length}`)
  
  if (result.hits.length > 0) {
    const topHit = result.hits[0]
    console.log(`\n✅ 成功命中:`)
    console.log(`  条目ID: ${topHit.doc.id}`)
    console.log(`  匹配得分: ${topHit.score.toFixed(3)}`)
    console.log(`  匹配变体: ${topHit.matchedVariant || 'N/A'}`)
    console.log(`  运营商: ${topHit.doc.provider}`)
    console.log(`  分类: ${topHit.doc.category}`)
    console.log(`  答案: ${topHit.doc.answer.substring(0, 100)}...`)
    console.log(`  来源URL: ${topHit.doc.source_url}`)
    console.log(`  Scope: ${topHit.doc.scope}`)
    
    // 验证 maxScore 是否为 1.0
    if (topHit.score >= 0.99) {
      console.log('\n✅✅✅ 验证通过：maxScore >= 0.99 (接近 1.0)')
    } else if (topHit.score >= 0.5) {
      console.log(`\n⚠️  警告：maxScore = ${topHit.score.toFixed(3)}，虽然 > 0.5，但未达到 1.0`)
    } else {
      console.log(`\n❌ 失败：maxScore = ${topHit.score.toFixed(3)}，仍然太低`)
    }
  } else {
    console.log('\n❌ 未命中任何条目')
  }
  
  // 显示 Top K 结果
  if (result.debug.topK && result.debug.topK.length > 0) {
    console.log(`\nTop ${result.debug.topK.length} 结果:`)
    result.debug.topK.forEach((item, idx) => {
      console.log(`  ${idx + 1}. [${item.provider}] ${item.question} (得分: ${item.score.toFixed(3)})`)
    })
  }
  
  console.log('\n' + '='.repeat(60))
  console.log('测试完成')
  console.log('='.repeat(60))
}

// 运行测试
if (require.main === module) {
  testRetrieval().catch(error => {
    console.error('测试失败:', error)
    process.exit(1)
  })
}

module.exports = { testRetrieval }
