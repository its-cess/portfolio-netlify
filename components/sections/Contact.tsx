import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact">
      {/* Magenta contact block */}
      <div className="bg-magenta py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide mb-4">
            Get In Touch
          </h2>
          <p className="text-white/80 text-xl max-w-xl leading-relaxed mb-10">
            Open to new opportunities, collaborations, and conversations. Whether
            you&apos;re hiring, building something interesting, or just want to
            connect — drop me a line.
          </p>
          <a
            href="mailto:torocecily@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-magenta px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>
      </div>

      {/* Black footer */}
      <div className="bg-charcoal py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-pearl/30 text-sm">© 2026 Cecily Toro</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/its-cess"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pearl/50 hover:text-magenta transition-colors text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cecilytoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pearl/50 hover:text-magenta transition-colors text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:torocecily@gmail.com"
              className="flex items-center gap-2 text-pearl/50 hover:text-magenta transition-colors text-sm"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
