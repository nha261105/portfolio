import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  // Deep links (e.g. /#projects): the browser tries to jump before React renders, so retry once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    // reducedMotion="user" disables transform animations for visitors who ask for less motion
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-bg text-fg">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 h-[520px]"
          style={{ background: 'radial-gradient(700px circle at 75% -10%, var(--glow), transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10
                        grid gap-5 lg:gap-6 lg:grid-cols-[300px_minmax(0,1fr)] items-start">
          <Sidebar />
          <div className="min-w-0 space-y-5 lg:space-y-6">
            <Topbar />
            <main className="space-y-5 lg:space-y-6">
              <About />
              <Resume />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
