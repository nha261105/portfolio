import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import clsx from 'clsx';
import { projects } from '../constants/data';
import type { Project } from '../constants/data';
import Section from './ui/Section';
import { cardClass, chipClass } from './ui/card';

const iconButtonClass =
  'w-9 h-9 flex items-center justify-center rounded-lg border border-line text-muted ' +
  'hover:border-accent/50 hover:text-fg transition-colors duration-200';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
    className={clsx(cardClass, 'group flex flex-col overflow-hidden hover:border-accent/40')}
  >
    {/* Preview */}
    <div className="relative w-full h-44 shrink-0 overflow-hidden border-b border-line bg-surface-2">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-2xl font-bold text-subtle/60 select-none tracking-tight">
              {project.name}
            </span>
          </div>
        </>
      )}
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-5">
      <p className="font-mono text-xs text-subtle mb-2">{project.timeline}</p>
      <h3 className="text-lg font-semibold text-fg leading-tight">{project.name}</h3>
      <p className="text-sm text-muted mt-1 mb-4">{project.tagline}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.slice(0, 4).map((tech) => (
          <span key={tech} className={chipClass}>{tech}</span>
        ))}
        {project.tech.length > 4 && (
          <span className={chipClass} title={project.tech.slice(4).join(', ')}>+{project.tech.length - 4}</span>
        )}
      </div>

      <ul className="space-y-2 mb-5 flex-1">
        {project.highlights.slice(0, 4).map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
            <span className="text-accent shrink-0 mt-px" aria-hidden>→</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-4 border-t border-line">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-accent-soft text-accent text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-fg transition-colors duration-200"
        >
          View Details
        </a>
        <div className="flex items-center gap-2">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} title="GitHub" className={iconButtonClass}>
            <FiGithub size={15} />
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`} title="Live demo" className={iconButtonClass}>
              <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.article>
);

const Projects = () => (
  <Section id="projects" eyebrow="// projects" title="Personal Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </Section>
);

export default Projects;
