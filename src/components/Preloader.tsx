import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [currentPair, setCurrentPair] = useState(-1);
  const [allLightsOn, setAllLightsOn] = useState(false);
  const [lightsOff, setLightsOff] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Light up pairs sequentially
      for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCurrentPair(i);
      }
      
      setAllLightsOn(true);
      
      // Random delay before turning off (0.5s to 3s)
      const randomDelay = Math.random() * 2500 + 500;
      await new Promise(resolve => setTimeout(resolve, randomDelay));
      
      setLightsOff(true);
    };

    sequence();
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const getLightStatus = (index: number) => {
    const pairIndex = index < 5 ? index : index - 5;
    
    if (lightsOff) return 'off';
    if (allLightsOn || currentPair >= pairIndex) return 'on';
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
      <div className="text-center mb-12">
        <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-4 tracking-[1.5px]">
          PROJECT APEX
        </h1>
        <p className="font-body text-gray-400 text-lg">
          INITIALIZING RACE SYSTEMS
        </p>
      </div>

      {/* F1 Starting Lights - 2 rows of 5 */}
      <div className="grid grid-rows-2 grid-cols-5 gap-x-6 gap-y-3 mb-12">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-600 transition-all duration-100 ${
              getLightStatus(index) === 'on' 
                ? 'bg-red-500 shadow-[0_0_20px_#ef4444] border-red-400' 
                : 'bg-gray-700'
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 * (index % 5) }}
          />
        ))}
      </div>

      <div className="text-center">
        <p className="font-body text-gray-500 text-sm tracking-wider">
          {!allLightsOn ? 'STARTING SEQUENCE' : lightsOff ? 'LIGHTS OUT!' : 'ALL SYSTEMS GO'}
        </p>
      </div>
    </motion.div>
  );
};

export default Preloader;