import { createContext, useContext } from 'react';
import type { Lang, Text } from './types';
import type { UIStrings } from './ui';

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Resolve localized content from data.ts */
  t: (value: Text) => string;
  /** Interface strings for the current language */
  ui: UIStrings;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
};
