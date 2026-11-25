import { experience } from '../../constants/data';
import Section from '../ui/Section';
import { Timeline, TimelineItem } from '../ui/Timeline';
import { useLang } from '../../i18n/context';

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mt-3 space-y-3 max-w-[68ch]">
    {items.map((text) => (
      <li key={text} className="flex gap-2.5 text-sm sm:text-[0.9375rem] text-muted leading-relaxed">
        <span className="text-subtle select-none" aria-hidden>•</span>
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

/** Work history, newest role first. */
const Experience = () => {
  const { t, ui } = useLang();
  if (experience.length === 0) return null;

  return (
    <Section id="experience" title={ui.section.experience}>
      <Timeline>
        {experience.map((job) => (
          <TimelineItem
            key={`${job.company}-${job.period.en}`}
            title={t(job.role)}
            subtitle={
              <>
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="font-medium text-fg hover:text-accent transition-colors">
                    {job.company}
                  </a>
                ) : (
                  <span className="font-medium text-fg">{job.company}</span>
                )}
                {job.location && <> · {t(job.location)}</>}
              </>
            }
            period={t(job.period)}
          >
            {job.highlights.length > 0 && <Bullets items={job.highlights.map(t)} />}
            {job.groups?.map((g) => (
              <div key={g.title.en} className="mt-8">
                <h4 className="font-semibold text-fg">{t(g.title)}</h4>
                {g.sub && <p className="text-sm text-subtle mt-0.5">{t(g.sub)}</p>}
                <Bullets items={g.items.map(t)} />
              </div>
            ))}
            {job.note && <p className="mt-8 text-sm text-subtle">{t(job.note)}</p>}
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
