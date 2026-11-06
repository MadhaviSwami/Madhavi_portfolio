import { FileText, Mail } from 'lucide-react'
import Reveal from './Reveal'
import ResumeButton from './ResumeButton'

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-500/10 px-6 py-16 text-center sm:px-12 md:py-20">
            <div className="absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" aria-hidden="true" />

            <div className="relative">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 text-white shadow-xl shadow-violet-500/30">
                <FileText size={28} />
              </div>
              <h2 className="mt-7 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Interested in My Profile?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-slate-300">
                Download my resume to explore my technical skills, projects, and qualifications.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ResumeButton className="btn btn-primary w-full sm:w-auto" />
                <a href="#contact" className="btn btn-ghost w-full sm:w-auto">
                  <Mail size={18} /> Get in Touch
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
