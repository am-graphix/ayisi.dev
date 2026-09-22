import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
}
export const image_url = (source) => {
  return ('https://github.com/am-graphix/portfolio-assets/blob/main/public/src/images/' + source + '?raw=true')
}
// ── Gallery items — 
export const galleryItems = [
  {
    src: image_url('xplora_bois.png'),
    caption: 'Xplora Bot — Acity Tech Expo 2026',
    category: 'project',
  },
  {
    src: image_url('google_me.jpeg'),
    caption: 'Me and SKYLL at Google AI center, Accra',
    category: 'life',
  },
  {
    src: image_url('card_me_1.jpg'),
    caption: 'Building. Always.',
    category: 'life',
  },
  {
    src: image_url('xplora_model.jpeg'),
    caption: '3d view of Xplora Bot',
    category: 'competition',
  },
  {
    src: image_url('xplora_2.JPG'),
    caption: '',
    category: 'competition',
  },
  {
    src: image_url('xplora_1.png'),
    caption: '',
    category: 'competition',
  },
  {
    src: image_url('v_wave_icon.jpg'),
    caption: 'V-WAVE Logo',
    category: 'competition',
  },
  {
    src: image_url('healthport_logo.png'),
    caption: 'Healthport logo',
    category: 'competition',
  },
  {
    src: image_url('healthport.png'),
    caption: 'Healthport at EC Challenge 2025',
    category: 'competition',
  },
]

const CATEGORIES = ['all', 'competition', 'project', 'team', 'life']

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <span className="absolute top-6 left-6 font-mono-label text-white/40 text-[0.65rem]">
        {index + 1} / {items.length}
      </span>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10 p-2"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={index}
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.caption}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
        />
        {item.caption && (
          <p className="font-body text-white/60 text-sm text-center">{item.caption}</p>
        )}
      </motion.div>

      {/* Next */}
      {index < items.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10 p-2"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </motion.div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  // Only show categories that have items
  const activeCategories = CATEGORIES.filter(cat =>
    cat === 'all' || galleryItems.some(item => item.category === cat)
  )

  return (
    <>
      <section id="gallery" className="section-pad border-t border-border">
        <div className="max-w-7xl mx-auto">
          {/* Label */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex items-center gap-3 mb-4">
            <span className="font-mono-label text-gold">07</span>
            <div className="accent-line" />
            <span className="font-mono-label text-text-muted">GALLERY</span>
          </motion.div>

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-display text-4xl md:text-6xl text-text-primary mb-4">
            MEDIA
          </motion.h2>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="font-body text-text-muted mb-10 max-w-md text-sm">
            Moments from competitions, builds, teams, and everything in between.
          </motion.p>

          {/* Category filter */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="flex flex-wrap gap-2 mb-10">
            {activeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono-label text-[0.62rem] px-4 py-2 rounded-sm border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-gold/60 text-gold bg-gold/10'
                    : 'border-border text-text-muted hover:border-gold/30 hover:text-text-primary'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src + item.caption}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setLightboxIndex(i)}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm border border-border"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
                  />
                  {/* Caption overlay on hover */}
                  {item.caption && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <p className="font-body text-white text-xs leading-tight">{item.caption}</p>
                    </div>
                  )}
                  {/* Category badge */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="font-mono-label text-white/80 text-[0.5rem] bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-mono-label text-text-muted text-[0.65rem]">NO ITEMS IN THIS CATEGORY YET</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex(i => Math.max(0, i - 1))}
            onNext={() => setLightboxIndex(i => Math.min(filtered.length - 1, i + 1))}
          />
        )}
      </AnimatePresence>
    </>
  )
}
