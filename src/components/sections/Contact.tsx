import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../constants/data';
import Section from '../ui/Section';
import { fadeUp, inView, staggerContainer } from '../../lib/motion';
import { trackSpotlight } from '../../lib/spotlight';

const channels = [
  { label: 'LinkedIn', handle: 'in/nha261105', href: personalInfo.linkedin, icon: 'ci ci-linkedin' },
  { label: 'GitHub', handle: 'nha261105', href: personalInfo.github, icon: null },
  { label: 'Discord', handle: 'Message me', href: personalInfo.discord, icon: 'ci ci-discord' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

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
    <Section id="contact" title="Contact">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="rounded-2xl border border-line bg-surface-2/60 p-6 sm:p-10 text-center relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(500px circle at 50% 0%, var(--glow), transparent 70%)' }}
        />
        <div className="relative">
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-fg">Let&apos;s work together</h3>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Have a role, a project or just a question about backend systems? My inbox is always open.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <motion.button
              type="button"
              onClick={copyEmail}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-line bg-surface
                         hover:border-accent/50 transition-colors min-w-0"
              aria-label={`Copy email address ${personalInfo.email}`}
            >
              <FiMail className="text-accent shrink-0" />
              <span className="font-mono text-sm sm:text-base text-fg truncate">{personalInfo.email}</span>
              <span className="relative w-4 h-4 text-muted group-hover:text-fg shrink-0" aria-hidden>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? 'check' : 'copy'}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    className="absolute inset-0 flex"
                  >
                    {copied ? <FiCheck className="text-accent" /> : <FiCopy />}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.button>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-fg font-medium
                         shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
            >
              Say hello
            </motion.a>
          </div>
          <p role="status" className="h-5 mt-3 text-sm text-accent">
            <AnimatePresence>
              {copied && (
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                >
                  Email copied to clipboard!
                </motion.span>
              )}
            </AnimatePresence>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mt-5 grid sm:grid-cols-3 gap-4"
      >
        {channels.map((c) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            onMouseMove={trackSpotlight}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 350, damping: 22 } }}
            whileTap={{ scale: 0.98 }}
            className="spotlight group flex items-center gap-3.5 p-4 rounded-2xl border border-line bg-surface-2/60
                       hover:border-accent/40 transition-colors"
          >
            <span
              className="w-11 h-11 rounded-xl bg-surface border border-line flex items-center justify-center shrink-0
                         transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            >
              {c.icon ? (
                <i className={`${c.icon} ci-xl`} aria-hidden />
              ) : (
                <>
                  <i className="ci ci-github-light ci-xl hidden dark:inline-block" aria-hidden />
                  <i className="ci ci-github ci-xl dark:hidden" aria-hidden />
                </>
              )}
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-fg">{c.label}</span>
              <span className="block text-sm text-muted truncate">{c.handle}</span>
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
};

export default Contact;
