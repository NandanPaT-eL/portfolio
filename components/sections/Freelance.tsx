'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { freelance } from '@/lib/data'

export default function Freelance() {
  return (
    <section
      id="freelance"
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
              05 / Freelance
            </p>
            <h2
              className="display text-xl"
              style={{ color: 'var(--off-white)' }}
            >
              Client<br />Work
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
            Shipped and live
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
          {freelance.map((item, i) => (
            <motion.div
              key={item.id}
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

              {/* Index + Status */}
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
                <span className="index-num">{item.index}</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    border: '1px solid',
                    borderColor:
                      item.status === 'Live'
                        ? 'rgba(74,222,128,0.3)'
                        : item.status === 'In Development'
                        ? 'var(--accent-border)'
                        : 'rgba(255,255,255,0.12)',
                    color:
                      item.status === 'Live'
                        ? '#4ade80'
                        : item.status === 'In Development'
                        ? 'var(--accent)'
                        : 'var(--gray-400)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.status}
                </span>
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
                {item.category}
              </p>

              {/* Title */}
              <h3
                className="display"
                style={{
                  fontSize: 'clamp(24px, 6vw, 28px)',
                  color: 'var(--off-white)',
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  marginBottom: 4,
                  wordBreak: 'break-word',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--gray-600)',
                  letterSpacing: '0.04em',
                  marginBottom: 0,
                  wordBreak: 'break-word',
                }}
              >
                {item.subtitle}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: 'rgba(255,255,255,0.06)',
                  margin: '20px 0',
                }}
              />

              {/* Period */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--gray-600)',
                  marginBottom: 16,
                }}
              >
                {item.period}
              </p>

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
                {item.description}
              </p>

              {/* Stack */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                  marginBottom: item.live || item.github ? 16 : 0,
                }}
              >
                {item.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  marginTop: item.live || item.github ? 4 : 0,
                  flexWrap: 'wrap',
                }}
              >
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = '0.7')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Live Site <span>↗</span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = '0.7')
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Repository <span>→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}