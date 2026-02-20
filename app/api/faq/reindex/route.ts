/**
 * FAQ 重新索引 API
 * 
 * 重新构建向量索引，读取所有 content/qa/*.json 文件
 */

import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs/promises'
import * as path from 'path'
import { getVectorStore } from '@/ai/index/vectorStore'
import type { QADocument, VectorDocument } from '@/ai/index/types'

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

export async function POST(request: NextRequest) {
  try {
    console.log('[FAQ Reindex] 开始重新构建向量索引...')
    
    // 加载所有 QA 文件
    const qas = await loadQAFiles()
    console.log(`[FAQ Reindex] 加载了 ${qas.length} 条 QA 数据`)
    
    // 验证关键条目是否存在
    const requiredIds = ['xfinity_business_license']
    const indexedIds = qas.map(qa => qa.id)
    
    const validationResults: Record<string, boolean> = {}
    for (const requiredId of requiredIds) {
      const exists = indexedIds.includes(requiredId)
      validationResults[requiredId] = exists
      
      if (!exists) {
        return NextResponse.json(
          {
            success: false,
            error: `构建失败：缺少必需条目 ${requiredId}`,
            stats: {
              total: qas.length,
              indexedIds: indexedIds.slice(0, 10),
            },
          },
          { status: 400 }
        )
      }
    }
    
    // 创建向量文档
    const vectorDocs = createVectorDocuments(qas)
    console.log(`[FAQ Reindex] 创建了 ${vectorDocs.length} 个向量文档`)
    
    // 写入向量存储
    const store = getVectorStore()
    await store.load()
    await store.upsert(vectorDocs)
    console.log('[FAQ Reindex] 向量索引构建完成')
    
    // 生成统计信息
    const providers = [...new Set(qas.map(qa => qa.provider))]
    const categories = [...new Set(qas.map(qa => qa.category))]
    
    // 生成 manifest
    const manifest = {
      count: qas.length,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      providers,
      categories,
      indexedIds: indexedIds.slice(0, 20), // 显示前 20 个 ID
    }
    
    const manifestPath = path.join(process.cwd(), 'ai', 'index', 'manifest.json')
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')
    console.log('[FAQ Reindex] Manifest 已生成')
    
    return NextResponse.json({
      success: true,
      message: '向量索引重新构建成功',
      stats: {
        total: qas.length,
        providers,
        categories,
        validationResults,
        indexedIds: indexedIds.slice(0, 20),
      },
      timestamp: manifest.timestamp,
    })
  } catch (error) {
    console.error('[FAQ Reindex] 错误:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    
    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        ...(process.env.NODE_ENV === 'development' && { stack: errorStack }),
      },
      { status: 500 }
    )
  }
}
