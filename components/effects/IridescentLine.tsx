'use client'

interface IridescentLineProps {
  vertical?: boolean
  length?: string
  style?: React.CSSProperties
}

export default function IridescentLine({ vertical = false, length = '100%', style }: IridescentLineProps) {
  return (
    <div
      style={{
        position: 'absolute',
        ...(vertical
          ? { width: 1, height: length, background: 'linear-gradient(180deg, transparent, rgba(120,180,220,0.3), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }
          : { height: 1, width: length, background: 'linear-gradient(90deg, transparent, rgba(120,180,220,0.3), rgba(200,169,110,0.3), rgba(180,120,220,0.2), transparent)' }),
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}
