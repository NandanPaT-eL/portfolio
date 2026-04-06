'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { achievements } from '@/lib/data'

export default function Achievements() {
  return (
    <section
      id="achievements"
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
              07 / Recognition
            </p>
            <h2
              className="display text-xl"
              style={{ color: 'var(--off-white)' }}
            >
              Awards &amp;<br />Achievements
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
            Recognition of impact
          </div>
        </motion.div>

        {/* 3-column uniform cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 1,
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                padding: '36px 24px',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 220,
              }}
            >
              <div className="card-accent-line" />

              {/* Index */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 28,
                  flexWrap: 'wrap',
                  gap: 12,
                }}
              >
                <span className="index-num">{a.index}</span>
                <div
                  style={{
                    width: 32,
                    height: 1,
                    background: 'rgba(200,169,110,0.3)',
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Title */}
              <h3
                className="display"
                style={{
                  fontSize: 'clamp(24px, 6vw, 28px)',
                  color: 'var(--off-white)',
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  marginBottom: 6,
                  wordBreak: 'break-word',
                }}
              >
                {a.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 0,
                  wordBreak: 'break-word',
                }}
              >
                {a.subtitle}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: 'rgba(255,255,255,0.06)',
                  margin: '20px 0',
                  marginTop: 'auto',
                  paddingTop: 20,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--gray-400)',
                  lineHeight: 1.75,
                  wordBreak: 'break-word',
                }}
              >
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}