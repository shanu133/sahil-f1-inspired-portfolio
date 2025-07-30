import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Ferrari SF-25 Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="/lovable-uploads/17841f48-33d8-4841-ab4f-e6add1db9ba4.png"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          {/* Fallback to background image if video fails */}
        </video>
        
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/lovable-uploads/17841f48-33d8-4841-ab4f-e6add1db9ba4.png')`,
            backgroundBlendMode: 'multiply'
          }}
        />
      </div>
      
      {/* Ferrari Racing Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
      
      {/* F1 Grid Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--ferrari-red) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--ferrari-red) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Ferrari Inspired Header */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary"></div>
            <span className="font-f1 text-accent font-bold text-sm tracking-[3px] uppercase">
              Scuderia Portfolio
            </span>
            <div className="w-12 h-px bg-primary"></div>
          </div>
          <span className="font-body text-muted-foreground font-medium text-lg tracking-[2px] uppercase">
            Final Year BTech Student | Future Engineer
          </span>
        </motion.div>

        {/* Main Title with Ferrari Styling */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-7xl md:text-9xl lg:text-[12rem] text-white mb-8 leading-none tracking-[2px] relative"
        >
          <span className="block drop-shadow-2xl">SAHIL</span>
          <span className="block text-primary drop-shadow-2xl relative">
            SHARMA
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent blur-xl"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        {/* F1 Style Performance Stats Ticker */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <div className="bg-black/50 border border-primary/30 rounded-lg p-4 max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-f1">
              <div className="text-accent">LAP TIME: Portfolio Loaded in 1.9s</div>
              <div className="text-white">|</div>
              <div className="text-primary">SECTOR 1: Skills Mastered</div>
              <div className="text-white">|</div>
              <div className="text-accent">POSITION: P1 Developer</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons with Ferrari Styling */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            className="group px-10 py-4 bg-primary text-white font-f1 font-bold text-lg uppercase tracking-[2px] relative overflow-hidden transition-all duration-300"
            style={{ 
              borderRadius: '2px',
              boxShadow: 'var(--shadow-ferrari)'
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            className="px-10 py-4 border-2 border-primary text-primary font-f1 font-bold text-lg uppercase tracking-[2px] hover:bg-primary hover:text-white transition-all duration-300"
            style={{ borderRadius: '2px' }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <span className="font-f1 text-muted-foreground text-xs tracking-[2px] mb-4 uppercase">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary cursor-pointer"
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Ferrari Prancing Horse Watermark */}
      <motion.div
        className="absolute bottom-8 left-8 opacity-10 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 3 }}
      >
        <div className="font-heading text-primary text-2xl tracking-wider">
          🐎 FERRARI
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;