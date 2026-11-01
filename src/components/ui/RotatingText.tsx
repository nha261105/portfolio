import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/** Cycles through `words`, sliding each one in from below. */
const RotatingText = ({ words, interval = 2600 }: { words: string[]; interval?: number }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <motion.span layout className="relative inline-flex overflow-hidden align-bottom" aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export default RotatingText;
