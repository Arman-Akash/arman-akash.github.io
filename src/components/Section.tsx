import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  /** Short line under the heading. */
  lead?: string
  /** Tints the band so adjacent sections separate without borders. */
  tinted?: boolean
  children: ReactNode
}

/**
 * The only place section spacing, width, and heading style are defined.
 * Every section uses it - do not re-implement this per section.
 */
export function Section({ id, title, lead, tinted = false, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`reveal scroll-mt-20 py-20 sm:py-24 ${tinted ? 'bg-surface' : 'bg-page'}`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <header className="mb-10 sm:mb-12">
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            {title}
          </h2>
          <div className="mt-3 h-px w-14 bg-accent" aria-hidden="true" />
          {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
