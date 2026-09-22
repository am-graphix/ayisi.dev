import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { mikeSystemPrompt } from '../data'

// ── Suggested questions ──────────────────────────────────────
const SUGGESTIONS = [
  'Tell me his story from the beginning.',
  'What project is he most proud of?',
  'Why did he get into robotics?',
  'What is Green Route?',
  'What is he building now?',
  'What has he learned from failure?',
]

// ── Exploration modes ────────────────────────────────────────
const MODES = [
  { label: 'Story Mode', desc: 'The full journey — person, not résumé.', prompt: "Tell me Mike's story from the very beginning. Start from Form 1 joining the robotics club." },
  { label: 'Projects', desc: "What he's built and why it matters.", prompt: "Walk me through all of Mike's major projects — what they are, why he built them, and what came of them." },
  { label: 'Education', desc: 'His academic and self-taught journey.', prompt: "Tell me about Mike's educational background and what he's currently learning." },
  { label: 'Skills', desc: 'What he can actually do.', prompt: "What are Mike's technical skills? What can he build in software and hardware?" },
  { label: 'Achievements', desc: 'Competitions, milestones, recognition.', prompt: "Tell me about Mike's achievements — competitions, results, and what those experiences taught him." },
]

// ── Call Groq API (free tier — no credit card needed) ─────────
// Get your free key at: console.groq.com
// Model: openai/gpt-oss-20b — capable, free-tier model
async function callMike(messages, systemPrompt) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages, systemPrompt }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error?.message || 'API error')
  }

  const data = await res.json()
  return data.content?.replace(/\*+/g, '') || "Lost my train of thought. Try again?"
}

// ── Typing dots ───────────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-text-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

// ── Message bubble ────────────────────────────────────────────
function Bubble({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end gap-2`}
    >
      {!isUser && (
        <span className="font-mono-label text-gold text-[0.55rem] mb-2 flex-shrink-0">AM</span>
      )}
      <div className={`max-w-[82%] px-4 py-3 text-sm font-body leading-relaxed ${
        isUser ? 'chat-bubble-user text-text-primary' : 'chat-bubble-mike text-text-muted'
      }`}>
        {msg.content}
      </div>
    </motion.div>
  )
}

// ── Main component ────────────────────────────────────────────
export default function DiscoverMike({ open, onClose }) {
  const [visitorName, setVisitorName] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [phase, setPhase] = useState('intro') // intro | name | hub | chat
  const [isMobile, setIsMobile] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const nameInputRef = useRef(null)

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Focus inputs
  useEffect(() => {
    if (phase === 'chat') setTimeout(() => inputRef.current?.focus(), 100)
    if (phase === 'name') setTimeout(() => nameInputRef.current?.focus(), 100)
  }, [phase])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Reset on close
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setPhase('intro'); setMessages([]); setVisitorName('')
        setNameInput(''); setInput(''); setLoading(false)
      }, 400)
      return () => clearTimeout(t)
    }
  }, [open])

  // Intro → name
  useEffect(() => {
    if (open && phase === 'intro') {
      const t = setTimeout(() => setPhase('name'), 600)
      return () => clearTimeout(t)
    }
  }, [open, phase])

  const submitName = () => {
    setVisitorName(nameInput.trim())
    setPhase('hub')
  }

  const startChat = async (initialPrompt) => {
    setPhase('chat')
    const context = nameInput.trim() ? `[Visitor's name is ${nameInput.trim()}. Use it naturally.] ` : ''
    const msgs = [{ role: 'user', content: context + initialPrompt }]
    setMessages([{ role: 'user', content: initialPrompt }])
    setLoading(true)
    try {
      const reply = await callMike(msgs, mikeSystemPrompt)
      setMessages([{ role: 'user', content: initialPrompt }, { role: 'assistant', content: reply }])
    } catch {
      setMessages([{ role: 'user', content: initialPrompt }, { role: 'assistant', content: "Connection hiccup — give it another shot." }])
    }
    setLoading(false)
  }

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userContent = input.trim()
    setInput('')
    const newMessages = [...messages, { role: 'user', content: userContent }]
    setMessages(newMessages)
    setLoading(true)
    try {
      const apiMessages = newMessages.map((m, i) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: i === 0 && visitorName ? `[Visitor's name: ${visitorName}] ${m.content}` : m.content,
      }))
      const reply = await callMike(apiMessages, mikeSystemPrompt)
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Something went wrong. Try again.' }])
    }
    setLoading(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  // Mobile = slide up, desktop = slide down
  const panelVariants = isMobile
    ? { initial: { y: '100%', opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: '100%', opacity: 0 } }
    : { initial: { y: '-100%', opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: '-100%', opacity: 0 } }

  const panelClass = isMobile
    ? 'discover-overlay-mobile glass border-t border-border'
    : 'discover-overlay glass border-b border-border'

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-bg/75 backdrop-blur-sm"
          />
          <motion.div
            {...panelVariants}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={panelClass}
          >
            <div className="max-w-2xl mx-auto px-5 py-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-mono-label text-gold text-[0.6rem] mb-0.5">DISCOVER MIKE</p>
                  <p className="font-body text-text-muted text-xs">Explore the person behind the projects.</p>
                </div>
                <div className="flex items-center gap-4">
                  {phase === 'chat' && (
                    <button onClick={() => setPhase('hub')} className="font-mono-label text-text-muted text-[0.6rem] hover:text-text-primary transition-colors">
                      ← HUB
                    </button>
                  )}
                  <button onClick={onClose} className="text-text-muted hover:text-text-primary transition-colors p-1">
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Mobile drag handle */}
              {isMobile && <div className="flex justify-center mb-4"><div className="w-10 h-1 bg-border rounded-full" /></div>}

              <AnimatePresence mode="wait">
                {/* Name phase */}
                {phase === 'name' && (
                  <motion.div key="name" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                    <p className="font-body text-text-primary text-base md:text-lg">Hey — before we get into it, what's your name?</p>
                    <div className="flex gap-3">
                      <input
                        ref={nameInputRef}
                        type="text" value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && submitName()}
                        placeholder="Your name..."
                        className="flex-1 bg-surface border border-border rounded-sm px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                      />
                      <button onClick={submitName} className="px-5 py-3 bg-accent/10 border border-accent/40 text-gold rounded-sm font-mono-label text-[0.6rem] hover:bg-accent/20 transition-colors">GO</button>
                    </div>
                    <button onClick={() => setPhase('hub')} className="font-mono-label text-text-muted text-[0.6rem] hover:text-text-primary transition-colors self-start">SKIP →</button>
                  </motion.div>
                )}

                {/* Hub phase */}
                {phase === 'hub' && (
                  <motion.div key="hub" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col gap-4">
                    <p className="font-body text-text-primary">
                      {visitorName ? <>Good to meet you, <span className="text-gold">{visitorName}</span>. What do you want to explore?</> : 'What do you want to explore?'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {MODES.map((mode) => (
                        <button key={mode.label} onClick={() => startChat(mode.prompt)}
                          className="text-left p-4 border border-border rounded-sm hover:border-accent/40 hover:bg-surface transition-all duration-200 group">
                          <p className="font-body font-medium text-text-primary group-hover:text-gold transition-colors mb-1 text-sm">{mode.label}</p>
                          <p className="font-body text-text-muted text-xs leading-relaxed">{mode.desc}</p>
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="font-mono-label text-text-muted text-[0.6rem] mb-3">OR ASK DIRECTLY</p>
                      <div className="flex gap-2">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && input.trim() && startChat(input.trim())}
                          placeholder="What do you want to know about Mike?"
                          className="flex-1 bg-surface border border-border rounded-sm px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                        />
                        <button onClick={() => input.trim() && startChat(input.trim())}
                          className="p-3 bg-accent/10 border border-accent/40 text-gold rounded-sm hover:bg-accent/20 transition-colors">
                          <Send size={14} />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {SUGGESTIONS.slice(0, 4).map((s) => (
                          <button key={s} onClick={() => startChat(s)}
                            className="font-mono-label text-text-muted text-[0.55rem] border border-border px-2 py-1 rounded-sm hover:border-accent/40 hover:text-gold transition-all">
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Chat phase */}
                {phase === 'chat' && (
                  <motion.div key="chat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 min-h-[180px] max-h-[38vh] overflow-y-auto pr-1">
                      {messages.map((msg, i) => <Bubble key={i} msg={msg} />)}
                      {loading && (
                        <div className="flex items-end gap-2">
                          <span className="font-mono-label text-gold text-[0.55rem] mb-2">AM</span>
                          <div className="chat-bubble-mike"><TypingDots /></div>
                        </div>
                      )}
                      <div ref={bottomRef} />
                    </div>
                    {messages.length > 0 && messages.length < 5 && (
                      <div className="flex flex-wrap gap-1.5">
                        {SUGGESTIONS.slice(3).map((s) => (
                          <button key={s} onClick={() => { setInput(s); inputRef.current?.focus() }}
                            className="font-mono-label text-text-muted text-[0.55rem] border border-border px-2 py-1 rounded-sm hover:border-accent/40 hover:text-gold transition-all">
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2 border-t border-border pt-4">
                      <input ref={inputRef} type="text" value={input}
                        onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey}
                        placeholder="Ask anything..." disabled={loading}
                        className="flex-1 bg-surface border border-border rounded-sm px-4 py-3 text-text-primary font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-40"
                      />
                      <button onClick={sendMessage} disabled={loading || !input.trim()}
                        className="p-3 bg-accent/10 border border-accent/40 text-gold rounded-sm hover:bg-accent/20 transition-colors disabled:opacity-30">
                        <Send size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
