import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionProps {
  id: string;
  title: string;
  /** Small mono label shown above the title, e.g. "02 — projects" */
  eyebrow?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

/** Shared section wrapper: consistent spacing, width and heading style. */
const Section = ({ id, title, eyebrow, subtitle, className, children }: SectionProps) => (
  <section id={id} className={clsx('w-full py-20 sm:py-24 px-4 sm:px-6 lg:px-8', className)}>
    <div className="w-full max-w-6xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-10 sm:mb-12"
      >
        {eyebrow && (
          <p className="font-mono text-xs sm:text-sm text-accent mb-3 tracking-wide">{eyebrow}</p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">{title}</h2>
        {subtitle && <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl">{subtitle}</p>}
      </motion.header>
      {children}
    </div>
  </section>
);

export default Section;
