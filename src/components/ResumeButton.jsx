import { useEffect, useRef, useState } from 'react'
import { Download } from 'lucide-react'
import { profile } from '../data/profile'
import useResumeAvailable from '../hooks/useResumeAvailable'

export default function ResumeButton({ className = 'btn btn-ghost', label = 'Download Resume' }) {
  const available = useResumeAvailable()
  const [notice, setNotice] = useState(false)
  const timer = useRef()
  const fileName = profile.resume.split('/').pop()

  useEffect(() => () => clearTimeout(timer.current), [])

  if (available === false) {
    return (
      <span className="relative inline-flex">
        <button
          type="button"
          className={className}
          onClick={() => {
            setNotice(true)
            clearTimeout(timer.current)
            timer.current = setTimeout(() => setNotice(false), 3500)
          }}
        >
          <Download size={18} /> {label}
        </button>
        {notice && (
          <span
            role="status"
            className="absolute left-1/2 top-full z-20 mt-3 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-center text-xs text-slate-300 shadow-xl"
          >
            Resume coming soon. Please reach out through the contact section in the meantime.
          </span>
        )}
      </span>
    )
  }

  return (
    <a href={profile.resume} download={fileName} className={className}>
      <Download size={18} /> {label}
    </a>
  )
}
