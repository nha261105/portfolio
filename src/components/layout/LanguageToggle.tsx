import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useLang } from '../../i18n/context';
import type { Lang } from '../../i18n/types';

const options: Lang[] = ['en', 'vi'];

/** EN / VI segmented switch with a sliding indicator. */
const LanguageToggle = () => {
  const { lang, setLang, ui } = useLang();

  return (
    <div role="group" aria-label={ui.language.label} className="flex items-center h-9 p-0.5 rounded-xl border border-line shrink-0">
      {options.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            lang={code}
            title={active ? undefined : ui.language.switchTo}
            className={clsx(
              'relative h-full px-1.5 sm:px-2 rounded-[9px] font-mono text-[11px] sm:text-xs font-semibold uppercase transition-colors',
              active ? 'text-accent' : 'text-subtle hover:text-fg'
            )}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-[9px] bg-accent-soft"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{code}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
