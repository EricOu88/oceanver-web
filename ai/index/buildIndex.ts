/**
 * 构建向量索引
 * 
 * 读取 /content/qa/*.json 文件，生成向量索引
 */

import * as fs from 'fs/promises'
import * as path from 'path'
import { getVectorStore } from './vectorStore'
import type { QADocument, VectorDocument } from './types'

async function loadQAFiles(): Promise<QADocument[]> {
  const qaDir = path.join(process.cwd(), 'content', 'qa')
  const allQAs: QADocument[] = []
  
  // 递归读取所有 JSON 文件
  async function readDir(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory()) {
        // 递归读取子目录
        await readDir(fullPath)
      } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'schema.json') {
        const content = await fs.readFile(fullPath, 'utf-8')
        const qas = JSON.parse(content) as QADocument[]
        allQAs.push(...qas)
      }
    }
  }
  
  await readDir(qaDir)
  return allQAs
}

function createVectorDocuments(qas: QADocument[]): VectorDocument[] {
  return qas.map(qa => {
    // 将所有问题变体和答案组合成检索文本
    const searchText = [
      ...qa.question_variants,
      qa.answer,
    ].join(' ')
    
    return {
      id: qa.id,
      text: searchText,
      metadata: qa,
    }
  })
}

async function buildIndex(): Promise<void> {
  console.log('开始构建向量索引...')
  
  // 加载所有 QA 文件
  const qas = await loadQAFiles()
  console.log(`加载了 ${qas.length} 条 QA 数据`)
  
  // 验证关键条目是否存在
  const requiredIds = ['xfinity_business_license']
  const indexedIds = qas.map(qa => qa.id)
  
  console.log('\n验证关键条目:')
  for (const requiredId of requiredIds) {
    const exists = indexedIds.includes(requiredId)
    console.log(`  Contains ${requiredId}: ${exists ? 'YES' : 'NO'}`)
    
    if (!exists) {
      throw new Error(`❌ 构建失败：缺少必需条目 ${requiredId}`)
    }
  }
  
  // 创建向量文档
  const vectorDocs = createVectorDocuments(qas)
  console.log(`创建了 ${vectorDocs.length} 个向量文档`)
  
  // 写入向量存储
  const store = getVectorStore()
  await store.load()
  await store.upsert(vectorDocs)
  console.log('向量索引构建完成')
  
  // 生成 manifest
  const manifest = {
    count: qas.length,
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    providers: [...new Set(qas.map(qa => qa.provider))],
    categories: [...new Set(qas.map(qa => qa.category))],
    indexedIds: indexedIds.slice(0, 20), // 显示前 20 个 ID
  }
  
  const manifestPath = path.join(process.cwd(), 'ai', 'index', 'manifest.json')
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')
  console.log('Manifest 已生成:', manifestPath)
  
  console.log('\n索引统计:')
  console.log(`- 总条数: ${manifest.count}`)
  console.log(`- 运营商: ${manifest.providers.join(', ')}`)
  console.log(`- 分类: ${manifest.categories.join(', ')}`)
  console.log(`- ✅ 所有关键条目验证通过`)
}

// 如果直接运行此脚本（Node.js 环境）
if (typeof require !== 'undefined' && require.main === module) {
  buildIndex().catch(console.error)
}

export { buildIndex }
