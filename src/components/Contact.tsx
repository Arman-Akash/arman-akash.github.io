import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile'
import { Icon } from './Icon'
import { Section } from './Section'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface Fields {
  name: string
  email: string
  message: string
}

const EMPTY: Fields = { name: '', email: '', message: '' }

const emailAddress = profile.contacts.find((contact) => contact.icon === 'mail')?.value ?? ''

function validate(fields: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {}
  if (!fields.name.trim()) errors.name = 'Please enter your name.'
  if (!fields.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
    errors.email = 'That does not look like a valid email address.'
  if (!fields.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

const fieldClass =
  'w-full rounded-md border bg-page px-3 py-2.5 text-sm text-ink placeholder:text-subtle/70 transition-colors focus:border-accent focus:outline-none'

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const configured = profile.formspreeId.length > 0

  const update = (key: keyof Fields) => (event: { target: { value: string } }) => {
    setFields((current) => ({ ...current, [key]: event.target.value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // Honeypot: bots fill hidden inputs, people cannot see them.
    const honeypot = new FormData(event.currentTarget).get('_gotcha')
    if (typeof honeypot === 'string' && honeypot.length > 0) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
          _subject: `Portfolio message from ${fields.name}`,
        }),
      })

      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)

      setStatus('success')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      title="Get in touch"
      lead="Open to senior C#/.NET roles and interesting problems. The fastest way to reach me is email."
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <ul className="space-y-4">
          {profile.contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 text-accent">
                  <Icon name={contact.icon} className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-subtle uppercase">
                    {contact.label}
                  </span>
                  <span className="block text-sm text-ink transition-colors group-hover:text-accent">
                    {contact.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
          <li className="flex items-start gap-3">
            <span className="mt-0.5 text-accent">
              <Icon name="location" className="h-[18px] w-[18px]" />
            </span>
            <span>
              <span className="block text-xs tracking-wide text-subtle uppercase">Location</span>
              <span className="block text-sm text-ink">{profile.location}</span>
            </span>
          </li>
        </ul>

        <div className="no-print rounded-lg border border-line bg-surface p-6">
          {status === 'success' ? (
            <div role="status" className="py-6 text-center">
              <p className="text-base font-semibold text-ink">Thanks &mdash; message sent.</p>
              <p className="mt-2 text-sm text-muted">I&rsquo;ll get back to you shortly.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-5 text-sm font-medium text-accent hover:opacity-75"
              >
                Send another message
              </button>
            </div>
          ) : !configured ? (
            /* No Formspree ID yet - never show a form that silently goes nowhere. */
            <div className="py-4">
              <p className="text-sm leading-relaxed text-muted">
                The contact form isn&rsquo;t connected yet. In the meantime, email me directly:
              </p>
              <a
                href={`mailto:${emailAddress}`}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
              >
                <Icon name="mail" className="h-4 w-4" />
                {emailAddress}
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={update('name')}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`${fieldClass} ${errors.name ? 'border-red-500' : 'border-line'}`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={update('email')}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`${fieldClass} ${errors.email ? 'border-red-500' : 'border-line'}`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={fields.message}
                  onChange={update('message')}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${fieldClass} resize-y ${errors.message ? 'border-red-500' : 'border-line'}`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Spam honeypot - hidden from people, tempting to bots. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-px w-px opacity-0"
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'error' && (
                <p role="alert" className="text-sm text-muted">
                  Something went wrong sending that. Please email me directly at{' '}
                  <a href={`mailto:${emailAddress}`} className="font-medium text-accent underline">
                    {emailAddress}
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
