import type { ContactLink } from '../types'

export const profile = {
  name: 'Arman Hossain',
  role: 'Senior Programmer',
  specialism: 'C# / .NET',
  location: 'Dhaka, Bangladesh',

  /**
   * Sign up at https://formspree.io (free tier: 50 submissions/month), create a
   * form, and paste its ID here. Until then the contact form falls back to a
   * mailto link. This ID is public by design - it ships in the client bundle.
   */
  formspreeId: '',

  tagline:
    'I build the line-of-business systems companies actually run on - ERP, inventory, sales and distribution - mostly in C# and ASP.NET Core.',

  /** Shown in the About section. Keep it to two or three short paragraphs. */
  about: [
    "I'm a full-stack engineer with nine years in the .NET ecosystem, currently Senior Programmer at Square Informatix in Dhaka. Most of my work is the unglamorous, high-stakes kind: inventory management, quality control, and sales and distribution systems that a business grinds to a halt without.",
    "Before Square I implemented a web-based ERP for a pharmaceutical company at Solution Art, built out microservices and API authentication with Identity Server 4, and led a small development team at SElevenIT. I've shipped to Windows, Linux, and Azure, and I've sat on the client side of the requirements conversation often enough to know that most bugs start there.",
    "I care about SOLID design principles and code that the next person can read. I write the documentation too - FRS, data dictionaries, ERDs, user-flow diagrams - because the handover is part of the job.",
  ],

  /** Three headline numbers for the About section. Keep these honest. */
  stats: [
    { value: '9+', label: 'Years building software' },
    { value: '4', label: 'Companies shipped for' },
    { value: '30+', label: 'projects involvement' },
  ],

  cvPath: 'Arman_Hossain.pdf',

  /**
   * The street address on the CV is deliberately left off the public site -
   * city and country is the professional norm.
   */
  contacts: [
    {
      label: 'Email',
      value: 'arman.akash470@gmail.com',
      href: 'mailto:arman.akash470@gmail.com',
      icon: 'mail',
    },
    {
      label: 'Phone',
      value: '+880 1688 746470',
      href: 'tel:+8801688746470',
      icon: 'phone',
    },
    {
      label: 'LinkedIn',
      value: 'in/arman-akash',
      href: 'https://www.linkedin.com/in/arman-akash',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      value: 'arman-akash',
      href: 'https://github.com/arman-akash',
      icon: 'github',
    },
  ] satisfies ContactLink[],
}

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  // Disabled while the Projects section is commented out in App.tsx - a nav link
  // to a section that is not rendered would scroll nowhere. Re-enable both together.
  // { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
