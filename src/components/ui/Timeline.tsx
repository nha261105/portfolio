import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { easeOut, fadeUp, inView, popIn, staggerContainer } from '../../lib/motion';

export const TimelineItem = ({ title, subtitle, period, children }: {
  title: string;
  subtitle?: ReactNode;
  period: string;
  children?: ReactNode;
}) => (
  <motion.li variants={fadeUp} className="relative pl-7 pb-8 last:pb-0">
    <motion.span
      aria-hidden
      variants={popIn}
      className="absolute left-0 top-2 w-2.5 h-2.5 -translate-x-[5px] rounded-full bg-accent ring-4 ring-surface"
    />
    <h3 className="font-semibold text-fg text-base sm:text-lg">{title}</h3>
    {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
    <p className="text-sm font-medium text-accent tabular-nums mt-1">{period}</p>
    {children}
  </motion.li>
);

/** Vertical timeline whose line draws downwards as it scrolls into view. */
export const Timeline = ({ children }: { children: ReactNode }) => (
  <motion.ol
    variants={staggerContainer(0.15, 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={inView}
    className="relative ml-1.5"
  >
    <motion.span
      aria-hidden
      variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.9, ease: easeOut } } }}
      className="absolute left-0 top-0 bottom-0 w-px origin-top bg-line-strong"
    />
    {children}
  </motion.ol>
);
