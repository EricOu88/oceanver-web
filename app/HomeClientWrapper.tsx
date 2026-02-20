'use client'

import dynamic from 'next/dynamic'

// 动态导入 HomeClient，禁用 SSR 以避免 hydration mismatch
// 必须在 Client Component 中使用 dynamic 的 ssr: false
const HomeClient = dynamic(() => import('./HomeClient'), { 
  ssr: false 
})

export default function HomeClientWrapper() {
  return <HomeClient />
}
