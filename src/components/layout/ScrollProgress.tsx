import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin accent bar at the top of the viewport that fills as the page is scrolled. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-accent z-[60]"
    />
  );
};

export default ScrollProgress;
