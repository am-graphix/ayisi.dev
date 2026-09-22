import { motion } from 'framer-motion'
import { useTypingAnimation } from '../hooks/useTypingAnimation'
import ContactCard from '../components/ContactCard'

// ── Images are in /public/images/ — works correctly in both dev and production build
const PORTRAIT_URL = './images/bg_me.jpg'

export default function Hero() {
  const { displayText, isTyping } = useTypingAnimation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* ── Full-bleed cinematic portrait ─────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src={PORTRAIT_URL}
          alt="Michael Ayisi"
          className="hero-portrait w-full h-full"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/0 via-transparent to-bg hidden md:block" />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          {/* Left — identity block */}
          <div className="flex flex-col gap-4">

            {/* Animated identity phrase */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-display text-5xl sm:text-6xl md:text-8xl text-text-primary leading-none tracking-wide"
                style={{ minHeight: '1em' }}
              >
                {displayText}
                <span className={`inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle cursor-blink ${isTyping ? '' : 'opacity-0'}`} />
              </motion.div>
            </div>

            {/* WHOAMI + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col gap-1"
            >
              <div className="accent-line mb-2" />
              <span className="font-display text-2xl md:text-3xl text-text-primary tracking-wider">
                WHOAMI
              </span>
              <span className="font-mono-label text-text-muted">
                Kwabena from Kade
              </span>
            </motion.div>

            {/* Identity tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-2 mt-1"
            >
              {['BSc Robotics Engineering & AI', 'UMaT', 'Ghana'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-text-muted border border-border px-3 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — contact card */}
          <ContactCard />
        </div>
      </div>

      {/* ── Scroll hint ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono-label text-text-muted text-[0.6rem]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
        />
      </motion.div>
    </section>
  )
}
