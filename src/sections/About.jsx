import { motion } from 'framer-motion'

const stats = [
  { value: '05+', label: 'Years in Robotics' },
  { value: '07+', label: 'Competitions' },
  { value: '04+', label: 'Hardware Projects' },
  { value: '03', label: 'Leadership Roles' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono-label text-gold">01</span>
          <div className="accent-line" />
          <span className="font-mono-label text-text-muted">ABOUT</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <p className="font-display text-3xl md:text-4xl text-text-primary leading-tight mb-8">
              A Closer Look at Me...
            </p>
            <div className="accent-line mb-6" />
            <p className="text-text-muted font-body leading-relaxed mb-4">
              I'm Michael Ayisi — a builder from Kade, Ghana. I just finished at PRESEC Legon and I'm
              heading into BSc Robotics Engineering & Artificial Intelligence at the University of
              Mines & Technology (UMaT). But the education started long before university.
            </p>
            <p className="text-text-muted font-body leading-relaxed mb-4">
              In Form 1, I joined the Robotics & Programming Club and never looked back. I've since
              built GPS trackers, e-voting systems, environmental rovers, and a trotro platform
              that won a global competition. I've led teams, run a club, and shown up to competitions
              across Ghana with something worth looking at.
            </p>
            <p className="text-text-muted font-body leading-relaxed mb-4">
              But I'm not just the tech guy. I'm a keyboardist, a vocalist, a football player,
              a gamer, a graphic designer, and someone who genuinely enjoys learning new things —
              whether that's a new framework, a music theory concept, or how to make a video edit
              actually hit right.
            </p>
            <p className="text-text-muted font-body leading-relaxed">
              I care about whether what I build does something useful in the world — especially
              in Ghana, where the problems are real and the solutions are rare.
            </p>
          </motion.div>

          {/* Right — stats + aside */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  custom={i + 2}
                  className="border border-border p-5 rounded-sm"
                >
                  <p className="font-display text-4xl text-gold mb-1">{stat.value}</p>
                  <p className="font-mono-label text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Beyond tech card */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={6}
              className="glass border border-border p-5 rounded-sm"
            >
              <p className="font-mono-label text-gold mb-2">NOT JUST TECH</p>
              <p className="text-text-muted font-body text-sm leading-relaxed">
                Keyboardist and vocalist in The Mighty Choir at church and on the P&W team at school.
                Into graphic design, video editing, football, basketball, and gaming. Music isn't
                a hobby — it's how I stay grounded when the code refuses to compile.
              </p>
            </motion.div>

            {/* University tag */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={7}
              className="flex items-center gap-3 border border-border p-4 rounded-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <div>
                <p className="font-mono-label text-text-muted text-[0.6rem] mb-0.5">NEXT CHAPTER</p>
                <p className="text-text-primary font-body text-sm">BSc Robotics Engineering & AI · UMaT</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
