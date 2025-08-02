import { motion } from 'framer-motion';

const Header = () => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
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
        
        {/* Right side - Navigation sections */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-muted-foreground font-body font-medium tracking-wide text-sm py-2 px-3 group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary font-body">
                {item}
              </span>
              {/* Underline animation - grows from center */}
              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 bg-primary transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;