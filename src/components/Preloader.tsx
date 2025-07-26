import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [lightStage, setLightStage] = useState(0); // 0-5: pairs turning on, 6: all on, 7: all off
  const [allLightsOut, setAllLightsOut] = useState(false);

  useEffect(() => {
    // Turn on lights in pairs every 1 second
    const intervals: NodeJS.Timeout[] = [];
    
    for (let i = 1; i <= 5; i++) {
      intervals.push(setTimeout(() => {
        setLightStage(i);
      }, i * 1000));
    }

    // After all lights are on, wait random duration then turn all off
    intervals.push(setTimeout(() => {
      const randomHold = Math.random() * 2000 + 500; // 0.5-2.5 seconds
      setTimeout(() => {
        setAllLightsOut(true);
      }, randomHold);
    }, 5000));

    return () => intervals.forEach(clearTimeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getLightState = (columnIndex: number) => {
    if (allLightsOut) return 'off';
    if (lightStage >= columnIndex + 1) return 'on';
    return 'off';
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="text-center mb-8">
        <h1 className="font-titillium font-black text-4xl md:text-6xl text-foreground mb-4">
          PROJECT APEX
        </h1>
        <p className="font-inter text-muted-foreground text-lg">
          INITIALIZING RACE SYSTEMS
        </p>
      </div>

      {/* F1 Starting Gantry - Two rows of 5 lights */}
      <div className="flex flex-col gap-3 mb-8">
        {/* Top row */}
        <div className="flex gap-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={`top-${index}`}
              className={`w-6 h-6 rounded-full transition-all duration-300 ${
                getLightState(index) === 'on' 
                  ? 'bg-primary shadow-[0_0_20px_hsl(var(--primary))]' 
                  : 'bg-gray-800 border border-gray-600'
              }`}
            />
          ))}
        </div>
        
        {/* Bottom row */}
        <div className="flex gap-6">
          {[...Array(5)].map((_, index) => (
            <div
              key={`bottom-${index}`}
              className={`w-6 h-6 rounded-full transition-all duration-300 ${
                getLightState(index) === 'on' 
                  ? 'bg-primary shadow-[0_0_20px_hsl(var(--primary))]' 
                  : 'bg-gray-800 border border-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="font-inter text-muted-foreground text-sm">
          {lightStage === 0 && "STARTING PROCEDURE INITIATED"}
          {lightStage > 0 && lightStage < 5 && "LIGHTS SEQUENCE ACTIVE"}
          {lightStage === 5 && !allLightsOut && "ALL LIGHTS ON - STANDBY"}
          {allLightsOut && "LIGHTS OUT AND AWAY WE GO!"}
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;