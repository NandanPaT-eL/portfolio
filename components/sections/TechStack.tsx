'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { techStack } from '@/lib/data'

export default function TechStack() {
  return (
    <section id="stack" className="section" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <LiquidCanvas style={{ opacity: 0.5 }} />
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
            <p className="text-label" style={{ color: 'var(--accent)', marginBottom: 12 }}>06 / Stack</p>
            <h2 className="display text-xl" style={{ color: 'var(--off-white)' }}>Tools &amp;<br />Technologies</h2>
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--gray-600)', fontSize: 14 }} className="desktop-only">
            Research to production
          </div>
        </motion.div>

        {/* Full-width table layout */}
        <div style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          {techStack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: gi * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                borderBottom: gi < techStack.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'background 0.3s',
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.015)' }}
            >
              {/* Category label */}
              <div style={{
                padding: '20px 24px',
                borderRight: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}>
                  {group.category}
                </span>
              </div>

              {/* Items */}
              <div style={{ padding: '18px 24px', display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.06 + ii * 0.03 }}
                    className="tag"
                    style={{ cursor: 'default' }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-600)', letterSpacing: '0.06em', marginTop: 24, textAlign: 'right' }}
        >
          Continuously expanding — last updated 2026
        </motion.p>
      </div>
    </section>
  )
}
