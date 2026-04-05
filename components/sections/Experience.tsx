'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <LiquidCanvas style={{ opacity: 0.5 }} />
      <IridescentLine style={{ top: 0, left: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64 }}
        >
          <div>
            <p className="text-label" style={{ color: 'var(--accent)', marginBottom: 12 }}>02 / Experience</p>
            <h2 className="display text-xl" style={{ color: 'var(--off-white)' }}>Where I<br />Have Worked</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--gray-600)', fontSize: 14 }} className="desktop-only">
            3 positions
          </div>
        </motion.div>

        {/* Cards grid — uniform 3 column on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, border: '1px solid rgba(255,255,255,0.07)' }}>
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              className="card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: 0 }}
            >
              <div className="card-accent-line" />

              {/* Top row: index + current badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <span className="index-num">{job.index}</span>
                {job.current && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent-border)', padding: '3px 8px' }}>
                    Current
                  </span>
                )}
              </div>

              {/* Company */}
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                {job.shortName}
              </p>
              <h3 className="display" style={{ fontSize: 28, color: 'var(--off-white)', lineHeight: 1, marginBottom: 6, letterSpacing: '0.02em' }}>
                {job.role}
              </h3>
              {job.subtitle && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-600)', letterSpacing: '0.06em', marginBottom: 0 }}>
                  {job.subtitle}
                </p>
              )}

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '20px 0' }} />

              {/* Period + Location */}
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-600)' }}>{job.period}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-600)' }}>·</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-600)' }}>{job.location}</span>
              </div>

              {/* Highlights */}
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24, flex: 1 }}>
                {job.highlights.map((h, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: 12, flexShrink: 0, marginTop: 2 }}>—</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-200)', lineHeight: 1.7 }}>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: job.github ? 16 : 0 }}>
                {job.stack.map((s) => <span key={s} className="tag">{s}</span>)}
              </div>

              {job.github && (
                <a href={job.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                  View Repository <span>→</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
