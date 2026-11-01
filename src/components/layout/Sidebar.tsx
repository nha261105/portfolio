import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiDownload, FiGithub, FiMail, FiMapPin } from 'react-icons/fi';
import clsx from 'clsx';
import { personalInfo } from '../../constants/data';
import { cardClass } from '../ui/card';

const contactItems = [
  { icon: <FiMail size={17} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FiGithub size={17} />, label: 'GitHub', value: personalInfo.github.replace('https://', ''), href: personalInfo.github },
  { icon: <FiMapPin size={17} />, label: 'Location', value: personalInfo.location },
];

const socialClass =
  'w-10 h-10 flex items-center justify-center rounded-xl border border-line bg-surface-2 ' +
  'hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-200';

const Details = () => (
  <>
    <div className="my-6 h-px bg-line" />
    <ul className="space-y-4">
      {contactItems.map((item) => (
        <li key={item.label} className="flex items-center gap-3.5 min-w-0">
          <span className="w-10 h-10 rounded-xl border border-line bg-surface-2 text-accent flex items-center justify-center shrink-0">
            {item.icon}
          </span>
          <div className="min-w-0 text-left">
            <p className="text-[11px] uppercase tracking-wider text-subtle">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block text-sm text-fg truncate hover:text-accent transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-fg leading-snug">{item.value}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
    <div className="my-6 h-px bg-line" />
    <div className="flex items-center justify-center gap-2">
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className={socialClass}>
        <i className="ci ci-linkedin ci-lg" aria-hidden />
      </a>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className={socialClass}>
        <i className="ci ci-github-light ci-lg hidden dark:inline-block" aria-hidden />
        <i className="ci ci-github ci-lg dark:hidden" aria-hidden />
      </a>
      <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord" className={socialClass}>
        <i className="ci ci-discord ci-lg" aria-hidden />
      </a>
    </div>
    <a
      href={personalInfo.resume}
      download
      className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-accent text-accent-fg
                 font-medium shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
    >
      <FiDownload size={17} /> Download CV
    </a>
  </>
);

/** Profile card: sticky on desktop, collapsible on mobile. */
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={clsx(cardClass, 'relative p-5 sm:p-6 lg:p-7 lg:sticky lg:top-6')}
    >
      <div className="flex lg:flex-col items-center gap-4 lg:gap-5 lg:text-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-36 lg:h-36 rounded-2xl lg:rounded-3xl overflow-hidden bg-surface-2 ring-1 ring-line shrink-0">
          <img src={personalInfo.avatar} alt={personalInfo.name} className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0 flex-1 lg:flex-none pr-8 lg:pr-0">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-fg">{personalInfo.name}</h1>
          <p className="text-sm text-muted mt-0.5">
            aka <span className="font-mono font-medium text-fg">{personalInfo.nickname}</span>
          </p>
          <span className="inline-block mt-2.5 px-3 py-1 rounded-lg bg-accent-soft text-accent text-xs font-medium">
            {personalInfo.role}
          </span>
        </div>
      </div>

      {/* Mobile: expand / collapse details */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="sidebar-details"
        aria-label={open ? 'Hide contacts' : 'Show contacts'}
        className="lg:hidden absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl
                   border border-line bg-surface-2 text-accent"
      >
        <FiChevronDown className={clsx('transition-transform duration-300', open && 'rotate-180')} />
      </button>

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
            transition={{ duration: 0.25 }}
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
