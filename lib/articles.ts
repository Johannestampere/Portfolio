import 'server-only'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ARTICLES_DIR = path.join(process.cwd(), 'content/blog')

export interface ArticleMeta {
  slug: string
  title: string
  date: string
  tags?: string[]
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, f), 'utf-8')
      const { data } = matter(raw)
      return { slug, title: data.title, date: data.date, tags: data.tags }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticle(slug: string) {
  const filepath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    meta: { slug, title: data.title, date: data.date, tags: data.tags } as ArticleMeta,
    content,
  }
}