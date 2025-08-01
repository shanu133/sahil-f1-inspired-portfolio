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
          <div className="text-primary font-heading font-bold text-xl tracking-wider">
            SS
          </div>
          <div className="h-6 w-px bg-border"></div>
          <div className="text-muted-foreground font-mono text-sm">
            F1®
          </div>
        </div>
        
        {/* Right side - Navigation sections */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide hover:scale-105 transform transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;