'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import RobotModel from './RobotModel'

interface RobotSceneProps { width?: number; height?: number; scrollY?: number }

export default function RobotScene({ width = 480, height = 540, scrollY = 0 }: RobotSceneProps) {
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const scrollRef = useRef(scrollY)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mobile, setMobile] = useState(false)

  useEffect(() => { scrollRef.current = scrollY }, [scrollY])
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  useEffect(() => {
    if (mobile) return
    const h = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.current = (e.clientX - rect.left - rect.width / 2) / rect.width
      mouseY.current = -((e.clientY - rect.top - rect.height / 2) / rect.height)
    }
    window.addEventListener('mousemove', h, { passive: true })
    return () => window.removeEventListener('mousemove', h)
  }, [mobile])

  const cw = mobile ? Math.min(260, width) : width
  const ch = mobile ? Math.min(300, height) : height

  return (
    <div ref={containerRef} style={{ width: cw, height: ch, position: 'relative' }}>
      <Canvas camera={{ position: [0, 0.3, 3.8], fov: 36 }} style={{ background: 'transparent' }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <RobotModel mouseX={mouseX} mouseY={mouseY} scrollY={scrollRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}
