import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      role="status"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-14 items-end gap-2">
          {[0.45, 0.75, 1].map((h, i) => (
            <motion.span
              key={i}
              className="w-3 rounded-sm bg-gradient-to-t from-blue-500 via-violet-500 to-cyan-400"
              initial={{ height: 6 }}
              animate={{ height: [6, 56 * h, 6] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
            />
          ))}
        </div>
        <motion.p
          className="font-display text-lg font-semibold tracking-wide text-gradient"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {profile.name}
        </motion.p>
      </div>
    </motion.div>
  )
}
