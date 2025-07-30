import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds for the full preloader experience

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <div key="main-content">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            
            {/* Footer */}
            <footer className="bg-card border-t border-border py-8">
              <div className="container mx-auto px-6 text-center">
                <p className="font-body text-muted-foreground">
                  © 2024 Project Apex. Built for speed, designed for performance.
                </p>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;