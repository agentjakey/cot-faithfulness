import { getCitationIndex } from '@/lib/citations'

export function Cite({ id }: { id: string }) {
  const n = getCitationIndex(id)
  if (n === 0) return null
  return (
    <a
      href={`#ref-${id}`}
      aria-label={`Reference ${n}`}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '11px',
        lineHeight: 0,
        verticalAlign: 'super',
        color: '#C2411C',
        textDecoration: 'none',
        marginLeft: '1px',
      }}
    >
      [{n}]
    </a>
  )
}
