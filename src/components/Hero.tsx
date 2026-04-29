import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { personalInfo } from '../constants/data';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 } as never
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' } as never
  }
};

const Hero = () => (
  <section id="hero" className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center md:justify-start order-1 h-full"
        >
          <div className="relative w-full max-w-md">
            {/* Outer glow ring — square */}
            <div className="w-full aspect-square rounded-3xl bg-linear-to-br from-[#ffffff]/10 to-[#ffffff]/10 p-1.5">
              {/* Inner frame */}
              <div className="w-full h-full rounded-3xl bg-[#222222]/80 backdrop-blur-sm overflow-hidden">
                {personalInfo.avatar ? (
                  <img
                    src={personalInfo.avatar}
                    alt="Nguyen Hoang Anh"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl font-bold bg-linear-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent select-none">
                      NHA
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating glow blob */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#3B82F6]/20 rounded-full blur-2xl pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2"
        >
          {/* Terminal */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 px-4 py-2 bg-[#222222] border border-[#2a2a2a] rounded-lg font-mono text-sm text-[#3B82F6]"
          >
            {personalInfo.tagline}
          </motion.div>

          <motion.p variants={itemVariants} className="text-[#888888] text-lg mb-2">
            {personalInfo.greeting}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-[#f0f0f0] to-[#c0c0c0] bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-semibold text-[#3B82F6] mb-6"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#c0c0c0] text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
            {/* Resume pill */}
            <a
              href={personalInfo.resume}
              download
              className="flex items-center gap-2 px-8 py-4 bg-[#0b47af] text-white rounded-2xl font-medium text-md
                         shadow-lg shadow-[#3B82F6]/20
                         hover:bg-[#007bff] hover:shadow-[#3B82F6]/40 hover:scale-105
                         transition-all duration-300"
            >
              <FiDownload size={20} />
              RESUME
            </a>

            {/* Social icons bar */}
            <div className="flex items-center gap-4 px-4 py-2 rounded-2xl border"
              style={{
                background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8), rgba(26, 26, 26, 0.6))',
                borderColor: 'rgba(192, 192, 192, 0.3)',
              }}
            >
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-xl text-[#f0f0f0]
                           hover:bg-white/10 transition-colors duration-200">
                <i className="ci ci-linkedin ci-xl" />
              </a>
              <a href={`mailto:${personalInfo.email}`} title="Gmail"
                className="w-11 h-11 flex items-center justify-center rounded-xl text-[#f0f0f0]
                           hover:bg-white/10 transition-colors duration-200">
                <i className="ci ci-gmail ci-xl"/>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" title="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-xl text-[#f0f0f0]
                           hover:bg-white/10 transition-colors duration-200">
                <i className="ci ci-github-light ci-xl"/>
              </a>
              <a href={personalInfo.discord} target="_blank" rel="noopener noreferrer" title="Discord"
                className="w-11 h-11 flex items-center justify-center rounded-xl text-[#f0f0f0]
                           hover:bg-white/10 transition-colors duration-200">
                <i className="ci ci-discord ci-xl"/>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
