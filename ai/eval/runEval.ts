/**
 * 评测脚本
 * 
 * 批量运行测试用例，输出评测报告
 */

import * as fs from 'fs/promises'
import * as path from 'path'
import { composeAnswer } from '../answer/composeAnswer'
import { RetrievalDecision } from '../retriever/retrieve'

interface TestCase {
  question: string
  expectedDecision: string
  expectedTransferToHuman: boolean
  category: string
}

interface EvalResult {
  question: string
  expectedDecision: string
  actualDecision: string
  expectedTransferToHuman: boolean
  actualTransferToHuman: boolean
  passed: boolean
  answer: string
}

async function loadTestCases(): Promise<TestCase[]> {
  const testCasesPath = path.join(__dirname, 'testcases.json')
  const content = await fs.readFile(testCasesPath, 'utf-8')
  return JSON.parse(content) as TestCase[]
}

async function runEval(): Promise<void> {
  console.log('开始运行评测...\n')
  
  const testCases = await loadTestCases()
  console.log(`加载了 ${testCases.length} 个测试用例\n`)
  
  const results: EvalResult[] = []
  
  for (const testCase of testCases) {
    const answerResult = await composeAnswer(testCase.question)
    
    const passed = 
      answerResult.decision === testCase.expectedDecision &&
      answerResult.transferToHuman === testCase.expectedTransferToHuman
    
    results.push({
      question: testCase.question,
      expectedDecision: testCase.expectedDecision,
      actualDecision: answerResult.decision,
      expectedTransferToHuman: testCase.expectedTransferToHuman,
      actualTransferToHuman: answerResult.transferToHuman,
      passed,
      answer: answerResult.answer,
    })
    
    const status = passed ? '✅' : '❌'
    console.log(`${status} ${testCase.question}`)
    console.log(`   期望: ${testCase.expectedDecision}, 实际: ${answerResult.decision}`)
    console.log(`   转人工: ${testCase.expectedTransferToHuman}, 实际: ${answerResult.transferToHuman}`)
    console.log()
  }
  
  // 计算统计
  const passedCount = results.filter(r => r.passed).length
  const totalCount = results.length
  const hitRate = results.filter(r => r.actualDecision === RetrievalDecision.HIT).length / totalCount
  const transferRate = results.filter(r => r.actualTransferToHuman).length / totalCount
  
  // 生成报告
  const report = `# AI 客服评测报告

生成时间: ${new Date().toISOString()}

## 总体统计

- 总测试用例数: ${totalCount}
- 通过用例数: ${passedCount}
- 通过率: ${(passedCount / totalCount * 100).toFixed(1)}%
- 命中率: ${(hitRate * 100).toFixed(1)}%
- 转人工率: ${(transferRate * 100).toFixed(1)}%

## 详细结果

${results.map((r, i) => `
### 用例 ${i + 1}: ${r.question}

- **状态**: ${r.passed ? '✅ 通过' : '❌ 失败'}
- **期望决策**: ${r.expectedDecision}
- **实际决策**: ${r.actualDecision}
- **期望转人工**: ${r.expectedTransferToHuman}
- **实际转人工**: ${r.actualTransferToHuman}
- **回答**: ${r.answer.substring(0, 100)}${r.answer.length > 100 ? '...' : ''}
`).join('\n')}

## 失败用例分析

${results.filter(r => !r.passed).map(r => `
- **问题**: ${r.question}
  - 期望: ${r.expectedDecision}, 实际: ${r.actualDecision}
  - 期望转人工: ${r.expectedTransferToHuman}, 实际: ${r.actualTransferToHuman}
`).join('\n') || '无失败用例'}
`
  
  const reportPath = path.join(__dirname, 'report.md')
  await fs.writeFile(reportPath, report, 'utf-8')
  console.log(`\n评测报告已生成: ${reportPath}`)
  console.log(`\n通过率: ${(passedCount / totalCount * 100).toFixed(1)}%`)
}

// 如果直接运行此脚本（Node.js 环境）
if (typeof require !== 'undefined' && require.main === module) {
  runEval().catch(console.error)
}

export { runEval }
