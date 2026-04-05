'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Hackathons from '@/components/sections/Hackathons'
import Projects from '@/components/sections/Projects'
import Freelance from '@/components/sections/Freelance'
import TechStack from '@/components/sections/TechStack'
import Achievements from '@/components/sections/Achievements'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

const Cursor = dynamic(() => import('@/components/layout/Cursor'), { ssr: false })

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
      requestAnimationFrame(raf)
      return () => lenis.destroy()
    }
    init()
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />

        {/* Thin iridescent divider between every section */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <Experience />

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <Hackathons />

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <Projects />

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <Freelance />

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <TechStack />

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <Achievements />

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <Education />

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.2), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
