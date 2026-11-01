import { useCallback, useState } from 'react';
import type { MouseEvent } from 'react';
import { flushSync } from 'react-dom';

export type Theme = 'light' | 'dark';

const readTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'light' ? '#f8f9fb' : '#121214');
  try {
    localStorage.setItem('theme', theme);
  } catch {
    /* storage unavailable (private mode) — theme still works for this visit */
  }
};

/**
 * Theme state backed by <html data-theme> (initialised in index.html).
 * Toggling uses the View Transitions API to reveal the new theme as a circle
 * growing from the click point, falling back to an instant switch.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggleTheme = useCallback((e?: MouseEvent<HTMLElement>) => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    const switchNow = () => {
      applyTheme(next);
      flushSync(() => setTheme(next));
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion || !e) {
      switchNow();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const root = document.documentElement;
    root.classList.add('theme-switching'); // freeze CSS colour transitions so the snapshot is final

    const transition = document.startViewTransition(switchNow);
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    });
    transition.finished.finally(() => root.classList.remove('theme-switching'));
  }, []);

  return { theme, toggleTheme };
};
