'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bebas text-2xl text-white tracking-widest hover:text-magenta transition-colors"
        >
          Cecily Toro
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-magenta transition-colors font-medium tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/its-cess"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/60 hover:text-magenta transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/cecilytoro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/60 hover:text-magenta transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:torocecily@gmail.com"
              aria-label="Email"
              className="text-white/60 hover:text-magenta transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
