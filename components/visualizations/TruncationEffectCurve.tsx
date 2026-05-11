'use client'

import { useState } from 'react'

type SeriesKey = 'Math + Small Model' | 'Math + Large Model' | 'Commonsense + Large Model' | 'Biased Input (any model)'

interface Series {
  points: [number, number][]
  color: string
  dashed: boolean
  label: string
}

const DATA: Record<SeriesKey, Series> = {
  'Math + Small Model': {
    points: [[0, 0.31], [0.2, 0.44], [0.4, 0.58], [0.6, 0.71], [0.8, 0.81], [1.0, 0.87]],
    color: '#C2411C',
    dashed: false,
    label: 'Math + Small Model',
  },
  'Math + Large Model': {
    points: [[0, 0.61], [0.2, 0.67], [0.4, 0.72], [0.6, 0.77], [0.8, 0.82], [1.0, 0.85]],
    color: '#8b2020',
    dashed: false,
    label: 'Math + Large Model',
  },
  'Commonsense + Large Model': {
    points: [[0, 0.79], [0.2, 0.80], [0.4, 0.81], [0.6, 0.80], [0.8, 0.82], [1.0, 0.82]],
    color: '#555',
    dashed: false,
    label: 'Commonsense + Large Model',
  },
  'Biased Input (any model)': {
    points: [[0, 0.52], [0.2, 0.52], [0.4, 0.51], [0.6, 0.53], [0.8, 0.52], [1.0, 0.52]],
    color: '#F59E0B',
    dashed: true,
    label: 'Biased Input (any model)',
  },
}

// Chart geometry
const ML = 52  // margin left
const MR = 20
const MT = 16
const MB = 48
const CW = 520
const CH = 260
const PW = CW - ML - MR  // 448
const PH = CH - MT - MB  // 196

function toSVG(x: number, y: number): [number, number] {
  const sx = ML + x * PW
  const sy = MT + (1 - y) * PH
  return [sx, sy]
}

function catmullRomPath(pts: [number, number][]): string {
  if (pts.length < 2) return ''
  const svg = pts.map(([x, y]) => toSVG(x, y))
  const d: string[] = [`M ${svg[0][0]} ${svg[0][1]}`]
  for (let i = 0; i < svg.length - 1; i++) {
    const p0 = svg[Math.max(0, i - 1)]
    const p1 = svg[i]
    const p2 = svg[i + 1]
    const p3 = svg[Math.min(svg.length - 1, i + 2)]
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6
    d.push(`C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2[0]} ${p2[1]}`)
  }
  return d.join(' ')
}

const Y_TICKS = [0, 0.2, 0.4, 0.6, 0.8, 1.0]
const X_TICKS = [0, 0.2, 0.4, 0.6, 0.8, 1.0]

export function TruncationEffectCurve() {
  const [hovered, setHovered] = useState<SeriesKey | null>(null)
  const keys = Object.keys(DATA) as SeriesKey[]

  return (
    <div>
      <svg
        viewBox={`0 0 ${CW} ${CH}`}
        style={{ width: '100%', display: 'block', marginBottom: '16px' }}
        aria-label="Truncation effect curve showing task accuracy vs fraction of chain-of-thought retained"
      >
        {/* Grid lines */}
        {Y_TICKS.map(y => {
          const [, sy] = toSVG(0, y)
          return (
            <line key={y} x1={ML} y1={sy} x2={ML + PW} y2={sy}
              stroke="#E4E2DB" strokeWidth="0.8" />
          )
        })}

        {/* Y axis labels */}
        {Y_TICKS.map(y => {
          const [, sy] = toSVG(0, y)
          return (
            <text key={y} x={ML - 8} y={sy + 4} textAnchor="end"
              fontFamily="'DM Mono', monospace" fontSize="10" fill="#5C5A54">
              {Math.round(y * 100)}%
            </text>
          )
        })}

        {/* X axis labels */}
        {X_TICKS.map(x => {
          const [sx] = toSVG(x, 0)
          return (
            <text key={x} x={sx} y={MT + PH + 18} textAnchor="middle"
              fontFamily="'DM Mono', monospace" fontSize="10" fill="#5C5A54">
              {Math.round(x * 100)}%
            </text>
          )
        })}

        {/* Axis labels */}
        <text
          x={ML + PW / 2} y={CH - 2} textAnchor="middle"
          fontFamily="'Sora', sans-serif" fontSize="11" fill="#5C5A54"
        >
          Fraction of Chain of Thought Retained
        </text>
        <text
          x={12} y={MT + PH / 2} textAnchor="middle"
          fontFamily="'Sora', sans-serif" fontSize="11" fill="#5C5A54"
          transform={`rotate(-90, 12, ${MT + PH / 2})`}
        >
          Task Accuracy
        </text>

        {/* Series paths */}
        {keys.map(key => {
          const s = DATA[key]
          const isHov = hovered === key
          const dimmed = hovered !== null && !isHov
          return (
            <g key={key} style={{ cursor: 'pointer' }} onMouseEnter={() => setHovered(key)} onMouseLeave={() => setHovered(null)}>
              <path
                d={catmullRomPath(s.points)}
                fill="none"
                stroke={s.color}
                strokeWidth={isHov ? 3 : 2}
                strokeDasharray={s.dashed ? '7,4' : undefined}
                opacity={dimmed ? 0.25 : 1}
                style={{ transition: 'opacity 0.15s ease, stroke-width 0.15s ease' }}
              />
              {/* Dots */}
              {s.points.map(([x, y], i) => {
                const [sx, sy] = toSVG(x, y)
                return (
                  <circle key={i} cx={sx} cy={sy} r={isHov ? 4 : 3}
                    fill={s.color} opacity={dimmed ? 0.25 : 1}
                    style={{ transition: 'opacity 0.15s ease, r 0.15s ease' }}
                  />
                )
              })}
            </g>
          )
        })}

        {/* Border */}
        <rect x={ML} y={MT} width={PW} height={PH} fill="none" stroke="#E4E2DB" strokeWidth="1" />
      </svg>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
        {keys.map(key => {
          const s = DATA[key]
          const isHov = hovered === key
          return (
            <div
              key={key}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', opacity: hovered && !isHov ? 0.4 : 1, transition: 'opacity 0.15s ease' }}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
            >
              <svg width="28" height="12" style={{ flexShrink: 0 }}>
                <line
                  x1="0" y1="6" x2="28" y2="6"
                  stroke={s.color} strokeWidth="2"
                  strokeDasharray={s.dashed ? '5,3' : undefined}
                />
              </svg>
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: '12px', color: '#5C5A54' }}>
                {s.label}
              </span>
            </div>
          )
        })}
      </div>

      <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '13px', color: '#5C5A54', lineHeight: 1.7 }}>
        Schematic illustration inspired by Lanham et al. (2023). When truncating the chain of
        thought reduces accuracy, the reasoning was doing real computational work (faithful regime).
        When accuracy is unaffected, the reasoning was post-hoc. The biased condition shows that
        even a fully preserved chain of thought cannot recover from an input-level bias it never
        acknowledged.
      </p>
    </div>
  )
}
