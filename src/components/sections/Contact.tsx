import { useState } from 'react';
import { FiCheck, FiCopy, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../constants/data';
import Section from '../ui/Section';

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
      <div className="rounded-2xl border border-line bg-surface-2/60 p-6 sm:p-10 text-center relative overflow-hidden">
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
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl border border-line bg-surface
                         hover:border-accent/50 transition-colors min-w-0"
              aria-label={`Copy email address ${personalInfo.email}`}
            >
              <FiMail className="text-accent shrink-0" />
              <span className="font-mono text-sm sm:text-base text-fg truncate">{personalInfo.email}</span>
              <span className="text-muted group-hover:text-fg shrink-0" aria-hidden>
                {copied ? <FiCheck className="text-accent" /> : <FiCopy />}
              </span>
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-fg font-medium
                         shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
            >
              Say hello
            </a>
          </div>
          <p role="status" className="h-5 mt-3 text-sm text-accent">{copied ? 'Email copied to clipboard!' : ''}</p>
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-3 gap-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-2xl border border-line bg-surface-2/60
                       hover:border-accent/40 hover:-translate-y-0.5 transition-all"
          >
            <span className="w-11 h-11 rounded-xl bg-surface border border-line flex items-center justify-center shrink-0">
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
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
