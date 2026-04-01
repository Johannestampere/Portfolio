import Link from 'next/link'
import { getAllArticles } from '../../lib/articles'
import ArticleList from './ArticleList'

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
          <ArticleList articles={articles} />
        </div>

      </div>
    </main>
  )
}
