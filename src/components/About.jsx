import { GraduationCap, MapPin, Mail, Target } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const facts = [
  { Icon: GraduationCap, label: 'Education', value: 'B.Tech, Computer Science and Engineering' },
  { Icon: MapPin, label: 'Location', value: profile.location },
  { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading title="About Me" />

        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-400">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <ul className="space-y-5">
                {facts.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <Icon size={20} className="mt-0.5 shrink-0 text-cyan-300" />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                      {href ? (
                        <a href={href} className="break-all text-slate-200 hover:text-cyan-200">{value}</a>
                      ) : (
                        <p className="text-slate-200">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
                <li className="flex gap-4">
                  <Target size={20} className="mt-0.5 shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Looking for</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profile.roles.map((r) => (
                        <span key={r} className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
