'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { achievements } from '@/lib/data'

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'var(--gray-900)', position: 'relative', overflow: 'hidden' }}>
      <LiquidCanvas style={{ opacity: 0.4 }} />
      <IridescentLine style={{ top: 0, left: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64 }}
        >
          <div>
            <p className="text-label" style={{ color: 'var(--accent)', marginBottom: 12 }}>07 / Recognition</p>
            <h2 className="display text-xl" style={{ color: 'var(--off-white)' }}>Awards &amp;<br />Achievements</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--gray-600)', fontSize: 14 }} className="desktop-only">
            Recognition of impact
          </div>
        </motion.div>

        {/* 3-column uniform cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 1, border: '1px solid rgba(255,255,255,0.07)' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '36px 28px', display: 'flex', flexDirection: 'column', minHeight: 220 }}
            >
              <div className="card-accent-line" />

              {/* Index */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <span className="index-num">{a.index}</span>
                <div style={{ width: 32, height: 1, background: 'rgba(200,169,110,0.3)' }} />
              </div>

              {/* Title */}
              <h3 className="display" style={{ fontSize: 28, color: 'var(--off-white)', lineHeight: 1, letterSpacing: '0.02em', marginBottom: 6 }}>
                {a.title}
              </h3>

              {/* Subtitle */}
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 0 }}>
                {a.subtitle}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '20px 0', marginTop: 'auto', paddingTop: 20 }} />

              {/* Description */}
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-400)', lineHeight: 1.75 }}>
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            marginTop: 1,
            borderLeft: '1px solid rgba(255,255,255,0.07)',
            borderRight: '1px solid rgba(255,255,255,0.07)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {[
            { value: '9.56', label: 'CGPA / 10' },
            { value: '3.5L', label: 'INR Grants' },
            { value: '5+', label: 'Internships' },
            { value: '2', label: 'Live Products' },
          ].map((s, i) => (
            <div key={s.label} style={{
              padding: '28px 24px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              textAlign: 'center',
            }}>
              <div className="display" style={{ fontSize: 40, color: 'var(--accent)', letterSpacing: '0.02em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-600)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
