import { motion } from 'framer-motion'
import { ArrowRight, ChartLine, Database, BrainCircuit, MapPin, ChevronDown } from 'lucide-react'
import { profile } from '../data/profile'
import TypingText from './TypingText'
import ResumeButton from './ResumeButton'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const ease = [0.22, 1, 0.36, 1]
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export default function Hero({ ready }) {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pt-24 pb-16 md:pt-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial="hidden"
          animate={ready ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-slate-300">Open to entry-level opportunities</span>
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-cyan-300/90">
            {profile.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 min-h-[2.25rem] font-display text-2xl font-semibold text-slate-200 sm:text-3xl">
            <TypingText words={profile.titles} />
          </motion.p>

          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#projects" className="btn btn-primary group w-full sm:w-auto">
              Explore My Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <ResumeButton className="btn btn-ghost w-full sm:w-auto" />
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <LinkedinIcon />
            </SocialLink>
            <SocialLink href={profile.github} label="GitHub">
              <GithubIcon />
            </SocialLink>
            <span className="ml-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={15} /> {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          <ProfileVisual />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition-colors hover:text-white md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {children}
    </a>
  )
}

const orbit = [
  { Icon: ChartLine, cls: 'left-0 top-10 sm:-left-4', delay: 0 },
  { Icon: Database, cls: 'right-0 top-1/3 sm:-right-6', delay: 1 },
  { Icon: BrainCircuit, cls: 'bottom-6 left-6 sm:left-2', delay: 2 },
]

function ProfileVisual() {
  return (
    <div className="relative h-56 w-56 sm:h-80 sm:w-80 lg:h-[24rem] lg:w-[24rem]">
      <motion.div
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#22d3ee,#3b82f6)] opacity-80 blur-[2px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-[3px] rounded-full bg-ink-950" />
      <div className="absolute -inset-10 -z-10 rounded-full bg-violet-600/25 blur-3xl" />

      <div className="absolute inset-3 overflow-hidden rounded-full bg-gradient-to-br from-ink-800 to-ink-900">
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover object-[50%_22%]" loading="eager" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span className="font-display text-7xl font-bold text-gradient sm:text-8xl">{profile.initials}</span>
            <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">Data · AI · ML</span>
          </div>
        )}
      </div>

      {orbit.map(({ Icon, cls, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${cls} grid h-12 w-12 place-items-center rounded-2xl glass text-cyan-300 shadow-xl sm:h-14 sm:w-14`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={22} />
        </motion.div>
      ))}
    </div>
  )
}
