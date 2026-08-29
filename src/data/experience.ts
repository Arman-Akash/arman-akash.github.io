import type { Experience } from '../types'

/**
 * Newest first. A company with more than one entry in `roles` renders as a
 * promotion track, with the shared `bullets` describing the work overall.
 */
export const experience: Experience[] = [
  {
    company: 'Square Informatix Limited',
    location: 'Dhaka, Bangladesh',
    roles: [
      { title: 'Senior Programmer', start: 'Jan 2025', end: 'Present' },
      { title: 'Programmer', start: 'Sep 2022', end: 'Dec 2024' },
    ],
    bullets: [
      'Build and maintain inventory management, customer quality management, and sales and distribution applications.',
      'Deploy and support those applications on Windows Server, and handle client support directly.',
      'Prepare project documentation: FRS, data dictionaries, ERDs, and user-flow diagrams.',
      'Apply SOLID design principles across the codebase.',
    ],
    tech: [
      'ASP.NET Core',
      'ASP.NET MVC',
      'Entity Framework',
      'ADO.NET',
      'AngularJS',
      'Oracle',
      'MS SQL Server',
    ],
  },
  {
    company: 'Solution Art Limited',
    location: 'Dhaka, Bangladesh',
    roles: [
      { title: 'Software Engineer (Full-stack)', start: 'Aug 2020', end: 'Aug 2022' },
    ],
    bullets: [
      'Implemented a web-based ERP system for a pharmaceutical company.',
      'Implemented an Integrated Management System.',
      'Worked on microservices and developed APIs following SOLID design principles.',
      'Deployed applications to production on both Linux and Windows.',
      'Gathered requirements and handled change requests directly with clients.',
      'Took part in project schedule planning.',
    ],
    tech: [
      'ASP.NET Web API',
      'Entity Framework (Code First)',
      'React',
      'Identity Server 4',
      'MS SQL Server',
      'MySQL',
      'Azure',
    ],
  },
  {
    company: 'SElevenIT Limited',
    location: 'Dhaka, Bangladesh',
    roles: [
      { title: 'Software Engineer (Full-stack)', start: 'Oct 2017', end: 'Jul 2020' },
    ],
    bullets: [
      'Developed and maintained web applications, including public government portals.',
      'Analysed requirements and defined project scopes.',
      'Led a development team.',
      'Deployed applications to production and communicated with clients on changes and maintenance.',
    ],
    tech: [
      'ASP.NET Core',
      'Entity Framework (Code First)',
      'JavaScript',
      'jQuery',
      'Python',
      'MS SQL Server',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    company: 'Islam Garments Ltd.',
    location: 'Dhaka, Bangladesh',
    roles: [
      { title: 'Software Developer (Intern)', start: 'Oct 2016', end: 'Jan 2017' },
    ],
    bullets: [
      'Developed web APIs and built a cross-platform mobile application.',
      'Analysed the existing ERP database and selected the datasets the app needed.',
      'Generated chart-based reports for the mobile application.',
      'Took part in software architecture design.',
    ],
    tech: [
      'ASP.NET MVC',
      'Entity Framework (Code First)',
      'LINQ',
      'Angular 2',
      'TypeScript',
      'MS SQL Server',
    ],
  },
]
