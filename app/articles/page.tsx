import Link from 'next/link'
import { getAllArticles } from '../../lib/articles'

export default function Articles() {
  const articles = getAllArticles()

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

        <Link href="/" style={{
          color: 'var(--muted)',
          fontSize: '11px',
          letterSpacing: '3px',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '28px',
        }}>
          ← BACK
        </Link>

        <div className="glass-card">
          <h1 style={{
            margin: '0 0 28px',
            fontSize: '13px',
            letterSpacing: '6px',
            fontWeight: 400,
            color: 'var(--text)',
          }}>
            ARTICLES
          </h1>

          {articles.length === 0 ? (
            <p style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', opacity: 0.6 }}>
              COMING SOON
            </p>
          ) : (
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
          )}
        </div>

      </div>
    </main>
  )
}
