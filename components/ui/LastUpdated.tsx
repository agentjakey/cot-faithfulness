import { LAST_UPDATED } from '@/lib/config'

export function LastUpdated() {
  return (
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.9em',
        color: '#5C5A54',
      }}
    >
      {LAST_UPDATED}
    </span>
  )
}
