'use client'

import Link from 'next/link'
import { ArticleMeta } from '../../lib/articles'

export default function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  if (articles.length === 0) {
    return (
      <p style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', opacity: 0.6 }}>
        COMING SOON
      </p>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/articles/${article.slug}`}
          style={{
            color: 'var(--text)',
            textDecoration: 'none',
            padding: '1.25rem 0',
            borderTop: '1px solid rgba(36,50,58,0.08)',
            transition: 'padding-left 0.2s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.paddingLeft = '8px'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.paddingLeft = '0'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '4px', letterSpacing: '0.02em' }}>
            {article.title}
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', opacity: 0.7 }}>
            {article.date}
            {article.tags && (
              <span style={{ marginLeft: '1rem' }}>{article.tags.join(' · ')}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
