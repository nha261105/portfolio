import { motion } from 'framer-motion';
import { FiActivity, FiArrowUpRight, FiCode, FiCpu, FiLayers, FiServer } from 'react-icons/fi';
import clsx from 'clsx';
import { about, interests, personalInfo, services } from '../../constants/data';
import type { Service } from '../../constants/data';
import Section from '../ui/Section';

const serviceIcons: Record<Service['icon'], React.ReactNode> = {
  server: <FiServer size={22} />,
  layers: <FiLayers size={22} />,
  cpu: <FiCpu size={22} />,
  code: <FiCode size={22} />,
};

const tileClass = 'rounded-2xl border border-line bg-surface-2/60 p-5 transition-colors duration-300';

const About = () => (
  <Section id="about" title="About Me">
    <div className="space-y-4 text-muted leading-relaxed max-w-3xl">
      <p>{personalInfo.description}</p>
      <p>{about.bio}</p>
    </div>

    <h3 className="mt-10 mb-5 text-lg sm:text-xl font-semibold text-fg">What I&apos;m doing</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.06 }}
          className={clsx(tileClass, 'flex gap-4 hover:border-accent/40')}
        >
          <span className="text-accent shrink-0 mt-0.5">{serviceIcons[s.icon]}</span>
          <div>
            <h4 className="font-semibold text-fg mb-1">{s.title}</h4>
            <p className="text-sm text-muted leading-relaxed">{s.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <h3 className="mt-10 mb-5 text-lg sm:text-xl font-semibold text-fg">Beyond code</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {interests.map((item) => (
        <div key={item.id} className={clsx(tileClass, 'flex flex-col gap-3')}>
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center text-muted shrink-0">
              {item.iconClass ? <i className={`${item.iconClass} text-lg`} aria-hidden /> : <FiActivity size={18} />}
            </span>
            <h4 className="font-semibold text-fg">{item.title}</h4>
          </div>
          <p className="text-sm text-muted leading-relaxed">{item.description}</p>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag) => (
                <a
                  key={tag.url}
                  href={tag.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-muted rounded-full border border-line
                             bg-surface hover:text-fg hover:border-accent/50 transition-colors"
                >
                  {tag.iconClass && <i className={`${tag.iconClass} text-sm`} aria-hidden />}
                  {tag.label}
                  <FiArrowUpRight size={12} className="opacity-60" />
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </Section>
);

export default About;
