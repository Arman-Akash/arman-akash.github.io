import type { Project } from '../types'

export const projects: Project[] = [
  {
    // Verified from the live site: "বাংলাদেশ জাতীয় কর্তৃপক্ষ, রাসায়নিক অস্ত্র কনভেনশন".
    name: 'Bangladesh National Authority for Chemical Weapons Convention',
    summary:
      'Public web portal for the national authority that administers Bangladesh\u2019s obligations under the Chemical Weapons Convention, under the Armed Forces Division. Bilingual content, document publishing, and public notices.',
    tech: ['ASP.NET', 'Entity Framework', 'JavaScript', 'MS SQL Server'],
    links: [{ label: 'Visit site', href: 'https://bnacwcafd.gov.bd/' }],
  },
  {
    // TODO(Arman): confirm the organisation name and what you built here - the
    // site did not respond when this was written, so this description is a
    // placeholder based on the domain.
    name: 'National Defence College, Bangladesh',
    summary:
      'Public web portal for a Bangladesh government institution, covering published content, notices, and departmental information.',
    tech: ['ASP.NET', 'Entity Framework', 'JavaScript', 'MS SQL Server'],
    links: [{ label: 'Visit site', href: 'https://ndc.gov.bd/' }],
  },
  {
    name: 'Math Zone',
    summary:
      'An application for children to practise arithmetic, with graded exercises and progress tracking. Built as a personal project.',
    tech: ['C#', '.NET'],
    links: [{ label: 'View on GitHub', href: 'https://github.com/arman-akash/MathZone' }],
  },
]
