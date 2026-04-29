import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { PiGraduationCap } from 'react-icons/pi';
import { education } from '../constants/data';

const Education = () => (
  <section id="education" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#232323]">
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-[#2a2a2a] border border-[#333333] flex items-center justify-center shrink-0">
            <FiBookOpen className="text-[#3B82F6]" size={18} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f0f0f0]">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="rounded-2xl border p-8 max-w-2xl transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
            borderColor: 'rgba(192, 192, 192, 0.3)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-[#14B8A6] tracking-widest">01</span>
            <PiGraduationCap size={28} className="text-white/10" />
          </div>
          <p className="text-sm font-medium text-[#14B8A6] mb-2">{education.period}</p>
          <h3 className="text-2xl font-bold text-[#f0f0f0] mb-2">{education.institution}</h3>
          <p className="text-sm text-[#888888]">{education.degree}</p>
          <p className="text-sm text-[#888888]/70 mt-1">{education.location}</p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Education;
