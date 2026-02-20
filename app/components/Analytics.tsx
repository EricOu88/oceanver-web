'use client'

import { useEffect } from 'react'

/**
 * 延迟加载 Google Analytics
 * - 不在页面初始 load 阶段执行
 * - 不阻塞主线程 hydration
 * - 仅在用户首次滚动或页面加载完成后 ≥ 5 秒后初始化
 */
export default function Analytics() {
  useEffect(() => {
    let loaded = false
    const GA_ID = 'G-HM4T9F0SG2'

    const loadAnalytics = () => {
      if (loaded) return
      loaded = true

      // 加载 GA4 脚本
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      script.async = true
      document.body.appendChild(script)

      // 初始化 dataLayer 和 gtag
      const w = window as any
      w.dataLayer = w.dataLayer || []
      function gtag(...args: any[]) {
        w.dataLayer.push(args)
      }
      w.gtag = gtag

      gtag('js', new Date())
      gtag('config', GA_ID)
    }

    // 用户首次滚动时加载
    window.addEventListener('scroll', loadAnalytics, { once: true, passive: true })

    // 页面加载完成后 5 秒加载（作为兜底）
    const timer = setTimeout(loadAnalytics, 5000)

    return () => {
      window.removeEventListener('scroll', loadAnalytics)
      clearTimeout(timer)
    }
  }, [])

  return null
}
