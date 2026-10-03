import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import type { QADocument } from '../../ai/index/types'

async function readQAFiles(dir: string): Promise<QADocument[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const docs: QADocument[] = []

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const filePath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      docs.push(...await readQAFiles(filePath))
    } else if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== 'schema.json') {
      docs.push(...JSON.parse(await readFile(filePath, 'utf8')) as QADocument[])
    }
  }

  return docs
}

export async function getPublicCases(): Promise<QADocument[]> {
  const qaDir = path.join(process.cwd(), 'content', 'qa')
  const docs = await readQAFiles(qaDir)

  return docs.filter(doc => doc.public_case === true && doc.review_status === 'approved')
}
