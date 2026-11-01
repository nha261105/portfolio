import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiMoon, FiSun } from 'react-icons/fi';
import clsx from 'clsx';
import { navLinks } from '../constants/data';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border border-line
                 text-muted hover:text-fg hover:border-line-strong transition-colors overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -16, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? <FiMoon size={16} /> : <FiSun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // At the very bottom the last section may be too short to reach the top — select it explicitly.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveSection(navLinks[navLinks.length - 1].id);
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={clsx(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled || isOpen
          ? 'bg-bg/80 backdrop-blur-md border-line'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="shrink-0 font-mono text-lg font-bold text-fg hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            Ryan<span className="text-accent">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                aria-current={activeSection === link.id ? 'true' : undefined}
                className={clsx(
                  'relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap',
                  activeSection === link.id ? 'text-fg' : 'text-muted hover:text-fg'
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-px h-0.5 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            ))}
            <div className="ml-3 pl-3 border-l border-line">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-fg transition-colors"
            >
              {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full overflow-hidden border-t border-line"
          >
            <div className="w-full max-w-6xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={clsx(
                    'block w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-200',
                    activeSection === link.id
                      ? 'bg-accent-soft text-accent'
                      : 'text-muted hover:bg-surface-2 hover:text-fg'
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
