import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Expertise', 'Projects', 'Contact'];

  const handleNavClick = (item: string) => {
    const sectionId = item.toLowerCase() === 'expertise' ? 'expertise' : item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Left side - SS and F1 logo */}
          <div className="flex items-center gap-4">
            <motion.div 
              className="text-primary font-heading font-bold text-xl tracking-wider"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              SS
            </motion.div>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-muted-foreground font-mono text-sm">
              F1®
            </div>
          </div>
          
          {/* Right side - Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button 
                key={item}
                onClick={() => handleNavClick(item)}
                className="relative text-muted-foreground font-body font-medium tracking-wide text-sm py-2 px-3 group overflow-hidden bg-transparent border-none cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary font-body">
                  {item}
                </span>
                {/* Underline animation */}
                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-body text-sm">Back</span>
                  </motion.button>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-primary font-heading font-bold text-lg tracking-wider">
                      SS
                    </div>
                    <div className="h-5 w-px bg-border"></div>
                    <div className="text-muted-foreground font-mono text-xs">
                      F1®
                    </div>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item}
                        onClick={() => handleNavClick(item)}
                        className="block w-full text-left text-foreground font-body font-medium text-base py-4 px-4 rounded-lg hover:bg-card hover:text-primary transition-all duration-300 bg-transparent border-none cursor-pointer"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-primary font-mono text-sm mr-3">
                          {String(index + 1).padStart(2, '0')} //
                        </span>
                        {item.toUpperCase()}
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-border">
                  <p className="text-muted-foreground font-body text-sm text-center">
                    Designed with ❤ & Ferrari Passion
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;