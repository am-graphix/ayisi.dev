import { motion } from 'framer-motion'
import { experience } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono-label text-gold">03</span>
          <div className="accent-line" />
          <span className="font-mono-label text-text-muted">EXPERIENCE</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="font-display text-4xl md:text-6xl text-text-primary mb-16"
        >
          THE ROLES
        </motion.h2>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 2}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Timeline spine */}
              {i < experience.length - 1 && (
                <div className="absolute left-[7px] top-4 bottom-0 w-px bg-border" />
              )}

              {/* Dot */}
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-3.5 h-3.5 rounded-full border border-accent bg-bg" />
              </div>

              {/* Content */}
              <div className="flex-1 pb-4 border-b border-border last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-body font-semibold text-text-primary">{item.role}</h3>
                    <p className="font-mono-label text-gold text-[0.65rem] mt-0.5">{item.org}</p>
                  </div>
                  <span className="font-mono-label text-text-muted text-[0.65rem] flex-shrink-0">{item.period}</span>
                </div>
                <p className="font-body text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
