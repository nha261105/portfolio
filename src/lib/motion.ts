import type { Variants } from 'framer-motion';

/** Smooth "ease-out-quint" curve used across the site. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 380, damping: 26 } },
};

/** Shared viewport settings: animate once, when a bit of the element is visible. */
export const inView = { once: true, amount: 0.15 } as const;
