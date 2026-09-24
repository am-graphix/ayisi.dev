import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amgraphix8@gmail.com',
    href: 'mailto:amgraphix8@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/am-graphix',
    href: 'https://github.com/am-graphix',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/michael-ayisi',
    href: 'https://linkedin.com/in/michael-ayisi-5345a4341',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono-label text-gold">06</span>
          <div className="accent-line" />
          <span className="font-mono-label text-text-muted">CONTACT</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="font-display text-4xl md:text-6xl text-text-primary mb-4"
        >
          LET'S TALK
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="font-body text-text-muted mb-16 max-w-md text-lg"
        >
          Building something? Have an idea? Want to collaborate? I'm open.
        </motion.p>

        {/* Social links */}
        <div className="flex flex-col gap-4 mb-16">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
              className="group flex items-center gap-5 py-4 border-b border-border hover:border-accent/40 transition-all duration-300"
            >
              <social.icon
                size={18}
                className="text-text-muted group-hover:text-gold transition-colors flex-shrink-0"
              />
              <div className="flex-1">
                <p className="font-mono-label text-text-muted text-[0.65rem] mb-0.5">{social.label}</p>
                <p className="font-body text-text-primary group-hover:text-gold transition-colors">{social.value}</p>
              </div>
              <span className="font-mono-label text-text-muted group-hover:text-gold text-[0.65rem] transition-colors">
                →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={7}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border"
        >
          <span className="font-mono-label text-text-muted text-[0.65rem]">
            © 2025 AM INDUSTRIES · MICHAEL AYISI 
          </span>
          <span className="font-mono-label text-text-muted text-[0.65rem]">
            KWABENA FROM KADE
          </span>
        </motion.div>
      </div>
    </section>
  )
}
