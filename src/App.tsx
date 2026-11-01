import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  return (
    // reducedMotion="user" disables transform animations for visitors who ask for less motion
    <MotionConfig reducedMotion="user">
      <div className="w-full min-h-screen bg-bg text-fg overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          <Hero />
          <Projects />
          <TechStack />
          <Education />
          <Interests />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
