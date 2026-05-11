import { ReactNode } from 'react'

interface FootnoteProps {
  id: string | number
  children: ReactNode
}

export function Footnote({ id, children }: FootnoteProps) {
  return (
    <span className="relative inline-block group align-baseline" tabIndex={0}>
      <sup className="font-mono text-[11px] text-accent cursor-help ml-[1px] select-none">
        [{id}]
      </sup>
      <span
        className="
          pointer-events-none absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2
          w-64 rounded bg-primary px-3 py-2.5 shadow-lg
          font-sans text-[12px] leading-relaxed text-background not-italic
          opacity-0 group-hover:opacity-100 group-focus:opacity-100
          transition-opacity duration-150
        "
      >
        {children}
        <span
          className="absolute top-full left-1/2 -translate-x-1/2 block w-0 h-0"
          style={{
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #1A1915',
          }}
        />
      </span>
    </span>
  )
}
