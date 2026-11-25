import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowUpRight } from 'react-icons/fi';
import clsx from 'clsx';
import { education, interests, techGroups, techStack } from '../../constants/data';
import Section from '../ui/Section';
import { fadeUp, inView } from '../../lib/motion';
import { useLang } from '../../i18n/context';

/** One part of the section: a plain heading, then its content; parts are split by a hairline. */
const Part = ({ title, children }: { title: string; children: ReactNode }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={inView}
    className="py-10 first:pt-0 last:pb-0"
  >
    <h3 className="text-lg font-semibold text-fg mb-6">{title}</h3>
    {children}
  </motion.div>
);

/** Label on the left, value on the right (stacks on mobile). */
const Row = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="grid gap-2 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-10 py-3.5 first:pt-0 last:pb-0">
    <dt className="text-sm text-subtle sm:pt-0.5">{label}</dt>
    <dd className="min-w-0">{children}</dd>
  </div>
);

/** Tech stack, education, and a short "beyond code" list. */
const Skills = () => {
  const { t, ui } = useLang();

  return (
    <Section id="skills" title={ui.section.skills}>
      <div className="divide-y divide-line">
        <Part title={ui.resume.techStack}>
          <dl>
            {techGroups.map((group) => {
              const items = techStack.items.filter((tech) => tech.group === group);
              if (items.length === 0) return null;
              return (
                <Row key={group} label={ui.techGroup[group]}>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
                    {items.map((tech) => (
                      <li
                        key={tech.name}
                        className={clsx(
                          'inline-flex items-center gap-2 text-[0.9375rem]',
                          tech.primary ? 'text-fg font-medium' : 'text-muted'
                        )}
                      >
                        <i className={`${tech.icon} text-lg`} aria-hidden />
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </Row>
              );
            })}
            <Row label={ui.resume.concepts}>
              <p className="text-[0.9375rem] text-muted leading-relaxed max-w-[60ch]">{techStack.concepts.join(', ')}</p>
            </Row>
          </dl>
        </Part>

        <Part title={ui.resume.education}>
          <dl>
            <Row label={t(education.period)}>
              <p className="font-medium text-fg">{t(education.institution)}</p>
              <p className="text-[0.9375rem] text-muted mt-0.5">
                {t(education.degree)} · {t(education.location)}
              </p>
            </Row>
          </dl>
        </Part>

        <Part title={ui.about.beyondCode}>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {interests.map((item) => (
              <li key={item.id} className="flex gap-3.5 min-w-0">
                <span className="w-9 h-9 rounded-lg bg-surface-2 flex items-center justify-center text-muted shrink-0">
                  {item.iconClass ? <i className={`${item.iconClass} text-lg`} aria-hidden /> : <FiActivity size={17} />}
                </span>
                <div className="min-w-0">
                  <h4 className="font-medium text-fg leading-tight">{t(item.title)}</h4>
                  <p className="text-[0.9375rem] text-muted leading-relaxed mt-1">{t(item.description)}</p>
                  {item.tags.length > 0 && (
                    <p className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                      {item.tags.map((tag) => (
                        <a
                          key={tag.url}
                          href={tag.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
                        >
                          {tag.label}
                          <FiArrowUpRight size={13} aria-hidden />
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Part>
      </div>
    </Section>
  );
};

export default Skills;
