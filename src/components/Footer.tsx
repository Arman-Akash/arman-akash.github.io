import { profile } from '../data/profile'
import { Icon } from './Icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-page py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-subtle">
          &copy; {year} {profile.name}
        </p>

        <ul className="no-print flex items-center gap-4">
          {profile.contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                aria-label={contact.label}
                title={contact.label}
                className="block text-subtle transition-colors hover:text-accent"
              >
                <Icon name={contact.icon} className="h-[18px] w-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
