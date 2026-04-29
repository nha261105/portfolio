import { motion } from 'framer-motion';
import { FiHeart, FiActivity } from 'react-icons/fi';
import { interests } from '../constants/data';

interface Tag { iconClass: string | null; label: string; url: string; }
interface InterestItem {
  id: number;
  iconClass: string | null;
  title: string;
  description: string;
  tags: Tag[];
}

const cardStyle = {
  background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
  borderColor: 'rgba(192, 192, 192, 0.3)',
};

const InterestCard = ({ item, index }: { item: InterestItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.15 }}
    transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
    whileHover={{ scale: 1.02 }}
    style={cardStyle}
    className="flex flex-col gap-4 p-5 rounded-2xl border transition-all duration-300"
  >
    {/* Icon */}
    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[#c0c0c0]"
      style={{ background: 'rgba(192,192,192,0.08)' }}>
      {item.iconClass
        ? <i className={`${item.iconClass} text-xl`} />
        : <FiActivity size={20} />}
    </div>

    {/* Title + description */}
    <div>
      <h3 className="text-base font-semibold text-[#f0f0f0] mb-1">{item.title}</h3>
      <p className="text-sm text-[#888888] leading-relaxed">{item.description}</p>
    </div>

    {/* Tags */}
    {item.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-auto">
        {item.tags.map((tag) => (
          <a
            key={tag.url}
            href={tag.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 text-xs text-[#c0c0c0] rounded-full border
                       transition-all duration-200 hover:text-[#f0f0f0]"
            style={{ borderColor: 'rgba(192,192,192,0.3)', background: 'rgba(255,255,255,0.04)' }}
          >
            {tag.iconClass && <i className={`${tag.iconClass} text-base`} />}
            {tag.label && <span>{tag.label}</span>}
            <span className="opacity-50">↗</span>
          </a>
        ))}
      </div>
    )}
  </motion.div>
);

const Interests = () => (
  <section id="interests" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#232323]">
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
            style={cardStyle}>
            <FiHeart className="text-[#c0c0c0]" size={18} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f0f0f0]">Interests</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item: InterestItem, index: number) => (
            <InterestCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Interests;
