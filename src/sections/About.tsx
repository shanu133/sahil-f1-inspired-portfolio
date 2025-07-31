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
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">01 //</span> ABOUT ME
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6 tracking-[1.5px]">
              CREATIVE VISION
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              I'm a passionate designer and developer who believes in the power of beautiful, functional design. 
              My approach combines aesthetic excellence with technical precision, creating digital experiences 
              that not only look stunning but perform flawlessly.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my BTech at DIT University, I specialize in UI/UX design, front-end development, 
              and creating seamless user experiences. Every project is an opportunity to push creative boundaries 
              while maintaining the highest standards of usability and performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                className="text-center p-6 bg-card border border-border rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">Design</h3>
                <p className="font-body text-sm text-muted-foreground">Creating intuitive and beautiful interfaces</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 bg-card border border-border rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">Develop</h3>
                <p className="font-body text-sm text-muted-foreground">Bringing designs to life with clean code</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-6 bg-card border border-border rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">Deliver</h3>
                <p className="font-body text-sm text-muted-foreground">Ensuring pixel-perfect execution</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;