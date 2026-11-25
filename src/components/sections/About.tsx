import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiLayers, FiServer } from 'react-icons/fi';
import { about, services } from '../../constants/data';
import { useLang } from '../../i18n/context';
import type { Service } from '../../constants/data';
import Section from '../ui/Section';
import { fadeUp, inView, staggerContainer } from '../../lib/motion';

const serviceIcons: Record<Service['icon'], ReactNode> = {
  server: <FiServer size={22} />,
  layers: <FiLayers size={22} />,
  cpu: <FiCpu size={22} />,
  code: <FiCode size={22} />,
};

const SubTitle = ({ children }: { children: ReactNode }) => (
  <motion.h3 variants={fadeUp} className="mt-12 mb-7 text-lg sm:text-xl font-semibold text-fg">
    {children}
  </motion.h3>
);

const About = () => {
  const { t, ui } = useLang();

  return (
  <Section id="about" title={ui.section.about}>
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="space-y-5 text-muted text-[1.0625rem] leading-[1.75] max-w-[64ch]"
    >
      <motion.p variants={fadeUp}>{t(about.intro)}</motion.p>
      <motion.p variants={fadeUp}>{t(about.bio)}</motion.p>
    </motion.div>

    <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={inView}>
      <SubTitle>{ui.about.whatIDo}</SubTitle>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-9">
        {services.map((s) => (
          <motion.div
            key={s.icon}
            variants={fadeUp}
            className="flex gap-4"
          >
            <span className="text-accent shrink-0 mt-0.5">
              {serviceIcons[s.icon]}
            </span>
            <div>
              <h4 className="font-semibold text-fg mb-1.5">{t(s.title)}</h4>
              <p className="text-[0.9375rem] text-muted leading-relaxed">{t(s.description)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

  </Section>
  );
};

export default About;
