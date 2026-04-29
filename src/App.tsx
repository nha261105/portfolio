import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#232323] text-[#f0f0f0] overflow-x-hidden">
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
  );
}

export default App;