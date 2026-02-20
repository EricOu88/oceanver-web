/**
 * 验证索引构建和检索功能（JavaScript 版本）
 */

const fs = require('fs').promises
const path = require('path')

// 加载向量存储
const { getVectorStore } = require('./vectorStore')
const { retrieve } = require('../retriever/retrieve')

async function verifyIndex() {
  console.log('='.repeat(60))
  console.log('索引验证测试')
  console.log('='.repeat(60))
  
  // 1. 加载向量存储
  const store = getVectorStore()
  await store.load()
  console.log('\n✅ 向量存储已加载')
  
  // 2. 检查 xfinity_business_license 是否存在
  const xfinityLicenseDoc = await store.getById('xfinity_business_license')
  if (xfinityLicenseDoc) {
    console.log('\n✅ xfinity_business_license 条目存在')
    console.log(`   - Provider: ${xfinityLicenseDoc.provider}`)
    console.log(`   - Category: ${xfinityLicenseDoc.category}`)
    console.log(`   - Question Variants: ${xfinityLicenseDoc.question_variants.length} 个`)
    console.log(`   - Answer: ${xfinityLicenseDoc.answer.substring(0, 50)}...`)
    console.log(`   - Source URL: ${xfinityLicenseDoc.source_url}`)
  } else {
    console.log('\n❌ xfinity_business_license 条目不存在！')
    process.exit(1)
  }
  
  // 3. 测试检索功能
  const testQuestions = [
    'xfinity 商业需要营业执照吗',
    'comcast business 需要营业执照吗',
    'Xfinity 商业是否需要营业执照',
  ]
  
  console.log('\n' + '='.repeat(60))
  console.log('检索测试')
  console.log('='.repeat(60))
  
  for (const question of testQuestions) {
    console.log(`\n问题: "${question}"`)
    const result = await retrieve(question)
    
    console.log(`  决策: ${result.decision}`)
    console.log(`  最高分: ${result.debug.topScore?.toFixed(3) || 'N/A'}`)
    
    if (result.hits.length > 0) {
      const topHit = result.hits[0]
      console.log(`  命中条目: ${topHit.doc.id}`)
      console.log(`  匹配得分: ${topHit.score.toFixed(3)}`)
      console.log(`  匹配变体: ${topHit.matchedVariant || 'N/A'}`)
      
      if (topHit.doc.id === 'xfinity_business_license') {
        console.log('  ✅ 成功命中 xfinity_business_license')
      } else {
        console.log(`  ⚠️  命中其他条目: ${topHit.doc.id}`)
      }
    } else {
      console.log('  ❌ 未命中任何条目')
    }
    
    if (result.debug.topK && result.debug.topK.length > 0) {
      console.log(`  Top ${result.debug.topK.length} 结果:`)
      result.debug.topK.forEach((item, idx) => {
        console.log(`    ${idx + 1}. ${item.id} (${item.score.toFixed(3)}) - ${item.question}`)
      })
    }
  }
  
  // 4. 统计所有条目
  const allDocs = await store.getAll()
  console.log('\n' + '='.repeat(60))
  console.log('索引统计')
  console.log('='.repeat(60))
  console.log(`总条目数: ${allDocs.length}`)
  
  const providers = [...new Set(allDocs.map(d => d.provider))]
  console.log(`运营商: ${providers.join(', ')}`)
  
  const xfinityDocs = allDocs.filter(d => d.provider === 'xfinity')
  console.log(`Xfinity 相关条目: ${xfinityDocs.length}`)
  
  console.log('\n✅ 验证完成')
}

// 如果直接运行此脚本
if (require.main === module) {
  verifyIndex().catch(error => {
    console.error('验证失败:', error)
    process.exit(1)
  })
}

module.exports = { verifyIndex }
