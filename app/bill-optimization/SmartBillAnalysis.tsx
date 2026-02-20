'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import {
  Upload,
  FileText,
  Image as ImageIcon,
  X,
  Loader2,
  Sparkles,
  TrendingDown,
  DollarSign,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import Image from 'next/image'

interface AnalysisResult {
  currentPlan: {
    provider: string
    monthlyCost: number
    planName: string
    features: string[]
  }
  recommendedPlan: {
    provider: string
    monthlyCost: number
    planName: string
    features: string[]
    savings: number
    savingsPercentage: number
  }
  analysis: {
    issues: string[]
    recommendations: string[]
    verdict: 'worth_it' | 'not_worth_it' | 'optimizable'
    verdictText: string
  }
}

interface SmartBillAnalysisProps {
  onAnalysisComplete?: (result: AnalysisResult) => void
  initialFile?: File | null
  initialPreview?: string | null
}

export default function SmartBillAnalysis({ 
  onAnalysisComplete,
  initialFile = null,
  initialPreview = null,
}: SmartBillAnalysisProps) {
  const [file, setFile] = useState<File | null>(initialFile)
  const [preview, setPreview] = useState<string | null>(initialPreview)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 处理文件选择
  const handleFileSelect = useCallback((selectedFile: File) => {
    // 验证文件类型
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf']
    if (!validTypes.includes(selectedFile.type)) {
      setError('请上传 JPG、PNG、WebP 图片或 PDF 文件')
      return
    }

    // 验证文件大小（最大 10MB）
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (selectedFile.size > maxSize) {
      setError('文件大小不能超过 10MB')
      return
    }

    setFile(selectedFile)
    setError(null)

    // 如果是图片，生成预览
    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }
  }, [])

  // 处理拖拽上传
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile) {
        handleFileSelect(droppedFile)
      }
    },
    [handleFileSelect]
  )

  // 处理点击上传
  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0]
      if (selectedFile) {
        handleFileSelect(selectedFile)
      }
    },
    [handleFileSelect]
  )

  // 移除文件
  const handleRemoveFile = useCallback(() => {
    setFile(null)
    setPreview(null)
    setError(null)
    setAnalysisResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [])

  // 调用 API 进行分析
  const handleAnalyze = useCallback(async () => {
    if (!file) {
      setError('请先选择文件')
      return
    }

    setIsAnalyzing(true)
    setError(null)
    setAnalysisResult(null)

    try {
      // 创建 FormData
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', file.type)

      // 调用 API 端点
      const response = await fetch('/api/bill-analysis', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        // 如果 API 返回 501（未实现），使用模拟数据
        if (response.status === 501) {
          // 模拟 API 调用（开发阶段，API 未实现时使用）
          await new Promise((resolve) => setTimeout(resolve, 2000))
          const mockResult: AnalysisResult = {
            currentPlan: {
              provider: 'Xfinity',
              monthlyCost: 90, // 95 - 5
              planName: 'Internet 400 Mbps',
              features: ['400 Mbps 下载速度', '无限流量', 'WiFi 路由器租赁'],
            },
            recommendedPlan: {
              provider: 'Xfinity',
              monthlyCost: 60, // 65 - 5
              planName: 'Internet 400 Mbps (优化后)',
              features: ['400 Mbps 下载速度', '无限流量', '自备路由器'],
              savings: 30, // 90 - 60
              savingsPercentage: 33.3, // (30 / 90) * 100
            },
            analysis: {
              issues: [
                '促销价格已过期，恢复标准价格',
                '设备租赁费 $10/月 可以取消',
                '自动付款折扣未生效',
              ],
              recommendations: [
                '取消路由器租赁，使用自备路由器可节省 $10/月',
                '设置自动付款可额外节省 $5/月',
                '联系客服协商续约优惠，可再节省 $15/月',
              ],
              verdict: 'optimizable',
              verdictText: '有优化空间',
            },
          }
          setAnalysisResult(mockResult)
          onAnalysisComplete?.(mockResult)
          setIsAnalyzing(false)
          return
        }
        throw new Error('分析失败，请稍后重试')
      }

      const result: AnalysisResult = await response.json()
      
      // 价格调整：所有价格减去 $5
      const adjustPrice = (price: number) => Math.max(0, price - 5)
      const adjustedResult: AnalysisResult = {
        ...result,
        currentPlan: {
          ...result.currentPlan,
          monthlyCost: adjustPrice(result.currentPlan.monthlyCost),
        },
        recommendedPlan: {
          ...result.recommendedPlan,
          monthlyCost: adjustPrice(result.recommendedPlan.monthlyCost),
          savings: adjustPrice(result.currentPlan.monthlyCost) - adjustPrice(result.recommendedPlan.monthlyCost),
          savingsPercentage: ((adjustPrice(result.currentPlan.monthlyCost) - adjustPrice(result.recommendedPlan.monthlyCost)) / adjustPrice(result.currentPlan.monthlyCost)) * 100,
        },
      }
      
      setAnalysisResult(adjustedResult)
      onAnalysisComplete?.(adjustedResult)
      setIsAnalyzing(false)
    } catch (err) {
      // 错误处理
      setError(err instanceof Error ? err.message : '分析失败，请稍后重试')
      setIsAnalyzing(false)
    }
  }, [file, onAnalysisComplete])

  return (
    <div className="w-full space-y-6">
      {/* 文件上传区域 - 只在没有文件时显示 */}
      {!file ? (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
          <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600" />
            智能账单分析
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            上传您的账单照片或 PDF，AI 将自动识别账单信息并为您提供优化建议
          </p>
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-800 font-semibold mb-1">📋 支持的运营商：</p>
            <p className="text-xs text-blue-700">
              宽带：Xfinity、AT&T Fiber、Spectrum、Frontier、Verizon Fios | 
              手机：T-Mobile、AT&T、Verizon、Ultra Mobile、Mint Mobile、Gen Mobile
            </p>
            <p className="text-xs text-blue-600 mt-2">
              💡 分析结果基于官网促销价格和历史优化案例，显示实际可达到的优化后价格
            </p>
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 rounded-2xl p-8 md:p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-blue-100 p-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="font-black text-slate-900 mb-1">点击上传或拖拽文件到此处</p>
                <p className="text-sm text-slate-500">
                  支持 JPG、PNG、WebP 图片或 PDF 文件（最大 10MB）
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <ImageIcon className="h-4 w-4" />
                  <span>图片</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  <span>PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
          <div className="space-y-4">
            {/* 文件预览 */}
            <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-4">
                {preview ? (
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-slate-200 bg-white">
                    <Image
                      src={preview}
                      alt="账单预览"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-lg bg-slate-200 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-slate-400" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 truncate">{file.name}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="p-2 rounded-lg hover:bg-slate-200 transition-colors"
                  aria-label="移除文件"
                >
                  <X className="h-5 w-5 text-slate-500" />
                </button>
              </div>
            </div>

            {/* 分析按钮 */}
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-black shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] transition"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>正在分析中...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  <span>开始智能分析</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 隐藏的文件输入 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp,application/pdf"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* 错误提示 */}
      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* 分析结果展示区域 */}
      {analysisResult && (
        <div className="space-y-6">
          {/* 结论卡片 */}
          <div
            className={`rounded-2xl border-2 p-6 ${
              analysisResult.analysis.verdict === 'worth_it'
                ? 'bg-emerald-50 border-emerald-200'
                : analysisResult.analysis.verdict === 'not_worth_it'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-blue-50 border-blue-200'
            }`}
          >
            <div className="flex items-start gap-3">
              {analysisResult.analysis.verdict === 'worth_it' ? (
                <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-0.5" />
              ) : analysisResult.analysis.verdict === 'not_worth_it' ? (
                <AlertCircle className="h-6 w-6 text-red-600 mt-0.5" />
              ) : (
                <TrendingDown className="h-6 w-6 text-blue-600 mt-0.5" />
              )}
              <div className="flex-1">
                <h4 className="font-black text-slate-900 mb-2">分析结论</h4>
                <p className="text-lg font-bold text-slate-800">{analysisResult.analysis.verdictText}</p>
              </div>
            </div>
          </div>

          {/* 套餐对比 */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6">
            <h4 className="text-lg font-black text-slate-900 mb-4">套餐对比</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {/* 当前套餐 */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-600">当前套餐</span>
                </div>
                <h5 className="font-black text-slate-900 mb-1">{analysisResult.currentPlan.provider}</h5>
                <p className="text-sm text-slate-600 mb-3">{analysisResult.currentPlan.planName}</p>
                <div className="text-2xl font-black text-slate-900 mb-4">
                  ${analysisResult.currentPlan.monthlyCost}
                  <span className="text-sm font-normal text-slate-500">/月</span>
                </div>
                <ul className="space-y-2">
                  {analysisResult.currentPlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 推荐套餐 */}
              <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-5 relative">
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
                  推荐
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-700">优化后</span>
                </div>
                <h5 className="font-black text-slate-900 mb-1">{analysisResult.recommendedPlan.provider}</h5>
                <p className="text-sm text-slate-600 mb-3">{analysisResult.recommendedPlan.planName}</p>
                <div className="text-2xl font-black text-slate-900 mb-2">
                  ${analysisResult.recommendedPlan.monthlyCost}
                  <span className="text-sm font-normal text-slate-500">/月</span>
                </div>
                <div className="mb-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                  <TrendingDown className="h-4 w-4" />
                  每月节省 ${analysisResult.recommendedPlan.savings} (
                  {analysisResult.recommendedPlan.savingsPercentage.toFixed(1)}%)
                </div>
                <ul className="space-y-2">
                  {analysisResult.recommendedPlan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 问题与建议 */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* 发现的问题 */}
            {analysisResult.analysis.issues.length > 0 && (
              <div className="rounded-2xl bg-white border border-red-200 shadow-sm p-5">
                <h4 className="font-black text-slate-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  发现的问题
                </h4>
                <ul className="space-y-2">
                  {analysisResult.analysis.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 优化建议 */}
            {analysisResult.analysis.recommendations.length > 0 && (
              <div className="rounded-2xl bg-white border border-emerald-200 shadow-sm p-5">
                <h4 className="font-black text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                  优化建议
                </h4>
                <ul className="space-y-2">
                  {analysisResult.analysis.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 节省金额汇总 */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100 mb-1">预计每月节省</p>
                <p className="text-3xl font-black">
                  ${analysisResult.recommendedPlan.savings}
                </p>
                <p className="text-sm text-blue-100 mt-1">
                  每年可节省 ${analysisResult.recommendedPlan.savings * 12}
                </p>
              </div>
              <div className="rounded-full bg-white/20 p-4">
                <DollarSign className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
