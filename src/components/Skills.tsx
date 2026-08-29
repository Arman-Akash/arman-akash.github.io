import { skills } from '../data/skills'
import { Section } from './Section'
import { Tag } from './Tag'

export function Skills() {
  return (
    <Section id="skills" title="Skills" tinted>
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
