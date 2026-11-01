import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { personalInfo } from '../constants/data';
import { cardClass } from './ui/card';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const socialLinkClass =
  'w-11 h-11 flex items-center justify-center rounded-xl hover:bg-surface-2 transition-colors duration-200';

const Hero = () => (
  <section id="hero" className="relative w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
    {/* Soft background glow */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[480px] opacity-80"
      style={{ background: 'radial-gradient(600px circle at 70% 20%, var(--glow), transparent 70%)' }}
    />

    <div className="relative w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-md">
            <div className={`${cardClass} w-full aspect-square p-1.5`}>
              <div className="w-full h-full rounded-xl overflow-hidden bg-surface-2">
                {personalInfo.avatar ? (
                  <img
                    src={personalInfo.avatar}
                    alt="Nguyen Hoang Anh"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl font-bold text-accent select-none">NHA</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="inline-block mb-5 px-3 py-1.5 bg-surface border border-line rounded-lg font-mono text-sm text-accent"
          >
            {personalInfo.tagline}
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted text-lg mb-2">
            {personalInfo.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-fg"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-semibold text-accent mb-6">
            {personalInfo.role}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-muted text-lg leading-relaxed mb-8 max-w-2xl">
            {personalInfo.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
            <a
              href={personalInfo.resume}
              download
              className="flex items-center gap-2 px-6 py-3.5 bg-accent text-accent-fg rounded-xl font-medium
                         shadow-lg shadow-accent/25 hover:bg-accent-hover hover:-translate-y-0.5
                         transition-all duration-200"
            >
              <FiDownload size={18} />
              Resume
            </a>

            <div className={`${cardClass} flex items-center gap-1 px-2 py-1.5`}>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className={socialLinkClass}>
                <i className="ci ci-linkedin ci-xl" />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email" title="Email" className={socialLinkClass}>
                <i className="ci ci-gmail ci-xl" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className={socialLinkClass}>
                {/* GitHub mark is monochrome: light glyph on dark theme, dark glyph on light theme */}
                <i className="ci ci-github-light ci-xl hidden dark:inline-block" />
                <i className="ci ci-github ci-xl dark:hidden" />
              </a>
              <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord" className={socialLinkClass}>
                <i className="ci ci-discord ci-xl" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
