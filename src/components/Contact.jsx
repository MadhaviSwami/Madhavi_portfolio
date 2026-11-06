import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, MapPin, Send, LoaderCircle, CircleCheck, CircleAlert, Copy, Check } from 'lucide-react'
import { profile, contactFormEndpoint } from '../data/profile'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const EMPTY = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a subject (at least 3 characters).'
  if (v.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  // idle | sending | sent | opened-mail | error
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (touched[e.target.name]) setErrors(validate(next))
  }
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(values))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(errs).length) {
      document.getElementById(`cf-${Object.keys(errs)[0]}`)?.focus()
      return
    }

    if (contactFormEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(contactFormEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        setStatus('sent')
        setValues(EMPTY)
        setTouched({})
      } catch {
        setStatus('error')
      }
      return
    }

    // no endpoint -> open mail app
    const body = `${values.message}\n\n${values.name}\n${values.email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    setStatus('opened-mail')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          title="Contact"
          subtitle="Feel free to reach out about job opportunities or just to say hi."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <ContactItem icon={<Mail size={20} />} label="Email">
              <div className="flex items-center gap-2">
                <a href={`mailto:${profile.email}`} className="break-all text-white hover:text-cyan-200">
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="shrink-0 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>
            </ContactItem>
            <ContactItem icon={<LinkedinIcon />} label="LinkedIn">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="break-all text-white hover:text-cyan-200">
                {profile.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\//, '').replace(/\/$/, '')}
              </a>
            </ContactItem>
            <ContactItem icon={<GithubIcon />} label="GitHub">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="break-all text-white hover:text-cyan-200">
                {profile.github.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </ContactItem>
            <ContactItem icon={<MapPin size={20} />} label="Location">
              <span className="text-white">{profile.location}</span>
            </ContactItem>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={touched.name && errors.name}>
                  <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Your name"
                    value={values.name} onChange={onChange} onBlur={onBlur} className="input"
                    aria-invalid={!!(touched.name && errors.name)} aria-describedby="cf-name-err" />
                </Field>
                <Field id="email" label="Email" error={touched.email && errors.email}>
                  <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@company.com"
                    value={values.email} onChange={onChange} onBlur={onBlur} className="input"
                    aria-invalid={!!(touched.email && errors.email)} aria-describedby="cf-email-err" />
                </Field>
              </div>
              <div className="mt-5">
                <Field id="subject" label="Subject" error={touched.subject && errors.subject}>
                  <input id="cf-subject" name="subject" type="text" placeholder="Subject"
                    value={values.subject} onChange={onChange} onBlur={onBlur} className="input"
                    aria-invalid={!!(touched.subject && errors.subject)} aria-describedby="cf-subject-err" />
                </Field>
              </div>
              <div className="mt-5">
                <Field id="message" label="Message" error={touched.message && errors.message}>
                  <textarea id="cf-message" name="message" rows={5} placeholder="Your message"
                    value={values.message} onChange={onChange} onBlur={onBlur} className="input resize-y"
                    aria-invalid={!!(touched.message && errors.message)} aria-describedby="cf-message-err" />
                </Field>
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-7 w-full sm:w-auto">
                {status === 'sending' ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

              {!contactFormEndpoint && status === 'idle' && (
                <p className="mt-4 text-xs text-slate-500">Submitting opens your email app with this message ready to send.</p>
              )}

              <AnimatePresence>
                {status !== 'idle' && status !== 'sending' && (
                  <motion.div
                    role="status"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-5 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm ${
                      status === 'error'
                        ? 'border-rose-400/30 bg-rose-500/10 text-rose-200'
                        : 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200'
                    }`}
                  >
                    {status === 'error' ? <CircleAlert size={18} className="shrink-0" /> : <CircleCheck size={18} className="shrink-0" />}
                    <span>
                      {status === 'sent' && 'Thank you! Your message has been sent. I will get back to you soon.'}
                      {status === 'opened-mail' && (
                        <>
                          Opening your email app. If it doesn't open, you can email me
                          directly at <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
                        </>
                      )}
                      {status === 'error' && (
                        <>
                          Sorry, the message could not be sent. Please email me directly at{' '}
                          <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
                        </>
                      )}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, children }) {
  return (
    <div className="gradient-border glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05]">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-400/20 text-cyan-300">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
        <div className="mt-0.5 text-sm sm:text-base">{children}</div>
      </div>
    </div>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={`cf-${id}`} className="mb-2 block text-sm font-medium text-slate-300">
        {label} <span className="text-rose-400">*</span>
      </label>
      {children}
      <p id={`cf-${id}-err`} className="mt-1.5 min-h-[1rem] text-xs text-rose-300" aria-live="polite">
        {error || ''}
      </p>
    </div>
  )
}
