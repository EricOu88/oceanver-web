export default function FAQPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '我这个地址可以安装宽带或办理手机套餐吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。我们为湾区华人用户提供免费地址覆盖查询服务，通常 1 分钟内即可确认是否支持安装或开通套餐。',
        },
      },
      {
        '@type': 'Question',
        name: '安装宽带一般需要多久？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '大多数情况下，宽带安装可在 1–3 个工作日内完成，具体时间取决于地址、运营商及现场情况。',
        },
      },
      {
        '@type': 'Question',
        name: '是否提供中文协助服务？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是的，我们提供全程中文服务，包括套餐对比、下单、安装预约及后续使用问题协助。',
        },
      },
      {
        '@type': 'Question',
        name: '办理这些服务会额外收费吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '不会。所有套餐均按照运营商官方价格办理，不收取任何额外或隐藏服务费用。',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
