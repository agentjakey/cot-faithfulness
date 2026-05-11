'use client'

import { BlockMath, InlineMath } from 'react-katex'

export function Block({ math }: { math: string }) {
  return <BlockMath math={math} />
}

export function Inline({ math }: { math: string }) {
  return <InlineMath math={math} />
}
