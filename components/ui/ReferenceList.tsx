import { CITATIONS } from '@/lib/citations'

export function ReferenceList() {
  return (
    <div
      style={{
        borderTop: '1px solid #E4E2DB',
        paddingTop: '32px',
        marginTop: '56px',
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '11px',
          color: '#5C5A54',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        References
      </p>
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {CITATIONS.map((c, i) => (
          <li
            key={c.id}
            id={`ref-${c.id}`}
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'baseline',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11px',
                color: '#C2411C',
                minWidth: '24px',
                flexShrink: 0,
              }}
            >
              [{i + 1}]
            </span>
            <span
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: '13px',
                color: '#5C5A54',
                lineHeight: 1.6,
              }}
            >
              <span style={{ fontWeight: 500, color: '#1A1915' }}>{c.authors}</span>
              {'. '}
              <span style={{ fontStyle: 'italic' }}>{c.title}</span>
              {'. '}
              {c.year}
              {c.venue && `. ${c.venue}`}.
              {c.url && (
                <>
                  {' '}
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#C2411C', textDecoration: 'underline', textUnderlineOffset: '2px' }}
                  >
                    [link]
                  </a>
                </>
              )}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
