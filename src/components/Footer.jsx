import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-x flex flex-col items-center justify-between gap-5 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="text-slate-300">{profile.name}</span>
        </p>
        <div className="flex items-center gap-2">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 transition hover:bg-white/5 hover:text-white">
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2 transition hover:bg-white/5 hover:text-white">
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-lg p-2 transition hover:bg-white/5 hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
