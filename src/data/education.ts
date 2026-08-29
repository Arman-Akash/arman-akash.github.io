import type { Credential, Education } from '../types'

export const education: Education[] = [
  {
    degree: 'BSc in Computer Science and Software Engineering',
    institution: 'American International University-Bangladesh',
    year: '2016',
    result: 'CGPA 3.76',
  },
  {
    degree: 'Higher Secondary School Certificate, Science',
    institution: 'Siddheswari Degree College, Dhaka',
    year: '2012',
    result: 'GPA 5.00',
  },
  {
    degree: 'Secondary School Certificate, Science',
    institution: 'Rampura Ekramunnesa High School, Dhaka',
    year: '2010',
    result: 'GPA 4.88',
  },
]

export const training: Credential[] = [
  {
    title: 'Advanced Certificate for Management Professionals (ACMP) 4.0',
    issuer: 'Institute of Business Administration (IBA)',
    year: '2020',
  },
  { title: 'Mobile Apps Development', issuer: 'LICT', year: '2016' },
  { title: 'Cisco Cyber Security', issuer: 'AIUB', year: '2016' },
]

export const awards: Credential[] = [
  {
    title: 'Runner-up, International Engineering Innovation Summit',
    issuer: 'Bangladesh',
    year: '2015',
  },
  { title: 'Volunteer', issuer: 'Filmy', year: '2015' },
]
