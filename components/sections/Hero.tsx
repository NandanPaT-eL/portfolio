'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { personalInfo, stats } from '@/lib/data'

const RobotScene = dynamic(() => import('@/components/robot/RobotScene'), {
  ssr: false,
  loading: () => <div style={{ width: 480, height: 540 }} />,
})

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const y = useTransform(scrollY, [0, 500], [0, -80])
  const [scrollVal, setScrollVal] = useState(0)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => scrollY.onChange(setScrollVal), [scrollY])

  return (
    <div ref={ref} id="home" style={{ minHeight: '100vh', background: '#000', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <LiquidCanvas />
      <div className="grid-overlay" />

      {/* Vertical rule lines */}
      <IridescentLine vertical length="100%" style={{ left: mobile ? 20 : 40, top: 0 }} />
      <IridescentLine vertical length="100%" style={{ right: mobile ? 20 : 40, top: 0 }} />

      <motion.div style={{ opacity, y, position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: mobile ? '1fr' : '1fr auto',
            gap: mobile ? 40 : 60,
            alignItems: 'center',
            paddingTop: 56,
          }}>
            {/* LEFT */}
            <div style={{ order: mobile ? 2 : 1 }}>
              {/* Status line */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'blink 2s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>
                  Available — ISRO Space Applications Centre
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="display text-hero"
                style={{ color: 'var(--off-white)', marginBottom: 0, lineHeight: 0.88 }}
              >
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i} style={{ display: 'block', color: i === 1 ? 'var(--accent)' : 'var(--off-white)' }}>
                    {word}
                  </span>
                ))}
              </motion.h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: 1, background: 'linear-gradient(90deg, var(--accent), transparent)', margin: '28px 0', transformOrigin: 'left' }}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 24, lineHeight: 1.8 }}
              >
                {personalInfo.subtitle.split(' · ').join('  ·  ')}
              </motion.p>

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                style={{ fontSize: 15, color: 'var(--gray-200)', lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}
              >
                {personalInfo.bio}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.15 }}
                style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}
              >
                <a href="#projects" className="btn btn-accent" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span>View Work</span>
                  <span style={{ fontSize: 14 }}>→</span>
                </a>
                <a href="#contact" className="btn" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span>Get in Touch</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn">
                  <span>GitHub</span>
                </a>
              </motion.div>

              {/* Stats strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                style={{ display: 'flex', gap: 0 }}
              >
                {stats.map((s, i) => (
                  <div key={s.label} style={{
                    padding: '16px 24px',
                    borderLeft: '1px solid rgba(255,255,255,0.07)',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    ...(i === 0 ? { borderLeft: 'none' } : {}),
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--off-white)', lineHeight: 1, letterSpacing: '0.04em' }}>{s.value}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-400)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ order: mobile ? 1 : 2, position: 'relative', display: 'flex', justifyContent: 'center' }}
            >
              {/* Robot glow */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
              }} />
              <Suspense fallback={null}>
                <RobotScene width={mobile ? 260 : 480} height={mobile ? 300 : 540} scrollY={scrollVal} />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2 }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gray-600)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(180deg, var(--accent), transparent)' }}
        />
      </motion.div>

      <style jsx>{`@keyframes blink { 0%,100%{opacity:1}50%{opacity:0.3} }`}</style>
    </div>
  )
}
