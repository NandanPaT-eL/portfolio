// 'use client'

// interface CrystalOrbProps {
//   size?: number
//   color?: string
//   top?: string
//   left?: string
//   right?: string
//   bottom?: string
//   opacity?: number
//   delay?: number
//   duration?: number
//   blur?: number
// }

// export default function CrystalOrb({
//   size = 400,
//   color = '120, 180, 220',
//   top,
//   left,
//   right,
//   bottom,
//   opacity = 0.08,
//   delay = 0,
//   duration = 12,
//   blur = 80,
// }: CrystalOrbProps) {
//   return (
//     <div
//       style={{
//         position: 'absolute',
//         width: size,
//         height: size,
//         borderRadius: '50%',
//         background: `radial-gradient(circle at 40% 40%, rgba(${color}, ${opacity * 2}) 0%, rgba(${color}, ${opacity}) 50%, transparent 70%)`,
//         filter: `blur(${blur}px)`,
//         pointerEvents: 'none',
//         animation: `liquidMorph ${duration}s ease-in-out infinite, float ${duration * 0.7}s ease-in-out infinite`,
//         animationDelay: `${delay}s`,
//         mixBlendMode: 'screen',
//         top, left, right, bottom,
//         zIndex: 0,
//       }}
//     />
//   )
// }
