/**
 * 向量存储类型定义
 */

export interface QADocument {
  id: string
  provider: string
  category: string
  question_variants: string[]
  answer: string
  scope: 'allowed' | 'blocked'
  next_step: string
  do_not_say: string[]
  source_url?: string
  updated_at: string
}

export interface VectorDocument {
  id: string
  text: string // 用于检索的文本（问题变体 + 答案）
  embedding?: number[] // 向量嵌入（可选，如果使用 embedding）
  metadata: QADocument
}

export interface SearchResult {
  doc: QADocument
  score: number // 相似度得分 0-1
  matchedVariant?: string // 匹配到的问题变体
}

export interface VectorStore {
  upsert(docs: VectorDocument[]): Promise<void>
  query(text: string, topK: number, filters?: { provider?: string; category?: string }): Promise<SearchResult[]>
  getById(id: string): Promise<QADocument | null>
  getAll(): Promise<QADocument[]>
}
