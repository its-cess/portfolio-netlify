import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="bg-pearl py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bebas text-6xl md:text-7xl text-charcoal tracking-wide mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
