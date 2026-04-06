'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <LiquidCanvas style={{ opacity: 0.5 }} />
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
              04 / Projects
            </p>
            <h2
              className="display text-xl"
              style={{ color: 'var(--off-white)' }}
            >
              Research<br />&amp; Projects
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
            Production-grade AI
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
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
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

              {/* Index */}
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
                <span className="index-num">{p.index}</span>
                {p.achievement && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent-border)',
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.achievement}
                  </span>
                )}
                {!p.achievement && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10,
                      color: 'var(--gray-600)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {p.period}
                  </span>
                )}
              </div>

              {/* Category */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 8,
                }}
              >
                {p.category}
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
                {p.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: 'rgba(255,255,255,0.06)',
                  margin: '20px 0',
                }}
              />

              {/* Period when achievement shown */}
              {p.achievement && (
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--gray-600)',
                    marginBottom: 12,
                  }}
                >
                  {p.period}
                </p>
              )}

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
                {p.description}
              </p>

              {/* Stack */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                  marginBottom: p.github ? 16 : 0,
                }}
              >
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              {p.github && (
                <a
                  href={p.github}
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

        {/* ISRO research note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: 1,
            border: '1px solid rgba(255,255,255,0.07)',
            borderTop: 'none',
            padding: '24px 20px',
            background: 'var(--card-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 4,
              }}
            >
              Ongoing Research
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--gray-200)',
                wordBreak: 'break-word',
              }}
            >
              PCB defect image generation — Diffusion Models, cTransGAN, SAGAN at ISRO SAC
            </p>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--gray-600)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              flexShrink: 0,
            }}
          >
            Jan 2026 — Present
          </span>
        </motion.div>
      </div>
    </section>
  )
}