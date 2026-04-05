'use client'

import { motion } from 'framer-motion'
import LiquidCanvas from '@/components/effects/LiquidCanvas'
import IridescentLine from '@/components/effects/IridescentLine'
import { education, certifications } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <LiquidCanvas style={{ opacity: 0.45 }} />
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
            <p className="text-label" style={{ color: 'var(--accent)', marginBottom: 12 }}>08 / Education</p>
            <h2 className="display text-xl" style={{ color: 'var(--off-white)' }}>Education &amp;<br />Certifications</h2>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>

          {/* Degrees */}
          <div>
            <p className="text-label" style={{ color: 'var(--gray-600)', marginBottom: 24 }}>Degrees</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid rgba(255,255,255,0.07)' }}>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  className="card"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 0 }}
                >
                  <div className="card-accent-line" />

                  {/* Top */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      {edu.period}
                    </p>
                    <span className="display" style={{ fontSize: 22, color: 'var(--accent)', letterSpacing: '0.02em' }}>
                      {edu.gpa}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="display" style={{ fontSize: 22, color: 'var(--off-white)', lineHeight: 1, letterSpacing: '0.02em', marginBottom: 8 }}>
                    {edu.degree}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-400)', marginBottom: 4 }}>
                    {edu.institution}
                  </p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-600)' }}>
                    {edu.location}{edu.note ? ` · ${edu.note}` : ''}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="text-label" style={{ color: 'var(--gray-600)', marginBottom: 24 }}>Certifications</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, border: '1px solid rgba(255,255,255,0.07)' }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="card"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', minHeight: 120 }}
                >
                  <div className="card-accent-line" />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <h4 className="display" style={{ fontSize: 20, color: 'var(--off-white)', lineHeight: 1.1, letterSpacing: '0.02em', maxWidth: '75%' }}>
                      {cert.name}
                    </h4>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-600)', letterSpacing: '0.06em', flexShrink: 0 }}>
                      {cert.date}
                    </span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: cert.skills.length ? 12 : 0 }}>
                    {cert.issuer}
                  </p>

                  {cert.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 4 }}>
                      {cert.skills.map((s) => <span key={s} className="tag">{s}</span>)}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
