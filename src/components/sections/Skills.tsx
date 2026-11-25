import { motion } from 'framer-motion';
import { FiActivity, FiArrowUpRight, FiBookOpen, FiCode, FiCoffee } from 'react-icons/fi';
import clsx from 'clsx';
import { education, interests, techGroups, techStack } from '../../constants/data';
import Section, { SubHeading } from '../ui/Section';
import { Timeline, TimelineItem } from '../ui/Timeline';
import { chipClass } from '../ui/card';
import { fadeUp, inView, popIn, staggerContainer } from '../../lib/motion';
import { useLang } from '../../i18n/context';

/** Tech stack, education, and a short "beyond code" list. */
const Skills = () => {
  const { t, ui } = useLang();

  return (
    <Section id="skills" title={ui.section.skills}>
      <div className="mb-10">
        <SubHeading icon={<FiCode size={18} />}>{ui.resume.techStack}</SubHeading>
        <div className="space-y-6">
          {techGroups.map((group) => {
            const items = techStack.items.filter((tech) => tech.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                <p className="text-sm font-medium text-subtle mb-3">{ui.techGroup[group]}</p>
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
                      className={clsx(
                        'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm cursor-default',
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
            <p className="text-sm font-medium text-subtle mb-3">{ui.resume.concepts}</p>
            <div className="flex flex-wrap gap-2">
              {techStack.concepts.map((c) => (
                <span key={c} className={clsx(chipClass, 'px-3 py-1 text-sm')}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <SubHeading icon={<FiBookOpen size={18} />}>{ui.resume.education}</SubHeading>
        <Timeline>
          <TimelineItem title={t(education.institution)} subtitle={t(education.degree)} period={t(education.period)}>
            <p className="text-sm text-subtle mt-1">{t(education.location)}</p>
          </TimelineItem>
        </Timeline>
      </div>

      <div>
        <SubHeading icon={<FiCoffee size={18} />}>{ui.about.beyondCode}</SubHeading>
        <motion.ul
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid sm:grid-cols-2 gap-x-8 gap-y-5"
        >
          {interests.map((item) => (
            <motion.li key={item.id} variants={fadeUp} className="flex gap-3 min-w-0">
              <span className="w-9 h-9 rounded-lg bg-surface-2 border border-line flex items-center justify-center text-muted shrink-0">
                {item.iconClass ? <i className={`${item.iconClass} text-lg`} aria-hidden /> : <FiActivity size={17} />}
              </span>
              <div className="min-w-0">
                <h4 className="font-medium text-fg leading-tight">{t(item.title)}</h4>
                <p className="text-sm text-muted leading-relaxed mt-0.5">{t(item.description)}</p>
                {item.tags.length > 0 && (
                  <p className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                    {item.tags.map((tag) => (
                      <a
                        key={tag.url}
                        href={tag.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline underline-offset-2"
                      >
                        {tag.label}
                        <FiArrowUpRight size={13} aria-hidden />
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
};

export default Skills;
