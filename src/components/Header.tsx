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
            animate={{ 
              textShadow: [
                "0 0 0px hsl(var(--primary))",
                "0 0 10px hsl(var(--primary))",
                "0 0 0px hsl(var(--primary))"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SS
          </motion.div>
          <div className="h-6 w-px bg-border"></div>
          <motion.div 
            className="text-muted-foreground font-mono text-sm"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            F1®
          </motion.div>
        </div>
        
        {/* Right side - Navigation sections */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-muted-foreground font-body font-medium tracking-wide text-sm py-2 px-1 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-primary font-body">
                {item}
              </span>
              {/* Underline animation - grows from center */}
              <motion.div
                className="absolute bottom-1 left-1/2 h-0.5 bg-primary transform -translate-x-1/2"
                initial={{ width: 0 }}
                whileHover={{ width: "calc(100% - 8px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;