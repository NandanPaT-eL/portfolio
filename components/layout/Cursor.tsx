'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect if device supports touch (phones/tablets)
    const checkTouchDevice = () => {
      const hasTouch = 'ontouchstart' in window || 
                       navigator.maxTouchPoints > 0 || 
                       (navigator as any).msMaxTouchPoints > 0
      setIsTouchDevice(hasTouch)
      return hasTouch
    }

    const isTouch = checkTouchDevice()
    
    // If it's a touch device, hide custom cursor and return early
    if (isTouch) {
      if (dotRef.current) dotRef.current.style.display = 'none'
      if (ringRef.current) ringRef.current.style.display = 'none'
      return
    }

    // Show cursor on non-touch devices
    if (dotRef.current) dotRef.current.style.display = 'block'
    if (ringRef.current) ringRef.current.style.display = 'block'

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 4}px`
        dotRef.current.style.top = `${e.clientY - 4}px`
      }
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x - 16}px`
        ringRef.current.style.top = `${ring.current.y - 16}px`
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move, { passive: true })
    raf.current = requestAnimationFrame(animate)

    // Scale on hover
    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => {
        if (dotRef.current) dotRef.current.style.transform = 'scale(2)'
        if (ringRef.current) {
          ringRef.current.style.transform = 'scale(1.5)'
          ringRef.current.style.borderColor = 'rgba(200,169,110,0.8)'
        }
      })
      el.addEventListener('mouseleave', () => {
        if (dotRef.current) dotRef.current.style.transform = 'scale(1)'
        if (ringRef.current) {
          ringRef.current.style.transform = 'scale(1)'
          ringRef.current.style.borderColor = 'rgba(200,169,110,0.4)'
        }
      })
    }

    document.querySelectorAll('a, button, [class*="card"], input, textarea').forEach(addHover)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  // Don't render anything on touch devices
  if (isTouchDevice) return null

  return (
    <>
      <div ref={dotRef} className="cursor" style={{ left: -20, top: -20 }} />
      <div ref={ringRef} className="cursor-follower" style={{ left: -20, top: -20 }} />
    </>
  )
}