'use client'

import { useEffect, useRef } from 'react'

interface LiquidCanvasProps {
  style?: React.CSSProperties
}

export default function LiquidCanvas({ style }: LiquidCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const w = () => canvas.offsetWidth
    const h = () => canvas.offsetHeight

    const blobs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: 80 + Math.random() * 120,
      hue: [210, 270, 160, 45, 200][i],
      sat: 60 + Math.random() * 30,
      phase: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.004,
    }))

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, w(), h())
      t += 0.008

      blobs.forEach((b) => {
        b.x += b.vx
        b.y += b.vy
        if (b.x < -b.r) b.x = w() + b.r
        if (b.x > w() + b.r) b.x = -b.r
        if (b.y < -b.r) b.y = h() + b.r
        if (b.y > h() + b.r) b.y = -b.r

        const pulse = 1 + 0.15 * Math.sin(t * b.speed * 200 + b.phase)
        const r = b.r * pulse

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, r)
        const alpha = 0.04 + 0.02 * Math.sin(t + b.phase)
        grad.addColorStop(0, `hsla(${b.hue}, ${b.sat}%, 70%, ${alpha * 2.5})`)
        grad.addColorStop(0.5, `hsla(${b.hue + 30}, ${b.sat}%, 60%, ${alpha})`)
        grad.addColorStop(1, `hsla(${b.hue + 60}, ${b.sat}%, 50%, 0)`)

        ctx.beginPath()
        ctx.arc(b.x, b.y, r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  )
}
