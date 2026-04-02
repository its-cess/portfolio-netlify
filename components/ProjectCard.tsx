'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import type { Project } from '@/lib/data'

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card onClick={() => setOpen(true)} className="bg-white border-0 rounded-none shadow-sm overflow-hidden group flex flex-col cursor-pointer">
        <div className="aspect-video bg-pearl/50 overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <CardContent className="p-6 flex-1">
          <h3 className="font-bebas text-3xl text-charcoal tracking-wide mb-2">
            {project.title}
          </h3>
          <p className="text-lg text-charcoal/60 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="text-xs rounded-none bg-pearl text-charcoal/70 hover:bg-pearl"
              >
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter onClick={(e) => e.stopPropagation()} className="px-6 pb-6 pt-0 flex items-center justify-between">
          <div className="flex gap-4">
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-magenta transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-magenta transition-colors"
              >
                <ExternalLink size={14} />
                Live Site
              </a>
            )}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="text-sm text-magenta hover:underline underline-offset-2"
          >
            Read more →
          </button>
        </CardFooter>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl rounded-none">
          <DialogHeader>
            <DialogTitle className="font-bebas text-4xl tracking-wide text-charcoal">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-lg text-charcoal/70 leading-relaxed">
            {project.details}
          </DialogDescription>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="rounded-none bg-pearl text-charcoal/70 hover:bg-pearl"
              >
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-magenta hover:underline underline-offset-2"
              >
                <Github size={20} />
                View on GitHub
              </a>
            )}
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-magenta hover:underline underline-offset-2"
              >
                <ExternalLink size={20} />
                Visit Live Site
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
