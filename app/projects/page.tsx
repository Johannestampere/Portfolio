'use client'

import Link from 'next/link'

const projects = [
  {
    name: 'PicCraft',
    date: 'February 2026',
    desc: 'Photo to 3D Minecraft voxelization pipeline using SAM, Depth Anything V2, and AI mesh generation.',
    url: 'https://github.com/Johannestampere/piccraft',
  },
  {
    name: 'UW Hot Takes',
    date: 'January 2026',
    desc: 'Anonymous platform for UW students to share hot takes and engage with others.',
    url: 'https://github.com/Johannestampere/uw-hot-takes',
  },
  {
    name: 'bloom.ai',
    date: 'December 2025',
    desc: 'AI-powered real-time collaborative mindmapping platform.',
    url: 'https://github.com/Johannestampere/bloom.ai',
  },
  {
    name: 'Order Book Simulator',
    date: 'December 2025',
    desc: 'High-performance, cache-optimized C++ order matching engine.',
    url: 'https://github.com/Johannestampere/order_book_simulator',
  },
  {
    name: 'C++ Softmax Regression',
    date: 'November 2025',
    desc: 'High-performance Softmax Regression in C++ with a custom matrix library, AVX2/FMA SIMD acceleration, and mini-batch gradient descent.',
    url: 'https://github.com/Johannestampere/softmax',
  },
  {
    name: 'Donor3',
    date: 'June 2025 — Present',
    desc: 'Charity platform that revolutionizes donating using AI.',
    url: 'https://github.com/Johannestampere/Donor3',
  },
  {
    name: 'johannestampere.com',
    date: 'July 2025',
    desc: 'Minimalistic portfolio website.',
    url: 'https://github.com/Johannestampere/Portfolio',
  },
  {
    name: 'GuardiaAI',
    date: 'June 2025',
    desc: 'Chrome extension that protects the elderly from online fraud.',
    url: 'https://github.com/Johannestampere/GuardiaAI',
  },
  {
    name: 'LED Emotion Mapper',
    date: 'April 2025',
    desc: 'Real-time emotion detection with Arduino.',
    url: 'https://github.com/Johannestampere/ArduinoEmotionDetector',
  },
  {
    name: 'Manual Memory Management',
    date: 'March 2025',
    desc: 'Manual implementations of C malloc() and free() functions.',
    url: 'https://github.com/Johannestampere/CMalloc',
  },
  {
    name: '136Notes',
    date: 'February 2025',
    desc: 'Lightweight note-taking platform for linear algebra students.',
    url: 'https://github.com/Johannestampere/136Notes',
  },
]

export default function Projects() {
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
            PROJECTS
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
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
                <div style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  marginBottom: '4px',
                  letterSpacing: '0.02em',
                }}>
                  {project.name}
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '6px', opacity: 0.7 }}>
                  {project.date}
                </div>
                <div style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                  {project.desc}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
