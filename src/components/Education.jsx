import { motion } from 'framer-motion'
import { GraduationCap, Award, Users, Calendar, MapPin } from 'lucide-react'
import { timeline } from '../data/profile'
import SectionHeading from './SectionHeading'

const TYPES = {
  education: { Icon: GraduationCap, label: 'Education', color: 'text-blue-300 bg-blue-500/15 ring-blue-400/30' },
  certification: { Icon: Award, label: 'Certification', color: 'text-cyan-300 bg-cyan-500/15 ring-cyan-400/30' },
  activity: { Icon: Users, label: 'Extracurricular Activity', color: 'text-cyan-300 bg-cyan-500/15 ring-cyan-400/30' },
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          title="Education & Activities"
        />

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400 md:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />

          <ol className="space-y-10 md:space-y-14">
            {timeline.map((entry, i) => {
              const t = TYPES[entry.type] ?? TYPES.education
              const right = i % 2 === 1
              return (
                <li key={i} className="relative md:grid md:grid-cols-2 md:gap-14">
                  <span
                    className={`absolute left-5 top-6 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-ink-950 ring-2 ${t.color} md:left-1/2`}
                  >
                    <t.Icon size={18} />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: right ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`ml-14 md:ml-0 ${right ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}
                  >
                    <div className="gradient-border glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
                      <span className={`inline-block rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ring-1 ${t.color}`}>
                        {t.label}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-semibold text-white">{entry.title}</h3>
                      <p className="mt-1 font-medium text-slate-300">{entry.org}</p>
                      <div className={`mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 ${right ? '' : 'md:justify-end'}`}>
                        {entry.period && (
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} /> {entry.period}
                          </span>
                        )}
                        {entry.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} /> {entry.location}
                          </span>
                        )}
                      </div>
                      {entry.points?.length > 0 && (
                        <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-400">
                          {entry.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
