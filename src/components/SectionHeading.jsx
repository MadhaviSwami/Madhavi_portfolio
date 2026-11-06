import Reveal from './Reveal'

export default function SectionHeading({ title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
      {subtitle && <p className="mt-5 text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
