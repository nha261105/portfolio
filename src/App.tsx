import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import LanguageProvider from './i18n/LanguageProvider';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  // Deep links (e.g. /#projects): the browser tries to jump before React renders, so retry once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <LanguageProvider>
      {/* reducedMotion="user" disables transform animations for visitors who ask for less motion */}
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen bg-bg text-fg">
          <ScrollProgress />
          <div
            className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12
                       grid grid-cols-[minmax(0,1fr)] gap-6 lg:gap-10 lg:grid-cols-[320px_minmax(0,1fr)] items-start"
          >
            <Sidebar />
            <div className="min-w-0 space-y-6 lg:space-y-8">
              <Topbar />
              <main className="space-y-6 lg:space-y-8">
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
