'use client'

import { useState, useEffect } from 'react'

type Track = 'nontechnical' | 'technical' | 'researcher'

const TRACKS: { id: Track; label: string; note: string }[] = [
  {
    id: 'nontechnical',
    label: 'Non-technical',
    note: 'Analogies emphasized. No prior ML background assumed.',
  },
  {
    id: 'technical',
    label: 'Technical',
    note: 'Assumes familiarity with neural networks and causal reasoning.',
  },
  {
    id: 'researcher',
    label: 'Researcher',
    note: 'Assumes fluency with the mechanistic interpretability and CoT literature.',
  },
]

const STORAGE_KEY = 'cot-audience'

export function AudienceTrack() {
  const [active, setActive] = useState<Track | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Track | null
    if (stored && TRACKS.some((t) => t.id === stored)) {
      setActive(stored)
      document.body.setAttribute('data-audience', stored)
    }
  }, [])

  function select(track: Track) {
    if (active === track) {
      setActive(null)
      localStorage.removeItem(STORAGE_KEY)
      document.body.removeAttribute('data-audience')
    } else {
      setActive(track)
      localStorage.setItem(STORAGE_KEY, track)
      document.body.setAttribute('data-audience', track)
    }
  }

  const activeNote = TRACKS.find((t) => t.id === active)?.note

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="font-sans text-secondary shrink-0"
          style={{ fontSize: '12px', marginRight: '4px' }}
        >
          How to read this:
        </span>

        {TRACKS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => select(id)}
            className="font-sans border transition-all duration-150"
            style={{
              fontSize: '12px',
              padding: '4px 14px',
              borderRadius: '20px',
              color: active === id ? '#FAFAF8' : '#5C5A54',
              backgroundColor: active === id ? '#C2411C' : 'transparent',
              borderColor: active === id ? '#C2411C' : '#E4E2DB',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              if (active !== id) {
                e.currentTarget.style.borderColor = '#5C5A54'
              }
            }}
            onMouseLeave={(e) => {
              if (active !== id) {
                e.currentTarget.style.borderColor = '#E4E2DB'
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <p
        className="font-sans text-secondary"
        style={{
          fontSize: '12px',
          marginTop: '6px',
          minHeight: '1rem',
          opacity: activeNote ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        {activeNote}
      </p>
    </div>
  )
}
