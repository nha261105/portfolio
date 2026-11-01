import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import { projects } from '../../constants/data';
import type { Project } from '../../constants/data';
import Section from '../ui/Section';
import { chipClass } from '../ui/card';
import { easeOut, fadeUp, inView, staggerContainer } from '../../lib/motion';
import { trackSpotlight } from '../../lib/spotlight';

const Preview = ({ project, className }: { project: Project; className?: string }) => (
  <div className={clsx('relative overflow-hidden bg-surface-2', className)}>
    {project.image ? (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
      />
    ) : (
      <>
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              'linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(circle at center, black 25%, transparent 80%)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xl font-bold text-subtle/70 select-none">{project.name}</span>
        </div>
      </>
    )}
  </div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl
                   border border-line bg-surface shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-xl
                     border border-line bg-surface/90 text-muted hover:text-fg transition-colors"
        >
          <FiX />
        </button>

        <Preview project={project} className="h-48 sm:h-60 border-b border-line" />

        <div className="p-6 sm:p-8">
          <p className="font-mono text-xs text-subtle">{project.timeline} · {project.team}</p>
          <h3 id="project-modal-title" className="mt-2 text-2xl font-bold text-fg">{project.name}</h3>
          <p className="text-muted mt-1">{project.tagline}</p>

          <motion.div
            variants={staggerContainer(0.08, 0.15)}
            initial="hidden"
            animate="show"
            className="mt-6 grid gap-5"
          >
            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-semibold text-accent mb-1.5">Problem</h4>
              <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-semibold text-accent mb-1.5">Solution</h4>
              <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-semibold text-accent mb-1.5">Highlights</h4>
              <ul className="space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent" aria-hidden>→</span>{h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {project.tech.map((t) => <span key={t} className={chipClass}>{t}</span>)}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-accent-fg text-sm font-medium
                         hover:bg-accent-hover transition-colors"
            >
              <FiGithub /> GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-line text-fg text-sm font-medium
                           hover:border-accent/50 transition-colors"
              >
                <FiExternalLink /> Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const filters = useMemo(() => ['All', ...new Set(projects.map((p) => p.stack))], []);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = filter === 'All' ? projects : projects.filter((p) => p.stack === filter);

  return (
    <Section id="projects" title="Projects">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <motion.button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            whileTap={{ scale: 0.94 }}
            className={clsx(
              'relative px-4 py-1.5 rounded-xl text-sm font-medium border transition-colors',
              filter === f ? 'text-accent border-accent/30' : 'border-line text-muted hover:text-fg hover:border-line-strong'
            )}
          >
            {filter === f && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-xl bg-accent-soft"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{f}</span>
          </motion.button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.button
              layout
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              onMouseMove={trackSpotlight}
              // Each card animates itself: cards re-mounted by the filter must not depend on the parent's state.
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut, delay: i * 0.08 } },
              }}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 320, damping: 22 } }}
              whileTap={{ scale: 0.98 }}
              className="spotlight group text-left flex flex-col rounded-2xl border border-line bg-surface-2/60 overflow-hidden
                         hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-[border-color,box-shadow] duration-300"
            >
              <div className="relative">
                <Preview project={project} className="h-44 border-b border-line" />
                <span
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                             bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
                  aria-hidden
                >
                  <span
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface text-fg text-sm font-medium shadow-lg
                               translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View details <FiArrowUpRight />
                  </span>
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="font-mono text-xs text-subtle">{project.timeline}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-fg group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted mt-0.5">{project.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.slice(0, 4).map((t) => <span key={t} className={chipClass}>{t}</span>)}
                  {project.tech.length > 4 && <span className={chipClass}>+{project.tech.length - 4}</span>}
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
