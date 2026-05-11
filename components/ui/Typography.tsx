import { ReactNode } from 'react'

interface BaseProps {
  children: ReactNode
  className?: string
}

export function Prose({ children, className = '' }: BaseProps) {
  return (
    <div className={`font-serif text-[18px] leading-[1.8] text-primary space-y-5 ${className}`}>
      {children}
    </div>
  )
}

export function Lead({ children, className = '' }: BaseProps) {
  return (
    <p className={`font-sans text-xl leading-relaxed text-secondary ${className}`}>
      {children}
    </p>
  )
}

interface SectionHeadingProps {
  n: number
  children: ReactNode
  className?: string
}

export function SectionHeading({ n, children, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <span className="block font-mono text-xs text-accent tracking-widest uppercase mb-3">
        {String(n).padStart(2, '0')}
      </span>
      <h2 className="font-sans text-4xl font-semibold text-primary leading-tight">
        {children}
      </h2>
    </div>
  )
}

type AudienceTrack = 'nontechnical' | 'technical' | 'researcher'

interface CalloutProps extends BaseProps {
  track?: AudienceTrack
}

export function Callout({ children, className = '', track }: CalloutProps) {
  return (
    <aside
      data-track={track}
      className={`border-l-[3px] border-accent pl-5 py-0.5 my-8 ${className}`}
    >
      <div className="font-serif text-[17px] leading-[1.8] text-secondary">
        {children}
      </div>
    </aside>
  )
}

export function H1({ children, className = '' }: BaseProps) {
  return (
    <h1 className={`font-sans text-5xl md:text-6xl font-semibold text-primary leading-[1.1] ${className}`}>
      {children}
    </h1>
  )
}

export function H2({ children, className = '' }: BaseProps) {
  return (
    <h2 className={`font-sans text-3xl font-semibold text-primary leading-snug ${className}`}>
      {children}
    </h2>
  )
}

export function H3({ children, className = '' }: BaseProps) {
  return (
    <h3 className={`font-sans text-xl font-semibold text-primary leading-snug ${className}`}>
      {children}
    </h3>
  )
}

export function Body({ children, className = '' }: BaseProps) {
  return (
    <p className={`font-sans text-base text-secondary leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export function Mono({ children, className = '' }: BaseProps) {
  return (
    <span className={`font-mono text-sm text-secondary ${className}`}>
      {children}
    </span>
  )
}

export function Label({ children, className = '' }: BaseProps) {
  return (
    <span className={`font-mono text-xs text-secondary tracking-widest uppercase ${className}`}>
      {children}
    </span>
  )
}
