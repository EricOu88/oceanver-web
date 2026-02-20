'use client'

import { useState } from 'react'
import Link from 'next/link'
import ContactModal from '@/app/components/ContactModal'
import { MessageCircle, ArrowRight, Phone } from 'lucide-react'

export default function BlogPostClient() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="bg-slate-50 border-2 border-dashed border-blue-600 rounded-2xl p-6 md:p-8 mt-12 mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
          需要专业建议？
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          鸿达电讯位于旧金山湾区 Fremont，提供全中文服务。如果您在办理电话卡或家庭网络上有任何疑问，欢迎随时咨询。
        </p>
        <p className="text-slate-700 mb-4">
          <strong>地址：</strong> 46292 Warm Springs Blvd #606, Fremont, CA 94539
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
