interface PromoFaqProps {
  items: { q: string; a: string }[];
  title?: string;
  schemaMode?: 'auto' | 'none';
  pageUrl?: string;
}

const SCRIPT_ID = 'faq-jsonld-att-promo';

function buildFaqSchema(items: { q: string; a: string }[], pageUrl?: string) {
  const mainEntity = items.map(({ q, a }) => ({
    '@type': 'Question' as const,
    name: q,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: a,
    },
  }));
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
  if (pageUrl) schema.mainEntityOfPage = pageUrl;
  return schema;
}

export default function PromoFaq({
  items,
  title = '优惠常见问答｜全美华人',
  schemaMode = 'auto',
  pageUrl,
}: PromoFaqProps) {
  if (items.length === 0) return null;

  const showSchema = schemaMode === 'auto';
  const schema = showSchema ? buildFaqSchema(items, pageUrl) : null;

  return (
    <section
      className="max-w-5xl mx-auto px-4 md:px-6 py-6 pb-8 md:pb-8"
      aria-labelledby="promo-faq-title"
    >
      {showSchema && schema && (
        <script
          id={SCRIPT_ID}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-xl shadow-slate-200/80 border border-slate-100">
        <h2
          id="promo-faq-title"
          className="text-lg md:text-xl font-bold text-slate-900 mb-4"
        >
          ❓ {title}
        </h2>

        <div className="space-y-2">
          {items.map((item, i) => (
            <details
              key={i}
              className="group border border-slate-200 rounded-xl overflow-hidden"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="px-4 py-3 cursor-pointer bg-slate-50 hover:bg-slate-100 font-semibold text-slate-800 text-sm md:text-base list-none flex items-center justify-between gap-2">
                <span>{item.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                  ▼
                </span>
              </summary>
              <div className="px-4 py-3 bg-white text-slate-600 text-sm md:text-base border-t border-slate-100">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
