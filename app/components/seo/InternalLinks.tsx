/**
 * 内链增强组件
 * 在页面底部自动添加相关内链（不影响视觉）
 */

import Link from 'next/link'
import { getInternalLinks } from '@/lib/seo-utils'

interface InternalLinksProps {
  pageType: 'internet' | 'cellphone' | 'blog' | 'faq' | 'provider'
  providerFAQUrl?: string // 运营商 FAQ URL（仅 provider 类型需要）
  faqCategory?: 'internet' | 'cellphone' // FAQ 类别（仅当 pageType 为 'faq' 时使用）
  className?: string
}

export default function InternalLinks({ 
  pageType, 
  providerFAQUrl,
  faqCategory,
  className = '' 
}: InternalLinksProps) {
  const links = getInternalLinks(pageType, faqCategory)
  
  // 如果是 provider 类型且有 FAQ URL，替换占位符
  const processedLinks = links.map(link => {
    if (link.href === '' && providerFAQUrl) {
      return { ...link, href: providerFAQUrl }
    }
    return link
  }).filter(link => link.href !== '') // 移除空链接

  // 限制内链数量（3-6 条）
  const limitedLinks = processedLinks.slice(0, 6)

  if (limitedLinks.length === 0) {
    return null
  }

  return (
    <nav 
      className={`mt-8 pt-6 border-t border-slate-200 ${className}`}
      aria-label="相关页面"
    >
      <div className="flex flex-wrap gap-4 text-sm">
        {limitedLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
            title={link.description}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  )
}
