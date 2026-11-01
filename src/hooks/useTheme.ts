import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

/** Reads/writes the theme stored on <html data-theme> (initialised in index.html). */
export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f8f9fb' : '#121214');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable (private mode) — theme still works for this visit */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return { theme, toggleTheme };
};
