import { motion } from 'framer-motion'

const stats = [
  { value: '03+', label: 'Years in Robotics' },
  { value: '08+', label: 'Competitions' },
  { value: '04+', label: 'Projects' },
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
            <p className="font-display text-3xl md:text-4xl text-text-primary text-text-muted leading-tight mb-8">
              A Closer Look at Me...
            </p>
            <div className="accent-line mb-6" />
            <p className="text-white text-3xl font-body leading-relaxed mb-4">
              I'm Michael Ayisi, a passionate solutionist from Ghana. A PRESEC Legon alumnus, I'm pursuing a 
              BSc in Robotics Engineering & Artificial Intelligence at the University of Mines & Technology (UMaT). 
              I'm fascinated by the intersection of hardware, software, and ideas, and I enjoy breaking down problems and 
              turning them into practical solutions.
            </p>
            <p className="text-white text-3xl font-body leading-relaxed mb-4">
              Beyond tech, I love music and soccer. Recently, I've ventured into content creation through 
              TinyProjects with Mike, a post series where I share small projects I build and the process behind them. 
              Check it out on my <a href="https://www.instagram.com/am.tinyprojects/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Instagram</a>
            </p>
            <p className="text-white text-3xl font-body leading-relaxed mb-4">
              I'm still learning, building, and figuring things out along the way. Always open to collaborations, new ideas, or simply connecting!
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
                  <p className="font-mono-label text-3xl text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Beyond tech card */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={6}
              className="glass border border-border p-5 rounded-sm"
            >
              <p className="font-mono-label text-gold mb-2">Tools & Materials</p>
              <p className="text-text-muted font-body text-xl text-sm leading-relaxed">
                Adobe Photoshop, FLStudio, Audacity, Capcut, Figma, Canva, Adobe Premier Pro, MIT App Inventor, VSCode,
                etc.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={7}
              className="flex items-center gap-3 border border-border p-4 rounded-sm"
            >
              {/* <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <div>
                <p className="font-mono-label text-text-muted text-[0.6rem] mb-0.5">NEXT CHAPTER</p>
                <p className="text-text-primary font-body text-sm">BSc Robotics Engineering & AI · UMaT</p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
