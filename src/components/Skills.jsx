import { motion } from 'framer-motion'
import { CodeXml, ChartLine, ChartPie, Database, BrainCircuit, Wrench, CircleCheck } from 'lucide-react'
import { skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const ICONS = { CodeXml, ChartLine, ChartPie, Database, BrainCircuit, Wrench }

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          title="Skills"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = ICONS[group.icon] ?? CodeXml
            return (
              <Reveal key={group.title} delay={(gi % 3) * 0.08}>
                <div className="gradient-border glass group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1">
                  <motion.div
                    className={`absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r ${group.accent}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.2 + gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

                  <div className="flex items-center gap-4">
                    <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                    </div>
                  </div>

                  <motion.ul
                    className="mt-6 space-y-2.5"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
                  >
                    {group.skills.map((s) => (
                      <motion.li
                        key={s}
                        variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-300 transition-colors duration-200 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:text-white"
                      >
                        <CircleCheck size={16} className="shrink-0 text-cyan-300" />
                        {s}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </Reveal>
            )
          })}

        </div>
      </div>
    </section>
  )
}
