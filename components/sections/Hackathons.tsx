'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { hackathons } from '@/lib/data'

export default function Hackathons() {
  return (
    <section
      id="hackathons"
      className="section"
      style={{
        background: 'var(--gray-900)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <LiquidCanvas style={{ opacity: 0.4 }} />
      <IridescentLine style={{ top: 0, left: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, overflowX: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 64,
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <p
              className="text-label"
              style={{ color: 'var(--accent)', marginBottom: 12 }}
            >
              03 / Hackathons
            </p>
            <h2
              className="display text-xl"
              style={{ color: 'var(--off-white)' }}
            >
              Competitions<br />&amp; Awards
            </h2>
          </div>

          <div
            className="desktop-only"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--gray-600)',
              fontSize: 14,
            }}
          >
            Building under pressure
          </div>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 1,
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {hackathons.map((h, i) => (
            <motion.div
              key={h.id}
              className="card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '36px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div className="card-accent-line" />

              {/* Index + Award */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 28,
                  flexWrap: 'wrap',
                  gap: 12,
                }}
              >
                <span className="index-num">{h.index}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent-border)',
                    padding: '4px 10px',
                    textAlign: 'right',
                    maxWidth: 180,
                    lineHeight: 1.4,
                    wordBreak: 'break-word',
                  }}
                >
                  {h.award}
                </span>
              </div>

              {/* Organizer */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-600)',
                  marginBottom: 8,
                  wordBreak: 'break-word',
                }}
              >
                {h.organizer}
              </p>

              {/* Title */}
              <h3
                className="display"
                style={{
                  fontSize: 'clamp(24px, 6vw, 28px)',
                  color: 'var(--off-white)',
                  lineHeight: 1.1,
                  marginBottom: 0,
                  letterSpacing: '0.02em',
                  wordBreak: 'break-word',
                }}
              >
                {h.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: 'rgba(255,255,255,0.06)',
                  margin: '20px 0',
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--gray-200)',
                  lineHeight: 1.8,
                  marginBottom: 24,
                  flex: 1,
                  wordBreak: 'break-word',
                }}
              >
                {h.description}
              </p>

              {/* Stack */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                  marginBottom: h.github ? 16 : 0,
                }}
              >
                {h.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              {h.github && (
                <a
                  href={h.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 12,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
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