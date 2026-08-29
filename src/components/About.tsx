import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About" tinted>
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {profile.stats.map((stat) => (
            /* Value first visually, but dt still precedes dd in the DOM so the
               list stays valid and screen readers read each label once. */
            <div
              key={stat.label}
              className="flex flex-col rounded-lg border border-line bg-page px-4 py-5 text-center md:text-left"
            >
              <dt className="order-2 mt-1 text-xs leading-snug text-subtle">{stat.label}</dt>
              <dd className="order-1 text-2xl font-semibold text-accent sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
