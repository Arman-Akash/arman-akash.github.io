/** Shared shapes for everything under `src/data`. */

export interface Role {
  title: string
  /** Human-readable, e.g. "Jan 2025". */
  start: string
  /** Human-readable, or "Present". */
  end: string
  /** Optional bullets specific to this role, on top of the company-level ones. */
  bullets?: string[]
}

export interface Experience {
  company: string
  location?: string
  /** Newest role first. Multiple entries render as a promotion track. */
  roles: Role[]
  /** Work done at this company, shared across its roles. */
  bullets: string[]
  tech: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Project {
  name: string
  summary: string
  tech: string[]
  links: { label: string; href: string }[]
}

export interface Education {
  degree: string
  institution: string
  year: string
  /** e.g. "CGPA 3.76" */
  result?: string
}

export interface Credential {
  title: string
  issuer: string
  year: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
  icon: 'mail' | 'phone' | 'linkedin' | 'github' | 'location'
}
