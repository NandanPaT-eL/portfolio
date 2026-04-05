'use client'

import { motion } from 'framer-motion'
import IridescentLine from '@/components/effects/IridescentLine'

export default function Footer() {
  return (
    <footer style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <IridescentLine style={{ top: 0, left: 0 }} />

      {/* Big name */}
      <div className="container" style={{ paddingTop: 80, paddingBottom: 0, overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="display"
          style={{
            fontSize: 'clamp(60px, 12vw, 140px)',
            color: 'rgba(255,255,255,0.04)',
            lineHeight: 0.9,
            letterSpacing: '0.02em',
            userSelect: 'none',
            marginBottom: -12,
          }}
        >
          NANDAN<br />PATEL
        </motion.div>
      </div>

      {/* Footer bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 0 }}>
        <div className="container" style={{ padding: '24px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-600)', letterSpacing: '0.06em' }}>
              &copy; {new Date().getFullYear()} Nandan Alpesh Patel. Built with Next.js.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {[
                { label: 'GitHub', href: 'https://github.com/NandanPaT-eL' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/patel-nandan' },
                { label: 'Email', href: 'mailto:napassociate@gmail.com' },
              ].map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gray-600)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
