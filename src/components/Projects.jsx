import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, CircleCheck } from 'lucide-react'
import { projects } from '../data/profile'
import SectionHeading from './SectionHeading'
import ProjectThumbnail from './ProjectThumbnail'
import { GithubIcon } from './BrandIcons'

const FILTERS = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          title="Projects"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-cyan-400/30 ring-1 ring-white/15"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, ref }) {
  // tilt on hover
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 })

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="gradient-border glass group flex flex-col overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-violet-500/15"
    >
      <div className="relative">
        <ProjectThumbnail type={project.thumbnail} />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 text-[11px] font-medium text-cyan-200 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project.period && <p className="mb-2 font-mono text-xs text-slate-500">{project.period}</p>}
        <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-cyan-200">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-slate-300">
              <CircleCheck size={16} className="mt-0.5 shrink-0 text-violet-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-7">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost flex-1 !px-4 !py-2.5"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-1 !px-4 !py-2.5"
              aria-label={`Open live demo of ${project.title}`}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
