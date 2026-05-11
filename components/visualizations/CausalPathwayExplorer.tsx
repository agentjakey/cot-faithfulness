'use client'

import { useState } from 'react'

const W = 640
const H = 240

const NX = 80
const COTX = 320
const YX = 560
const NY = 120

const NODE_W = 100
const NODE_H = 44

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function Arrow({
  x1, y1, x2, y2, color, opacity, dashed, markerId,
}: {
  x1: number; y1: number; x2: number; y2: number
  color: string; opacity: number; dashed?: boolean; markerId: string
}) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.sqrt(dx * dx + dy * dy)
  const ux = dx / len
  const uy = dy / len
  const endX = x2 - ux * 8
  const endY = y2 - uy * 8

  return (
    <g opacity={opacity}>
      <defs>
        <marker id={markerId} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={color} />
        </marker>
      </defs>
      <line
        x1={x1} y1={y1} x2={endX} y2={endY}
        stroke={color}
        strokeWidth="2"
        strokeDasharray={dashed ? '6,4' : undefined}
        markerEnd={`url(#${markerId})`}
      />
    </g>
  )
}

function Node({
  cx, cy, label, color, opacity,
}: {
  cx: number; cy: number; label: string; color: string; opacity: number
}) {
  return (
    <g opacity={opacity}>
      <rect
        x={cx - NODE_W / 2} y={cy - NODE_H / 2}
        width={NODE_W} height={NODE_H}
        rx="5"
        fill="#FAFAF8"
        stroke={color}
        strokeWidth="1.5"
      />
      <text
        x={cx} y={cy + 5}
        textAnchor="middle"
        fontFamily="'Sora', sans-serif"
        fontSize="13"
        fill={color}
      >
        {label}
      </text>
    </g>
  )
}

export function CausalPathwayExplorer() {
  const [bias, setBias] = useState(0)

  // mediation path dims as bias grows
  const medOpacity = lerp(1, 0.2, bias)
  // direct path brightens as bias grows
  const directOpacity = lerp(0, 1, bias)
  // CoT node dims
  const cotColor = bias > 0.5 ? '#aaa' : '#C2411C'
  const cotOpacity = lerp(1, 0.4, bias)

  // annotations
  const dePercent = Math.round(bias * 100)
  const iePercent = 100 - dePercent

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', display: 'block', marginBottom: '24px' }}
        aria-label="Causal pathway explorer showing faithful vs unfaithful chain-of-thought structure"
      >
        {/* Input X node */}
        <Node cx={NX} cy={NY} label="Input X" color="#1A1915" opacity={1} />

        {/* Mediated path: X -> CoT -> Y */}
        <Arrow
          x1={NX + NODE_W / 2} y1={NY - 10}
          x2={COTX - NODE_W / 2} y2={NY - 10}
          color="#1A1915" opacity={medOpacity}
          markerId="arr-xcot"
        />
        <Node cx={COTX} cy={NY} label="Chain of Thought" color={cotColor} opacity={cotOpacity} />
        <Arrow
          x1={COTX + NODE_W / 2} y1={NY - 10}
          x2={YX - NODE_W / 2} y2={NY - 10}
          color="#1A1915" opacity={medOpacity * 0.9}
          dashed={bias > 0.3}
          markerId="arr-coty"
        />

        {/* Direct path: X -> Y (curves below) */}
        <g opacity={directOpacity}>
          <defs>
            <marker id="arr-direct" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#C2411C" />
            </marker>
          </defs>
          <path
            d={`M ${NX + NODE_W / 2} ${NY + 14} C ${NX + 180} ${NY + 80} ${YX - 200} ${NY + 80} ${YX - NODE_W / 2} ${NY + 14}`}
            fill="none"
            stroke="#C2411C"
            strokeWidth="2"
            markerEnd="url(#arr-direct)"
          />
          <text
            x={W / 2} y={NY + 76}
            textAnchor="middle"
            fontFamily="'Sora', sans-serif"
            fontSize="11"
            fill="#C2411C"
          >
            direct effect
          </text>
        </g>

        {/* Answer Y node */}
        <Node cx={YX} cy={NY} label="Answer Y" color="#1A1915" opacity={1} />

        {/* Annotation */}
        <text x={W / 2} y={36} textAnchor="middle" fontFamily="'DM Mono', monospace" fontSize="12" fill="#5C5A54">
          {`IE ≈ ${iePercent}%`}
          {'  |  '}
          {`DE ≈ ${dePercent}%`}
        </text>
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '480px', margin: '0 auto 12px' }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#5C5A54', whiteSpace: 'nowrap', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Bias Strength
        </span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={bias}
          onChange={e => setBias(Number(e.target.value))}
          style={{ flexGrow: 1, accentColor: '#C2411C', cursor: 'pointer' }}
          aria-label="Bias strength slider"
        />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#C2411C', minWidth: '36px' }}>
          {Math.round(bias * 100)}%
        </span>
      </div>

      <p style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '14px', color: '#5C5A54', lineHeight: 1.7, textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
        At low bias, the reasoning mediates the answer. As bias strength grows, the direct path from
        input to answer takes over — and the chain of thought becomes a description of an answer
        already determined.
      </p>
    </div>
  )
}
