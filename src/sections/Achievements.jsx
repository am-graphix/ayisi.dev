import { motion } from 'framer-motion'
import { achievements } from '../data'

const resultColor = {
  Winner: 'text-gold border-accent/40',
  'First Runner-Up': 'text-text-primary border-border',
  default: 'text-text-muted border-border',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono-label text-gold">04</span>
          <div className="accent-line" />
          <span className="font-mono-label text-text-muted">ACHIEVEMENTS</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="font-display text-4xl md:text-6xl text-text-primary mb-16"
        >
          THE RECORD
        </motion.h2>

        {/* Achievement rows */}
        <div className="flex flex-col divide-y divide-border">
          {achievements.map((item, i) => {
            const colorClass = resultColor[item.result] || resultColor.default
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                className="py-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 group hover:bg-surface/40 px-2 -mx-2 transition-colors rounded-sm"
              >
                {/* Year */}
                <span className="font-mono-label text-text-muted text-[0.65rem] w-10 flex-shrink-0">{item.year}</span>

                {/* Title */}
                <h3 className="font-body font-medium text-text-primary flex-1">{item.title}</h3>

                {/* Org */}
                <span className="font-mono-label text-text-muted text-[0.65rem] hidden sm:block">{item.org}</span>

                {/* Result */}
                <span className={`font-mono-label text-[0.65rem] border px-3 py-1 rounded-sm self-start sm:self-center ${colorClass}`}>
                  {item.result}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
