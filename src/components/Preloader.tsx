import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [currentPair, setCurrentPair] = useState(-1);
  const [allLightsOn, setAllLightsOn] = useState(false);
  const [lightsOff, setLightsOff] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Light up one by one
      for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setCurrentPair(i);
      }
      
      setAllLightsOn(true);
      
      // Brief pause before all lights go out simultaneously
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLightsOff(true);
    };

    sequence();
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8 },
    },
  };

  const getLightStatus = (index: number) => {
    if (lightsOff) return 'off';
    if (allLightsOn || currentPair >= index) return 'on';
    return 'off';
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* F1 Starting Lights - Single row of 5 */}
      <div className="flex gap-8 mb-8">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-600 transition-all duration-200 ${
              getLightStatus(index) === 'on' 
                ? 'bg-primary shadow-[0_0_30px_hsl(var(--primary))] border-primary' 
                : 'bg-gray-700'
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 * index }}
          />
        ))}
      </div>

      <div className="text-center">
        <p className="font-body text-white text-xl tracking-wider font-bold">
          {!allLightsOn ? 'STARTING SEQUENCE' : lightsOff ? 'LIGHTS OUT AND AWAY WE GO...' : 'ALL LIGHTS ON'}
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;