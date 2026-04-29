import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../constants/data';

import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-[#1a1a1a] border-b border-b-white/20',
        isScrolled ? 'backdrop-blur-sm shadow-lg' : ''
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="shrink-0 text-xl font-bold bg-linear-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Ryan
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={clsx(
                  'text-sm font-medium transition-colors duration-200 hover:text-[#3B82F6] whitespace-nowrap',
                  activeSection === link.id ? 'text-[#3B82F6]' : 'text-[#c0c0c0]'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden shrink-0 text-[#c0c0c0] hover:text-[#f0f0f0] transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden w-full bg-[#1a1a1a] border-t border-[#2a2a2a]"
        >
          <div className="w-full max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={clsx(
                  'block w-full text-left px-4 py-2 rounded-lg transition-colors duration-200',
                  activeSection === link.id
                    ? 'bg-[#3B82F6]/10 text-[#3B82F6]'
                    : 'text-[#c0c0c0] hover:bg-[#222222]'
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
