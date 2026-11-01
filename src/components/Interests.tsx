import { motion } from 'framer-motion';
import { FiActivity, FiArrowUpRight } from 'react-icons/fi';
import clsx from 'clsx';
import { interests } from '../constants/data';
import type { InterestItem } from '../constants/data';
import Section from './ui/Section';
import { cardClass } from './ui/card';

const InterestCard = ({ item, index }: { item: InterestItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
    className={clsx(cardClass, 'flex flex-col gap-4 p-5 hover:border-line-strong')}
  >
    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-surface-2 text-muted">
      {item.iconClass ? <i className={`${item.iconClass} text-xl`} aria-hidden /> : <FiActivity size={20} />}
    </div>

    <div>
      <h3 className="text-base font-semibold text-fg mb-1">{item.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
    </div>

    {item.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-auto">
        {item.tags.map((tag) => (
          <a
            key={tag.url}
            href={tag.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs text-muted rounded-full border border-line
                       bg-surface-2 hover:text-fg hover:border-accent/50 transition-colors duration-200"
          >
            {tag.iconClass && <i className={`${tag.iconClass} text-base`} aria-hidden />}
            <span>{tag.label}</span>
            <FiArrowUpRight size={12} className="opacity-60" />
          </a>
        ))}
      </div>
    )}
  </motion.div>
);

const Interests = () => (
  <Section id="interests" eyebrow="// interests" title="Interests">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {interests.map((item, index) => (
        <InterestCard key={item.id} item={item} index={index} />
      ))}
    </div>
  </Section>
);

export default Interests;
