import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      'ASP.NET Core',
      'ASP.NET MVC',
      'ASP.NET Web API',
      'Entity Framework',
      'ADO.NET',
      'LINQ',
      'React',
      'AngularJS',
      'jQuery',
    ],
  },
  {
    label: 'Databases',
    items: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'Oracle'],
  },
  {
    label: 'Platforms & Tools',
    items: ['Azure', 'Windows Server', 'Linux', 'IIS', 'Git', 'Identity Server 4', 'Microservices'],
  },
  {
    label: 'Practices',
    items: [
      'SOLID design principles',
      'Agile / Scrum',
      'Requirements analysis',
      'Technical documentation (FRS, ERD)',
      'Team leadership',
    ],
  },
]
