import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import DownloadCV from './components/DownloadCV';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 lg:hidden bg-dark-bg dark:bg-dark-bg light:bg-light-bg light:bg-opacity-95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <a href="#about" onClick={toggleMobileMenu} className="text-2xl font-semibold hover:text-primary-purple transition-colors">About</a>
              <a href="#skills" onClick={toggleMobileMenu} className="text-2xl font-semibold hover:text-primary-purple transition-colors">Skills</a>
              <a href="#projects" onClick={toggleMobileMenu} className="text-2xl font-semibold hover:text-primary-purple transition-colors">Projects</a>
              <a href="#education" onClick={toggleMobileMenu} className="text-2xl font-semibold hover:text-primary-purple transition-colors">Education</a>
              <a href="#certifications" onClick={toggleMobileMenu} className="text-2xl font-semibold hover:text-primary-purple transition-colors">Certifications</a>
              <a href="#cv" onClick={toggleMobileMenu} className="text-2xl font-semibold hover:text-primary-purple transition-colors">Download CV</a>
              <a href="#contact" onClick={toggleMobileMenu} className="text-2xl font-semibold hover:text-primary-purple transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <DownloadCV />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
