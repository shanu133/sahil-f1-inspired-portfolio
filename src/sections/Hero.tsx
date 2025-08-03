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

  const parallaxVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/sf25-intro-low.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Semi-transparent black overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 24, 24, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 24, 24, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>


      <motion.div
        className="container mx-auto px-6 text-center relative z-30"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
            <span className="text-primary">00 //</span> WELCOME TO THE GRID
          </span>
        </motion.div>

        <div className="mb-6">
          <motion.h1
            className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight tracking-[1.5px]"
          >
            <motion.span 
              className="block"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              SAHIL
            </motion.span>
            <motion.span 
              className="block text-primary"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              SHARMA
            </motion.span>
          </motion.h1>
        </div>

        <motion.p
          variants={itemVariants}
          className="font-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Developer & Performance Engineer
          <br />
          <span className="text-primary font-medium">Engineered for performance. Designed with passion.</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.button
            className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-[var(--shadow-primary)] tracking-[1.5px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW PROJECTS
          </motion.button>
          
          <motion.a
            href="/Sahil_Sharma_Resume.pdf"
            download="Sahil_Sharma_Resume.pdf"
            className="px-6 py-3 border-2 border-primary text-primary font-body font-semibold text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 tracking-[1.5px] inline-block"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;