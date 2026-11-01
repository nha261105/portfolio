import { motion } from 'framer-motion';
import clsx from 'clsx';
import { navLinks } from '../../constants/data';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../lib/scroll';
import ThemeToggle from './ThemeToggle';

const sectionIds = navLinks.map((l) => l.id);

/** Sticky navigation bar above the content column; highlights the section in view. */
const Topbar = () => {
  const active = useActiveSection(sectionIds);

  return (
    <div className="sticky top-3 z-40">
      <nav
        aria-label="Sections"
        className="flex items-center justify-between gap-2 rounded-2xl border border-line
                   bg-surface/80 backdrop-blur-md px-2 py-2 shadow-lg shadow-black/5"
      >
        <ul className="flex items-center gap-0.5 sm:gap-1 min-w-0">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className={clsx(
                    'relative block px-2.5 sm:px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap',
                    isActive ? 'text-accent' : 'text-muted hover:text-fg'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="topbar-active"
                      className="absolute inset-0 rounded-xl bg-accent-soft"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default Topbar;
