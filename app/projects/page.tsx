'use client'

import Link from 'next/link'
import { Cinzel, Lato } from 'next/font/google'
import { BG, CREAM } from '../../lib/constants'

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '300' })

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
    <div
      className={lato.className}
      style={{ backgroundColor: BG, minHeight: '100vh', color: CREAM }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 2rem' }}>
        <Link
          href="/"
          style={{
            color: CREAM,
            opacity: 0.5,
            letterSpacing: '3px',
            fontSize: '11px',
            textDecoration: 'none',
          }}
        >
          ← BACK
        </Link>

        <h1
          className={cinzel.className}
          style={{
            marginTop: '3rem',
            marginBottom: '3rem',
            letterSpacing: '6px',
            fontSize: '26px',
            fontWeight: 400,
          }}
        >
          PROJECTS
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              style={{
                color: CREAM,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(242,234,216,0.1)',
                padding: '1.5rem 0',
                borderTop: i === 0 ? '1px solid rgba(242,234,216,0.1)' : 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.children[0] as HTMLElement).style.fontSize = '16px'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.children[0] as HTMLElement).style.fontSize = '14px'
              }}
            >
              <div
                className={cinzel.className}
                style={{ letterSpacing: '2px', fontSize: '14px', marginBottom: '0.4rem', transition: 'font-size 0.2s ease' }}
              >
                {project.name}
              </div>
              <div style={{ opacity: 0.45, fontSize: '11px', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                {project.date}
              </div>
              <div style={{ opacity: 0.65, fontSize: '13px', lineHeight: 1.6 }}>
                {project.desc}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
