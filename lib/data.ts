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
      'A full-stack social platform for book lovers. Share reviews, follow readers, get a personalized feed, and discover new reads — production-deployed with real infrastructure.',
    details:
      'Built as a pnpm workspaces monorepo with a shared @booktalk/shared package containing Zod schemas and TypeScript types consumed by both the API and web app — a single source of truth for data shapes that eliminates frontend/backend contract bugs. The React/TypeScript frontend communicates with a Fastify/Node.js API backed by PostgreSQL via Prisma on Supabase. Avatar uploads use a presigned Cloudflare R2 flow so binary data never touches the API server. Many endpoints use optional auth — unauthenticated users can browse, authenticated users get enriched responses — avoiding duplicated routes. Full CI pipeline via GitHub Actions runs linting, typechecking, and tests on every PR.',
    tech: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'TanStack Query', 'Tailwind CSS', 'Supabase', 'Cloudflare', 'pnpm workspaces'],
    github: 'https://github.com/its-cess/booktalk',
    live: 'https://booktalksocial.com',
    image: '/images/projects/booktalk.png',
  },
  {
    id: 2,
    title: 'Velvet Acres',
    description:
      'A website for a horse boarding facility, built with a headless CMS so the business owner can update content — text, images, and more — without touching code.',
    details:
      'Velvet Acres is a SvelteKit site backed by Sanity CMS, built with a non-technical business owner in mind. Content is managed entirely through the Sanity Studio interface, meaning the owner can update boarding rates, facility info, and images after launch without any developer involvement. Portable Text blocks from Sanity are rendered via @portabletext/svelte, giving the CMS full rich-text flexibility. Deployed on Netlify using the SvelteKit Netlify adapter with SSR support.',
    tech: ['SvelteKit', 'Sanity CMS', 'Tailwind CSS', 'Vite', 'Netlify'],
    github: 'https://github.com/its-cess/velvet-acres',
    live: 'https://velvetacres.netlify.app/',
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
