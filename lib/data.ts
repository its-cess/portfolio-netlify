export interface Project {
  id: number
  title: string
  description: string
  details: string
  tech: string[]
  github: string
  live: string
  image: string
}

export interface Experience {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface Education {
  school: string
  degree: string
  year: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BookTalk',
    description:
      'A social platform for book lovers to share reviews, discover new reads, and connect with fellow readers.',
    details:
      'BookTalk is a full-stack social platform built for book enthusiasts. Users can create posts about books they\'re reading, write reviews, discover new reads, and connect with other readers. [Placeholder — add more detail about tech decisions, architecture, and challenges here.]',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/its-cess/booktalk',
    live: 'https://booktalksocial.com',
    image: '/images/projects/booktalk.png',
  },
  {
    id: 2,
    title: 'Project Title',
    description: 'Placeholder — new project coming soon.',
    details: 'Placeholder details for upcoming project.',
    tech: ['TBD'],
    github: '#',
    live: '#',
    image: '/images/projects/placeholder.png',
  },
  {
    id: 3,
    title: 'Velvet Acres',
    description: 'Placeholder description for the Velvet Acres project.',
    details: 'Placeholder details for Velvet Acres.',
    tech: ['React', 'Netlify'],
    github: '#',
    live: '#',
    image: '/images/projects/velvet-acres.png',
  },
]

export const experiences: Experience[] = [
  {
    company: 'Postman',
    role: 'Software Engineer II',
    period: '20XX – Present',
    bullets: [
      'Placeholder bullet — describe a key responsibility or achievement.',
      'Placeholder bullet — describe a key responsibility or achievement.',
      'Placeholder bullet — describe a key responsibility or achievement.',
    ],
  },
  {
    company: 'Postman',
    role: 'Software Engineer I',
    period: '20XX – 20XX',
    bullets: [
      'Placeholder bullet — describe a key responsibility or achievement.',
      'Placeholder bullet — describe a key responsibility or achievement.',
    ],
  },
  {
    company: 'Company Name',
    role: 'Role Title',
    period: '20XX – 20XX',
    bullets: [
      'Placeholder bullet — describe a key responsibility or achievement.',
      'Placeholder bullet — describe a key responsibility or achievement.',
    ],
  },
]

export const education: Education[] = [
  {
    school: 'University Name',
    degree: 'Bachelor of Science in Software Engineering',
    year: '20XX',
  },
]
