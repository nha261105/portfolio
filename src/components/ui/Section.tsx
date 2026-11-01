import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { cardClass } from './card';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** One content panel in the main column: title with accent underline, then content. */
const Section = ({ id, title, children }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    className={clsx(cardClass, 'scroll-mt-24 p-6 sm:p-8 lg:p-10')}
  >
    <header className="mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg">{title}</h2>
      <span aria-hidden className="mt-3 block h-1 w-10 rounded-full bg-accent" />
    </header>
    {children}
  </motion.section>
);

export const SubHeading = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <h3 className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-fg mb-5">
    <span className="w-10 h-10 rounded-xl border border-line bg-surface-2 text-accent flex items-center justify-center shrink-0">
      {icon}
    </span>
    {children}
  </h3>
);

export default Section;
