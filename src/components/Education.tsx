import { motion } from 'framer-motion';
import { PiGraduationCap } from 'react-icons/pi';
import clsx from 'clsx';
import { education } from '../constants/data';
import Section from './ui/Section';
import { cardClass } from './ui/card';

const Education = () => (
  <Section id="education" eyebrow="// education" title="Education">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={clsx(cardClass, 'flex gap-5 p-6 sm:p-8 max-w-2xl')}
    >
      <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center shrink-0">
        <PiGraduationCap size={26} />
      </div>
      <div>
        <p className="font-mono text-sm text-accent mb-1">{education.period}</p>
        <h3 className="text-xl font-semibold text-fg">{education.institution}</h3>
        <p className="text-muted mt-1">{education.degree}</p>
        <p className="text-sm text-subtle mt-1">{education.location}</p>
      </div>
    </motion.div>
  </Section>
);

export default Education;
