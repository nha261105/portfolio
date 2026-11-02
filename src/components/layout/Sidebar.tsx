import { useState } from 'react';
import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiDownload, FiMail, FiMapPin } from 'react-icons/fi';
import clsx from 'clsx';
import { personalInfo } from '../../constants/data';
import { cardClass } from '../ui/card';
import { easeOut, fadeUp, staggerContainer } from '../../lib/motion';
import { useLang } from '../../i18n/context';
import type { Text } from '../../i18n/types';

const contactItems: { key: 'email' | 'location'; icon: ReactNode; value: Text; href?: string }[] = [
  { key: 'email', icon: <FiMail size={17} />, value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { key: 'location', icon: <FiMapPin size={17} />, value: personalInfo.location },
];

const socials = [
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: <i className="ci ci-linkedin ci-lg" aria-hidden /> },
  {
    label: 'GitHub',
    href: personalInfo.github,
    icon: (
      <>
        <i className="ci ci-github-light ci-lg hidden dark:inline-block" aria-hidden />
        <i className="ci ci-github ci-lg dark:hidden" aria-hidden />
      </>
    ),
  },
  { label: 'Discord', href: personalInfo.discord, icon: <i className="ci ci-discord ci-lg" aria-hidden /> },
];

const Details = () => {
  const { t, ui } = useLang();
  return (
  <motion.div variants={staggerContainer(0.06, 0.25)} initial="hidden" animate="show">
    <motion.div variants={fadeUp} className="my-6 h-px bg-line" />
    <ul className="space-y-4">
      {contactItems.map((item) => (
        <motion.li key={item.key} variants={fadeUp} className="group flex items-center gap-3.5 min-w-0">
          <span
            className="w-10 h-10 rounded-xl border border-line bg-surface-2 text-accent flex items-center justify-center shrink-0
                       transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
          >
            {item.icon}
          </span>
          <div className="min-w-0 text-left">
            <p className="text-[11px] uppercase tracking-wider text-subtle">{ui.sidebar[item.key]}</p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block text-sm text-fg truncate hover:text-accent transition-colors"
              >
                {t(item.value)}
              </a>
            ) : (
              <p className="text-sm text-fg leading-snug">{t(item.value)}</p>
            )}
          </div>
        </motion.li>
      ))}
    </ul>
    <motion.div variants={fadeUp} className="my-6 h-px bg-line" />
    <motion.div variants={fadeUp} className="flex items-center justify-center gap-2">
      {socials.map((s) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          whileHover={{ y: -3, scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          className="w-10 h-10 flex items-center justify-center rounded-xl border border-line bg-surface-2 hover:border-accent/50 transition-colors"
        >
          {s.icon}
        </motion.a>
      ))}
    </motion.div>
    <motion.a
      variants={fadeUp}
      href={personalInfo.resume}
      download
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-accent text-accent-fg
                 font-medium shadow-lg shadow-accent/25 hover:bg-accent-hover hover:shadow-accent/40 transition-[background-color,box-shadow]"
    >
      <FiDownload size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" /> {ui.sidebar.downloadCv}
    </motion.a>
  </motion.div>
  );
};

/** Profile card: sticky on desktop, collapsible on mobile. */
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { ui } = useLang();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className={clsx(cardClass, 'relative p-5 sm:p-6 lg:p-7 lg:sticky lg:top-6')}
    >
      <div className="flex lg:flex-col items-center gap-4 lg:gap-5 lg:text-center">
        {/* Avatar with a slowly rotating gradient ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20, delay: 0.1 }}
          whileHover={{ scale: 1.04, rotate: -2 }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 rounded-2xl lg:rounded-3xl p-[3px] overflow-hidden shrink-0"
        >
          <div
            aria-hidden
            className="absolute -inset-1/2 animate-spin-slow"
            style={{ background: 'conic-gradient(from 0deg, transparent 0deg, var(--accent) 90deg, transparent 180deg, var(--accent) 270deg, transparent 360deg)' }}
          />
          <div className="relative w-full h-full rounded-[13px] lg:rounded-[21px] overflow-hidden bg-surface-2">
            <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          animate="show"
          className="min-w-0 flex-1 lg:flex-none pr-11 lg:pr-0"
        >
          <motion.h1 variants={fadeUp} className="text-lg sm:text-xl font-bold tracking-tight text-fg">
            <span className="whitespace-nowrap">{personalInfo.name}</span>{' '}
            <span className="font-medium text-muted whitespace-nowrap">({personalInfo.nickname})</span>
          </motion.h1>
          <motion.span
            variants={fadeUp}
            className="inline-flex mt-3 px-3 py-1 rounded-lg bg-accent-soft text-accent text-xs font-medium"
          >
            {personalInfo.role}
          </motion.span>
        </motion.div>
      </div>

      {/* Mobile: expand / collapse details */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.9 }}
        aria-expanded={open}
        aria-controls="sidebar-details"
        aria-label={open ? ui.sidebar.hideContacts : ui.sidebar.showContacts}
        className="lg:hidden absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl
                   border border-line bg-surface-2 text-accent"
      >
        <FiChevronDown className={clsx('transition-transform duration-300', open && 'rotate-180')} />
      </motion.button>

      <div className="hidden lg:block">
        <Details />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="sidebar-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="lg:hidden overflow-hidden"
          >
            <Details />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;
