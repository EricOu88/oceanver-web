import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react';
import Script from 'next/script';
import BlogPostClient from './BlogPostClient';
import { CommunityDiscussionClientOnly } from '@/app/components/community/CommunityDiscussionByPath';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const redirects: Record<string, string> = {
  'how-to-save-on-phone-bills': '/bill-optimization',
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (redirects[slug]) {
    return {
      title: '手机账单为什么变贵？｜美国鸿达电讯',
      alternates: { canonical: 'https://oceanver.com/bill-optimization' },
    };
  }

  const post = await getPostBySlug(slug);
  if (!post) return { title: '文章未找到' };

  return {
    title: `${post.title}｜美国鸿达电讯`,
    description: post.description,
    alternates: { canonical: `https://oceanver.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  if (redirects[slug]) permanentRedirect(redirects[slug]);

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.category, 3);
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://oceanver.com/#organization',
    name: '美国鸿达电讯',
    url: 'https://oceanver.com',
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <nav className="mb-6 text-sm text-[#526170]">
          <Link href="/blog" className="font-semibold text-[#246B95] hover:text-[#103B60]">
            ← 返回问题知识入口
          </Link>
        </nav>

        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
              <Tag size={15} /> {post.category}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-[#526170]">
              <Calendar size={15} />
              {new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-3xl font-black leading-tight text-[#202D3A] md:text-5xl">{post.title}</h1>
          {post.description && <p className="mt-5 text-lg leading-8 text-[#526170]">{post.description}</p>}
        </header>

        <article
          className="max-w-none [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-[#202D3A] [&_h3]:mt-7 [&_h3]:text-xl [&_h3]:font-bold [&_p]:mb-4 [&_p]:leading-7 [&_p]:text-[#526170] [&_li]:my-2 [&_ul]:ml-6 [&_ul]:list-disc [&_a]:font-semibold [&_a]:text-[#246B95]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <BlogPostClient />
        <CommunityDiscussionClientOnly pageKey={`blog:${post.slug}`} />

        {relatedPosts.length > 0 && (
          <section className="mt-12 border-t border-[#D5E5EC] pt-8">
            <h2 className="text-2xl font-black text-[#202D3A]">相关内容</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-2xl border border-[#D5E5EC] bg-white p-4">
                  <h3 className="font-black text-[#202D3A]">{item.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#246B95]">
                    继续阅读 <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link href="/blog" className="mt-10 inline-flex items-center gap-2 font-semibold text-[#246B95]">
          <ArrowLeft size={16} /> 返回问题知识入口
        </Link>
      </main>
    </>
  );
}
