import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../constants/data';
import Section from '../ui/Section';
import { fadeUp, inView } from '../../lib/motion';
import { useLang } from '../../i18n/context';

const channels = [
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: 'ci ci-linkedin' },
  { label: 'GitHub', href: personalInfo.github, icon: null },
  { label: 'Discord', href: personalInfo.discord, icon: 'ci ci-discord' },
];

/** One compact block: invitation, email (copy or open mail app), and the other channels. */
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { ui } = useLang();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <Section id="contact" title={ui.section.contact}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
      >
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-fg">{ui.contact.title}</h3>
          <p className="mt-2 text-muted max-w-[52ch]">{ui.contact.subtitle}</p>
          <div className="mt-4 flex items-center gap-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.label}
                title={c.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-line bg-surface-2 hover:border-accent/50 transition-colors"
              >
                {c.icon ? (
                  <i className={`${c.icon} ci-lg`} aria-hidden />
                ) : (
                  <>
                    <i className="ci ci-github-light ci-lg hidden dark:inline-block" aria-hidden />
                    <i className="ci ci-github ci-lg dark:hidden" aria-hidden />
                  </>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-0">
          <button
            type="button"
            onClick={copyEmail}
            className="group inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-line bg-surface-2
                       hover:border-accent/50 transition-colors min-w-0"
            aria-label={`${ui.contact.copyEmail} ${personalInfo.email}`}
          >
            <FiMail className="text-accent shrink-0" />
            <span className="text-sm sm:text-base text-fg truncate">{personalInfo.email}</span>
            <span className="text-muted group-hover:text-fg shrink-0" aria-hidden>
              {copied ? <FiCheck className="text-accent" /> : <FiCopy />}
            </span>
          </button>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cta text-cta-fg font-medium
                       hover:bg-cta-hover transition-colors"
          >
            {ui.contact.sayHello}
          </a>
          <p role="status" className="h-5 text-sm text-accent text-center">
            <AnimatePresence>
              {copied && (
                <motion.span className="inline-block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {ui.contact.copied}
                </motion.span>
              )}
            </AnimatePresence>
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
