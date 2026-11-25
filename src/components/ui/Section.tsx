import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { cardClass } from './card';
import { easeOut } from '../../lib/motion';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

/** One content panel in the main column: title with an underline that draws in, then content. */
const Section = ({ id, title, children }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.6, ease: easeOut }}
    className={clsx(cardClass, 'scroll-mt-24 p-6 sm:p-8 lg:p-10')}
  >
    <header className="mb-6 pb-5 border-b border-line">
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-fg"
      >
        {title}
      </motion.h2>
    </header>
    {children}
  </motion.section>
);

export const SubHeading = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <motion.h3
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, ease: easeOut }}
    className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-fg mb-5"
  >
    <span className="text-accent flex items-center justify-center shrink-0">
      {icon}
    </span>
    {children}
  </motion.h3>
);

export default Section;
