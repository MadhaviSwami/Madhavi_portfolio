import { motion } from 'framer-motion'

export default function ProjectThumbnail({ type }) {
  const Art = { sales: SalesArt, hr: HrArt, face: FaceArt, fashion: FashionArt }[type] ?? SalesArt
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <Art />
    </div>
  )
}

const Defs = () => (
  <defs>
    <linearGradient id="pt-grad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stopColor="#3b82f6" />
      <stop offset="0.6" stopColor="#8b5cf6" />
      <stop offset="1" stopColor="#22d3ee" />
    </linearGradient>
    <linearGradient id="pt-line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#3b82f6" />
      <stop offset="0.5" stopColor="#8b5cf6" />
      <stop offset="1" stopColor="#22d3ee" />
    </linearGradient>
    <linearGradient id="pt-area" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#22d3ee" stopOpacity="0.35" />
      <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
    </linearGradient>
  </defs>
)

const draw = {
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  viewport: { once: true },
  transition: { duration: 1.6, ease: 'easeInOut' },
}

function SalesArt() {
  const bars = [38, 56, 44, 70, 62, 84, 76]
  return (
    <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105">
      <Defs />
      <rect x="24" y="22" width="272" height="156" rx="14" fill="#0b1226" stroke="rgb(255 255 255 / 0.08)" />
      <rect x="40" y="36" width="70" height="7" rx="3.5" fill="rgb(255 255 255 / 0.25)" />
      <rect x="40" y="49" width="44" height="5" rx="2.5" fill="rgb(255 255 255 / 0.1)" />
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={46 + i * 34}
          width="18"
          rx="4"
          fill="url(#pt-grad)"
          initial={{ height: 0, y: 160 }}
          whileInView={{ height: h, y: 160 - h }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          opacity="0.85"
        />
      ))}
      <motion.path
        d="M55 120 L89 104 L123 112 L157 86 L191 92 L225 70 L259 76"
        fill="none"
        stroke="#e2e8f0"
        strokeWidth="2"
        {...draw}
      />
      {[[55, 120], [89, 104], [123, 112], [157, 86], [191, 92], [225, 70], [259, 76]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#0b1226" stroke="#22d3ee" strokeWidth="2" />
      ))}
      <g transform="translate(244 34)">
        <rect width="38" height="24" rx="8" fill="rgb(34 211 238 / 0.12)" stroke="rgb(34 211 238 / 0.4)" />
        <path d="M10 8h3l2 8h9l2-6H14" fill="none" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

function HrArt() {
  return (
    <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105">
      <Defs />
      <rect x="22" y="24" width="124" height="152" rx="14" fill="#0b1226" stroke="rgb(255 255 255 / 0.08)" />
      <circle cx="84" cy="96" r="34" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="12" />
      <motion.circle
        cx="84" cy="96" r="34" fill="none" stroke="url(#pt-line)" strokeWidth="12" strokeLinecap="round"
        transform="rotate(-90 84 96)"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 0.68 }} viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      <rect x="46" y="148" width="76" height="6" rx="3" fill="rgb(255 255 255 / 0.15)" />
      <rect x="158" y="24" width="140" height="74" rx="14" fill="#0b1226" stroke="rgb(255 255 255 / 0.08)" />
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 176 + (i % 5) * 25
        const y = 44 + Math.floor(i / 5) * 28
        const left = i === 3 || i === 8
        return (
          <g key={i} opacity={left ? 1 : 0.55}>
            <circle cx={x} cy={y} r="4.5" fill={left ? '#22d3ee' : '#8b5cf6'} />
            <path d={`M${x - 7} ${y + 14} a7 6 0 0 1 14 0`} fill={left ? '#22d3ee' : '#8b5cf6'} />
          </g>
        )
      })}
      <rect x="158" y="106" width="140" height="70" rx="14" fill="#0b1226" stroke="rgb(255 255 255 / 0.08)" />
      <path d="M170 160 L194 146 L218 152 L242 132 L266 138 L288 122 L288 168 L170 168 Z" fill="url(#pt-area)" />
      <motion.path d="M170 160 L194 146 L218 152 L242 132 L266 138 L288 122" fill="none" stroke="#22d3ee" strokeWidth="2" {...draw} />
    </svg>
  )
}

function FaceArt() {
  return (
    <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105">
      <Defs />
      <rect x="60" y="20" width="200" height="160" rx="14" fill="#0b1226" stroke="rgb(255 255 255 / 0.08)" />
      <circle cx="76" cy="34" r="3.5" fill="#ef4444" />
      <rect x="84" y="31" width="26" height="6" rx="3" fill="rgb(255 255 255 / 0.15)" />
      <ellipse cx="160" cy="98" rx="30" ry="38" fill="rgb(148 163 184 / 0.12)" stroke="rgb(148 163 184 / 0.3)" />
      <path d="M118 176 c6 -26 24 -36 42 -36 s36 10 42 36" fill="rgb(148 163 184 / 0.12)" stroke="rgb(148 163 184 / 0.3)" />
      {[[148, 90], [172, 90], [160, 104], [150, 118], [170, 118]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="2.6" fill="#22d3ee"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }} />
      ))}
      <motion.g
        stroke="url(#pt-line)" strokeWidth="3" fill="none" strokeLinecap="round"
        initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: '160px 98px' }}
      >
        <path d="M120 70 v-14 h14" /><path d="M186 56 h14 v14" />
        <path d="M200 128 v14 h-14" /><path d="M134 142 h-14 v-14" />
      </motion.g>
      <motion.rect x="122" width="76" height="2" rx="1" fill="#22d3ee" opacity="0.7"
        animate={{ y: [60, 138, 60] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
      <rect x="120" y="148" width="80" height="20" rx="6" fill="rgb(34 211 238 / 0.15)" stroke="rgb(34 211 238 / 0.5)" />
      <text x="160" y="162" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#a5f3fc">MATCH · DB</text>
      <g transform="translate(232 128)" stroke="#8b5cf6" strokeWidth="1.6" fill="none">
        <ellipse cx="0" cy="0" rx="12" ry="4.5" />
        <path d="M-12 0 v16 a12 4.5 0 0 0 24 0 v-16" />
        <path d="M-12 8 a12 4.5 0 0 0 24 0" />
      </g>
    </svg>
  )
}

function FashionArt() {
  return (
    <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105">
      <Defs />
      {/* phone mock with try-on */}
      <rect x="40" y="18" width="104" height="164" rx="16" fill="#0b1226" stroke="rgb(255 255 255 / 0.1)" />
      <rect x="76" y="26" width="32" height="5" rx="2.5" fill="rgb(255 255 255 / 0.15)" />
      <circle cx="92" cy="62" r="13" fill="rgb(148 163 184 / 0.15)" stroke="rgb(148 163 184 / 0.35)" />
      <motion.path
        d="M70 84 l12 -6 h20 l12 6 l-6 18 h-4 v52 h-24 v-52 h-4 z"
        fill="url(#pt-grad)" opacity="0.85"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 0.85, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.rect x="56" width="72" height="2" rx="1" fill="#22d3ee" opacity="0.7"
        animate={{ y: [48, 160, 48] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} />
      <rect x="160" y="18" width="128" height="78" rx="14" fill="#0b1226" stroke="rgb(255 255 255 / 0.08)" />
      <rect x="174" y="32" width="56" height="6" rx="3" fill="rgb(255 255 255 / 0.25)" />
      {[0, 1, 2, 3].map((i) => (
        <motion.rect key={i} x={174 + i * 26} y="50" width="20" height="32" rx="5"
          fill={i === 1 ? 'rgb(139 92 246 / 0.35)' : 'rgb(255 255 255 / 0.05)'}
          stroke={i === 1 ? '#a78bfa' : 'rgb(255 255 255 / 0.1)'}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} />
      ))}
      <rect x="160" y="106" width="128" height="76" rx="14" fill="#0b1226" stroke="rgb(255 255 255 / 0.08)" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(174 ${122 + i * 18})`}>
          <circle cx="4" cy="3" r="4" fill="#22d3ee" opacity={0.9 - i * 0.2} />
          <rect x="14" y="0" width={84 - i * 16} height="6" rx="3" fill="rgb(255 255 255 / 0.18)" />
        </g>
      ))}
    </svg>
  )
}
