'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Projects', href: '#projects' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = ['experience', 'hackathons', 'projects', 'freelance', 'stack', 'achievements', 'education', 'contact']
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: 56,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 40px',
          background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 28, height: 28, border: '1px solid rgba(200,169,110,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--accent)',
          }}>N</div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>
            Nandan Patel
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32 }} className="desktop-only">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`nav-link ${active === l.href.replace('#', '') ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(l.href) }}>{l.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="#contact" className="btn desktop-only"
            onClick={(e) => { e.preventDefault(); go('#contact') }}
            style={{ padding: '8px 18px', fontSize: 10 }}>
            <span>Hire Me</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-only"
            style={{ background: 'none', border: 'none', cursor: 'none', padding: 4, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div key={i} style={{ width: 20, height: 1, background: 'var(--gray-200)' }}
                animate={menuOpen ? [{ rotate: 45, y: 6 }, { opacity: 0 }, { rotate: -45, y: -6 }][i] : {}} />
            ))}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: 56, left: 0, right: 0, zIndex: 999,
              background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              padding: '24px 24px 32px',
            }}
          >
            {links.map((l, i) => (
              <motion.a key={l.href} href={l.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={(e) => { e.preventDefault(); go(l.href) }}
                style={{
                  display: 'block', padding: '14px 0',
                  fontFamily: 'var(--font-display)', fontSize: 36, letterSpacing: '0.04em',
                  color: 'var(--off-white)', textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >{l.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
