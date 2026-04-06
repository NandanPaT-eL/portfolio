'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { personalInfo, stats } from '@/lib/data'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const yContent = useTransform(scrollY, [0, 500], [0, -80])
  const imgParallax = useTransform(scrollY, [0, 700], [0, 80])

  // Three breakpoints: mobile <640, tablet 640–1024, desktop >1024
  const [bp, setBp] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setBp(w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop')
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const isMobile = bp === 'mobile'
  const isTablet = bp === 'tablet'
  const isDesktop = bp === 'desktop'

  return (
    <div
      ref={ref}
      id="home"
      style={{
        minHeight: '100vh',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <LiquidCanvas />
      <div className="grid-overlay" />

      <IridescentLine vertical length="100%" style={{ left: isMobile ? 16 : 40, top: 0 }} />
      <IridescentLine vertical length="100%" style={{ right: isMobile ? 16 : 40, top: 0 }} />

      <motion.div
        style={{
          opacity,
          y: yContent,
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ─────────────────────────────────────────────
            MOBILE layout — stacked portrait
        ───────────────────────────────────────────── */}
        {isMobile && (
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            {/* Photo — full width, takes top ~55% of viewport */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              style={{
                position: 'relative',
                width: '100%',
                height: '58vw',
                minHeight: 280,
                maxHeight: 420,
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <motion.div style={{ y: imgParallax, height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
                <Image
                  src="/bio.jpg"
                  alt="Nandan Patel"
                  fill
                  priority
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    filter: 'contrast(1.05) brightness(0.95)',
                  }}
                />
              </motion.div>
              {/* Bottom fade — photo dissolves into black text area */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '50%',
                background: 'linear-gradient(to bottom, transparent, #000)',
                zIndex: 2,
              }} />
              {/* Status badge overlaid bottom-left */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: 16,
                  left: 20,
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 8px #4ade80',
                  animation: 'blink 2s ease-in-out infinite',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  ISRO Space Applications Centre
                </span>
              </motion.div>
            </motion.div>

            {/* Text content below photo - FIXED VERSION */}
            <div style={{ padding: '0 20px 80px', flex: 1 }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="display"
                style={{
                  fontSize: 'clamp(72px, 22vw, 120px)',
                  lineHeight: 0.88,
                  marginBottom: 0,
                  marginTop: 0,
                }}
              >
                <span style={{ display: 'block', color: 'var(--off-white)' }}>NANDAN</span>
                <span style={{ display: 'block', color: 'var(--accent)' }}>PATEL</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.85 }}
                style={{
                  height: 1,
                  background: 'linear-gradient(90deg, var(--accent), transparent)',
                  margin: '20px 0',
                  transformOrigin: 'left',
                }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-400)',
                  marginBottom: 16,
                  lineHeight: 1.9,
                }}
              >
                AI Engineer · Computer Vision<br />Deep Learning · Embedded Systems
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: 'var(--gray-400)',
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}
              >
                <a
                  href="#projects"
                  className="btn btn-accent"
                  onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ justifyContent: 'space-between', width: '100%' }}
                >
                  <span>View Work</span>
                  <span>→</span>
                </a>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a
                    href="#contact"
                    className="btn"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>Contact</span>
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Nandan_Patel_Resume.pdf"
                    className="btn"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>Resume</span>
                  </a>
                </div>
              </motion.div>

              {/* Stats — 2×2 grid on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.35 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {stats.map((s, i) => (
                  <div key={s.label} style={{
                    padding: '16px 18px',
                    borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}>
                    <div className="display" style={{ fontSize: 24, color: 'var(--off-white)', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--gray-600)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            TABLET layout — side by side, tighter
        ───────────────────────────────────────────── */}
        {isTablet && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '100vh',
            paddingTop: 56,
          }}>
            {/* Left text */}
            <div style={{ padding: '48px 32px 80px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'blink 2s ease-in-out infinite', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>
                  ISRO Space Applications Centre
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="display"
                style={{ fontSize: 'clamp(56px, 9vw, 88px)', lineHeight: 0.88, marginBottom: 0 }}
              >
                <span style={{ display: 'block', color: 'var(--off-white)' }}>NANDAN</span>
                <span style={{ display: 'block', color: 'var(--accent)' }}>PATEL</span>
              </motion.h1>

              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.7 }}
                style={{ height: 1, background: 'linear-gradient(90deg, var(--accent), transparent)', margin: '22px 0', transformOrigin: 'left' }} />

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 16, lineHeight: 1.9 }}>
                AI Engineer · Computer Vision · Deep Learning
              </motion.p>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-400)', lineHeight: 1.8, marginBottom: 28 }}>
                {personalInfo.bio}
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}
                style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
                <a href="#projects" className="btn btn-accent"
                  onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span>View Work</span><span>→</span>
                </a>
                <a href="#contact" className="btn"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span>Contact</span>
                </a>
                <a href="/resume.pdf" download="Nandan_Patel_Resume.pdf" className="btn">
                  <span>Resume</span><span>↓</span>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
                style={{ display: 'flex', gap: 0 }}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{
                    padding: '12px 18px',
                    borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <div className="display" style={{ fontSize: 22, color: 'var(--off-white)', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--gray-600)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 3 }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right photo — fills full column height */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{
                position: 'absolute', left: 0, top: '10%', bottom: '10%', width: 1,
                background: 'linear-gradient(180deg, transparent, rgba(200,169,110,0.2), rgba(120,180,220,0.12), transparent)',
                zIndex: 3,
              }} />
              <motion.div style={{ y: imgParallax, height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
                <Image
                  src="/bio.jpg"
                  alt="Nandan Patel"
                  fill
                  priority
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    filter: 'contrast(1.04) brightness(0.97)',
                  }}
                />
              </motion.div>
              {/* Left edge fade — merges with text column */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '20%',
                background: 'linear-gradient(to right, #000, transparent)',
                zIndex: 2,
              }} />
              {/* Caption */}
              <div style={{
                position: 'absolute', bottom: 24, right: 24, zIndex: 4,
                display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4,
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{personalInfo.fullName}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>AI Engineer</span>
              </div>
            </motion.div>
          </div>
        )}

        {/* ─────────────────────────────────────────────
            DESKTOP layout — asymmetric, photo prominent
        ───────────────────────────────────────────── */}
        {isDesktop && (
          <div style={{
            display: 'grid',
            // Text gets ~45%, photo gets ~55% — photo now dominates
            gridTemplateColumns: '1fr 1.2fr',
            minHeight: '100vh',
            paddingTop: 56,
          }}>
            {/* Left — text */}
            <div style={{
              padding: '60px 48px 80px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 }}
              >
                <div style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 8px #4ade80',
                  animation: 'blink 2s ease-in-out infinite',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-400)',
                }}>
                  Available — ISRO Space Applications Centre
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="display text-hero"
                style={{ lineHeight: 0.88, marginBottom: 0 }}
              >
                <span style={{ display: 'block', color: 'var(--off-white)' }}>NANDAN</span>
                <span style={{ display: 'block', color: 'var(--accent)' }}>PATEL</span>
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: 1,
                  background: 'linear-gradient(90deg, var(--accent), transparent)',
                  margin: '28px 0',
                  transformOrigin: 'left',
                }}
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-400)',
                  marginBottom: 24,
                  lineHeight: 1.8,
                }}
              >
                {personalInfo.subtitle.split(' · ').join('  ·  ')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{
                  fontSize: 14,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--gray-200)',
                  lineHeight: 1.85,
                  maxWidth: 480,
                  marginBottom: 40,
                }}
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.15 }}
                style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}
              >
                <a href="#projects" className="btn btn-accent"
                  onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span>View Work</span><span style={{ fontSize: 14 }}>→</span>
                </a>
                <a href="#contact" className="btn"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span>Get in Touch</span>
                </a>
                <a href="/resume.pdf" download="Nandan_Patel_Resume.pdf" className="btn">
                  <span>Resume</span><span style={{ fontSize: 14 }}>↓</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                style={{ display: 'flex', gap: 0 }}
              >
                {stats.map((s, i) => (
                  <div key={s.label} style={{
                    padding: '16px 24px',
                    borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <div className="display" style={{ fontSize: 26, color: 'var(--off-white)', lineHeight: 1, letterSpacing: '0.04em' }}>{s.value}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-400)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — photo, fills entire column top to bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                // Extend beyond grid to bleed to viewport edge
                marginRight: -40,
              }}
            >
              {/* Iridescent left separator */}
              <div style={{
                position: 'absolute', left: 0, top: '10%', bottom: '10%', width: 1,
                background: 'linear-gradient(180deg, transparent, rgba(200,169,110,0.22), rgba(120,180,220,0.14), transparent)',
                zIndex: 3, pointerEvents: 'none',
              }} />

              {/* Subtle gold glow at photo base */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                background: 'linear-gradient(to top, rgba(200,169,110,0.04), transparent)',
                zIndex: 2, pointerEvents: 'none',
              }} />

              {/* Photo — parallax via motion.div wrapper, fill the column */}
              <motion.div style={{ y: imgParallax, height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
                <Image
                  src="/bio.jpg"
                  alt="Nandan Patel — AI Engineer"
                  fill
                  priority
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                    filter: 'contrast(1.05) brightness(0.95)',
                  }}
                />
              </motion.div>

              {/* Left edge fade — photo dissolves into text column seamlessly */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '18%',
                background: 'linear-gradient(to right, #000, transparent)',
                zIndex: 4, pointerEvents: 'none',
              }} />

              {/* Caption bottom-right */}
              <div style={{
                position: 'absolute', bottom: 28, right: 28, zIndex: 5,
                display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5,
              }}>
                <div style={{ width: 40, height: 1, background: 'rgba(200,169,110,0.3)', marginBottom: 4 }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
                  {personalInfo.fullName}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                  AI Engineer
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray-600)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(180deg, var(--accent), transparent)' }}
        />
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}