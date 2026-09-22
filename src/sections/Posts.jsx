import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, ChevronRight } from 'lucide-react'
import { posts } from '../data'

const tagColors = {
  observation: 'text-blue-400 border-blue-400/30',
  lesson: 'text-green-400 border-green-400/30',
  'build-log': 'text-gold border-accent/30',
  idea: 'text-purple-400 border-purple-400/30',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

function PostModal({ post, onClose }) {
  // Balanced typography colors matching an elegant light editorial look
  const lightTagColors = {
    observation: 'text-blue-600 border-blue-200 bg-blue-50/50',
    lesson: 'text-emerald-700 border-emerald-200 bg-emerald-50/50',
    'build-log': 'text-amber-700 border-amber-200 bg-amber-50/50',
    idea: 'text-purple-600 border-purple-200 bg-purple-50/50',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#F5F5F3] text-[#1c1c1e] overflow-y-auto"
    >
      {/* Premium Frosted Light-Glass Sticky Navigation Bar */}
      <div className="sticky top-0 bg-[#F5F5F3]/75 backdrop-blur-lg border-b border-[#e2e2e0] z-10 shadow-[0_1px_10px_rgba(0,0,0,0.02)]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono-label text-[11px] tracking-widest text-[#6c6c70] uppercase">
            Field Log / Reading Model
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-mono-label font-bold text-[#1c1c1e] hover:text-[#d4af37] transition-colors group"
          >
            <X size={14} className="group-hover:rotate-90 transition-transform duration-200" /> 
            CLOSE NOTE
          </button>
        </div>
      </div>

      {/* Main Publication Container */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        
        {/* Category Header Stack */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`font-mono-label text-[11px] uppercase tracking-wider border px-2.5 py-0.5 rounded-full font-bold ${lightTagColors[post.tag] || 'text-[#6c6c70] border-[#e2e2e0] bg-white/40'}`}>
            #{post.tag}
          </span>
          <span className="text-[#8e8e93] text-xs font-mono-label">— {post.date}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#1c1c1e] tracking-tight leading-[1.1] mb-8 font-bold">
          {post.title}
        </h1>

        {/* Glass-Bordered Embedded Feature Image Box */}
        <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-12 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-zinc-200 relative">
          <img
            src={post.image || "/images/blog_placeholder.png"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle lighting overlay on top of photo to lock into the template color profiles */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Professional Editorial Layout Core Box */}
        <div className="max-w-2xl mx-auto">
          {/* Stand-first Intro Excerpt Callout (High visibility) */}
          <p className="font-body text-[#3a3a3c] text-lg md:text-xl font-medium leading-relaxed mb-10 border-l-2 border-[#d4af37] pl-5 italic">
            {post.excerpt}
          </p>

          <div className="h-[1px] bg-[#e2e2e0] mb-10" />

          {/* Core Body Markdown Paragraph Blocks */}
          <div className="font-body text-[#2c2c2e] text-[16px] md:text-[17px] leading-calc leading-8 space-y-6 antialiased selection:bg-amber-100">
            {post.content && post.content.split('\n\n').map((para, i) => (
              <p key={i} className="first-letter:font-semibold">
                {para}
              </p>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  )
}



export default function Posts() {
  const [selected, setSelected] = useState(null);
  const [showAllOverlay, setShowAllOverlay] = useState(false);

  // Display only the top 3 or 4 cards on the main portfolio page
  const displayedPosts = posts.slice(0, 3);

  const cardShadow = "0 4px 30px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)";
  const hoverGlow = "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px 1px rgba(255, 255, 255, 0.02)";

  return (
    <>
      <section id="posts" className="section-pad border-t border-border bg-bg/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="font-mono-label text-gold">05</span>
                <div className="accent-line" />
                <span className="font-mono-label text-text-muted">POSTS</span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="font-display text-4xl md:text-6xl text-text-primary tracking-tight"
              >
                FIELD NOTES
              </motion.h2>
            </div>
            {/* <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="font-body text-text-muted max-w-sm text-sm leading-relaxed"
            >
              Observations, engineering systems, lessons, and whatever architectural ideas are running through my mind.
            </motion.p> */}
          </div>

          {/* Grid Layout: Uniform Premium Large Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {displayedPosts.map((post, i) => (
              <motion.div
                key={post.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
                whileHover={{ y: -6, boxShadow: hoverGlow }}
                onClick={() => setSelected(post)}
                style={{ boxShadow: cardShadow }}
                className="flex flex-col glass rounded-2xl overflow-hidden cursor-pointer group border border-white/[0.06] transition-all duration-300 min-h-[480px]"
              >
                {/* Image Block */}
                <div className="w-full h-56 overflow-hidden relative border-b border-white/[0.04] bg-zinc-900">
                  <img
                    src={post.image || "/images/blog_placeholder.png"}
                    alt={post.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out no-filter"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 font-mono-label text-[10px] text-white/90 px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 tracking-wider">
                    {post.date}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono-label text-[10px] uppercase tracking-widest border px-2 py-0.5 rounded-sm ${tagColors[post.tag] || 'text-text-muted border-border'}`}>
                        #{post.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-text-primary tracking-wide group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="font-body text-text-muted text-xs leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono-label text-zinc-400 group-hover:text-gold transition-colors pt-4 border-t border-white/[0.04]">
                    <span>OPEN FIELD NOTE</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Elegant "More Notes" Trigger */}
          {posts.length > 3 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setShowAllOverlay(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 text-xs font-mono-label text-text-primary tracking-widest transition-all duration-300 group"
              >
                SEE MORE POSTS
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          )}

        </div>
      </section>

      {/* INTERFACE 1: Light-Themed, Pro-Blogger Comprehensive Archive Overlay */}
      <AnimatePresence>
        {showAllOverlay && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#F4F4F3] text-[#1a1a1a] overflow-y-auto"
          >
            {/* Header Sticky Navigation */}
            <div className="sticky top-0 bg-[#F4F4F3]/80 backdrop-blur-md border-b border-[#e5e5e3] z-10">
              <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-mono-label text-[11px] tracking-widest text-[#767674]">ARCHIVE / FIELD NOTES</span>
                <button
                  onClick={() => setShowAllOverlay(false)}
                  className="flex items-center gap-1.5 text-xs font-mono-label font-bold text-[#1a1a1a] hover:text-gold transition-colors"
                >
                  <X size={14} /> CLOSE
                </button>
              </div>
            </div>

            {/* Light Theme Archive Body */}
            <div className="max-w-5xl mx-auto px-6 py-16">
              <h1 className="font-display text-5xl md:text-7xl text-[#1a1a1a] tracking-tight mb-4">The Complete Log.</h1>
              <p className="font-body text-[#626260] max-w-md text-base mb-12">
                A clean repository of essays, engineering breakdowns, and creative solutions compiled over time.
              </p>

              {/* Professional Editorial List Row View */}
              <div className="flex flex-col border-t border-[#e5e5e3]">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setSelected(post);
                    }}
                    className="py-8 flex flex-col md:flex-row items-start gap-6 border-b border-[#e5e5e3] cursor-pointer group hover:bg-[#ececeb]/50 px-4 -mx-4 transition-colors duration-200"
                  >
                    <span className="font-mono-label text-[11px] text-[#767674] w-24 pt-1 flex-shrink-0">{post.date}</span>
                    <div className="w-full md:w-40 h-24 rounded-lg overflow-hidden bg-zinc-200 flex-shrink-0 border border-black/5">
                      <img src={post.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-[10px] font-mono-label uppercase tracking-widest text-gold mb-1 font-bold">#{post.tag}</span>
                      <h3 className="font-body font-bold text-xl text-[#1a1a1a] group-hover:text-gold transition-colors mb-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="font-body text-[#50504e] text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="self-center p-2 rounded-full border border-black/10 group-hover:border-gold group-hover:bg-white transition-all hidden md:block">
                      <ArrowUpRight size={14} className="text-[#767674] group-hover:text-gold" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INTERFACE 2: The Individual Article Reader View (Shares light or dark theme cleanly) */}
      <AnimatePresence>
        {selected && (
          <PostModal post={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
