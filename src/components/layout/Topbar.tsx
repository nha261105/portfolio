import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { sectionIds } from '../../constants/data';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLang } from '../../i18n/context';
import { scrollToSection } from '../../lib/scroll';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

/** Sticky navigation bar above the content column; highlights the section in view. */
const Topbar = () => {
  const active = useActiveSection(sectionIds);
  const { lang, ui } = useLang();
  const listRef = useRef<HTMLUListElement>(null);
  const [fadeRight, setFadeRight] = useState(false);

  // On narrow screens the tabs scroll sideways: fade the right edge while more tabs are hidden.
  const updateFade = useCallback(() => {
    const el = listRef.current;
    if (el) setFadeRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateFade();
    window.addEventListener('resize', updateFade);
    return () => window.removeEventListener('resize', updateFade);
  }, [updateFade, lang]);

  // Keep the active tab visible when it changes.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>(`[data-section="${active}"]`);
    if (!list || !item) return;
    const left = item.offsetLeft;
    const right = left + item.offsetWidth;
    if (left < list.scrollLeft || right > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: left - 8, behavior: 'smooth' });
    }
  }, [active]);

  return (
    <div className="sticky top-3 z-40">
      <nav
        aria-label={ui.sectionsNav}
        className="flex items-center justify-between gap-2 rounded-2xl border border-line
                   bg-surface/80 backdrop-blur-md px-2 py-2 shadow-lg shadow-black/5"
      >
        {/* Scrolls horizontally on very narrow screens instead of wrapping */}
        <ul
          ref={listRef}
          onScroll={updateFade}
          className="flex items-center gap-0.5 sm:gap-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={fadeRight ? { maskImage: 'linear-gradient(to right, black calc(100% - 28px), transparent)' } : undefined}
        >
          {sectionIds.map((id) => {
            const isActive = active === id;
            return (
              <li key={id} data-section={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  aria-current={isActive ? 'true' : undefined}
                  className={clsx(
                    'relative block px-2 sm:px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap',
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
                  <span className="relative">{ui.nav[id]}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-1.5 shrink-0">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
