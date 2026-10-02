'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef, useCallback } from 'react'
import SmartBillAnalysis from './SmartBillAnalysis'
import {
  Upload,
  MessageCircle,
  Phone,
  ChevronDown,
} from 'lucide-react'

const WECHAT_ID = '美国鸿达电讯'

/* =========================
   FAQPage Schema
========================= */
function FAQPageSchema() {
  const faqs = [
    {
      '@type': 'Question',
      name: '我是老用户，还能拿到优惠吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是否有老用户优惠取决于运营商、套餐、地址和账户资格，需要结合当前账户确认。',
      },
    },
    {
      '@type': 'Question',
      name: '不想换号、不想停网，可以降价吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '很多情况可以，尤其是宽带与家庭手机计划。',
      },
    },
    {
      '@type': 'Question',
      name: '账单检查真的免费吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的，账单分析本身不收费。',
      },
    },
    {
      '@type': 'Question',
      name: '需要提供账号密码吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不需要。只需账单截图即可。',
      },
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/* =========================
   微信弹窗
========================= */
const WeChatModal = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl p-6 w-full max-w-sm text-center mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-2">微信中文顾问</h3>
        <p className="text-sm text-slate-500 mb-4">扫码添加微信，发送账单截图</p>

        <div>
          <Image
            src="/wechat-qr.jpg"
            alt="微信二维码"
            width={200}
            height={200}
            className="mx-auto mb-2 rounded-xl"
          />
          <p className="text-center text-sm text-slate-500">长按识别或扫码添加</p>
        </div>

        <div className="mt-4 flex items-center justify-between bg-slate-100 rounded-xl px-3 py-2">
          <span className="font-mono font-bold">{WECHAT_ID}</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(WECHAT_ID)
            }}
            className="text-blue-600 font-bold text-sm"
          >
            复制
          </button>
        </div>

        <button onClick={onClose} className="mt-4 text-sm text-slate-500">
          关闭
        </button>
      </div>
    </div>
  )
}

export default function BillOptimizationClient() {
  const [wechatOpen, setWechatOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 处理文件选择
  const handleFileSelect = useCallback((selectedFile: File) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf']
    if (!validTypes.includes(selectedFile.type)) {
      alert('请上传 JPG、PNG、WebP 图片或 PDF 文件')
      return
    }

    const maxSize = 10 * 1024 * 1024
    if (selectedFile.size > maxSize) {
      alert('文件大小不能超过 10MB')
      return
    }

    setFile(selectedFile)

    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }

    setShowAnalysis(true)
    setTimeout(() => {
      document.getElementById('bill-analysis-section')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const droppedFile = e.dataTransfer.files[0]
      if (droppedFile) {
        handleFileSelect(droppedFile)
      }
    },
    [handleFileSelect]
  )

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0]
      if (selectedFile) {
        handleFileSelect(selectedFile)
      }
    },
    [handleFileSelect]
  )

  const faqs = [
    {
      q: '我是老用户，还能拿到优惠吗？',
      a: '是否有老用户优惠取决于运营商、套餐、地址和账户资格，需要结合当前账户确认。',
    },
    {
      q: '不想换号、不想停网，可以降价吗？',
      a: '很多情况可以，尤其是宽带与家庭手机计划。',
    },
    {
      q: '账单检查真的免费吗？',
      a: '是的，账单分析本身不收费。',
    },
    {
      q: '需要提供账号密码吗？',
      a: '不需要。只需账单截图即可。',
    },
  ]

  return (
    <>
      <FAQPageSchema />
      {wechatOpen && <WeChatModal open={wechatOpen} onClose={() => setWechatOpen(false)} />}

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* ================= 返回首页 ================= */}
        <div className="max-w-5xl mx-auto px-5 pt-6 pb-2">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            ← 返回首页
          </Link>
        </div>

        {/* ================= HERO ================= */}
        <section className="pt-4 md:pt-8 pb-8 md:pb-12">
          <div className="max-w-5xl mx-auto px-5">
            <div className="text-center space-y-6">
              {/* H1 主标题 */}
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
                账单突然涨价了？我们帮你把月费降下来
              </h1>

              {/* 副标题 */}
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
                宽带 / 手机月费变贵，不一定要换运营商
                <br />
                我们帮你检查费用变化，并根据账户情况提供调整建议（免费检查）
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => setWechatOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg rounded-2xl shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.99]"
                >
                  👉 微信咨询账单降价
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 行动触发语 ================= */}
        <section className="py-6 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <p className="text-center text-lg md:text-xl text-slate-800 font-semibold leading-relaxed">
              只要把账单发来，我们会直接告诉你：
              <br />
              费用为什么变化、有哪些可选方案、是否需要调整。
            </p>
          </div>
        </section>

        {/* ================= 三卡模块 ================= */}
        <section className="py-8 md:py-12 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            {/* 隐藏的文件输入 */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp,application/pdf"
              onChange={handleFileInputChange}
              className="hidden"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 卡片1：上传账单截图 */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
                <div className="flex items-center gap-2 font-black text-slate-900 mb-3">
                  <Upload className="h-5 w-5 text-emerald-600" />
                  <span>📸 上传账单截图（推荐）</span>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  我们只看关键项目，尽量不占你时间；不保存隐私信息。
                </p>
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer"
                >
                  <div className="rounded-xl border border-slate-200 bg-white p-3 flex justify-center">
                    <Image
                      src="/wechat-qr.jpg"
                      alt="微信二维码"
                      width={140}
                      height={140}
                      className="rounded-xl"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs text-slate-500">
                    微信里直接发：账单截图 + “想判断值不值”
                  </p>
                </div>
              </div>

              {/* 卡片2：电话或短信说明情况 */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
                <div className="flex items-center gap-2 font-black text-slate-900 mb-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>📞 电话或短信说明情况</span>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  适合不方便截图的用户：你描述关键数字，我们也能快速判断方向。
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:15108496191"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white font-black py-3 shadow-lg shadow-blue-600/20 active:scale-[0.99] transition"
                  >
                    <Phone className="h-5 w-5" />
                    电话咨询
                  </a>
                  <a
                    href="sms:15108496191"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white font-black py-3 shadow-lg shadow-emerald-600/20 active:scale-[0.99] transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                    发短信
                  </a>
                  <p className="text-xs text-slate-500 text-center">
                    发送短信建议内容：“账单从 $__ 涨到 $__，想判断值不值”
                  </p>
                </div>
              </div>

              {/* 卡片3：微信中文沟通 */}
              <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-5">
                <div className="flex items-center gap-2 font-black text-slate-900 mb-3">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  <span>💬 微信中文沟通</span>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  全程中文，不需要反复解释。我们会直接告诉你结论：值 / 不值 / 哪一项在坑你。
                </p>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 leading-relaxed mb-4">
                  <div className="font-black text-slate-900 mb-2">你发我这 3 个信息就够：</div>
                  <ul className="space-y-1">
                    <li>1) 运营商（Xfinity / AT&T / Spectrum…）</li>
                    <li>2) 现在月费大概多少（$__）</li>
                    <li>3) 最近一次涨价发生在什么时候</li>
                  </ul>
                </div>
                <button
                  onClick={() => setWechatOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.99]"
                >
                  <MessageCircle className="h-5 w-5" />
                  打开微信二维码
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  （你也可以直接发账单截图：最省事）
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 智能账单分析组件 ================= */}
        {showAnalysis && file && (
          <section id="bill-analysis-section" className="py-8 md:py-12 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-5xl mx-auto px-5">
              <SmartBillAnalysis initialFile={file} initialPreview={preview} />
            </div>
          </section>
        )}

        {/* ================= 为什么你的账单会涨价？ ================= */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              为什么你的账单会涨价？
            </h2>
            <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto">
              很多用户的账单上涨，并不是用多了，而是因为以下原因：
            </p>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">新用户优惠到期，价格自动恢复原价</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">老用户没有被系统分配到最新优惠</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">套餐被悄悄调整，出现额外费用</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">合约到期但未重新谈条件</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">不知道可以和运营商争取保留优惠（Retention）</p>
              </div>
            </div>

            <p className="text-center text-slate-800 font-semibold mt-8 text-lg">
              账单是否继续变化，取决于优惠期限、套餐、设备和附加服务等具体情况。
            </p>
          </div>
        </section>

        {/* ================= 账单涨价后，你其实还有这些选择 ================= */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              账单涨价后，你其实还有这些选择
            </h2>
            <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto">
              很多人以为只有“忍着”或“换运营商”，其实并不是。
            </p>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-emerald-600 font-black text-lg">•</span>
                <p className="text-slate-700">争取老用户续约优惠</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-emerald-600 font-black text-lg">•</span>
                <p className="text-slate-700">调整更适合的套餐结构</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-emerald-600 font-black text-lg">•</span>
                <p className="text-slate-700">去除不必要的附加费用</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-emerald-600 font-black text-lg">•</span>
                <p className="text-slate-700">重新谈判月费与合约条件</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-emerald-600 font-black text-lg">•</span>
                <p className="text-slate-700">检查不换号、不停网时是否有可调整的方案</p>
              </div>
            </div>

            <p className="text-center text-slate-800 font-semibold mt-8 text-lg">
              是否需要换运营商，要在账单分析后才能判断。
            </p>
          </div>
        </section>

        {/* ================= 我们是如何帮你降低账单的？ ================= */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              我们是如何帮你检查账单的？
            </h2>
            <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto">
              流程简单透明：
            </p>

            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <span className="text-2xl font-black text-blue-600">1️⃣</span>
                <p className="text-slate-700 text-lg">你提交当前账单（拍照或截图）</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <span className="text-2xl font-black text-blue-600">2️⃣</span>
                <p className="text-slate-700 text-lg">我们分析涨价原因与可操作空间</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <span className="text-2xl font-black text-blue-600">3️⃣</span>
                <p className="text-slate-700 text-lg">根据具体账户提供套餐调整建议</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <span className="text-2xl font-black text-blue-600">4️⃣</span>
                <p className="text-slate-700 text-lg">如需操作，我们可协助沟通或指导步骤</p>
              </div>
            </div>

            <p className="text-center text-slate-800 font-semibold mt-8 text-lg">
              整个过程支持中文说明，不需要你自己和英文客服反复沟通。
            </p>
          </div>
        </section>

        {/* ================= 真实账单优化案例 ================= */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              真实账单优化案例
            </h2>
            <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto">
              以下为真实客户情况（金额为示例结构）：
            </p>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-slate-700">
                  <span className="font-black text-slate-900">宽带账单：</span>检查优惠到期、设备费和附加服务变化
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-slate-700">
                  <span className="font-black text-slate-900">套餐比较：</span>结合地址覆盖和实际用量判断是否需要调整
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <p className="text-slate-700">
                  <span className="font-black text-slate-900">手机家庭计划：</span>检查线路数量、设备分期和附加服务
                </p>
              </div>
            </div>

            <p className="text-center text-slate-800 font-semibold mt-8 text-lg">
              是否能降、能降多少，取决于你的账单结构，但不看账单无法判断。
            </p>
          </div>
        </section>

        {/* ================= 常见问题（FAQ） ================= */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">
              常见问题（FAQ）
            </h2>

            <div className="space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left rounded-2xl bg-slate-50 border border-slate-200 shadow-sm p-5 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-black text-slate-900 text-lg">
                        <span className="text-blue-600">Q：</span> {item.q}
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {isOpen && (
                      <div className="mt-4 text-slate-700 leading-relaxed">
                        <span className="text-emerald-600 font-semibold">A：</span> {item.a}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= 账单涨价深度解析 ================= */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">
              账单涨价深度解析
            </h2>

            {/* 问题11：美国手机账单“连年上涨”的底层逻辑 */}
            <div className="mb-12 bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                美国手机账单“连年上涨”的底层逻辑：Promotion 结束后如何重新判断方案？
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>结论：</strong>美国手机账单连年上涨的主要原因是促销期（Promotion）结束后价格自动恢复原价，运营商通常不会主动提醒用户。用户可以通过续约、换套餐、或转网来重新锁定低价。
                </p>
                <p>
                  <strong>原因解释：</strong>部分套餐包含有期限的优惠。优惠结束后，账单可能恢复为当时适用的标准价格；具体期限和费用变化以账单及运营商条款为准。
                </p>
                <p>
                  <strong>实操建议：</strong>留意账单中的优惠截止日期，并向运营商确认续约、换套餐或转网条件。可选价格和资格以地址、账户及运营商审核为准。
                </p>
                <p>
                  <strong>适用人群：</strong>使用手机套餐超过 12 个月的用户，发现账单逐年上涨的用户。
                </p>
              </div>
            </div>

            {/* 问题12：如何看懂美国宽带账单 */}
            <div className="mb-12 bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                如何看懂美国宽带账单？解析隐藏的建设费、租机费及税费陷阱
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>结论：</strong>美国宽带账单通常包含基础套餐费、设备租用费、税费、以及各种隐藏费用。了解这些费用结构有助于识别不必要的费用，降低总成本。
                </p>
                <p>
                  <strong>原因解释：</strong>宽带账单通常包含以下费用：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>基础套餐费：</strong>运营商宣传的价格，通常是促销价</li>
                  <li><strong>设备租用费：</strong>路由器、调制解调器租用费，通常 $10-$15/月</li>
                  <li><strong>建设费：</strong>新安装或移机费用，可能一次性或分期收取</li>
                  <li><strong>税费：</strong>联邦税、州税、地方税等，通常 5%-15%</li>
                  <li><strong>其他费用：</strong>如“网络增强费”“技术支持费”等账单项目</li>
                </ul>
                <p>
                  <strong>实操建议：</strong>仔细阅读账单明细，识别每项费用。如果发现不必要的费用（如不需要的设备租用费），联系运营商取消。考虑自购路由器，避免设备租用费。
                </p>
                <p>
                  <strong>适用人群：</strong>希望降低宽带总成本的用户，发现账单包含不明费用的用户。
                </p>
              </div>
            </div>

            {/* 问题5：从 Xfinity 转网到 AT&T Fiber */}
            <div className="mb-12 bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                在加州从 Xfinity 转网到 AT&T Fiber，如何保留原手机号并确保宽带无缝衔接？
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>结论：</strong>从 Xfinity 转网到 AT&T Fiber 时，需要提前准备账户信息、协调安装时间、确保转网过程中服务不中断。如果同时有手机号需要转网，需要分别处理宽带和手机转网。
                </p>
                <p>
                  <strong>原因解释：</strong>转网过程涉及两个运营商之间的协调，需要确保：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>新运营商（AT&T）可以安装服务</li>
                  <li>旧运营商（Xfinity）账户状态正常，可以关闭</li>
                  <li>转网时间协调，避免服务中断</li>
                  <li>手机号转网需要单独处理，与宽带转网分开</li>
                </ul>
                <p>
                  <strong>实操建议：</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>提前 2-4 周联系 AT&T 确认安装时间</li>
                  <li>准备 Xfinity 账户号码、PIN 码、账单</li>
                  <li>协调安装时间，确保新服务开通后再关闭旧服务</li>
                  <li>如果同时转手机号，需要提供手机账户信息</li>
                  <li>转网完成后，确认旧账户已关闭，避免继续收费</li>
                </ul>
                <p>
                  <strong>适用人群：</strong>准备从 Xfinity 转网到 AT&T Fiber 的用户，需要同时转手机号的用户。
                </p>
              </div>
            </div>

            {/* 问题20：面对账单暴涨的议价技巧 */}
            <div className="mb-12 bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                面对账单上涨，除了提出“销户”（Cancellation），还可以怎样沟通？
              </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>结论：</strong>面对账单暴涨，除了威胁销户，还可以通过了解促销信息、强调长期客户价值、要求保留部门（Retention Department）、对比竞争对手价格等方式进行议价。关键是准备充分、态度友好、有理有据。
                </p>
                <p>
                  <strong>原因解释：</strong>威胁销户不一定有效，因为：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>部分运营商可能不会因为威胁销户而提供优惠</li>
                  <li>更好的方法是强调长期客户价值、了解促销信息</li>
                  <li>要求保留部门，通常有更多权限提供优惠</li>
                </ul>
                <p>
                  <strong>实操建议：</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>了解促销信息：</strong>在议价前，了解运营商当前的促销活动，查看竞争对手的价格</li>
                  <li><strong>强调长期客户价值：</strong>强调使用年限、按时付费记录、多线价值</li>
                  <li><strong>要求保留部门：</strong>直接要求转接保留部门（Retention Department），有更多权限提供优惠</li>
                  <li><strong>对比竞争对手价格：</strong>准备竞争对手的价格信息，说明“其他运营商提供了可比较的套餐”</li>
                  <li><strong>时机重要：</strong>在优惠或合约到期前确认后续价格和可选方案</li>
                </ul>
                <p>
                  <strong>适用人群：</strong>账单突然上涨的用户，长期客户希望获得老用户优惠的用户。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 适合哪些人使用这项服务？ ================= */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-5">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              适合哪些人使用这项服务？
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">最近 1–3 个月账单突然上涨</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">已使用同一运营商一年以上</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">不确定自己是否还在优惠期</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">不想自己和英文客服反复沟通</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-blue-600 font-black text-lg">•</span>
                <p className="text-slate-700">希望有人协助判断是否需要换套餐或运营商</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER LINK ================= */}
        <div className="py-8 text-center border-t border-slate-200 bg-white">
          <Link href="/" className="text-sm text-blue-600 hover:underline font-semibold">
            查看美国鸿达电讯完整服务 →
          </Link>
        </div>

        {/* Mobile padding for bottom bars */}
        <div className="h-16 md:h-0" />
      </main>
    </>
  )
}
