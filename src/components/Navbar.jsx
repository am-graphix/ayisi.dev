import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Posts', href: '#posts' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onDiscoverMike }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <span className="font-mono-label text-text-muted tracking-widest">
            A<span className="text-gold">.</span>M INDUSTRIES
          </span>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-text-muted hover:text-text-primary transition-colors duration-200 text-sm font-body"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Discover Mike + hamburger */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onDiscoverMike}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 text-accent text-xs font-mono-label hover:bg-accent/10 transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              DISCOVER MIKE
            </motion.button>

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-px bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-px bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg/98 backdrop-blur-xl border-b border-border lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="text-left text-text-muted hover:text-text-primary transition-colors text-lg font-body"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
