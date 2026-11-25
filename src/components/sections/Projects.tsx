import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import { projects } from '../../constants/data';
import type { Project, ProjectStatus } from '../../constants/data';
import Section from '../ui/Section';
import ArchitectureDiagram from '../ui/ArchitectureDiagram';
import { chipClass } from '../ui/card';
import { easeOut, fadeUp, inView, staggerContainer } from '../../lib/motion';
import { useLang } from '../../i18n/context';

const statusStyle: Record<ProjectStatus, string> = {
  completed: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  'in-progress': 'text-accent bg-accent-soft border-accent/25',
  'early-stage': 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',
};

const StatusBadge = ({ status, className }: { status: ProjectStatus; className?: string }) => {
  const { ui } = useLang();
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-xs font-medium',
        statusStyle[status],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden />
      {ui.projects.status[status]}
    </span>
  );
};

const Bullets = ({ items, marker = '→' }: { items: { en: string; vi: string }[]; marker?: string }) => {
  const { t } = useLang();
  return (
    <ul className="space-y-1.5">
      {items.map((h) => (
        <li key={h.en} className="flex gap-2 text-sm text-muted leading-relaxed">
          <span className="text-accent shrink-0" aria-hidden>{marker}</span>
          {t(h)}
        </li>
      ))}
    </ul>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const { t, ui } = useLang();
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

  const heading = 'text-sm font-semibold text-accent mb-1.5';

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
        className="relative w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl
                   border border-line bg-surface shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={ui.projects.close}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-xl
                     border border-line bg-surface/90 text-muted hover:text-fg transition-colors"
        >
          <FiX />
        </button>

        {project.image && (
          <div className="relative h-48 sm:h-64 border-b border-line bg-surface-2 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.name} ${ui.projects.screenshot}`}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 pr-10">
            <StatusBadge status={project.status} />
            <p className="text-xs font-medium text-subtle tabular-nums">
              {t(project.period)} · {t(project.team)}
            </p>
          </div>
          <h3 id="project-modal-title" className="mt-3 text-2xl font-bold text-fg">{project.name}</h3>
          <p className="text-muted mt-1">{t(project.tagline)}</p>

          <motion.div
            variants={staggerContainer(0.08, 0.15)}
            initial="hidden"
            animate="show"
            className="mt-6 grid gap-6"
          >
            <motion.div variants={fadeUp}>
              <h4 className={heading}>{ui.projects.problem}</h4>
              <p className="text-sm text-muted leading-relaxed">{t(project.problem)}</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className={heading}>{ui.projects.solution}</h4>
              <p className="text-sm text-muted leading-relaxed">{t(project.solution)}</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className={heading}>{ui.projects.architecture}</h4>
              <div className="rounded-2xl border border-line bg-surface-2/50 p-3 sm:p-4 overflow-x-auto">
                <div className="min-w-[680px]">
                  <ArchitectureDiagram
                    spec={project.diagram}
                    label={`${project.name} ${ui.projects.diagramLabel}`}
                    plannedLabel={ui.projects.planned}
                  />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h4 className={heading}>{ui.projects.highlights}</h4>
              <Bullets items={project.highlights} />
            </motion.div>
            {project.roadmap && project.roadmap.length > 0 && (
              <motion.div variants={fadeUp}>
                <h4 className={heading}>{ui.projects.roadmap}</h4>
                <Bullets items={project.roadmap} marker="○" />
              </motion.div>
            )}
          </motion.div>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {project.tech.map((tech) => <span key={tech} className={chipClass}>{tech}</span>)}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cta text-cta-fg text-sm font-medium
                         hover:bg-cta-hover transition-colors"
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
                <FiExternalLink /> {ui.projects.liveDemo}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { t, ui } = useLang();
  const [selected, setSelected] = useState<Project | null>(null);


  return (
    <Section id="projects" title={ui.section.projects}>
      {/* Résumé-style list: meta on the left, the project on the right, hairlines between */}
      <div className="divide-y divide-line">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut, delay: i * 0.06 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="grid gap-3 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-10 py-9 first:pt-0 last:pb-0"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:flex-col sm:items-start sm:pt-1">
              <p className="text-sm font-medium text-fg tabular-nums">{t(project.period)}</p>
              <p className="text-sm text-subtle">{t(project.team)}</p>
              <StatusBadge status={project.status} />
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-fg">{project.name}</h3>
              <p className="text-muted mt-1">{t(project.tagline)}</p>
              <ul className="mt-4 space-y-2 max-w-[64ch]">
                {project.highlights.slice(0, 3).map((h) => (
                  <li key={h.en} className="flex gap-2.5 text-[0.9375rem] text-muted leading-relaxed">
                    <span className="text-subtle select-none" aria-hidden>•</span>
                    <span>{t(h)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-subtle">{project.tech.join(', ')}</p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="group inline-flex items-center gap-1 text-accent hover:text-accent-hover transition-colors"
                >
                  {ui.projects.viewDetails}
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-fg transition-colors"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
