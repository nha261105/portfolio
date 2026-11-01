import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiActivity, FiArrowUpRight, FiCode, FiCpu, FiLayers, FiServer } from 'react-icons/fi';
import clsx from 'clsx';
import { about, interests, personalInfo, services } from '../../constants/data';
import type { Service } from '../../constants/data';
import Section from '../ui/Section';
import { fadeUp, inView, staggerContainer } from '../../lib/motion';
import { trackSpotlight } from '../../lib/spotlight';

const serviceIcons: Record<Service['icon'], ReactNode> = {
  server: <FiServer size={22} />,
  layers: <FiLayers size={22} />,
  cpu: <FiCpu size={22} />,
  code: <FiCode size={22} />,
};

const tileClass =
  'spotlight rounded-2xl border border-line bg-surface-2/60 p-5 transition-colors duration-300 hover:border-accent/40';

const hoverLift = { y: -4, transition: { type: 'spring', stiffness: 350, damping: 22 } } as const;

const SubTitle = ({ children }: { children: ReactNode }) => (
  <motion.h3 variants={fadeUp} className="mt-10 mb-5 text-lg sm:text-xl font-semibold text-fg">
    {children}
  </motion.h3>
);

const About = () => (
  <Section id="about" title="About Me">
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="space-y-4 text-muted leading-relaxed max-w-3xl"
    >
      <motion.p variants={fadeUp}>{personalInfo.description}</motion.p>
      <motion.p variants={fadeUp}>{about.bio}</motion.p>
    </motion.div>

    <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={inView}>
      <SubTitle>What I&apos;m doing</SubTitle>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            whileHover={hoverLift}
            onMouseMove={trackSpotlight}
            className={clsx(tileClass, 'group flex gap-4')}
          >
            <span className="text-accent shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
              {serviceIcons[s.icon]}
            </span>
            <div>
              <h4 className="font-semibold text-fg mb-1">{s.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={inView}>
      <SubTitle>Beyond code</SubTitle>
      <div className="grid sm:grid-cols-2 gap-4">
        {interests.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeUp}
            whileHover={hoverLift}
            onMouseMove={trackSpotlight}
            className={clsx(tileClass, 'group flex flex-col gap-3')}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center text-muted shrink-0
                           transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              >
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
                    className="group/tag inline-flex items-center gap-1.5 px-3 py-1 text-xs text-muted rounded-full border border-line
                               bg-surface hover:text-fg hover:border-accent/50 transition-colors"
                  >
                    {tag.iconClass && <i className={`${tag.iconClass} text-sm`} aria-hidden />}
                    {tag.label}
                    <FiArrowUpRight
                      size={12}
                      className="opacity-60 transition-transform duration-200 group-hover/tag:translate-x-0.5 group-hover/tag:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);

export default About;
