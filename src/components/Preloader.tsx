import { motion } from 'framer-motion';

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const lightVariants = {
    hidden: { 
      backgroundColor: "hsl(0, 0%, 20%)",
      boxShadow: "none",
    },
    visible: { 
      backgroundColor: "hsl(0, 100%, 55%)",
      boxShadow: "0 0 20px hsl(0, 100%, 55%, 0.8)",
    },
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

      <div className="flex gap-4 mb-8">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="w-4 h-8 rounded-sm"
            variants={lightVariants}
          />
        ))}
      </div>

      <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-red-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;