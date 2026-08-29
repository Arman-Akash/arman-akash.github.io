import { experience } from '../data/experience'
import { Section } from './Section'
import { Tag } from './Tag'

export function ExperienceList() {
  return (
    <Section
      id="experience"
      title="Experience"
      lead="Nine years of building and running business systems, most of it in the .NET ecosystem."
    >
      <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => {
          const current = job.roles[0].end === 'Present'

          return (
            <li key={job.company} className="relative">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[calc(1.5rem+4.5px)] h-2.5 w-2.5 rounded-full sm:-left-[calc(2rem+4.5px)] ${
                  current ? 'bg-accent ring-4 ring-accent/20' : 'bg-line'
                }`}
              />

              <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
              {job.location && <p className="mt-0.5 text-sm text-subtle">{job.location}</p>}

              {/* Multiple roles render as a promotion track. */}
              <ul className="mt-3 space-y-1.5">
                {job.roles.map((role) => (
                  <li
                    key={role.title + role.start}
                    className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
                  >
                    <span className="font-medium text-ink">{role.title}</span>
                    <span className="font-mono text-xs text-subtle">
                      {role.start} &ndash; {role.end}
                    </span>
                    {role.end === 'Present' && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
                        Current
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:top-[0.6em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/60 before:content-['']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
