import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [currentLight, setCurrentLight] = useState(0);
  const [allLightsOn, setAllLightsOn] = useState(false);
  const [lightsOut, setLightsOut] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // F1 Starting sequence - lights on one by one
      for (let i = 1; i <= 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setCurrentLight(i);
      }
      
      // Hold all lights for a moment
      setAllLightsOn(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // LIGHTS OUT! - All lights turn off simultaneously
      setLightsOut(true);
    };

    sequence();
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Scuderia Ferrari Branding */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-2 tracking-[2px]">
            SCUDERIA
          </h1>
          <h1 className="font-heading text-5xl md:text-7xl text-primary mb-6 tracking-[2px]">
            FERRARI
          </h1>
          <p className="font-f1 text-muted-foreground text-lg tracking-[3px]">
            PORTFOLIO SYSTEMS ONLINE
          </p>
        </motion.div>
      </div>

      {/* F1 Starting Lights */}
      <div className="flex gap-4 mb-16">
        {[1, 2, 3, 4, 5].map((lightNumber) => (
          <motion.div
            key={lightNumber}
            className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 transition-all duration-200 ${
              lightsOut 
                ? 'bg-secondary border-muted animate-lights-off' 
                : currentLight >= lightNumber 
                ? 'bg-primary border-primary animate-lights-on' 
                : 'bg-secondary border-muted'
            }`}
            style={{
              boxShadow: lightsOut ? 'none' : currentLight >= lightNumber ? 'var(--shadow-ferrari)' : 'none'
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.6 + (lightNumber * 0.1), 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
          />
        ))}
      </div>

      {/* Status Text */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="font-f1 text-muted-foreground text-sm tracking-[2px] uppercase">
          {!allLightsOn && !lightsOut && 'STARTING SEQUENCE INITIATED'}
          {allLightsOn && !lightsOut && 'ALL SYSTEMS GO - READY'}
          {lightsOut && 'LIGHTS OUT AND AWAY WE GO!'}
        </p>
      </motion.div>

      {/* Ferrari Logo Watermark */}
      <motion.div
        className="absolute bottom-8 right-8 opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="font-heading text-primary text-lg tracking-wider">
          SF-25
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;