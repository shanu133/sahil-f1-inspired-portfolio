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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ferrari F1 Car Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/17841f48-33d8-4841-ab4f-e6add1db9ba4.png')`,
          backgroundBlendMode: 'luminosity'
        }}
      />
      
      {/* Semi-transparent black overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
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

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-primary/20 rounded-full"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 40}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <span className="font-inter text-primary font-medium text-lg tracking-wider">
            WELCOME TO THE GRID
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-titillium font-black text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-tight"
        >
          <span className="block">SAHIL</span>
          <span className="block text-primary">SHARMA</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Full-Stack Developer & Performance Engineer
          <br />
          <span className="text-primary font-medium">Building the future at lightspeed</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground font-inter font-semibold text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-[var(--shadow-primary)]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECTS
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-primary text-primary font-inter font-semibold text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD CV
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary cursor-pointer"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;