import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/its-cess',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cecilytoro/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:torocecily@gmail.com',
    icon: Mail,
  },
]

export function Hero() {
  return (
    <section id="home" className="bg-charcoal pt-16">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 flex items-start justify-between gap-12">
        {/* Left: content */}
        <div className="flex-1">
          <p className="text-magenta text-lg font-medium tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </p>

          <h1 className="font-bebas text-[7rem] md:text-[10rem] leading-none text-white tracking-wide mb-4">
            Cecily Toro
          </h1>
          <h2 className="font-bebas text-3xl md:text-5xl text-pearl/50 tracking-widest mb-8">
            Software Engineer
          </h2>
          <p className="text-pearl/60 text-xl max-w-2xl leading-relaxed mb-12">
            I build software at scale. Currently at Postman working on Flows — a product
            used by millions of developers worldwide. I got here the long way: military
            service, a decade in healthcare, then a career switch into tech that didn&apos;t
            come easy. When I&apos;m not at my keyboard, I&apos;m deep in a book or watching
            hockey (Columbus Blue Jackets fan, for better or worse).
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-magenta text-white px-6 py-3 text-sm font-medium hover:bg-magenta/90 transition-colors"
          >
            View My Work
          </a>
        </div>

        {/* Right: stacked social icons */}
        <div className="hidden md:flex flex-col gap-4 shrink-0 pt-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="w-20 h-20 bg-magenta flex items-center justify-center text-white hover:bg-magenta/80 transition-colors"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
