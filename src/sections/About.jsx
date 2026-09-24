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
              I'm Michael Ayisi — a builder from Kade, Ghana. I just finished high school at PRESEC Legon and I'm
              heading into BSc Robotics Engineering & Artificial Intelligence at the University of
              Mines & Technology (UMaT). But the education started long before university.
            </p>
            <p className="text-text-muted font-body leading-relaxed mb-4">
              I'm drawn into the space where hardware, software and ideas meet. I enjoy taking a problem,
              pulling it apart, and trying to turn the pieces into something that actually works, no matter what it takes.
            </p>
              <p className="text-text-muted font-body leading-relaxed mb-4">
              I have real passion for problem solving.. And that has led me into robotics... 
              I have worked on a number of projects, participated in competitions, attended conferences, and through all,
              have learnt a lot.. Hoping they all add up one day to benefit the Ghanaian society.
              
            </p>
            <p className="text-text-muted font-body leading-relaxed mb-4">
              But there is more to me than just building... I love music, football,
              gaming, cycling, and anything that has to do with learning something new... 
              I really love working with people... I find it very rewarding.
              
            </p>
            <p className="text-text-muted font-body leading-relaxed">
              More interestingly, I am still figuring things out, still learning, still building...
              Very open to collaborating, or just simply reaching out...
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
              <p className="font-mono-label text-gold mb-2">Tools & Materials</p>
              <p className="text-text-muted font-body text-sm leading-relaxed">
                Adobe Photoshop, FLStudio, Audacity, Capcut, Figma, Canva, Adobe Premier Pro, MIT App Inventor, VSCode,
                etc.
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
