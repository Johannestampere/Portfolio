import Link from 'next/link'
import { remark } from 'remark'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { getArticle, getAllArticles } from '../../../lib/articles'

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
    <main style={{
      position: 'relative',
      zIndex: 2,
      minHeight: '100vh',
      padding: '40px 24px 80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '28px',
    }}>
      <div style={{ width: 'min(720px, 100%)' }}>

        <Link href="/articles" style={{
          color: 'var(--muted)',
          fontSize: '11px',
          letterSpacing: '3px',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '28px',
        }}>
          ← ARTICLES
        </Link>

        <div className="glass-card">
          <h1 style={{
            margin: '0 0 12px',
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            fontWeight: 700,
            color: 'var(--text)',
          }}>
            {meta.title}
          </h1>

          <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', opacity: 0.7, marginBottom: '32px' }}>
            {meta.date}
            {meta.tags && (
              <span style={{ marginLeft: '1.5rem' }}>{meta.tags.join(' · ')}</span>
            )}
          </div>

          <style>{`
            .mdx-content {
              font-family: Inter, system-ui, sans-serif;
              font-size: 15px;
              line-height: 1.75;
              color: var(--text);
            }
            .mdx-content h1 { font-size: 1.8rem; font-weight: 700; margin: 2rem 0 0.5rem; color: var(--text); }
            .mdx-content h2 { font-size: 1.35rem; font-weight: 600; margin: 1.6rem 0 0.4rem; color: var(--text); }
            .mdx-content h3 { font-size: 1.1rem; font-weight: 600; margin: 1.3rem 0 0.3rem; color: var(--text); }
            .mdx-content p  { margin: 0 0 0.85rem; }
            .mdx-content strong { font-weight: 600; }
            .mdx-content em { font-style: italic; }
            .mdx-content ul { list-style-type: disc; padding-left: 1.5rem; margin: 0 0 0.85rem; }
            .mdx-content ol { list-style-type: decimal; padding-left: 1.5rem; margin: 0 0 0.85rem; }
            .mdx-content li { margin-bottom: 0.25rem; }
            .mdx-content code {
              font-family: "SFMono-Regular", Menlo, Consolas, monospace;
              font-size: 85%;
              background: rgba(36,50,58,0.07);
              border-radius: 4px;
              padding: 0.2em 0.4em;
            }
            .mdx-content pre {
              background: rgba(36,50,58,0.06);
              border: 1px solid rgba(36,50,58,0.1);
              border-radius: 10px;
              padding: 1rem;
              overflow-x: auto;
              margin-bottom: 1rem;
            }
            .mdx-content pre code { background: none; padding: 0; font-size: 13px; }
            .mdx-content blockquote {
              border-left: 3px solid rgba(36,50,58,0.2);
              margin-left: 0;
              padding-left: 1rem;
              opacity: 0.75;
            }
            .mdx-content a { color: var(--text); text-decoration: underline; opacity: 0.7; }
            .mdx-content hr { border: none; border-top: 1px solid rgba(36,50,58,0.1); margin: 2rem 0; }
          `}</style>
          <div className="mdx-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

      </div>
    </main>
  )
}
