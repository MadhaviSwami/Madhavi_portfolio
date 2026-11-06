import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

let cached = null

export default function useResumeAvailable() {
  const [available, setAvailable] = useState(cached)

  useEffect(() => {
    if (cached !== null) return
    fetch(profile.resume, { method: 'HEAD' })
      .then((r) => {
        const type = r.headers.get('content-type') || ''
        cached = r.ok && type.includes('pdf')
      })
      .catch(() => {
        cached = false
      })
      .finally(() => setAvailable(cached))
  }, [])

  return available
}
