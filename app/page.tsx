'use client'

import Link from 'next/link'
import { Cinzel, Lato } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '300' })

import { CREAM, BG } from '../lib/constants'
export { CREAM, BG }

export default function Landing() {
  return (
    <div
      className={lato.className}
      style={{ backgroundColor: BG, minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      {/* Left Pillar */}
      <div style={{
        position: 'absolute',
        left: '2%',
        bottom: 0,
        height: '80vh',
        zIndex: 1,
      }}>
        <img
          src="/adobe.png"
          alt=""
          style={{ height: '100%', width: 'auto', mixBlendMode: 'multiply', opacity: 0.2 }}
        />
      </div>

      {/* Right Pillar */}
      <div style={{
        position: 'absolute',
        right: '2%',
        bottom: 0,
        height: '80vh',
        zIndex: 1,
      }}>
        <img
          src="/adobe.png"
          alt=""
          style={{ height: '100%', width: 'auto', mixBlendMode: 'multiply', opacity: 0.2 }}
        />
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: '1.5rem',
        paddingBottom: '3rem',
      }}>

        {/* UWatering logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://cs.uwatering.com/#https://johannestampere.com?nav=prev"
            style={{ color: CREAM, textDecoration: 'none', fontSize: '13px', opacity: 0.6 }}
          >
            ←
          </a>
          <a href="https://cs.uwatering.com/#https://johannestampere.com" target="_blank">
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              style={{ width: '16px', height: 'auto', filter: 'invert(1)', opacity: 0.7 }}
            />
          </a>
          <a
            href="https://cs.uwatering.com/#https://johannestampere.com?nav=next"
            style={{ color: CREAM, textDecoration: 'none', fontSize: '13px', opacity: 0.6 }}
          >
            →
          </a>
        </div>

        {/* Center section: name + bullets */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          width: '100%',
        }}>
          {/* Name */}
          <div style={{
            color: CREAM,
            fontSize: '52px',
            letterSpacing: '8px',
            fontFamily: cinzel.style.fontFamily,
          }}>
            JOHANNES TAMPERE
          </div>

          {/* Bullet Points */}
          <div style={{
            color: CREAM,
            display: 'flex',
            gap: '14px',
            fontSize: '12px',
            letterSpacing: '3px',
            opacity: 0.65,
          }}>
            <span>WATERLOO CS</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>FULL-STACK ENGINEER</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>AI / ML</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>BUILDING</span>
          </div>
        </div>

        {/* Boxes between pillars */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '42%',
        }}>
          <NavBox href="/projects" label="PROJECTS" />
          <NavBox href="/articles" label="ARTICLES" />
        </div>

      </div>
    </div>
  )
}

function NavBox({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        display: 'block',
        padding: '1.1rem',
        border: '1px solid rgba(242, 234, 216, 0.2)',
        color: '#f2ead8',
        textDecoration: 'none',
        textAlign: 'center',
        letterSpacing: '5px',
        fontSize: '12px',
        backgroundColor: 'rgba(242, 234, 216, 0.03)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease, font-size 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(242, 234, 216, 0.08)'
        e.currentTarget.style.borderColor = 'rgba(242, 234, 216, 0.45)'
        e.currentTarget.style.fontSize = '14px'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(242, 234, 216, 0.03)'
        e.currentTarget.style.borderColor = 'rgba(242, 234, 216, 0.2)'
        e.currentTarget.style.fontSize = '12px'
      }}
    >
      {label}
    </Link>
  )
}