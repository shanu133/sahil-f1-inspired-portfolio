import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import CoreExpertise from './sections/CoreExpertise';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds for the full F1 lights sequence

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
              <CoreExpertise />
              <Projects />
              <Contact />
            </main>
            
            {/* Footer */}
            <footer className="bg-card border-t border-border py-12">
              <div className="container mx-auto px-6">
                <div className="text-center space-y-6">
                  {/* Social Links */}
                  <div className="flex justify-center gap-6">
                    <a href="https://github.com/shanu133/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors">
                      <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/sahil-sharma-5a3715270/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors">
                      <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                    <a href="https://x.com/theonlysahil1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors">
                      <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  </div>
                  
                  {/* Copyright */}
                  <p className="font-body text-muted-foreground">
                    © 2025 Sahil Sharma | Final Year BTech Student at DIT University
                  </p>
                  
                  {/* Tagline */}
                  <p className="font-body text-sm text-muted-foreground">
                    Designed with ❤ & Ferrari Passion
                  </p>
                </div>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;