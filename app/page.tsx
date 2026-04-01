'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Mail } from 'lucide-react'

export default function Landing() {
  return (
    <>
      {/* Social icons — top right */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '24px',
        zIndex: 10,
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
      }}>
        <a href="https://www.linkedin.com/in/johannes-tampere" target="_blank" style={{ color: 'var(--muted)', opacity: 0.6, transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0.6'}>
          <Linkedin size={17} />
        </a>
        <a href="https://www.instagram.com/johannes.tampere" target="_blank" style={{ color: 'var(--muted)', opacity: 0.6, transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0.6'}>
          <Instagram size={17} />
        </a>
        <a href="mailto:jtampere@uwaterloo.ca" style={{ color: 'var(--muted)', opacity: 0.6, transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'} onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0.6'}>
          <Mail size={17} />
        </a>
      </div>

      {/* Content */}
      <main style={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        padding: '40px 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '28px',
      }}>

        {/* UWatering webring */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://cs.uwatering.com/#https://johannestampere.com?nav=prev"
            style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}
          >←</a>
          <a href="https://cs.uwatering.com/#https://johannestampere.com" target="_blank">
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              style={{ width: '16px', height: 'auto', opacity: 0.45 }}
            />
          </a>
          <a
            href="https://cs.uwatering.com/#https://johannestampere.com?nav=next"
            style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}
          >→</a>
        </div>

        {/* Grid */}
        <div className="page-grid">

          {/* Hero card */}
          <div className="glass-card nav-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '18px' }}>
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(2.7rem, 6vw, 5.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.05em',
              fontWeight: 700,
              color: 'var(--text)',
            }}>
              Johannes<br />Tampere
            </h1>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              fontSize: '12px',
              letterSpacing: '0.5px',
              color: 'var(--muted)',
            }}>
              <span>Honours Computer Science (AI specialization) @ <strong>University of Waterloo</strong></span>
              <span>Previous software engineer @ <strong>Delfi</strong> & <strong>ScamGuardian.ai</strong></span>
              <span>Incoming @ <strong>Senpilot</strong> (Summer '26)</span>
              <span>Curious about math, ML, AI & system design</span>
            </div>
          </div>

          {/* Right nav cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <NavCard href="/projects" label="PROJECTS" description="Side projects, experiments, and dumb stuff." />
            <NavCard href="/articles" label="ARTICLES" description="Writing on anything that I'm currently working on or curious about." />
          </div>

        </div>
      </main>
    </>
  )
}

function NavCard({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <Link
      href={href}
      className="glass-card nav-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        textDecoration: 'none',
        color: 'var(--text)',
      }}
    >
      <div className="nav-label" style={{ letterSpacing: '3px', fontSize: '13px', marginBottom: '12px', color: 'var(--muted)' }}>
        {label}
      </div>
      <p className="nav-desc" style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7, color: 'var(--muted)' }}>
        {description}
      </p>
    </Link>
  )
}
