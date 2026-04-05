'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface RobotModelProps {
  mouseX: React.MutableRefObject<number>
  mouseY: React.MutableRefObject<number>
  scrollY: React.MutableRefObject<number>
}

export default function RobotModel({ mouseX, mouseY, scrollY }: RobotModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Group>(null)
  const visorRef = useRef<THREE.Mesh>(null)
  const antennaTipRef = useRef<THREE.PointLight>(null)
  const antennaSphRef = useRef<THREE.Mesh>(null)
  const leftArmRef = useRef<THREE.Group>(null)
  const rightArmRef = useRef<THREE.Group>(null)
  const bodyRef = useRef<THREE.Group>(null)
  const t = useRef(0)

  const mat = useMemo(() => ({
    body: new THREE.MeshStandardMaterial({ color: '#0d0c0a', metalness: 0.85, roughness: 0.15 }),
    bodyAccent: new THREE.MeshStandardMaterial({ color: '#111009', metalness: 0.9, roughness: 0.1 }),
    visor: new THREE.MeshStandardMaterial({ color: '#c8a96e', emissive: '#c8a96e', emissiveIntensity: 0.5, metalness: 0.1, roughness: 0.05, transparent: true, opacity: 0.92 }),
    glass: new THREE.MeshStandardMaterial({ color: '#1a1610', emissive: '#c8a96e', emissiveIntensity: 0.08, metalness: 0.95, roughness: 0.02, transparent: true, opacity: 0.9 }),
    frame: new THREE.MeshStandardMaterial({ color: '#3a3630', metalness: 0.95, roughness: 0.05 }),
    antenna: new THREE.MeshStandardMaterial({ color: '#7a7570', metalness: 1.0, roughness: 0.05 }),
    antennaTip: new THREE.MeshStandardMaterial({ color: '#c8a96e', emissive: '#c8a96e', emissiveIntensity: 2.0 }),
    panel: new THREE.MeshStandardMaterial({ color: '#1a1610', emissive: '#c8a96e', emissiveIntensity: 0.12, metalness: 0.6, roughness: 0.4 }),
    bolt: new THREE.MeshStandardMaterial({ color: '#4a4540', metalness: 0.98, roughness: 0.08 }),
    crystal: new THREE.MeshStandardMaterial({ color: '#78b4dc', emissive: '#78b4dc', emissiveIntensity: 0.3, metalness: 0.2, roughness: 0.0, transparent: true, opacity: 0.7 }),
  }), [])

  useFrame(() => {
    t.current += 0.016
    const time = t.current
    if (!groupRef.current || !headRef.current) return

    groupRef.current.position.y = Math.sin(time * 0.7) * 0.07
    if (bodyRef.current) {
      const b = 1 + Math.sin(time * 1.1) * 0.006
      bodyRef.current.scale.set(b, b, b)
    }

    headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, mouseY.current * 0.16, 0.05)
    headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX.current * 0.2, 0.05)

    const scroll = scrollY.current * 0.0008
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -scroll * 0.25, 0.04)

    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time * 0.5) * 0.04 + 0.08
      rightArmRef.current.rotation.z = -Math.sin(time * 0.5 + Math.PI) * 0.04 - 0.08
    }

    if (visorRef.current) {
      const m = visorRef.current.material as THREE.MeshStandardMaterial
      const bc = time % 5
      m.emissiveIntensity = bc > 4.85 ? 0.02 : 0.45 + Math.sin(time * 1.8) * 0.1
    }

    if (antennaTipRef.current) antennaTipRef.current.intensity = 0.6 + Math.sin(time * 2.2) * 0.4
    if (antennaSphRef.current) {
      const m = antennaSphRef.current.material as THREE.MeshStandardMaterial
      m.emissiveIntensity = 1.5 + Math.sin(time * 2.2) * 0.8
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.35} color="#f0ede8" />
      <directionalLight position={[3, 4, 3]} intensity={1.4} color="#f0ede8" />
      <pointLight position={[-2, 2, 1]} intensity={0.6} color="#c8a96e" />
      <pointLight position={[0, -2, 2]} intensity={0.3} color="#78b4dc" />

      {/* HEAD */}
      <group ref={headRef} position={[0, 1.05, 0]}>
        <RoundedBox args={[1.0, 0.88, 0.8]} radius={0.1} smoothness={4} material={mat.body} />

        {/* Visor */}
        <mesh ref={visorRef} position={[0, 0.06, 0.41]} material={mat.visor}>
          <planeGeometry args={[0.7, 0.34]} />
        </mesh>
        <mesh position={[0, 0.06, 0.408]}>
          <boxGeometry args={[0.77, 0.41, 0.018]} />
          <meshStandardMaterial color="#0a0906" metalness={0.95} roughness={0.05} />
        </mesh>

        {/* Glasses left */}
        <group position={[-0.21, 0.04, 0.43]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} material={mat.glass}>
            <torusGeometry args={[0.13, 0.022, 12, 32]} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.13, 32]} />
            <meshStandardMaterial color="#000a0f" transparent opacity={0.85} />
          </mesh>
        </group>
        {/* Glasses right */}
        <group position={[0.21, 0.04, 0.43]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} material={mat.glass}>
            <torusGeometry args={[0.13, 0.022, 12, 32]} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.13, 32]} />
            <meshStandardMaterial color="#000a0f" transparent opacity={0.85} />
          </mesh>
        </group>
        {/* Bridge */}
        <mesh position={[0, 0.04, 0.435]}>
          <boxGeometry args={[0.13, 0.016, 0.01]} />
          <meshStandardMaterial color="#2a2520" metalness={0.95} roughness={0.05} />
        </mesh>

        {/* Ear arms */}
        {[-1, 1].map((side) => (
          <mesh key={side} position={[side * 0.35, 0.04, 0.37]} rotation={[0, side * 0.25, 0]} material={mat.frame}>
            <boxGeometry args={[0.05, 0.013, 0.1]} />
          </mesh>
        ))}

        {/* Side panels */}
        {[-1, 1].map((side) => (
          <mesh key={side} position={[side * 0.51, 0.04, 0]}>
            <boxGeometry args={[0.02, 0.38, 0.28]} />
            <meshStandardMaterial color="#c8a96e" emissive="#c8a96e" emissiveIntensity={0.08} metalness={0.5} />
          </mesh>
        ))}

        {/* Top bumps */}
        {[-0.24, 0, 0.24].map((x, i) => (
          <mesh key={i} position={[x, 0.46, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 0.05, 8]} />
            <meshStandardMaterial color="#2a2520" metalness={0.9} />
          </mesh>
        ))}

        {/* Crystal accent */}
        <mesh position={[-0.1, 0.44, 0.3]} material={mat.crystal}>
          <octahedronGeometry args={[0.04, 0]} />
        </mesh>

        {/* Antenna main */}
        <group position={[0.16, 0.5, 0]}>
          <mesh material={mat.antenna}><cylinderGeometry args={[0.018, 0.022, 0.36, 8]} /></mesh>
          <mesh ref={antennaSphRef} position={[0, 0.2, 0]} material={mat.antennaTip}><sphereGeometry args={[0.048, 16, 16]} /></mesh>
          <pointLight ref={antennaTipRef} position={[0, 0.2, 0]} intensity={1.0} color="#c8a96e" distance={1.2} />
        </group>
        {/* Antenna 2 */}
        <group position={[-0.1, 0.48, 0]}>
          <mesh material={mat.antenna}><cylinderGeometry args={[0.013, 0.016, 0.2, 8]} /></mesh>
          <mesh position={[0, 0.12, 0]}>
            <sphereGeometry args={[0.026, 12, 12]} />
            <meshStandardMaterial color="#78b4dc" emissive="#78b4dc" emissiveIntensity={0.9} />
          </mesh>
        </group>
      </group>

      {/* NECK */}
      <mesh position={[0, 0.57, 0]} material={mat.bolt}>
        <cylinderGeometry args={[0.11, 0.14, 0.13, 12]} />
      </mesh>

      {/* BODY */}
      <group ref={bodyRef} position={[0, -0.08, 0]}>
        <RoundedBox args={[0.9, 0.8, 0.6]} radius={0.08} smoothness={4} material={mat.bodyAccent} />
        <mesh position={[0, 0.06, 0.31]} material={mat.panel}><planeGeometry args={[0.56, 0.46]} /></mesh>
        {[-0.1, 0.04, 0.18].map((y, i) => (
          <mesh key={i} position={[0, y + 0.06, 0.32]}>
            <planeGeometry args={[0.4, 0.015]} />
            <meshStandardMaterial color="#c8a96e" emissive="#c8a96e" emissiveIntensity={0.3} />
          </mesh>
        ))}
        {/* Crystal chest gem */}
        <mesh position={[0.16, 0.22, 0.32]} material={mat.crystal}>
          <octahedronGeometry args={[0.035, 0]} />
        </mesh>
        {[-1, 1].map((side) => (
          <group key={side} position={[side * 0.47, 0.3, 0]}>
            <mesh material={mat.bolt}><cylinderGeometry args={[0.055, 0.055, 0.07, 12]} /></mesh>
          </group>
        ))}
        <mesh position={[0, -0.43, 0]}>
          <boxGeometry args={[0.92, 0.065, 0.62]} />
          <meshStandardMaterial color="#c8a96e" emissive="#c8a96e" emissiveIntensity={0.15} metalness={0.7} />
        </mesh>
      </group>

      {/* ARMS */}
      {[-1, 1].map((side) => (
        <group key={side} ref={side === -1 ? leftArmRef : rightArmRef} position={[side * 0.62, 0.05, 0]}>
          <mesh position={[0, -0.17, 0]} material={mat.body}><capsuleGeometry args={[0.09, 0.2, 8, 16]} /></mesh>
          <mesh position={[0, -0.4, 0]} material={mat.bolt}><sphereGeometry args={[0.09, 12, 12]} /></mesh>
          <mesh position={[side * 0.04, -0.58, 0]} rotation={[0, 0, side * 0.14]} material={mat.bodyAccent}><capsuleGeometry args={[0.075, 0.16, 8, 16]} /></mesh>
        </group>
      ))}
    </group>
  )
}
