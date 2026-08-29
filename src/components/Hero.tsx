import { profile } from '../data/profile'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-page pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Soft accent wash behind the headline. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <p className="font-mono text-sm text-accent">Hello, I&rsquo;m</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl font-medium text-muted sm:text-2xl">
          {profile.role}
          <span className="mx-2 text-line" aria-hidden="true">
            /
          </span>
          <span className="text-ink">{profile.specialism}</span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.tagline}
        </p>

        <div className="no-print mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </a>
          <a
            href={`${import.meta.env.BASE_URL}${profile.cvPath}`}
            download
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="download" className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-subtle">
          <li className="inline-flex items-center gap-2">
            <Icon name="location" className="h-4 w-4" />
            {profile.location}
          </li>
          {profile.contacts
            .filter((contact) => contact.icon === 'linkedin' || contact.icon === 'github')
            .map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Icon name={contact.icon} className="h-4 w-4" />
                  {contact.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
