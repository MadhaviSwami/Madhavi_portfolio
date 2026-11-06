import { useEffect, useState } from 'react'

export default function TypingText({ words, typeSpeed = 80, deleteSpeed = 45, pause = 1500 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && text === word) delay = pause
    else if (deleting && text === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return (
    <span>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="text-gradient">
        {text}
      </span>
      <span className="caret" aria-hidden="true" />
    </span>
  )
}
