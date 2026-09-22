import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Users } from 'lucide-react'
import { projects } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
}

// ── Project card (dark themed) ────────────────────────────────
function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible"
      viewport={{ once: true }} custom={index}
      onClick={() => onOpen(project)}
      className="project-card border border-border rounded-sm cursor-pointer group flex flex-col bg-surface overflow-hidden"
    >
      {/* Project image — shown if available */}
      {project.image && (
        <div className="w-full h-44 overflow-hidden border-b border-border bg-zinc-900 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono-label text-text-muted text-[0.6rem] mb-2 block">{project.year} · {project.status}</span>
            <h3 className="font-display text-2xl md:text-3xl text-text-primary tracking-wide">{project.title}</h3>
          </div>
          <ArrowUpRight size={18} className="text-text-muted group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1 flex-shrink-0" />
        </div>

        {/* Badges */}
        <div className="flex items-center flex-wrap gap-2">
          {project.badge && (
            <span className="font-mono-label text-gold text-[0.6rem] border border-accent/30 px-2 py-1 rounded-sm">
              {project.badge}
            </span>
          )}
          {project.teamSize && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.6rem] font-mono-label text-zinc-400 border border-white/[0.05] bg-white/[0.02]">
              <Users size={10} className="text-zinc-500" />
              <span>TEAM OF {project.teamSize}</span>
            </div>
          )}
        </div>

        <p className="text-text-muted font-body text-sm leading-relaxed">{project.tagline}</p>

        <div className="border-t border-border mt-auto" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="font-mono-label text-text-muted border border-border px-2 py-0.5 rounded-sm text-[0.58rem]">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono-label text-text-muted text-[0.58rem] px-2 py-0.5">+{project.tags.length - 4} more</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Light-themed project card (for the "More" overlay) ────────
function LightProjectCard({ project, onOpen }) {
  return (
    <div
      onClick={() => onOpen(project)}
      className="border border-[#e2e2e0] rounded-sm cursor-pointer group flex flex-col bg-white overflow-hidden hover:border-[#C9A84C]/40 transition-colors"
    >
      {project.image && (
        <div className="w-full h-40 overflow-hidden border-b border-[#e2e2e0] bg-zinc-100 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
          />
        </div>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono-label text-[#8e8e93] text-[0.6rem] mb-1.5 block">{project.year} · {project.status}</span>
            <h3 className="font-display text-xl md:text-2xl text-[#1c1c1e] tracking-wide">{project.title}</h3>
          </div>
          <ArrowUpRight size={16} className="text-[#8e8e93] group-hover:text-[#C9A84C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1 flex-shrink-0" />
        </div>

        <div className="flex items-center flex-wrap gap-2">
          {project.badge && (
            <span className="font-mono-label text-[#C9A84C] text-[0.6rem] border border-[#C9A84C]/40 px-2 py-0.5 rounded-sm">
              {project.badge}
            </span>
          )}
          {project.teamSize && (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[0.6rem] font-mono-label text-[#8e8e93] border border-[#e2e2e0]">
              <Users size={10} className="text-[#8e8e93]" />
              <span>TEAM OF {project.teamSize}</span>
            </div>
          )}
        </div>

        <p className="text-[#6c6c70] font-body text-sm leading-relaxed">{project.tagline}</p>

        <div className="border-t border-[#e2e2e0] mt-auto" />

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="font-mono-label text-[#8e8e93] border border-[#e2e2e0] px-2 py-0.5 rounded-sm text-[0.58rem]">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono-label text-[#8e8e93] text-[0.58rem] px-2 py-0.5">+{project.tags.length - 4} more</span>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Case study — light themed, readable ───────────────────────
function CaseStudy({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#F5F5F3] text-[#1c1c1e] overflow-y-auto"
    >
      {/* Sticky nav bar */}
      <div className="sticky top-0 bg-[#F5F5F3]/80 backdrop-blur-lg border-b border-[#e2e2e0] z-10">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono-label text-[11px] tracking-widest text-[#8e8e93] uppercase">
            {project.year} · {project.status}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-mono-label font-bold text-[#1c1c1e] hover:text-[#C9A84C] transition-colors group"
          >
            <X size={14} className="group-hover:rotate-90 transition-transform duration-200" />
            CLOSE
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
        {/* Badge */}
        {project.badge && (
          <span className="inline-block font-mono-label text-[11px] text-[#C9A84C] border border-[#C9A84C]/40 bg-[#C9A84C]/5 px-3 py-1 rounded-sm mb-6">
            {project.badge}
          </span>
        )}

        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl text-[#1c1c1e] tracking-tight leading-none mb-3">
          {project.title}
        </h1>
        <p className="font-body text-[#6c6c70] text-lg md:text-xl mb-8">{project.tagline}</p>

        {/* Hero image — wide, cinematic */}
        {project.image && (
          <div className="w-full h-64 md:h-[420px] rounded-2xl overflow-hidden mb-10 border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-zinc-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
            />
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-[#e2e2e0] mb-10" />

        {/* Description */}
        <p className="font-body text-[#2c2c2e] text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
          {project.description}
        </p>

        {/* Team size */}
        {project.teamSize && (
          <div className="flex items-center gap-2 mb-10">
            <Users size={14} className="text-[#8e8e93]" />
            <span className="font-mono-label text-[11px] text-[#8e8e93]">TEAM OF {project.teamSize}</span>
          </div>
        )}

        {/* Case study blocks */}
        <div className="flex flex-col gap-8 mb-12">
          {[
            { label: 'THE PROBLEM', content: project.details?.problem },
            { label: 'THE APPROACH', content: project.details?.approach },
            { label: 'THE OUTCOME', content: project.details?.outcome },
          ].filter(b => b.content).map((block) => (
            <div key={block.label} className="border-l-2 border-[#C9A84C]/50 pl-6">
              <p className="font-mono-label text-[11px] text-[#C9A84C] mb-3">{block.label}</p>
              <p className="font-body text-[#3a3a3c] leading-relaxed text-base">{block.content}</p>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-8 border-t border-[#e2e2e0]">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono-label text-[#6c6c70] border border-[#e2e2e0] bg-white/60 px-3 py-1 rounded-sm text-[0.62rem]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── More projects overlay — light themed ──────────────────────
function MoreProjects({ projects, onClose, onOpenProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#F5F5F3] text-[#1c1c1e] overflow-y-auto"
    >
      {/* Sticky nav bar */}
      <div className="sticky top-0 bg-[#F5F5F3]/80 backdrop-blur-lg border-b border-[#e2e2e0] z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono-label text-[11px] tracking-widest text-[#8e8e93] uppercase">
            All Projects
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-mono-label font-bold text-[#1c1c1e] hover:text-[#C9A84C] transition-colors group"
          >
            <X size={14} className="group-hover:rotate-90 transition-transform duration-200" />
            CLOSE
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
        <h2 className="font-display text-4xl md:text-5xl text-[#1c1c1e] tracking-tight mb-2">
          More Projects
        </h2>
        <p className="font-body text-[#6c6c70] text-base md:text-lg mb-10">
          Everything else I’ve worked on.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <LightProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [showMore, setShowMore] = useState(false)

  const visibleProjects = projects.slice(0, 3)
  const remainingProjects = projects//.slice(3)
  const hasMore = remainingProjects.length > 0

  const handleOpenProject = (project) => {
    setShowMore(false) // close the more overlay if open
    setSelected(project)
  }

  return (
    <>
      <section id="projects" className="section-pad border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-4">
            <span className="font-mono-label text-gold">02</span>
            <div className="accent-line" />
            <span className="font-mono-label text-text-muted">PROJECTS</span>
          </motion.div>

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-display text-4xl md:text-6xl text-text-primary mb-12">
            I USUALLY DON'T BUILD ALONE...
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 2} onOpen={setSelected} />
            ))}
          </div>

          {/* More projects button */}
          {hasMore && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              className="mt-10 flex justify-center"
            >
              <button
                onClick={() => setShowMore(true)}
                className="group flex items-center gap-2 px-6 py-3 border border-border rounded-sm font-mono-label text-sm text-text-muted hover:text-gold hover:border-gold/40 transition-all duration-300"
              >
                MORE PROJECTS
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Individual case study */}
      <AnimatePresence>
        {selected && <CaseStudy project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      {/* More projects overlay */}
      <AnimatePresence>
        {showMore && (
          <MoreProjects
            projects={remainingProjects}
            onClose={() => setShowMore(false)}
            onOpenProject={handleOpenProject}
          />
        )}
      </AnimatePresence>
    </>
  )
}