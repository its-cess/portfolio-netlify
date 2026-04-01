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
    role: 'Software Engineer — Flows Product Team',
    period: 'August 2024 – Present',
    bullets: [
      'Led development of "Requests in Flows," reducing workflow friction and increasing user return rates by 2x.',
      'Owned and delivered a large-scale architectural refactor consolidating two core flow primitives into a single unified entity — reducing user confusion, eliminating feature inconsistency, and simplifying future development across the codebase.',
      'Authored RFCs outlining technical approach, trade-offs, and implementation plans for new features and system improvements.',
      'Defined and implemented event tracking for new features in collaboration with the data team, enabling measurement of user adoption and feature success.',
      'Integrated AI-assisted tooling into the development workflow to increase productivity and improve feature delivery turnaround.',
    ],
  },
  {
    company: 'Postman',
    role: 'Software Engineer — Marketing Engineering Team',
    period: 'November 2023 – August 2024',
    bullets: [
      'Optimized npm package library components, cutting internal development time by 80%.',
      'Implemented dynamic social media preview images with Next.js and Cloudinary, increasing user engagement by 20%.',
      'Built reusable React components for POST/CON 24, Postman\'s annual developer conference with 700+ attendees.',
      'Migrated the documentation web app from Gatsby v4 to Next.js v14.',
    ],
  },
  {
    company: 'Wethos',
    role: 'Frontend Developer',
    period: 'March 2022 – September 2022',
    bullets: [
      'Delivered UI enhancements and new functionality that increased product usage by 25% and user return rates by 50%.',
      'Reduced loading times and implemented skeleton loading to improve perceived performance and user experience.',
    ],
  },
]

export const education: Education[] = [
  {
    school: 'Western Governors University',
    degree: 'Bachelor of Science in Software Engineering',
    year: 'October 2024',
  },
]
