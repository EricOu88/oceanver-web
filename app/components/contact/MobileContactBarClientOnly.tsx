'use client'

import dynamic from 'next/dynamic'

const MobileContactBar = dynamic(() => import('./MobileContactBar'), {
  ssr: false,
})

export default function MobileContactBarClientOnly() {
  return <MobileContactBar />
}
