import Link from 'next/link'
import { Cinzel } from 'next/font/google'
import { remark } from 'remark'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { getArticle, getAllArticles } from '../../../lib/articles'
import { BG, CREAM } from '../../../lib/constants'

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' })

export async function generateStaticParams() {
  return getAllArticles().map(a => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { meta, content } = getArticle(slug)
  const html = (await remark()
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content)).toString()

  return (
    <div style={{ backgroundColor: BG, minHeight: '100vh', color: CREAM }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 2rem' }}>
        <Link
          href="/articles"
          style={{ color: CREAM, opacity: 0.5, letterSpacing: '3px', fontSize: '11px', textDecoration: 'none' }}
        >
          ← ARTICLES
        </Link>

        <h1
          className={cinzel.className}
          style={{ marginTop: '3rem', marginBottom: '2rem', letterSpacing: '4px', fontSize: '32px', fontWeight: 400 }}
        >
          {meta.title}
        </h1>

        <div style={{ opacity: 0.4, fontSize: '11px', letterSpacing: '2px', marginBottom: '3rem' }}>
          {meta.date}
          {meta.tags && (
            <span style={{ marginLeft: '1.5rem' }}>
              {meta.tags.join(' · ')}
            </span>
          )}
        </div>

        <style>{`
          .mdx-content {
            font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: ${CREAM};
          }
          .mdx-content h1 { font-size: 40px; font-weight: 700; margin: 2rem 0 0.25rem; }
          .mdx-content h2 { font-size: 30px; font-weight: 600; margin: 1.4rem 0 0.25rem; }
          .mdx-content h3 { font-size: 24px; font-weight: 600; margin: 1.25rem 0 0.25rem; }
          .mdx-content p { margin: 0 0 0.75rem; }
          .mdx-content strong { font-weight: 600; }
          .mdx-content em { font-style: italic; }
          .mdx-content ul { list-style-type: disc; padding-left: 1.5rem; margin: 0 0 0.75rem; }
          .mdx-content ol { list-style-type: decimal; padding-left: 1.5rem; margin: 0 0 0.75rem; }
          .mdx-content li { margin-bottom: 0.2rem; }
          .mdx-content code {
            font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", monospace;
            font-size: 85%;
            background: rgba(135,131,120,0.15);
            border-radius: 3px;
            padding: 0.2em 0.4em;
          }
          .mdx-content pre {
            background: rgba(135,131,120,0.15);
            border-radius: 3px;
            padding: 1rem;
            overflow-x: auto;
            margin-bottom: 1rem;
          }
          .mdx-content pre code { background: none; padding: 0; font-size: 14px; }
          .mdx-content blockquote {
            border-left: 3px solid rgba(242,234,216,0.25);
            margin-left: 0;
            padding-left: 1rem;
            opacity: 0.8;
          }
          .mdx-content a { color: ${CREAM}; text-decoration: underline; opacity: 0.7; }
          .mdx-content hr { border: none; border-top: 1px solid rgba(242,234,216,0.15); margin: 2rem 0; }
        `}</style>
        <div className="mdx-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}
