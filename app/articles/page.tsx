import Link from 'next/link'
import { Cinzel, Lato } from 'next/font/google'
import { BG, CREAM } from '../../lib/constants'
import { getAllArticles } from '../../lib/articles'

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '300' })

export default function Articles() {
  const articles = getAllArticles()

  return (
    <div className={lato.className} style={{ backgroundColor: BG, minHeight: '100vh', color: CREAM }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 2rem' }}>
        <Link
          href="/"
          style={{ color: CREAM, opacity: 0.5, letterSpacing: '3px', fontSize: '11px', textDecoration: 'none' }}
        >
          ← BACK
        </Link>

        <h1
          className={cinzel.className}
          style={{ marginTop: '3rem', marginBottom: '3rem', letterSpacing: '6px', fontSize: '26px', fontWeight: 400 }}
        >
         ARTICLES
        </h1>

        <style>{`
          .article-title { font-size: 14px; transition: font-size 0.2s ease; }
          .article-link:hover .article-title { font-size: 16px; }
        `}</style>

        {articles.length === 0 ? (
          <p style={{ opacity: 0.4, fontSize: '13px', letterSpacing: '2px' }}>COMING SOON</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {articles.map((article, i) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="article-link"
                style={{
                  color: CREAM,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(242,234,216,0.1)',
                  padding: '1.5rem 0',
                  borderTop: i === 0 ? '1px solid rgba(242,234,216,0.1)' : 'none',
                }}
              >
                <div
                  className={`${cinzel.className} article-title`}
                  style={{ letterSpacing: '2px', marginBottom: '0.4rem' }}
                >
                  {article.title}
                </div>
                <div style={{ opacity: 0.2, fontSize: '11px', letterSpacing: '2px' }}>
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
  )
}
