'use client'

import { useState } from 'react'
import ContactModal from '@/app/components/ContactModal'
import { MessageCircle, Phone } from 'lucide-react'

export default function BlogPostClient() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="bg-slate-50 border-2 border-dashed border-blue-600 rounded-2xl p-6 md:p-8 mt-12 mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
          需要专业建议？
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          美国鸿达电讯为全美中文用户整理手机套餐、家庭宽带和账单问题信息。如需核对账户或地址条件，可通过电话或微信联系中文客服。
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:15108496191"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <Phone size={18} />
            立即拨打电话
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <MessageCircle size={18} />
            微信咨询
          </button>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
