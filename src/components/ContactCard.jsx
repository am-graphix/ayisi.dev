import { motion } from "framer-motion"

// ── Image is in /public/images/ — correct path for production builds
const CARD_IMG = './images/linkedin_profile.png'

export default function ContactCard() {
  const initialShadow = "0 4px 30px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.2)"
  const hoverShadow = "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 40px 2px rgba(201,168,76,0.15)"

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, boxShadow: initialShadow }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02, boxShadow: hoverShadow, y: -4 }}
      transition={{
        delay: 1.4, duration: 0.6,
        scale: { type: "spring", stiffness: 400, damping: 25 },
        y: { type: "spring", stiffness: 400, damping: 25 },
        boxShadow: { duration: 0.3 }
      }}
      className="hidden md:flex flex-col gap-5 glass rounded-2xl p-6 w-80 text-white"
    >
      {/* Profile header */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shadow-inner flex-shrink-0">
          <img
            src={CARD_IMG}
            alt="Michael Ayisi"
            className="w-full h-full object-cover hero-portrait"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white leading-tight">Michael Ayisi</h2>
          <p className="text-xs font-medium tracking-wide text-gold/90 font-mono uppercase mt-0.5">Solutionist</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Quick details */}
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
        <div>
          <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-0.5">Location</p>
          <p className="text-zinc-200 font-medium">Kade, Ghana</p>
        </div>
        <div>
          <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-0.5">Status</p>
          <p className="text-emerald-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to Internships
          </p>
        </div>
      </div>

      {/* Social & contact links */}
      <div className="flex flex-col gap-2 pt-1 text-sm">
        <a href="mailto:amgraphix8@gmail.com" className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.02] transition-colors group">
          <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">Email</span>
          <span className="text-xs text-zinc-300">amgraphix8@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/michael-ayisi-5345a4341" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.02] transition-colors group">
          <svg className="w-4 h-4 text-zinc-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">LinkedIn</span>
            <span className="text-zinc-200 font-medium mt-0.5 text-xs">Ayisi Michael</span>
          </div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/am-graphix" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.02] transition-colors group">
          <svg className="w-4 h-4 text-zinc-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono tracking-wider text-zinc-500 uppercase">GitHub</span>
            <span className="text-zinc-200 font-medium mt-0.5 text-xs">am-graphix</span>
          </div>
        </a>
      </div>
    </motion.div>
  )
}
