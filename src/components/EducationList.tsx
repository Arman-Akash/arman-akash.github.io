import { awards, education, training } from '../data/education'
import { Section } from './Section'

function CredentialList({ title, items }: { title: string; items: typeof training }) {
  return (
    <div>
      <h3 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.title}>
            <p className="text-sm font-medium text-ink">{item.title}</p>
            <p className="mt-0.5 text-sm text-subtle">
              {item.issuer} &middot; {item.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function EducationList() {
  return (
    <Section id="education" title="Education & training" tinted>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
            Education
          </h3>
          <ul className="mt-4 space-y-5">
            {education.map((item) => (
              <li key={item.degree}>
                <p className="text-sm font-medium text-ink">{item.degree}</p>
                <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
                <p className="mt-0.5 font-mono text-xs text-subtle">
                  {item.year}
                  {/* {item.result && ` \u00b7 ${item.result}`} */}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-10">
          <CredentialList title="Training" items={training} />
          <CredentialList title="Awards & activities" items={awards} />
        </div>
      </div>
    </Section>
  )
}
