import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-left"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">01 //</span> ABOUT ME
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6 tracking-[1.5px]">
              DRIVER PROFILE
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - About Me Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-6">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  As a final-year B.Tech student at DIT University, I build with both code and creativity. I'm passionate about crafting digital experiences that are not only functional but also engaging and innovative.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Outside of the IDE, you'll often find me listening music, exploring nature, or getting lost in a good book. This blend of analytical thinking and creative curiosity is what I bring to every project, inspired by the same relentless pursuit of perfection seen in motorsport. I don't just build things—I build them with energy and purpose.
                </p>
              </div>
            </motion.div>

            {/* Right side - F1 Car and Social Links */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.img 
                src="/lovable-uploads/0462a144-0ac3-4b88-b9fd-d4abf7e3e187.png"
                alt="F1 Car" 
                className="max-w-3xl mx-auto w-full h-auto object-contain"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;