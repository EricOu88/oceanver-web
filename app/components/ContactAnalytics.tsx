'use client'

import { useEffect } from 'react'

type ContactMethod = 'phone' | 'wechat' | 'wechat_copy'
type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void }

export function trackContact(method: ContactMethod, location: string, label: string): boolean {
  if (typeof window === 'undefined') return false
  const gtag = (window as AnalyticsWindow).gtag
  if (typeof gtag !== 'function') return false

  const payload = {
    cta_type: method,
    page: window.location.pathname,
    location,
    label,
    site_domain: window.location.hostname.replace(/^www\./, ''),
    page_path: window.location.pathname,
    contact_method: method,
    link_location: location,
    button_text: label,
    transport_type: 'beacon',
  }
  try {
    gtag('event', 'cta_click', payload)
    gtag('event', 'business_contact', payload)
    return true
  } catch {
    return false
  }
}

export default function ContactAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return
      const control = event.target.closest<HTMLElement>('a, button')
      if (!control) return
      const href = control.getAttribute('href') || ''
      const method = href.startsWith('tel:')
        ? 'phone'
        : control.dataset.contactMethod === 'wechat' || /^#wechat(?:-qr|-contact)?$/.test(href)
          ? 'wechat'
          : null
      if (!method) return
      const region = control.closest<HTMLElement>('[data-contact-location], header, footer, section, [class*="fixed"]')
      const location = control.dataset.contactLocation || region?.dataset.contactLocation ||
        (region?.classList.contains('fixed') ? 'sticky' : region?.tagName.toLowerCase()) || 'body'
      const label = (control.getAttribute('aria-label') || control.textContent || method).trim().slice(0, 100)
      trackContact(method, location, label)
    }
    // Capture also sees modal controls whose React handlers stop propagation.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])
  return null
}
