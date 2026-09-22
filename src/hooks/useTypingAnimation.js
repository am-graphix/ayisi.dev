import { useState, useEffect, useRef } from 'react'
import { identityPhrases } from '../data'

/**
 * useTypingAnimation
 * Cycles through identity phrases with a typewriter effect.
 * Types → holds → deletes → next phrase → repeat.
 */
export function useTypingAnimation() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // 'typing' | 'holding' | 'deleting'
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentPhrase = identityPhrases[phraseIndex]

    const clear = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }

    if (phase === 'typing') {
      if (displayText.length < currentPhrase.length) {
        // Type one character
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        }, 80)
      } else {
        // Fully typed — hold before deleting
        timeoutRef.current = setTimeout(() => setPhase('holding'), 2000)
      }
    } else if (phase === 'holding') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 400)
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        // Delete one character
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 45)
      } else {
        // Fully deleted — move to next phrase
        setPhraseIndex((i) => (i + 1) % identityPhrases.length)
        setPhase('typing')
      }
    }

    return clear
  }, [displayText, phase, phraseIndex])

  return { displayText, isTyping: phase === 'typing' }
}
