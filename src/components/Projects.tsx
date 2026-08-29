import { projects } from '../data/projects'
import { Icon } from './Icon'
import { Section } from './Section'
import { Tag } from './Tag'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Selected work"
      lead="Public-facing systems I helped build, plus a personal project."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/50"
          >
            <h3 className="text-base font-semibold text-ink">{project.name}</h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-75"
                >
                  {link.label}
                  <Icon name="external" className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
