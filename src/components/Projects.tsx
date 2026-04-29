import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { projects } from '../constants/data';
import type { Project } from '../constants/data';

const accentColors = [
  { bg: 'from-[#1a2a4a] to-[#0e1a2e]', dot: '#3B82F6' },
  { bg: 'from-[#1a2a3a] to-[#0e1820]', dot: '#6366F1' },
  { bg: 'from-[#1a2a2a] to-[#0e1818]', dot: '#10B981' },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="flex flex-col rounded-2xl border overflow-hidden
                 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
        borderColor: 'rgba(192, 192, 192, 0.3)',
      }}
    >
      {/* Preview image */}
      <div className="relative w-full h-44 shrink-0 overflow-hidden">
        {project.image ? (
          <>
            <img src={project.image} alt={project.name}
              className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-black/20" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-linear-to-br ${accent.bg}`} />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(#3B82F6 1px,transparent 1px),linear-gradient(90deg,#3B82F6 1px,transparent 1px)',
              backgroundSize: '28px 28px',
            }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-black text-white/10 select-none tracking-tight">{project.name}</span>
            </div>
          </>
        )}
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full z-10"
          style={{ backgroundColor: accent.dot, boxShadow: `0 0 8px ${accent.dot}` }} />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))">
        <h3 className="text-base font-bold text-[#f0f0f0] mb-1 leading-tight">{project.name}</h3>
        <p className="text-xs text-[#888888] mb-4 leading-relaxed">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-2.5 py-0.5 text-xs text-[#c0c0c0] border border-[#333333] rounded-full">{tech}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-0.5 text-xs text-[#888888] border border-[#333333] rounded-full">+{project.tech.length - 4}</span>
          )}
        </div>

        <ul className="space-y-1.5 mb-5 flex-1">
          {project.highlights.slice(0, 4).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#888888] leading-relaxed">
              <span className="text-[#3B82F6] shrink-0 mt-0.5">→</span>{h}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="px-4 py-1.5 bg-[#DBEAFE] text-[#1e3a5f] text-xs font-semibold rounded-lg hover:bg-[#BFDBFE] transition-colors duration-200">
            View Details
          </a>
          <div className="flex items-center gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#333333]
                         text-[#888888] hover:border-[#3B82F6]/60 hover:text-[#f0f0f0] transition-all duration-200">
              <FiGithub size={14} />
            </a>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#333333]
                           text-[#888888] hover:border-[#3B82F6]/60 hover:text-[#f0f0f0] transition-all duration-200">
                <FiExternalLink size={14} />
              </a>
            ) : (
              <span title="No live demo"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#333333] text-[#444444] cursor-not-allowed">
                <FiExternalLink size={14} />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#232323]">
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-[#2a2a2a] border border-[#333333] flex items-center justify-center shrink-0">
            <FiFolder className="text-[#3B82F6]" size={18} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f0f0f0]">Personal Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
