import { motion } from 'framer-motion';
import clsx from 'clsx';
import { techStack } from '../constants/data';
import type { TechItem } from '../constants/data';
import Section from './ui/Section';
import { cardClass, cardHoverClass, chipClass } from './ui/card';

const TechCard = ({ tech, index }: { tech: TechItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.4), ease: 'easeOut' }}
    className={clsx(cardClass, cardHoverClass, 'flex items-center gap-3 px-3 h-14 rounded-xl')}
  >
    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-surface-2">
      <i className={`${tech.icon} text-xl`} aria-hidden />
    </div>
    <span className="text-sm font-medium text-fg truncate">{tech.name}</span>
  </motion.div>
);

const TechStack = () => (
  <Section id="tech-stack" eyebrow="// tech stack" title="Tech Stack">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {techStack.items.map((tech, index) => (
        <TechCard key={tech.name} tech={tech} index={index} />
      ))}
    </div>

    <div className="mt-12">
      <p className="font-mono text-xs text-subtle mb-4 uppercase tracking-widest">Concepts & Methodologies</p>
      <div className="flex flex-wrap gap-2">
        {techStack.concepts.map((concept) => (
          <span key={concept} className={clsx(chipClass, 'px-3.5 py-1 text-sm')}>{concept}</span>
        ))}
      </div>
    </div>
  </Section>
);

export default TechStack;
