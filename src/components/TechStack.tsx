import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { techStack } from '../constants/data';

interface TechItem {
  name: string;
  primary?: boolean;
  icon: string;
}

const TechCard = ({ tech, index }: { tech: TechItem; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
    whileHover={{ scale: 1.05 }}
    style={{
      background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
      borderColor: 'rgba(192, 192, 192, 0.3)',
    }}
    className="flex items-center gap-3 px-4 h-14 rounded-2xl border transition-all duration-300 cursor-default"
  >
    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[#2a2a2a]">
      <i className={`${tech.icon} text-xl`} />
    </div>
    <span className="text-sm font-medium whitespace-nowrap text-[#c0c0c0]">
      {tech.name}
    </span>
  </motion.div>
);

const ConceptBadge = ({ concept, index }: { concept: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
    style={{
      background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
      borderColor: 'rgba(192, 192, 192, 0.3)',
    }}
    className="px-4 py-1.5 text-[#c0c0c0] rounded-full border text-sm transition-all duration-300"
  >
    {concept}
  </motion.span>
);

const COLS = 5;

const TechStack = () => {
  const rows: TechItem[][] = [];
  for (let i = 0; i < techStack.items.length; i += COLS) {
    rows.push(techStack.items.slice(i, i + COLS));
  }

  return (
    <section id="tech-stack" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#232323]">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-full bg-[#2a2a2a] border border-[#333333] flex items-center justify-center shrink-0">
              <FiCode className="text-[#3B82F6]" size={18} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#f0f0f0]">Tech Stack</h2>
          </div>

          <div className="flex flex-col gap-4 items-center">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap gap-4 justify-center">
                {row.map((tech, colIdx) => (
                  <div key={tech.name} className="w-45">
                    <TechCard tech={tech} index={rowIdx * COLS + colIdx} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm text-[#888888] mb-4 uppercase tracking-widest">Concepts & Methodologies</p>
            <div className="flex flex-wrap gap-3">
              {techStack.concepts.map((concept: string, i: number) => (
                <ConceptBadge key={concept} concept={concept} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
