import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiCode } from 'react-icons/fi';
import { education, experience, techGroups, techStack } from '../../constants/data';
import Section, { SubHeading } from '../ui/Section';
import { chipClass } from '../ui/card';
import clsx from 'clsx';
import { easeOut, fadeUp, inView, popIn, staggerContainer } from '../../lib/motion';

const TimelineItem = ({ title, subtitle, period, children }: {
  title: string;
  subtitle?: string;
  period: string;
  children?: ReactNode;
}) => (
  <motion.li variants={fadeUp} className="relative pl-7 pb-8 last:pb-0">
    <motion.span
      aria-hidden
      variants={popIn}
      className="absolute left-0 top-2 w-2.5 h-2.5 -translate-x-[5px] rounded-full bg-accent ring-4 ring-surface"
    />
    <h4 className="font-semibold text-fg">{title}</h4>
    {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
    <p className="font-mono text-xs text-accent mt-1.5">{period}</p>
    {children}
  </motion.li>
);

/** Vertical timeline whose line draws downwards as it scrolls into view. */
const Timeline = ({ children }: { children: ReactNode }) => (
  <motion.ol
    variants={staggerContainer(0.15, 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={inView}
    className="relative ml-5"
  >
    <motion.span
      aria-hidden
      variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.9, ease: easeOut } } }}
      className="absolute left-0 top-0 bottom-0 w-px origin-top bg-line-strong"
    />
    {children}
  </motion.ol>
);

const Resume = () => (
  <Section id="resume" title="Resume">
    {experience.length > 0 && (
      <div className="mb-10">
        <SubHeading icon={<FiBriefcase size={18} />}>Experience</SubHeading>
        <Timeline>
          {experience.map((job) => (
            <TimelineItem
              key={`${job.company}-${job.period}`}
              title={job.role}
              subtitle={job.location ? `${job.company} · ${job.location}` : job.company}
              period={job.period}
            >
              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent" aria-hidden>→</span>{h}
                  </li>
                ))}
              </ul>
              {job.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {job.tech.map((t) => <span key={t} className={chipClass}>{t}</span>)}
                </div>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    )}

    <div className="mb-10">
      <SubHeading icon={<FiBookOpen size={18} />}>Education</SubHeading>
      <Timeline>
        <TimelineItem title={education.institution} subtitle={education.degree} period={education.period}>
          <p className="text-sm text-subtle mt-1">{education.location}</p>
        </TimelineItem>
      </Timeline>
    </div>

    <div>
      <SubHeading icon={<FiCode size={18} />}>Tech Stack</SubHeading>
      <div className="space-y-6">
        {techGroups.map((group) => {
          const items = techStack.items.filter((t) => t.group === group);
          if (items.length === 0) return null;
          return (
            <div key={group}>
              <p className="font-mono text-xs uppercase tracking-widest text-subtle mb-3">{group}</p>
              <motion.div
                variants={staggerContainer(0.04)}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className="flex flex-wrap gap-2"
              >
                {items.map((tech) => (
                  <motion.span
                    key={tech.name}
                    variants={popIn}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className={clsx(
                      'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors cursor-default hover:border-accent/50',
                      tech.primary
                        ? 'border-accent/30 bg-accent-soft text-fg font-medium'
                        : 'border-line bg-surface-2 text-muted'
                    )}
                  >
                    <i className={`${tech.icon} text-lg`} aria-hidden />
                    {tech.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          );
        })}

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-subtle mb-3">Concepts</p>
          <motion.div
            variants={staggerContainer(0.04)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="flex flex-wrap gap-2"
          >
            {techStack.concepts.map((c) => (
              <motion.span key={c} variants={popIn} className={clsx(chipClass, 'px-3 py-1 text-sm')}>{c}</motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </Section>
);

export default Resume;
