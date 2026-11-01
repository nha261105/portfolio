import { FiBookOpen, FiBriefcase, FiCode } from 'react-icons/fi';
import { education, experience, techGroups, techStack } from '../../constants/data';
import Section, { SubHeading } from '../ui/Section';
import { chipClass } from '../ui/card';
import clsx from 'clsx';

const TimelineItem = ({ title, subtitle, period, children }: {
  title: string;
  subtitle?: string;
  period: string;
  children?: React.ReactNode;
}) => (
  <li className="relative pl-7 pb-8 last:pb-0">
    <span aria-hidden className="absolute left-0 top-2 w-2.5 h-2.5 -translate-x-[5px] rounded-full bg-accent ring-4 ring-surface" />
    <h4 className="font-semibold text-fg">{title}</h4>
    {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
    <p className="font-mono text-xs text-accent mt-1.5">{period}</p>
    {children}
  </li>
);

const Resume = () => (
  <Section id="resume" title="Resume">
    {experience.length > 0 && (
      <div className="mb-10">
        <SubHeading icon={<FiBriefcase size={18} />}>Experience</SubHeading>
        <ol className="ml-5 border-l border-line">
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
        </ol>
      </div>
    )}

    <div className="mb-10">
      <SubHeading icon={<FiBookOpen size={18} />}>Education</SubHeading>
      <ol className="ml-5 border-l border-line">
        <TimelineItem title={education.institution} subtitle={education.degree} period={education.period}>
          <p className="text-sm text-subtle mt-1">{education.location}</p>
        </TimelineItem>
      </ol>
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
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <span
                    key={tech.name}
                    className={clsx(
                      'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors',
                      tech.primary
                        ? 'border-accent/30 bg-accent-soft text-fg font-medium'
                        : 'border-line bg-surface-2 text-muted'
                    )}
                  >
                    <i className={`${tech.icon} text-lg`} aria-hidden />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-subtle mb-3">Concepts</p>
          <div className="flex flex-wrap gap-2">
            {techStack.concepts.map((c) => (
              <span key={c} className={clsx(chipClass, 'px-3 py-1 text-sm')}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Resume;
